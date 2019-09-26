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

const generateDayObject = (weekDay, monthDay, specialDays) => {
  return {
    label: makeItDoubleDigit(monthDay),
    type: generateDayType(weekDay, monthDay, specialDays),
    tags: generateDayTags(monthDay, specialDays)
  }
}

const addCurrentMonthDays = (days, lastMonthDay, specialDays) => {
  let monthDay = 0;
  for(let i = 0;  i < 5; i++) {
    if (monthDay > lastMonthDay) break;
    const week = days[i] ? days[i] : [];
    for(let j = week.length;  j < 7; j++) {
      monthDay++;
      if (monthDay > lastMonthDay) break;
      week.push(generateDayObject(j, monthDay, specialDays))
    }
    if (!days[i]) days.push(week);
  }

  // The days didn't fit 5 rows
  if (monthDay < lastMonthDay) {
    const extraDays = lastMonthDay - monthDay;
    for(let i = 0; i < extraDays; i++) {
      monthDay++;
      days[4][i].doubleDay = true;
      days[4][i].otherDay = generateDayObject(i, monthDay, specialDays);
    }
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
    const daysInMonth = moment().month(month - 1).daysInMonth();
    const firstDay = moment("" + year + makeItDoubleDigit(month) + "01").day();
    const days = [[]];
    const previousMonth = month > 1 ? month - 2 : 11;

    addPreviousMonthDays(firstDay, days[0], moment().month(previousMonth).daysInMonth());
    addCurrentMonthDays(days, daysInMonth, specialDays[month]);
    if ((firstDay + daysInMonth) / 7 <= 5) {
      addNextMonthDays(moment("" + year + makeItDoubleDigit(month) + daysInMonth).day(), days[days.length - 1]);
    }
    return days;
  }
}