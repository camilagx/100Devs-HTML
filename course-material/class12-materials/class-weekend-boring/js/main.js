document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  h2Element = document.querySelector('#placeToSee');

  let msg;
  //Conditionals go here
  if (day === "monday" || day === "tuesday") {
    msg = "It's a boring day.";
  } else if (day === "wednesday" || day === "thursday") {
    msg = "It's class day!";
  } else if (day === "friday" || day === "saturday") {
    msg = "It's a WEEKEND!!";
  } else {
    msg = "It's REST DAY.";
  }

  h2Element.innerText = msg;

}
