const svgNS = "http://www.w3.org/2000/svg";

const addBaseForText = (text) => {
  text.setAttribute("font-weight", 500);
  text.setAttribute("font-family", "Roboto");
  text.setAttribute("style", "white-space: pre");
  text.setAttribute("xml:space", "preserve");
  text.setAttribute("letter-spacing", "0em");
}

const createMonthHeader = (month) => {
  const g = document.createElementNS(svgNS, "g");
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", 24);
  rect.setAttribute("y", 59);
  rect.setAttribute("width", 980)
  rect.setAttribute("height", 100)
  rect.setAttribute("fill", "#D0D0D0");
  const text = document.createElementNS(svgNS, "text");
  addBaseForText(text)
  text.setAttribute("font-size", 72);
  text.setAttribute("fill", "white");
  text.setAttribute("font-family", "Roboto-Medium");
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", 54);
  tspan.setAttribute("y", 133.609);
  tspan.append(document.createTextNode(month.toUpperCase()));
  text.append(tspan);

  g.append(rect);
  g.append(text);
  return g;
}

const createSVGElement = () => {
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", 1260);
  svg.setAttribute("height", 891);
  svg.setAttribute("viewBox", "0 0 1260 891");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("class", "svg-calendar")
  const background = document.createElementNS(svgNS, "rect");
  background.setAttribute("width", 1260);
  background.setAttribute("height", 891);
  background.setAttribute("fill", "white");
  svg.append(background);
  return svg;
}

const createCircle = (cx) => {
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", 34);
  circle.setAttribute("r", 13);
  circle.setAttribute("stroke", "#8D8D8D");
  circle.setAttribute("stroke-width", 5);
  return circle;
}

const createHoles = () => {
  const g = document.createElementNS(svgNS, "g");
  g.append(createCircle(232.5))
  g.append(createCircle(1027.5))
  return g;
}

const createBarAtTheTop = (x, width) => {
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("y", 27);
  rect.setAttribute("height", 18);
  rect.setAttribute("fill", "#D0D0D0");
  rect.setAttribute("x", x);
  rect.setAttribute("width", width);
  return rect;
}

const createTopBars = () => {
  const g = document.createElementNS(svgNS, "g");
  g.append(createBarAtTheTop(24, 184));
  g.append(createBarAtTheTop(257, 746));
  g.append(createBarAtTheTop(1052, 184));
  return g;
}

const createYearHeader = (year) => {
  const g = document.createElementNS(svgNS, "g");
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", 1013);
  rect.setAttribute("y", 60);
  rect.setAttribute("width", 222)
  rect.setAttribute("height", 98)
  rect.setAttribute("stroke", "#D0D0D0");
  rect.setAttribute("stroke-width", 2);
  const text = document.createElementNS(svgNS, "text");
  addBaseForText(text);
  text.setAttribute("font-size", 48);
  text.setAttribute("fill", "#6C6A6A");
  text.setAttribute("font-family", "Roboto-Medium");
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", 1070.44);
  tspan.setAttribute("y", 125.406);
  tspan.append(document.createTextNode(year));
  text.append(tspan);

  g.append(rect);
  g.append(text);
  return g;
}

const createCalendarBase = (month, year) => {
  const svg = createSVGElement();
  svg.append(createHoles())
  svg.append(createTopBars())
  svg.append(createYearHeader(year))
  svg.append(createMonthHeader(month));
  return svg;
}

const createWorkDay = (label, tags, x, y) => {
  const g = document.createElementNS(svgNS, "g");
  const rect1 = document.createElementNS(svgNS, "rect");
  rect1.setAttribute("width", 134)
  rect1.setAttribute("height", 134)
  rect1.setAttribute("stroke", "#D0D0D0");
  rect1.setAttribute("x", x);
  rect1.setAttribute("y", y);
  const rect2 = document.createElementNS(svgNS, "rect");
  rect2.setAttribute("width", 135)
  rect2.setAttribute("height", 15)
  rect2.setAttribute("fill", "#D0D0D0");
  rect2.setAttribute("x", x);
  rect2.setAttribute("y", y);
  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("font-size", 15);
  text.setAttribute("fill", "#5F5F5F");
  addBaseForText(text);
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", x + 58.475);
  tspan.setAttribute("y", y + 12.63);
  tspan.append(document.createTextNode(label));
  text.append(tspan);

  g.append(rect1);
  g.append(rect2);
  g.append(text);
  if (tags && tags.length > 0) g.append(createDayTags(tags, x, y));
  return g;
}

