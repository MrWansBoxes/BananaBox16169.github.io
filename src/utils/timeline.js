const dateKey = (item) => item.sortDate || "";

export const sortTimelineItems = (items) =>
  [...items].sort((a, b) => dateKey(a).localeCompare(dateKey(b)));
