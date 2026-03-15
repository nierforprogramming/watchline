import { DAYS } from "@/data/lineup";

export function getYear(dateString) {
  if (!dateString) return "N/A";
  return dateString.split("-")[0];
}

export function shuffleArray(arr) {
  const array = [...arr]; // optional copy so original is not mutated

  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // swap
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

export function truncateText(text, maxLength = 160) {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}

export function getTodayDayName() {
  const todayIndex = new Date().getDay();
  return DAYS[todayIndex];
}

// Function to get Time
export function getHours(timezone = "Asia/Kathmandu") {
  const now = new Date();
  const options = {
    hour: "numeric",
    hour12: false,
    timeZone: timezone,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return parseInt(formatter.format(now));
}

// get time in 12 hours

export function getHoursInTwelve(timezone = "Asia/Kathmandu") {
  const date = new Date();

  const formattedHour = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // ensures 12-hour format (AM/PM)
    timeZone: timezone,
  });

  return formattedHour;
}

// Function to greet
export function greet(currentTime) {
  if (currentTime <= 23 && currentTime >= 20)
    return { title: "Good Night", color: "night", time: "night" };

  if (currentTime <= 19 && currentTime >= 17)
    return { title: "Good Evening", color: "evening", time: "evening" };

  if (currentTime <= 16 && currentTime >= 12)
    return { title: "Good Afternoon", color: "afternoon", time: "afternoon" };

  return { title: "Good Morning", color: "morning", time: "morning" };
}

// Minutes to hour
export function convertToHourAndMinute(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
}
