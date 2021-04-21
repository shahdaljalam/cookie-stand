'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const parentElement = document.getElementById('table');
const tableData = document.createElement('table');
parentElement.appendChild(tableData);

const cityForm = document.getElementById('cityForm');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function place(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.cookiesPerHour = [];
    this.customerPerHour = [];
    this.total = 0;
    place.allCity.push(this);
}
place.allCity = [];
place.prototype.getcustNumber = function () {
    for (let i = 0; i < hour.length; i++) {
        let cookiee = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSale);
        this.cookiesPerHour.push(cookiee);
        this.total += cookiee;
        console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
    };
};

place.prototype.render = function () {
    this.getcustNumber();

    const tr = document.createElement('tr')
    tableData.appendChild(tr);

    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;

    for (let i = 0; i < hour.length; i++) {
        let tContent = document.createElement('td');
        tr.appendChild(tContent);
        tContent.textContent = this.cookiesPerHour[i];
    }

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.total;
}

function heading() {

    let thead = document.createElement('tr');
    tableData.appendChild(thead);

    let thEle = document.createElement('th');
    thead.appendChild(thEle);
    thEle.textContent = '';

    for (let i = 0; i < hour.length; i++) {
        let thEle = document.createElement('th');
        thead.appendChild(thEle);
        thEle.textContent = hour[i];
    }

    let th1Ele = document.createElement('th');
    thead.appendChild(th1Ele);
    th1Ele.textContent = 'Daily Location Total';
}

function footer() {
    let tfoot = document.createElement('tr');
    tableData.appendChild(tfoot);

    let thEle = document.createElement('th');
    tfoot.appendChild(thEle);
    thEle.textContent = 'Total';

    let totalOfTotal = 0;
    for (let i = 0; i < hour.length; i++) {
        let thEle = document.createElement('th');
        let hourLyTotal = 0;
        for (let j = 0; j < place.allCity.length; j++) {
            hourLyTotal += place.allCity[j].cookiesPerHour[i];
            totalOfTotal += place.allCity[j].cookiesPerHour[i];
        }
        thEle.textContent = hourLyTotal;
        tfoot.appendChild(thEle);
    }

    let th1Ele = document.createElement('th');
    tfoot.appendChild(th1Ele);
    th1Ele.textContent = totalOfTotal;
}

new place('Seattle', 23, 65, 6.3);
new place('Tokyo', 3, 24, 1.2);
new place('Dubai', 11, 38, 3.7);
new place('Paris', 20, 38, 2.3);
new place('Lima', 2, 16, 4.6);

function render() {
    for (let i = 0; i < place.allCity.length; i++) {
        place.allCity[i].render();
    }
}
heading();
render();

cityForm.addEventListener('submit', eventButton)

function eventButton(event){
    event.preventDefault();
    console.log(event.target.placeName.value);
    const placeName = event.target.placeName.value;
    const minCust = event.target.minCust.value
    const maxCust = (event.target.maxCust.value);
    const avgSale = (event.target.avgSale.value);

    console.log(placeName,minCust,maxCust,avgSale)

    while(tableData.firstChild){
        tableData.removeChild(tableData.firstChild);
    }

    new place(placeName,minCust,maxCust,avgSale)

    heading();
    render();
    footer();
} 


function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(place.allCity)
footer();