function weekSort(a, b) {
  const order = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return order.indexOf(a) - order.indexOf(b);
}
const availableTimeSlots = [];

function generateTimetable() {
  function fillAvailableTimeSlots() {
    for (let i = 0; i < week.length; i++) {
      for (let j = 0; j < periods; j++) {
        availableTimeSlots.push({
          day: week[i],
          time: j,
        });
      }
    }
  }

  week = week.sort(weekSort);

  const periods = parseInt(document.getElementById("periods").value);
  const subjectString = document.getElementById("subjects").value;
  fillAvailableTimeSlots();

  const subjects = subjectString.split(",");

  if (isNaN(days) || isNaN(periods) || days < 1 || periods < 1) {
    alert("Please enter valid numbers for days and periods.");
    return;
  }

  const timetable = document.getElementById("timetable");
  timetable.innerHTML = "";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Time/Day</th>";

  for (let day = 0; day < days; day++) {
    headerRow.innerHTML += `<th>${week[day]}</th>`;
  }

  thead.appendChild(headerRow);
  timetable.appendChild(thead);

  const tbody = document.createElement("tbody");

  let counter = 0;
  for (let period = 1; period <= periods; period++) {
    const row = document.createElement("tr");
    row.setAttribute("class", "row");
    row.innerHTML = `<td>Period ${period}</td>`;

    for (let day = 0; day < days; day++) {
      const cell = document.createElement("td");
      const subjectIndex = day * periods + period - 1;
      if (subjectIndex < subjects.length) {
        if (subjects[subjectIndex].subject == undefined) {
          cell.value = "";
        } else {
          cell.value = subjects[subjectIndex].subject;
        }
      }
      cell.id = `${week[day]}-${period - 1}`;
      cell.classList.add("subjectCell", week[day]);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
    counter++;
  }

  timetable.appendChild(tbody);
  const row = document.querySelector(".row");

  finalTimetable = arrangeTimetable(subjectsInput);

  for (const subject in finalTimetable) {
    finalTimetable[subject].forEach((slot) => {
      const cell = document.getElementById(`${slot.day}-${slot.time}`);
      if (cell) {
        cell.innerHTML = subject;
      }
    });
  }
  document.getElementById('exportImageBtn').style.display = 'inline-block';
}

const subjectsInput = [];

function addSubjects() {
  let inputSubject = document.querySelector("#subjects");
  const inputDuration = document.querySelector("#hours");
  const displaySubjects = document.querySelector("#subjectSpace");
  subjectsInput.push({
    subject: inputSubject.value,
    time: inputDuration.value,
  });

  displaySubjects.insertAdjacentHTML(
    "beforeend",
    `<div>${subjectsInput.length}) ${inputSubject.value} ${inputDuration.value}mins</div>`
  );

  inputSubject.value = "";
}

function resetSubjects() {
  const displaySubjects = document.querySelector("#subjectSpace");
  displaySubjects.innerHTML = "";
  subjectsInput = [];
}

function arrangeTimetable(subjects) {
  const timetable = {};

  subjects.forEach((subject) => {
    timetable[subject.subject] = [];
  });
  subjects.forEach((subject) => {
    for (let i = 0; i < 5; i++) {
      const randomSlot =
        availableTimeSlots[
          Math.floor(Math.random() * availableTimeSlots.length)
        ];

      if (
        !timetable[subject.subject].some(
          (entry) =>
            entry.day === randomSlot.day && entry.time === randomSlot.time
        )
      ) {
        timetable[subject.subject].push({
          day: randomSlot.day,
          time: randomSlot.time,
        });
      } else {
        i--;
      }
    }
  });

  return timetable;
}

function exportAsImage() {
  html2canvas(document.getElementById("timetable")).then(function (canvas) {
    var image = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = image;
    link.download = "timetable.png";
    link.click();
  });
}

