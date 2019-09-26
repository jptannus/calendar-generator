const makeItDoubleDigit = (number) => {
  if (number < 10) return "0" + number;
  return number;
}

const addPreviousMonthDays = (startDay, week, previousMonthDays) => {
  let monthDay = previousMonthDays - startDay;
  for(let i = 0;  i < startDay; i++) {
    monthDay++;
    week.push({
      label: makeItDoubleDigit(monthDay),
      type: "other-month"
    });
  }
}

const generateDayType = (dayOfWeek, monthDay, specialDays) => {
  if (dayOfWeek == 0 || dayOfWeek == 6 || specialDays.holidays[monthDay]) return "day-off";
  return "work-day";
}

const generateDayTags = (monthDay, specialDays) => {
  return specialDays.birthdays[monthDay] ? ["birthday"] : undefined;
}

const addCurrentMonthDays = (days, lastMonthDay, specialDays) => {
  let monthDay = 0;
  for(let i = 0;  i < 5; i++) {
    if (monthDay > lastMonthDay) break;
    const week = days[i] ? days[i] : [];
    for(let j = week.length;  j < 7; j++) {
      monthDay++;
      if (monthDay > lastMonthDay) break;
      week.push({
        label: makeItDoubleDigit(monthDay),
        type: generateDayType(j, monthDay, specialDays),
        tags: generateDayTags(monthDay, specialDays)
      })
    }
    if (!days[i]) days.push(week);
  }
}

const addNextMonthDays = (lastDay, week) => {
  let monthDay = 0;
  for(let i = lastDay + 1;  i < 7; i++) {
    monthDay++;
    week.push({
      label: makeItDoubleDigit(monthDay),
      type: "other-month"
    })
  }
}

module.exports = {
  generateDays: (moment, month, year, specialDays) => {
    const lastDay = 31;
    const firstDay = moment(""+year+month+"01");
    const days = [[]];
    addPreviousMonthDays(firstDay.day(), days[0], moment().month(month - 2).daysInMonth());
    addCurrentMonthDays(days, lastDay, specialDays[month]);
    addNextMonthDays(moment("" + year + month + lastDay).day(), days[days.length - 1]);
    return days;
  }
}