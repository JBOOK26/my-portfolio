type ContributionDay = {
  date: string;
  level: number;
};

type ContributionData = {
  days: ContributionDay[];
  weeks: ContributionDay[][];
  monthLabels: { month: string; week: number }[];
  yearTotal: number | null;
  year: number;
};

const profileUrl = "https://github.com/JBOOK26";
const contributionsUrl = "https://github.com/users/JBOOK26/contributions";

async function fetchYearContributions(year: number, throughDate: string) {
  const response = await fetch(
    `${contributionsUrl}?to=${throughDate}`,
    {
      headers: { "User-Agent": "my-portfolio-contributions-calendar" },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    const body = await response.text();
    const pageTitle = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
    throw new Error(
      `GitHub returned status ${response.status} for ${year} at ${response.url}${pageTitle ? ` (${pageTitle})` : ""}.`,
    );
  }

  return response.text();
}

function parseYearContributions(html: string) {
  const days = new Map<string, number>();

  for (const match of html.matchAll(/<td\b[^>]*>/g)) {
    const date = match[0].match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const level = match[0].match(/\bdata-level="([0-4])"/)?.[1];

    if (date && level !== undefined) {
      days.set(date, Number(level));
    }
  }

  return days;
}

function getContributionData(
  yearPages: Map<number, string>,
  now: Date,
): ContributionData {
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const year = today.getUTCFullYear();
  const rangeStart = new Date(today);
  rangeStart.setUTCDate(rangeStart.getUTCDate() - 364);

  const calendarStart = new Date(rangeStart);
  calendarStart.setUTCDate(calendarStart.getUTCDate() - calendarStart.getUTCDay());

  const calendarEnd = new Date(today);
  calendarEnd.setUTCDate(calendarEnd.getUTCDate() + (6 - calendarEnd.getUTCDay()));

  const yearDays = new Map<number, Map<string, number>>();
  for (const [pageYear, html] of yearPages) {
    yearDays.set(pageYear, parseYearContributions(html));
  }

  const weeks: ContributionDay[][] = [];
  const monthLabels: ContributionData["monthLabels"] = [];
  const days: ContributionDay[] = [];

  for (
    let weekStart = new Date(calendarStart), week = 0;
    weekStart <= calendarEnd;
    weekStart.setUTCDate(weekStart.getUTCDate() + 7), week += 1
  ) {
    const month = weekStart.toLocaleString("en", { month: "short", timeZone: "UTC" });
    const previousWeek = weeks[week - 1]?.[0];
    if (week === 0 || previousWeek?.date.slice(0, 7) !== weekStart.toISOString().slice(0, 7)) {
      monthLabels.push({ month, week });
    }

    const currentWeek: ContributionDay[] = [];
    for (let day = 0; day < 7; day += 1) {
      const date = new Date(weekStart);
      date.setUTCDate(date.getUTCDate() + day);
      const dateString = date.toISOString().slice(0, 10);
      const level = yearDays.get(date.getUTCFullYear())?.get(dateString) ?? 0;
      const contributionDay = { date: dateString, level };

      currentWeek.push(contributionDay);
      if (date >= rangeStart && date <= today) {
        if (!yearDays.get(date.getUTCFullYear())?.has(dateString)) {
          throw new Error(`GitHub contribution data is missing ${dateString}.`);
        }
        days.push(contributionDay);
      }
    }

    weeks.push(currentWeek);
  }

  const currentYearHtml = yearPages.get(year);
  const summary = currentYearHtml
    ?.match(/<h2[^>]*id="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/)?.[1]
    ?.replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const totalMatch = summary?.match(
    new RegExp(`^([\\d,]+)\\s+contributions?\\s+in\\s+${year}$`, "i"),
  );

  if (days.length !== 365) {
    throw new Error("GitHub contribution data did not include the full date range.");
  }

  return {
    days,
    weeks,
    monthLabels,
    yearTotal: totalMatch ? Number(totalMatch[1].replaceAll(",", "")) : null,
    year,
  };
}

function ContributionSection({ data }: { data: ContributionData | null }) {
  return (
    <section
      className="section-wrap section-block contribution-section"
      id="activity"
      aria-labelledby="activity-title"
    >
      <div className="section-heading heading-row">
        <div>
          <p className="section-kicker">MY OPEN-SOURCE ACTIVITY</p>
          <h2 id="activity-title">
            GitHub <span className="muted-heading">contributions.</span>
          </h2>
        </div>
        <p className="heading-aside">
          A live look at my coding activity over the past year, synced from GitHub.
        </p>
      </div>

      <div className="contribution-card">
        {data ? (
          <>
            <div className="contribution-summary">
              <p>
                <strong>
                  {data.yearTotal === null
                    ? "Contribution activity"
                    : `${data.yearTotal.toLocaleString()} contributions`}
                </strong>
                {data.yearTotal !== null && <span> in {data.year}</span>}
              </p>
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                View GitHub profile <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contribution-scroll">
              <div className="contribution-calendar">
                <div
                  className="contribution-months"
                  style={{ gridTemplateColumns: `repeat(${data.weeks.length}, 12px)` }}
                  aria-hidden="true"
                >
                  {data.monthLabels.map(({ month, week }) => (
                    <span key={`${month}-${week}`} style={{ gridColumnStart: week + 1 }}>
                      {month}
                    </span>
                  ))}
                </div>
                <div
                  className="contribution-grid"
                  role="group"
                  aria-label="Daily GitHub contribution activity for the past year"
                  style={{ gridTemplateColumns: `repeat(${data.weeks.length}, 12px)` }}
                >
                  {data.weeks.flatMap((week) =>
                    week.map(({ date, level }) => {
                      const isInRange = data.days.some((day) => day.date === date);
                      const description =
                        level === 0
                          ? `${date}: no contributions`
                          : `${date}: contribution activity level ${level} of 4`;

                      return (
                        <span
                          key={date}
                          className={`contribution-day contribution-level-${level}${isInRange ? "" : " contribution-day-outside"}`}
                          title={isInRange ? description : undefined}
                          aria-label={isInRange ? description : undefined}
                          aria-hidden={isInRange ? undefined : true}
                        />
                      );
                    }),
                  )}
                </div>
              </div>
            </div>

            <div className="contribution-legend" aria-label="Contribution activity legend">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`contribution-day contribution-level-${level}`}
                  aria-hidden="true"
                />
              ))}
              <span>More</span>
              <span className="contribution-refresh">Synced hourly</span>
            </div>
          </>
        ) : (
          <div className="contribution-unavailable">
            <p>GitHub activity is unavailable right now.</p>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              View contributions on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default async function ContributionsCalendar() {
  let data: ContributionData | null = null;

  try {
    const now = new Date();
    const currentYear = now.getUTCFullYear();
    const previousYear = currentYear - 1;
    const today = now.toISOString().slice(0, 10);
    const currentHtml = await fetchYearContributions(currentYear, today);
    const previousHtml = await fetchYearContributions(
      previousYear,
      `${previousYear}-12-31`,
    );

    data = getContributionData(
      new Map([
        [currentYear, currentHtml],
        [previousYear, previousHtml],
      ]),
      now,
    );
  } catch (error) {
    console.error("Failed to load the GitHub contribution calendar.", error);
  }

  return <ContributionSection data={data} />;
}
