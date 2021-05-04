'use strict';

let form = document.getElementById('form');
form.addEventListener('submit',handle);
let table=document.getElementById('table');

let arrOfDonor=[];
function Donor(donarName,amount){
  this.donarName=donarName;
  this.amount=amount;
  this.age=0;
  this.randomAge();
  arrOfDonor.push(this);
  console.log(this);
}

function handle(event){
  event.preventDefault();
  let donarName =event.target.Donor.value;
  let amount =event.target.amount.value;
  let newDonor = new Donor(donarName,amount);
  newDonor.render();
  saveToLs();
}

Donor.prototype.randomAge=function(){
  this.age=Math.floor(Math.random() * (30 - 18 + 1) + 18);
};

Donor.prototype.render=function(){
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let cellData = document.createElement('td');
  dataRow.appendChild(cellData);
  cellData.textContent=this.donarName;

  cellData = document.createElement('td');
  dataRow.appendChild(cellData);
  cellData.textContent=this.age;

  cellData = document.createElement('td');
  dataRow.appendChild(cellData);
  cellData.textContent=this.amount;

};

function render(){
  for(let i=0 ; i<arrOfDonor.length;i++){
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let cellData = document.createElement('td');
    dataRow.appendChild(cellData);
    cellData.textContent=arrOfDonor[i].donarName;

    cellData = document.createElement('td');
    dataRow.appendChild(cellData);
    cellData.textContent=arrOfDonor[i].age;

    cellData = document.createElement('td');
    dataRow.appendChild(cellData);
    cellData.textContent=arrOfDonor[i].amount;
  }
}

function saveToLs(){
  let data = JSON.stringify(arrOfDonor);
  localStorage.setItem('saved' ,data);
}

function getStorage(){
  let saved = localStorage.getItem('saved');
  let newArr = JSON.parse(saved);
  if(newArr){
    arrOfDonor=newArr;
  }
}

getStorage();
render();
