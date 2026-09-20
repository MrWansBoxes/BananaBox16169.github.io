export const CURRENT_OUTREACH_CUTOFF = "2026-01";

const dateKey = (entry) => entry.endDate || entry.startDate || "";

export const getCurrentOutreach = (entries) =>
  [...entries]
    .filter((entry) =>
      dateKey(entry) >= CURRENT_OUTREACH_CUTOFF || entry.seasons.includes("biobuzz"))
    .sort((a, b) => dateKey(a).localeCompare(dateKey(b)));

export const getSeasonOutreach = (entries, season) =>
  [...entries]
    .filter((entry) => entry.seasons.includes(season))
    .sort((a, b) => {
      const aDate = dateKey(a);
      const bDate = dateKey(b);
      if (!aDate) return 1;
      if (!bDate) return -1;
      return aDate.localeCompare(bDate);
    });

export const splitOutreachAroundDate = (entries, date) => {
  const splitIndex = entries.findIndex((entry) => dateKey(entry).localeCompare(date) > 0);

  return splitIndex === -1
    ? { before: entries, after: [] }
    : { before: entries.slice(0, splitIndex), after: entries.slice(splitIndex) };
};

export const toOutreachTimeline = (entries) =>
  entries.flatMap((entry) =>
    entry.timelineEntries || [{
      date: entry.dateLabel,
      sortDate: dateKey(entry),
      outreach: entry.timelineSummary || `${entry.title}. ${entry.description}`,
    }]
  );
