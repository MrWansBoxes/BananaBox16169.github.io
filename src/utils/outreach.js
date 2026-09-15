export const CURRENT_OUTREACH_CUTOFF = "2026-01";

const dateKey = (entry) => entry.endDate || entry.startDate || "";

export const getCurrentOutreach = (entries) =>
  [...entries]
    .filter((entry) =>
      dateKey(entry) >= CURRENT_OUTREACH_CUTOFF || entry.seasons.includes("biobuzz"))
    .sort((a, b) => dateKey(b).localeCompare(dateKey(a)));

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

export const toOutreachTimeline = (entries) =>
  entries.map((entry) => {
    return {
      date: entry.dateLabel,
      sortDate: dateKey(entry),
      outreach: entry.timelineSummary || `${entry.title}. ${entry.description}`,
    };
  });
