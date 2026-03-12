export const sectionLinks = [
  {
    name: "Home",
    path: "#home",
  },

  {
    name: "Today's Lineup",
    path: "#lineup",
  },
  {
    name: "On Air",
    path: "#onair",
  },
  {
    name: "Next On Movies",
    path: "#nextonmovies",
  },
];

const entertainmentCategories = [
  {
    name: "TV Show",
  },

  { name: "Movie" },
];

export const TIME_CATEGORY_MAP = {
  morning: "WakeUp Watch",
  afternoon: "Snacks & Toons",
  evening: "Evening Flix",
  night: "ZzzToons",
};

export const timeThemes = {
  morning: {
    bg: "bg-sky-500",
    overlay: "from-orange-500/50 via-sky-400/30",
    text: "text-sky-100",
    accent: "text-sky-400",
  },

  afternoon: {
    bg: "bg-orange-500",
    overlay: "from-amber-500/50 via-orange-400/30",
    text: "text-orange-100",
    accent: "text-orange-400",
  },

  evening: {
    bg: "bg-indigo-600",
    overlay: "from-indigo-600/60 via-purple-500/30",
    text: "text-indigo-100",
    accent: "text-indigo-400",
  },

  night: {
    bg: "bg-purple-900",
    overlay: "from-purple-900/70 via-indigo-900/40",
    text: "text-purple-100",
    accent: "text-purple-400",
  },
};

export const lineUpCategories = [
  {
    name: "Watch Streak",
    solidBgColor: "bg-emerald-500",
    softBgColor: "bg-emerald-500/20",
    badgeBgColor: "bg-emerald-500/70",
    textColor: "text-emerald-400",
  },

  {
    name: "BuzzWatch",
    solidBgColor: "bg-orange-500",
    softBgColor: "bg-orange-500/20",
    badgeBgColor: "bg-orange-500/70",
    textColor: "text-orange-400",
  },

  {
    name: "ScreenTime Saturday",
    solidBgColor: "bg-pink-500",
    softBgColor: "bg-pink-500/20",
    badgeBgColor: "bg-pink-500/70",
    textColor: "text-pink-400",
  },

  {
    name: "Weekend Watchout",
    solidBgColor: "bg-teal-500",
    softBgColor: "bg-teal-500/20",
    badgeBgColor: "bg-teal-500/70",
    textColor: "text-teal-400",
  },

  {
    name: "WakeUp Watch",
    solidBgColor: "bg-sky-500",
    softBgColor: "bg-sky-500/20",
    badgeBgColor: "bg-sky-500/70",
    textColor: "text-sky-400",
    desc: "Morning content to fully wakeup your mind",
  },

  {
    name: "Mind Snack",
    solidBgColor: "bg-fuchsia-500",
    softBgColor: "bg-fuchsia-500/20",
    badgeBgColor: "bg-fuchsia-500/70",
    textColor: "text-fuchsia-400",
  },

  {
    name: "Evening Flix",
    solidBgColor: "bg-indigo-500",
    softBgColor: "bg-indigo-500/20",
    badgeBgColor: "bg-indigo-500/70",
    textColor: "text-indigo-400",
  },

  {
    name: "ZzzToons",
    solidBgColor: "bg-purple-700",
    softBgColor: "bg-purple-700/20",
    badgeBgColor: "bg-purple-700/70",
    textColor: "text-purple-400",
    desc: "A short comfort watch to close the day",
  },

  {
    name: "Prime Show",
    solidBgColor: "bg-yellow-500",
    softBgColor: "bg-yellow-500/20",
    badgeBgColor: "bg-yellow-500/70",
    textColor: "text-yellow-400",
  },

  {
    name: "Episode-A-Day",
    solidBgColor: "bg-cyan-500",
    softBgColor: "bg-cyan-500/20",
    badgeBgColor: "bg-cyan-500/70",
    textColor: "text-cyan-400",
  },

  {
    name: "Snacks & Toons",
    solidBgColor: "bg-lime-500",
    softBgColor: "bg-lime-500/20",
    badgeBgColor: "bg-lime-500/70",
    textColor: "text-lime-400",
    desc: "Fuel for the tummy and fuel for the mind",
  },
];

