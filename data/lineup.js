export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const DAY_GROUPS = {
  EVERY_DAY: [...DAYS],
  WEEKDAYS: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  WEEKENDS: ["Saturday", "Sunday"],
};

export const lineup = [
  {
    id: "one-piece-wakeup-watch",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "one-piece",
    category: "WakeUp Watch",
  },

  {
    id: "fate-strange-fake-buzzwatch",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "fate-strange-fake",
    category: "BuzzWatch",
  },

  {
    id: "kiff-snacks&toons",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "kiff",
    category: "Snacks & Toons",
  },
  {
    id: "gumball-mindsnack",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "gumball",
    category: "Mind Snack",
  },

  {
    id: "vox-watch-streak",
    days: ["Tuesday"],
    mediaId: "vox-machina",
    category: "Watch Streak",
  },
  {
    id: "fallout-episode-a-day",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "fallout",
    category: "Episode-A-Day",
  },

  {
    id: "pokemon-prime-show",
    days: DAY_GROUPS.EVERY_DAY,
    mediaId: "pokemon",
    category: "Prime Show",
  },
  {
    id: "baby-bears-zzztoons",
    days: ["Tuesday"],
    mediaId: "we-baby-bears",
    category: "ZzzToons",
  },
  {
    id: "takopis-original-sin-watch-streak",
    days: ["Wednesday"],
    mediaId: "takopis-original-sin",
    category: "Watch Streak",
  },

  {
    id: "batman-the-animated-series-evening-flix",
    days: ["Wednesday"],
    mediaId: "batman-the-animated-series",
    category: "Evening Flix",
  },

  {
    id: "summer-camp-island-zzztoons",
    days: ["Wednesday"],
    mediaId: "summer-camp-island",
    category: "ZzzToons",
  },
  {
    id: "the-spongebob-movie-screentime-saturday",
    days: ["Saturday"],
    mediaId: "the-spongebob-movie",
    category: "ScreenTime Saturday",
  },

  {
    id: "iron-lung-screentime-saturday",
    days: ["Saturday"],
    mediaId: "iron-lung",
    category: "ScreenTime Saturday",
  },
];
