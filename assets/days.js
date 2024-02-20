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
}
