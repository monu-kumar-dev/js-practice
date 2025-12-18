const d = new Date();
console.log(d); // 2025-08-04T12:47:15.184Z
console.log(d.toDateString()); // Mon Aug 04 2025
console.log(d.toString()); // Mon Aug 04 2025 18:18:02 GMT+0530 (India Standard Time)
console.log(d.toISOString()); // 2025-08-04T12:49:14.212Z

console.log(typeof d); // object

// const d2 = new Date(1000);
const d2 = new Date(2000); // Yahan 2000 milliseconds hain. Ye kaafi chhota number hai. Iska matlab hai: 1 January 1970 se sirf 2 seconds baad ki date/time.

console.log(d2.toString()); // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)

//  JavaScript mein new Date(milliseconds) ka matlab hota hai: Unix Epoch (1 January 1970, UTC) ke baad ya pehle kitne milliseconds ho chuke hain, uske base par date/time banai jaati hai.

console.log(d.getDate()); // 4
console.log(d.getDay()); // 1
// Sun, Mon, Tue, Wed, Thu, Fri, Sat
// 0, 1, 2, 3, 4, 5, 6

console.log(d.getMonth()); // 7
// Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

console.log(d.getFullYear()); // 2025

console.log(d.getMilliseconds()); // 433
console.log(d.getMinutes()); // 28
console.log(d.getTime()); // 1754315906433

const now = Date.now();
console.log(now); // 1754316334454

const d4 = new Date("2025-08-20");
console.log(d4.toDateString()); // Wed Aug 20 2025

const d5 = new Date("2022-10-20");
console.log(d5.toDateString()); // Thu Oct 20 2022

// Note: Jb String format me likhte hai tb 10 ka mtlb october hota hai means jan = 1 and when we write in number then jan = 0.

// year / Month / Date / Hour / Minute / second / millisecond
const date = new Date(2024, 4, 28);
console.log(date.toDateString()); // Tue May 28 2024

const d7 = new Date();
d7.setDate(20);
d7.setFullYear(2021);
d7.setMonth(3);
console.log(d7.toDateString()); // Tue Apr 20 2021
console.log(d7.toLocaleDateString()); // 20/4/2021
console.log(d7.toLocaleString()); // 20/4/2021, 8:12:58 pm

// Date Calculation
const date1 = new Date();
const date2 = new Date("2026-04-21");

console.log(date2 - date1); // difference comes in milisecond
console.log(date2 > date1);

// ++++++++++++++++++++++++++ Count-Time Timer +++++++++++++++++++++++++++++++++++++++++++++++
// Days, hours, minutes, seconds

// const dates1 = new Date();
// const dates2 = new Date("2028-07-28T00:00:00");
// const dates3 = dates2 - dates1;
// const days = Math.floor(dates3 / (1000 * 60 * 60 * 24));
// console.log(days);

// Now both dates are exactly at midnight, and the difference gives exact number of full days.

const now1 = new Date();
// now1.setHours(0, 0, 0, 0);
const future = new Date("2028-07-28T00:00:00");
// future.setHours(0, 0, 0, 0);
const diff = future - now1;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// console.log(days);

const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
const min = Math.floor((diff / (1000 * 60)) % 60);
const sec = Math.floor((diff / 1000) % 60);

console.log(
  `Olympic CounDownTime: Days:${days}, hour: ${hour}, minutes: ${min}, seconds: ${sec}`
);

//  🧠 Think of Time Like This:
// Suppose you have 52 total hours.
// Now someone asks:

// “How many full days and extra hours is that?”

// 🔢 Step-by-Step:
// 1 day = 24 hours

// 52 ÷ 24 = 2 full days, and 4 leftover hours

// So:

// Full days = Math.floor(52 / 24) → 2

// Extra hours = 52 % 24 → 4

// ✔ That % gives you the leftover — the part that’s not enough to make another full day.

// ++++++++++++++++++++++This is copied from chatgpt when i read function after that we watch it again++++++++++++++++++

function updateCountdown() {
  const now = new Date();
  const future = new Date("2028-07-28T00:00:00");
  const diff = future - now;

  if (diff <= 0) {
    console.log("🏁 The Olympics have started!");
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  console.clear(); // optional: clears previous log
  console.log(
    `🏅 Olympic Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`
  );
}

// Call every 1 second
const timer = setInterval(updateCountdown, 1000);
