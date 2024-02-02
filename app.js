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
      cell.innerHTML = `<div id="${week[day]}" class="subjectCell ${counter}"></div>`;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
    counter++;
  }

  timetable.appendChild(tbody);
  const row = document.querySelector(".row");
  console.log(row.childElementCount);

  finalTimetable = arrangeTimetable(subjectsInput);
  console.log(finalTimetable);

  for(let  i = 0 ; i < counter ; i++){
    
  }
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
    `<div>${inputSubject.value} ${inputDuration.value}mins</div>`
  );

  inputSubject.value = "";
}

function resetSubjects() {
  const displaySubjects = document.querySelector("#subjectSpace");
  displaySubjects.innerHTML = "";
}

function arrangeTimetable(subjects) {
  const timetable = {};

  subjects.forEach((subject) => {
    timetable[subject] = [];
  });

  subjects.forEach((subject) => {
    for (let i = 0; i < 3; i++) {
      const randomSlot =
        availableTimeSlots[
          Math.floor(Math.random() * availableTimeSlots.length)
        ];
      if (
        !timetable[subject].some(
          (entry) =>
            entry.day === randomSlot.day && entry.time === randomSlot.time
        )
      ) {
        timetable[subject].push({ day: randomSlot.day, time: randomSlot.time });
      } else {
        i--;
      }
    }
  });

  return timetable;
}
