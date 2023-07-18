function updateDate() {
  var dateElement = document.getElementById('date');
  var dayElement = document.getElementById('day');
  var currentDate = new Date();

  var persianOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    calendar: 'persian'
  };

  var formatter = new Intl.DateTimeFormat('fa-IR', persianOptions);
  var parts = formatter.formatToParts(currentDate);

  var dayNumber = parts.find(part => part.type === 'day').value;
  var month = parts.find(part => part.type === 'month').value;
  var year = parts.find(part => part.type === 'year').value;
  var day = parts.find(part => part.type === 'weekday').value;

  var formattedDate = `${dayNumber} ${month} ${year}`;

  dayElement.textContent = day;
  dateElement.textContent = formattedDate;
}

document.addEventListener('DOMContentLoaded', function() {
  updateDate();
});
