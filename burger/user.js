let subjects= ['math','art','javascript','html'];
let students=[];
let average = [];
//defining table
class Student{
  constructor(name,lastname,grade){
    this._name=name;
    this._lastname=lastname;
    this._grade=grade;
    students.push({
        name:this._name,
        lastname:this._lastname,
        grade:this._grade
    })
  }

  get name(){
      return this.name;
  }
  get last(){
    return this.lastname;
  }
  get grade(){
    return this.grade;
  }

}
let misho = new Student('misho','khutsishvili',[50,80,100,50]);
let nini =  new Student('nini','mgaloblishvili',[50,60,70,80]);
let beqa = new Student('beqa','jorjoliani',[90,30,67,50]);
let lado = new Student('lado','tatarashvili',[20,80,40,90]);


let table=document.getElementById('table');
let thead=document.getElementById('head');
let tbody=document.getElementById('body');
let tfoot=document.getElementById('tfoot');

let cvld='<th>name</th>'+`<th>lastname</th>`;
for(let i=0;i<subjects.length;i++){
    cvld+=`<th>${subjects[i]}</th>`;
}
thead.innerHTML+=cvld;
aver();

cvld='';
for(let i=0;i<subjects.length;i++){
    cvld+=
    `<tr>
    <td>${students[i].name}</td>
    <td>${students[i].lastname}</td>`;
    
    for(let j=0;j<students.length;j++){
       cvld+=`<td class=${average[j]<students[i].grade[j]?'green':'red'}>${students[i].grade[j]}</td>`
    }
    
   cvld+= `</tr>`;
}
body.innerHTML+=cvld;
document.getElementById('add_date').addEventListener('submit',addnewdate);

function addnewdate(event){
    
    event.preventDefault();
    let nm = document.getElementById('id_name');
    let lastnm = document.getElementById('id_lastname');
    let mathsc = document.getElementById('id_score');
    let artsc = document.getElementById('id_score1');
    let jssc = document.getElementById('id_score2');
    let htmlsc = document.getElementById('id_score3');
    let student= new Student(nm.value,lastnm.value,[Number(mathsc.value),Number(artsc.value),Number(jssc.value),Number(htmlsc.value)]);
    average=[];
    aver();
    addnewrow(students[students.length-1]);
}

function addnewrow(newstudent){
    let cvld=`<tr> 
    <td>${newstudent.name}</td>
    <td>${newstudent.lastname}</td>`;
    for(let j=0;j<newstudent.grade.length;j++){
        cvld+=`<td class=${average[j]<newstudent.grade[j]?'green':'red'}>${newstudent.grade[j]}</td>`;
     }
     cvld+=`</tr>`;
    document.getElementById('body').innerHTML+=cvld;
 }
 document.getElementById('btn').addEventListener('click',function(){
document.getElementById('table').deleteRow(1);
    });
   
//sashualos datvla

function aver(){
    for(let i=0;i<students.length;i++){
        for(let j=0;j<students[i].grade.length;j++){
            if(average[j]===undefined){
                average[j]=students[i].grade[j];
            }
            else if(average[j]){
                average[j]+=students[i].grade[j];
            }
        }
    }
    for(let i=0;i<average.length;i++){
        average[i]/=subjects.length;
    }
    let cvld=`<tr>`+
    `<td colspan="2">average</td>`;
    
    for(let i=0; i<subjects.length;i++){
        cvld+=`<td>${average[i]}</td>`;
    }
    cvld+=`</tr>`
    tfoot.innerHTML=cvld;
    return average;
}
aver();