const createDayOff = (label, tags, x, y) => {
  const g = document.createElementNS(svgNS, "g");
  const rect1 = document.createElementNS(svgNS, "rect");
  rect1.setAttribute("width", 134)
  rect1.setAttribute("height", 134)
  rect1.setAttribute("fill", "#F4F4F4");
  rect1.setAttribute("x", x);
  rect1.setAttribute("y", y);
  const rect2 = document.createElementNS(svgNS, "rect");
  rect2.setAttribute("width", 135)
  rect2.setAttribute("height", 15)
  rect2.setAttribute("fill", "#B8B8B8");
  rect2.setAttribute("x", x);
  rect2.setAttribute("y", y);
  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("font-size", 15);
  text.setAttribute("fill", "#373737");
  addBaseForText(text);
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", x + 58.475);
  tspan.setAttribute("y", y + 12.63);
  tspan.append(document.createTextNode(label));
  text.append(tspan);

  g.append(rect1);
  g.append(rect2);
  g.append(text);
  if (tags && tags.length > 0) g.append(createDayTags(tags, x, y));
  return g;
}

const createDayOtherMonth = (label, x, y) => {
  const g = document.createElementNS(svgNS, "g");
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", 134)
  rect.setAttribute("height", 134)
  rect.setAttribute("fill", "#D0D0D0");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  const text = document.createElementNS(svgNS, "text");
  addBaseForText(text);
  text.setAttribute("font-size", 36);
  text.setAttribute("fill", "#EFEFEF");
  text.setAttribute("font-family", "Roboto-Medium");
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", x + 46);
  tspan.setAttribute("y", y + 79);
  tspan.append(document.createTextNode(label));
  text.append(tspan);

  g.append(rect);
  g.append(text);
  return g;
}

const createDayTags = (tags, x, y) => {
  const g = document.createElementNS(svgNS, "g");
  tags.forEach(tag => {
    switch(tag) {
      case "birthday":
        g.append(createBirthdayTag(x, y));
        break;
    }
  })
  return g;
}

const createBirthdayTag = (x, y) => {
  const g = document.createElementNS(svgNS, "g");
  const path1 = document.createElementNS(svgNS, "path");
  path1.setAttribute("d", "M554.5 268.044C553.803 268.158 553.137 268.444 552.583 268.864C552.18 269.167 551.94 269.476 551.674 270.037C551.371 270.669 551.22 271.289 551.217 271.892C551.217 272.421 551.34 272.85 551.623 273.333C552.017 273.997 552.714 274.603 553.634 275.08L553.986 275.263L550.494 275.266H547V277.43C547 278.623 547.009 279.915 547.02 280.304L547.037 281.013H553.62H560.2V278.139V275.266H561H561.8L561.806 278.131L561.814 280.999L568.409 281.007L575 281.013V278.874C575 277.696 574.991 276.404 574.98 276.001L574.963 275.266H571.174H567.386L567.786 275.057C569.457 274.185 570.38 273.167 570.589 271.967C570.763 270.972 570.203 269.436 569.451 268.847C568.274 267.924 566.566 267.744 564.949 268.364C563.766 268.819 562.963 269.519 562.006 270.926C561.806 271.223 561.291 272.07 561.111 272.398C561.057 272.498 561.006 272.578 560.997 272.578C560.98 272.578 560.891 272.384 560.577 271.646C560.337 271.08 560.229 270.889 559.98 270.577C559.714 270.243 559.1 269.631 558.766 269.368C557.949 268.721 557.066 268.293 556.157 268.101C555.731 268.012 554.874 267.981 554.5 268.044ZM555.589 269.791C555.866 269.837 556.194 269.937 556.474 270.062C557.174 270.377 557.637 270.826 558.326 271.864C558.74 272.484 559.266 273.396 559.457 273.831C559.594 274.137 559.8 274.697 559.8 274.763C559.8 274.803 559.36 274.766 558.569 274.651C556.234 274.32 554.543 273.716 553.711 272.916C553.389 272.607 553.26 272.344 553.2 271.852C553.137 271.335 553.36 270.674 553.717 270.325C553.989 270.06 554.389 269.865 554.871 269.765C555.003 269.739 555.346 269.751 555.589 269.791ZM567.309 269.794C567.703 269.874 568.046 270.048 568.266 270.277C568.506 270.52 568.68 271.023 568.64 271.346C568.574 271.884 568.234 272.49 567.769 272.896C566.926 273.633 565.103 274.331 562.8 274.794C562.449 274.863 562.157 274.917 562.151 274.912C562.131 274.894 562.346 274.291 562.489 273.957C562.737 273.373 563.043 272.853 563.454 272.295C563.591 272.112 563.829 271.784 563.983 271.563C564.646 270.62 564.883 270.38 565.409 270.122C566.097 269.785 566.737 269.676 567.309 269.794Z");
  path1.setAttribute("fill", "#D0D0D0");
  const path2 = document.createElementNS(svgNS, "path");
  path2.setAttribute("d", "M548.914 289.362V296.567H554.657H560.4V289.356V282.145L558.249 285.556C557.066 287.432 556.086 288.97 556.074 288.973C556.06 288.973 555.774 288.575 555.44 288.086L554.829 287.2L553.537 287.409C552.826 287.523 552.234 287.612 552.226 287.609C552.217 287.606 552.977 286.388 553.917 284.901C554.857 283.415 555.626 282.191 555.626 282.177C555.629 282.165 554.117 282.157 552.271 282.157H548.914V289.362Z");
  path2.setAttribute("fill", "#D0D0D0");
  const path3 = document.createElementNS(svgNS, "path");
  path3.setAttribute("d", "M566.491 282.348C566.56 282.457 567.329 283.675 568.206 285.059C569.08 286.442 569.789 287.578 569.777 287.583C569.763 287.586 569.2 287.506 568.523 287.403C567.846 287.3 567.266 287.217 567.234 287.217C567.194 287.217 567.02 287.452 566.569 288.115C566.234 288.61 565.951 289.01 565.943 289.004C565.934 288.999 564.974 287.48 563.811 285.633C562.651 283.786 561.691 282.274 561.677 282.271C561.666 282.271 561.66 285.485 561.663 289.41L561.671 296.552H567.386H573.1L573.109 289.353L573.114 282.157H569.743H566.371L566.491 282.348Z");
  path3.setAttribute("fill", "#D0D0D0");
  g.setAttribute("transform", `translate(${x - 450}, ${y - 170})`)
  g.append(path1);
  g.append(path2);
  g.append(path3);
  return g;
}

