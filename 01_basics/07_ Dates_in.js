// Dates

// let myDate = new Date()
// Creates a new Date object with the current date and time

// console.log(myDate.toString());
// Full date and time string → e.g., "Fri Jul 26 2025 22:35:00 GMT+0530 (India Standard Time)"

// console.log(myDate.toDateString());
// Returns only the date part in a readable format → "Fri Jul 26 2025"

// console.log(myDate.toISOString());
// Returns date in ISO standard format → "2025-07-26T17:05:00.000Z"

// console.log(myDate.toLocaleString());
// Returns date & time in local format → e.g., "26/7/2025, 10:35:00 pm"

// console.log(myDate.toTimeString());
// Returns only the time portion → e.g., "22:35:00 GMT+0530 (India Standard Time)"

// console.log(typeof myDate);
// Returns "object" → because Date is an object in JavaScript



let myCreatedDate = new Date(2023, 0, 23)
// Creates a specific date → Jan 23, 2023 (month is 0-indexed in JS)

// console.log(myCreatedDate.toDateString());
// Outputs "Mon Jan 23 2023" (readable date format)

// console.log(myCreatedDate.toDateString);
//  Missing parentheses, this just logs the function definition, not the result



let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// Creates a specific date with time → Jan 23, 2023, 5:03 AM

// console.log(myCreatedDate1.toLocaleString());
// Outputs "23/1/2023, 5:03:00 am" (in Indian format by default)



let myCreateddate = new Date("2023-01-14")  // yyyy-mm-dd format (ISO)
// Works in all browsers → creates Jan 14, 2023

// console.log(myCreateddate.toLocaleString());
// Shows the date & time in local format



let myCreateddate1 = new Date("06-14-2024")  // mm-dd-yyyy format (US style)
// This will create June 14, 2024

// console.log(myCreateddate1.toLocaleString());
// Outputs "14/6/2024, 12:00:00 am" depending on locale



let myTimeStamp = Date.now()
// Returns current timestamp in milliseconds since Jan 1, 1970 (Unix Epoch)

// console.log(myTimeStamp);
// Example output: 1722013511226 (ms)

// console.log(myCreatedDate.getTime());
// Returns the timestamp of `myCreatedDate` in ms

// console.log(Math.floor(Date.now()/1000));
// Converts ms to seconds and removes decimal part using Math.floor()



let newDate = new Date()
// Creates a new Date object with current date & time

console.log(newDate);
// Logs the full date object

console.log(newDate.getMonth() + 1);
// Returns current month (0-indexed, so add 1 to make it 1-indexed)

console.log(newDate.getDay());
// Returns the day of the week (0 = Sunday, 6 = Saturday)



// Important: Formatting date output

newDate.toLocaleDateString('default', {
  weekday: "long",  // Shows full name of the weekday → e.g., "Saturday"
  // timeZone: '' // (optional) can be used to set time zone like 'UTC', 'Asia/Kolkata'
})
