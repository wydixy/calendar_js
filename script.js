var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();

var calendar = document.getElementById('calendar');
var title = calendar.querySelector('.title');
var tbody = calendar.querySelector('tbody');
var prevBtn = calendar.querySelector('.prev-btn');
var nextBtn = calendar.querySelector('.next-btn');

prevBtn.addEventListener('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextBtn.addEventListener('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

function updateCalendar() {
  title.innerHTML = getMonthName(currentMonth) + ' ' + currentYear;
  tbody.innerHTML = '';
  var date = new Date(currentYear, currentMonth, 1);
  var firstDayOfWeek = date.getDay();
  var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  var dayOfMonth = 1;
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 7; j++) {
      var td = document.createElement('td');
      if (i == 0 && j < firstDayOfWeek) {
        td.classList.add('prev-month');
        var prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
        td.innerHTML = prevMonthDays - (firstDayOfWeek - j - 1);
      } else if (dayOfMonth > daysInMonth) {
        break;
      } else {
        td.innerHTML = dayOfMonth;
        if (currentYear == date.getFullYear() && currentMonth == date.getMonth() && dayOfMonth == date.getDate()) {
          td.classList.add('today');
        }
        dayOfMonth++;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function getMonthName(month) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

updateCalendar();
