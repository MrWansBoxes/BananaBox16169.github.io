import { getCurrentOutreach, toOutreachTimeline } from "./outreach.js";

const dateKey = (item) => item.sortDate || "";

export const sortTimelineItems = (items) =>
  [...items].sort((a, b) => dateKey(a).localeCompare(dateKey(b)));

export const getCurrentTimeline = (entries) =>
  sortTimelineItems(toOutreachTimeline(getCurrentOutreach(entries)));