const createDay = (day, x, y) => {
  switch(day.type) {
    case "day-off":
      return createDayOff(day.label, day.tags, x, y);
    case "other-month":
      return createDayOtherMonth(day.label, x, y);
    case "work-day":
    default:
      return createWorkDay(day.label, day.tags, x, y);
  }
}

const createCalendarDays = (days) => {
  const g = document.createElementNS(svgNS, "g");
  const baseWidth = 135;
  const baseHeight = 135;
  const baseDistance = 6;
  const xMargin = 24;
  const yMargin = 168;
  days.forEach((row, i) => {
    const y = yMargin + i*(baseHeight + baseDistance);
    row.forEach((day, j) => {
      const x = xMargin + j*(baseWidth+ baseDistance);
      g.append(createDay(day, x, y))
    })
  });
  return g;
}

const createListHeader = (label, x, y) => {
  const text = document.createElementNS(svgNS, "text");
  addBaseForText(text);
  text.setAttribute("font-size", 12);
  text.setAttribute("fill", "#606060");
  text.setAttribute("font-family", "Roboto-Bold");
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", x);
  tspan.setAttribute("y", y);
  tspan.append(document.createTextNode(label));
  text.append(tspan);
  return text;
}

const createListItem = (day, label, x, y) => {
  const text = document.createElementNS(svgNS, "text");
  addBaseForText(text);
  text.setAttribute("font-size", 12);
  text.setAttribute("fill", "#606060");
  const tspan = document.createElementNS(svgNS, "tspan");
  tspan.setAttribute("x", x);
  tspan.setAttribute("y", y);
  tspan.append(document.createTextNode(day + " - " + label));
  text.append(tspan);
  return text;
}

const createListItems = (items, baseX, baseY, distance) => {
  const g = document.createElementNS(svgNS, "g");
  let counter = 1;
  Object.getOwnPropertyNames(items).forEach(day => {
    const y = baseY + counter * distance;
    g.append(createListItem(day, items[day], baseX, y));
    counter++;
  });
  return g;
}

const createList = (headerLabel, list, x, y, distance) => {
  const g = document.createElementNS(svgNS, "g");
  g.append(createListHeader(headerLabel, x, y));
  g.append(createListItems(list, x, y, distance));
  return g;
}

const getListStartY = (previousLists, baseY, distance) => {
  const baseLines = 2;
  let y = baseY;
  previousLists.forEach((list) => {
    if (list && Object.values(list).length > 0) {
      y += (Object.values(list).length + baseLines) * distance;
    }
  });
  return y;
}

const createSpecialDaysList = (list) => {
  const distance = 14;
  const baseX = 1011;
  const baseY = 182;
  const g = document.createElementNS(svgNS, "g");
  if (list.holidays && Object.values(list.holidays).length > 0) {
    g.append(createList("Feriados:", list.holidays, baseX, baseY, distance));
  }
  if (list.birthdays && Object.values(list.birthdays).length > 0) {
    const birthdayY = getListStartY([list.holidays], baseY, distance)
    g.append(createList("Aniversários:", list.birthdays, baseX, birthdayY, distance));
  }
  if (list.others && Object.values(list.others).length > 0) {
    const othersY = getListStartY([list.holidays, list.birthdays], baseY, distance)
    g.append(createList("Outros:", list.others, baseX, othersY, distance));
  }
  return g;
}

module.exports = {
  createCalendar: (days, specialDays, month, year) => {
    const base = createCalendarBase(month, year);
    base.append(createCalendarDays(days));
    base.append(createSpecialDaysList(specialDays));
    return base;
  }
};