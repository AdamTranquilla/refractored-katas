const talkingCalendar = function (date) {

  let year = date.slice(0, 4);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.slice(5, 7) - 1]; // -1 bc january is 0 in 'months'
  let day = parseInt(date.slice(8, 10));

  const getDay = function (day) {
    if (day === 1 || day === 21 || day === 31) {
      day = day + 'st';
    } else if (day === 2 || day === 22) {
      day = day + 'nd';
    } else if (day === 3 || day === 23) {
      day = day + 'rd';
    } else {
      day = day + 'th';
    }
    return day;
  };

  return month + " " + getDay(day) + ", " + year;
};
// output = December 2nd, 2017 etc


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));