const whatdate = prompt("Какое сегодня число?");
const date = Number.parseInt(fulldate);
const result = date % 2 === 0 ? whatdate : "upppss";
alert(result);