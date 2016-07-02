


var page = tabris.create("Page", {
  title: "homoola calander",
  topLevel: true
});


tabris.create("ESCalendar", {
  id: "calendar",
  date: new Date().toUTCString(),
  layoutData: {left: 50, right: 50, top: 0, height: 200}
}).on("change:date", function(widget, date) {
  console.error(new Date().toUTCString());
}).appendTo(page);
//
tabris.create("Button", {
  id: "button",
  text: "Get Date",
  layoutData: {left: 16, right: 16}
}).on("select", function() {
  var date = page.children("#calendar").get("date");
  console.log("date: " + new Date(parseInt(date)).toUTCString());
}).appendTo(page);
//
tabris.create("Button", {
  id: "button",
  text: "contact",
  layoutData: {left: 16, right: 16}
}).on("select", function() {
  navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
}).appendTo(page);




page.open();
