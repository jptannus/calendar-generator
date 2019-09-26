Promise.all([
  import("moment"),
  import("../config.json"),
  import("../special-days.json"),
  import("./ui"),
  import("./generator"),
  import("./builder")
]).then(([moment, config, specialDays, ui, genarator, builder]) => {
  const generatedDays = genarator.generateDays(moment, config.month, config.year, specialDays);
  const calendar = builder.createCalendar(generatedDays, 
                                          specialDays[config.month],
                                          config.specialDaysLabels,
                                          config.monthLabels[config.month - 1],
                                          config.year);
  document.getElementById("app").append(calendar);

  ui.setupCopyButtons();
});