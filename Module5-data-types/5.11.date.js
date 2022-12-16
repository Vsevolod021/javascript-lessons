/*
let date = new Date() // настоящее время


alert(date);

alert(date.getTime()); // кол-во миллисекунд


// let date = new Date("2022-12-31");
// alert(date);

let digitalDate = new Date(2022, 11, 16, 11, 51, 05, 999);
alert(digitalDate);
alert(digitalDate.getUTCMonth())


let date = new Date(); 

alert(date.getUTCHours()); // по Гринвичу
alert(date.getTimezoneOffset()); // разница между часовыми поясами в минутах



let thisYear = new Date();

thisYear.setUTCMonth(6, 11);
// thisYear.setUTCHours();

alert(thisYear);
*/


// new Date(millisec) - в скобках кол-во меллисек с 1 января 1970 3:00:00 (по Гринвичу)
// date.getFullYear()
// date.getMonth() - 0 - январь; 11 - декабрь
// date.getDate() - число
// date.getHourse() .getMinutes() .getSeconds() .getMilliseconds
// date.getDay() - день недели: 0 - вс, 6 пн

// task #1
// let date = new Date(2012, 1, 20, 3, 12);

// alert(date);


// task #2
// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(date) {
//     let weekDays = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ']
//     return weekDays[date.getDay()];
// }

// alert( getWeekDay(date) );  


// task #3
// let date = new Date(2012, 0, 1);  // 3 января 2012 года

// function getLocalDay(date) {
//     let day = date.getDay();

//     return (day==0) ? 7 : day;
// }

// alert( getLocalDay(date) ); 


// task #4
// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// task #5
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month);

//     for (let i=28; i<=31; i++) {
//         date.setDate(i+1);
//         if (date.getDate()== 1) {
//             console.log('hello');
//             return i;
//         }
//     }
// } 

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }


// console.log(getLastDayOfMonth(2022, 1));


// task #6
// function getSecondsToday() {
//     let date = new Date();
//     let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     return Math.floor((date.getTime() - today.getTime()) / 1000);
// }

// console.log(getSecondsToday());

// 


// task #7
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.ceil((tomorrow.getTime() - now.getTime()) / 1000);
}

console.log(getSecondsToTomorrow());