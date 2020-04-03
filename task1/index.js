const whatday = prompt("Какое сегодня число?");
const date = Number.parseInt(fulldate);
const result = date >= 2 ? whatday : "сегoдня первое число";
alert(result);