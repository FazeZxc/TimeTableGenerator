let week = [];
let days = week.length;
let daysInput = document.getElementById("days");


function mondayChecked() {
  const Checkbox = document.querySelector("#Monday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}
function tuesdayChecked() {
  const Checkbox = document.querySelector("#Tuesday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}

function wednesdayChecked() {
  const Checkbox = document.querySelector("#Wednesday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}

function thursdayChecked() {
  const Checkbox = document.querySelector("#Thursday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
  days = week.length;
  daysInput.value = days;
}

function fridayChecked() {
  const Checkbox = document.querySelector("#Friday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}

function saturdayChecked() {
  const Checkbox = document.querySelector("#Saturday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day != Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}

function sundayChecked() {
  const Checkbox = document.querySelector("#Sunday");
  if (Checkbox.checked) {
    week.push(Checkbox.id);
    days = week.length;
    daysInput.value = days;
  } else {
    week = week.filter((day) => {
      return day !== Checkbox.id;
    });
    days = week.length;
    daysInput.value = days;
  }
  console.log(week);
}
