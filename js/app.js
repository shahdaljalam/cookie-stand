'use strict';
let counter = 0;
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function place(location, minCust, maxCust, avgCookie) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;

    this.getAvg = function (min, max) {
        this.avg = getRandomIntInclusive(min, max);
    };

    this.render = function () {

        const parentElement = document.getElementById('cookies');
        // const pElement = document.createElement('p');
        // pElement.textContent = this.location;
        // parentElement.appendChild(pElement)

        const table = document.createElement('table');
        parentElement.appendChild(table);

        const location = document.createElement('th');
        table.appendChild(location);
        location.textContent ='location';

        const tr1 = document.createElement('tr');
        table.appendChild(tr1);

        for (let i = 0; i < 14; i++) {
            let numbers = document.createElement('td')
            //var numbersText = document.textContent(i);
            numbers.textContent = i;
            //numbers.appendChild(numbersText);
            tr1.appendChild(numbers);

            this.getAvg(this.minCust, this.maxCust);
            let val = this.avg * this.avgCookie;
            counter = counter + val;

            const liElement = document.createElement('li');
            ulElement.appendChild(liElement)

            liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
        }

        const td = document.createElement('td');
        tr.appendChild(td);

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement)

        

        const totlaliElement = document.createElement('li');
        ulElement.appendChild(totlaliElement)

        totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
    }
}

let seattlePlace = new place('seattle', 23, 65, 6.3);
console.log(seattlePlace);
seattlePlace.render()

// let seattle = {
//     location: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     random: 0,
//     cookiesNum: function () {
//         let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//         let counter = 0;

//         const parentElement = document.getElementById('cookies');
//         const pElement = document.createElement('p');
//         pElement.textContent = this.location;
//         parentElement.appendChild(pElement)

//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < 14; i++) {

//             this.random = getRandomIntInclusive(this.minCust, this.maxCust);
//             let val = this.random * this.avgCookie;
//             counter = counter + val;

//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement)

//             liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
//         }
//         const totlaliElement = document.createElement('li');
//         ulElement.appendChild(totlaliElement)

//         totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
//      }
//  }

// let Tokyo = {
//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     random: 0,
//     cookiesNum: function () {
//         let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//         let counter = 0;

//         const parentElement = document.getElementById('cookies');
//         const pElement = document.createElement('p');
//         pElement.textContent = this.location;
//         parentElement.appendChild(pElement)

//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < 14; i++) {

//             this.random = getRandomIntInclusive(this.minCust, this.maxCust);
//             let val = this.random * this.avgCookie;
//             counter = counter + val;

//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement)

//             liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
//         }
//         const totlaliElement = document.createElement('li');
//         ulElement.appendChild(totlaliElement)

//         totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
//     }
// }

// let Dubai = {
//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     random: 0,
//     cookiesNum: function () {
//         let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//         let counter = 0;

//         const parentElement = document.getElementById('cookies');

//         const pElement = document.createElement('p');
//         pElement.textContent = this.location;
//         parentElement.appendChild(pElement)

//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < 14; i++) {

//             this.random = getRandomIntInclusive(this.minCust, this.maxCust);
//             let val = this.random * this.avgCookie;
//             counter = counter + val;

//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement)

//             liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
//         }
//         const totlaliElement = document.createElement('li');
//         ulElement.appendChild(totlaliElement)

//         totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
//     }
// }
// let Paris = {
//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     random: 0,
//     cookiesNum: function () {
//         let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//         let counter = 0;

//         const parentElement = document.getElementById('cookies');

//         const pElement = document.createElement('p');
//         pElement.textContent = this.location;
//         parentElement.appendChild(pElement)

//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < 14; i++) {

//             this.random = getRandomIntInclusive(this.minCust, this.maxCust);
//             let val = this.random * this.avgCookie;
//             counter = counter + val;

//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement)

//             liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
//         }
//         const totlaliElement = document.createElement('li');
//         ulElement.appendChild(totlaliElement)

//         totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
//     }
// }

// let Lima = {
//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     random: 0,
//     cookiesNum: function () {
//         let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//         let counter = 0;

//         const parentElement = document.getElementById('cookies');

//         const pElement = document.createElement('p');
//         pElement.textContent = this.location;
//         parentElement.appendChild(pElement)

//         const ulElement = document.createElement('ul');
//         parentElement.appendChild(ulElement)

//         for (let i = 0; i < 14; i++) {

//             this.random = getRandomIntInclusive(this.minCust, this.maxCust);
//             let val = this.random * this.avgCookie;
//             counter = counter + val;

//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement)

//             liElement.textContent = hours[i] + ": " + Math.floor(val) + " cookies";
//         }
//         const totlaliElement = document.createElement('li');
//         ulElement.appendChild(totlaliElement)

//         totlaliElement.textContent = "total: " + Math.floor(counter) + " cookies";
//     }
// }

// seattle.cookiesNum();
// Tokyo.cookiesNum();
// Dubai.cookiesNum();
// Paris.cookiesNum();
// Lima.cookiesNum();