export const lineup = [
  {
    name: "The Legend of Vox Machina",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Watch Streak",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Fallout",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Episode-A-Day",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Kiff",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Snacks & Toons",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "The Amazing World of Gumball",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Mind Snack",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Pokemon",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Prime Show",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "We Baby Bears",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "ZzzToons",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },
];

export const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/mhZAT8ktiNi7YwuL50kmumsau69.jpg",
      id: 254953,
      name: "Rooster",
      original_name: "Rooster",
      overview:
        "On a college campus, an author navigates a complicated relationship with his daughter.",
      poster_path: "/aikvD4Nu7N6ekbrXNua8vJlO8JU.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [35],
      popularity: 7.2485,
      first_air_date: "2026-03-08",
      vote_average: 8.2,
      vote_count: 5,
      origin_country: ["US"],
    },
    {
      adult: false,
      backdrop_path: "/xBCqa89aObojLlXu6MuGgnAmhcP.jpg",
      id: 313298,
      name: "The Dinosaurs",
      original_name: "The Dinosaurs",
      overview:
        "From the first dinosaurs to the last, this epic documentary series examines their 165 million years on Earth and the forces that shaped their evolution.",
      poster_path: "/x37IK9WWhuzi7tgyMT4ff3kiT5X.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [99],
      popularity: 54.7436,
      first_air_date: "2026-03-06",
      vote_average: 7.4,
      vote_count: 25,
      origin_country: ["GB", "US"],
    },
    {
      adult: false,
      backdrop_path: "/8mmDLb108DoFZlE8sfc64TRqLvm.jpg",
      id: 255661,
      name: "Young Sherlock",
      original_name: "Young Sherlock",
      overview:
        "Sherlock Holmes is a disgraced young man when he finds himself wrapped up in a murder case that threatens his liberty.",
      poster_path: "/BMBWTgvL41sOYtfkmXen6nm9mG.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [10759, 9648],
      popularity: 195.5128,
      first_air_date: "2026-03-04",
      vote_average: 8.246,
      vote_count: 64,
      origin_country: ["GB", "US"],
    },
    {
      adult: false,
      backdrop_path: "/sjOTFlGapgXFjwV3LmD9eHZEp3d.jpg",
      id: 281016,
      name: "Boyfriend on Demand",
      original_name: "월간남친",
      overview:
        "Seo Mi-rae is worn out by work. Love? It's the last thing on her mind. But a virtual dating service sparks feelings.",
      poster_path: "/k2PClFqMQWxubkQpCxiQE5xyBZi.jpg",
      media_type: "tv",
      original_language: "ko",
      genre_ids: [35, 10765, 18],
      popularity: 117.9289,
      first_air_date: "2026-03-06",
      vote_average: 8.8,
      vote_count: 25,
      origin_country: ["KR"],
    },
    {
      adult: false,
      backdrop_path: "/pJert4hRVNzagvtFr3vTYnpgBMH.jpg",
      id: 310935,
      name: "Girl from Nowhere: The Reset",
      original_name: "เด็กใหม่ The Reset",
      overview:
        "In a new universe, the mysterious Nanno poses as a transfer student, exposing cruelty.",
      poster_path: "/bRMEjZHvES9XLKSFVCtveFGdOHC.jpg",
      media_type: "tv",
      original_language: "th",
      genre_ids: [18, 9648],
      popularity: 34.2589,
      first_air_date: "2026-03-04",
      vote_average: 9.5,
      vote_count: 4,
      origin_country: ["TH"],
    },
    {
      adult: false,
      backdrop_path: "/qD211Hb5XwFxrszzBBe5EUYJerh.jpg",
      id: 111110,
      name: "ONE PIECE",
      original_name: "ONE PIECE",
      overview:
        "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure.",
      poster_path: "/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [10759, 10765],
      popularity: 54.6249,
      first_air_date: "2023-08-31",
      vote_average: 8.1,
      vote_count: 1495,
      origin_country: ["US"],
    },
  ],
  total_pages: 500,
  total_results: 10000,
};
