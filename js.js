let subject= ['math','art','javascript','html'];
let student=[
    {name:'misho',lastname:'khutsishvili',score:[90,100,70,80]},
    {name:'nini',lastname:'mgaloblishvili',score:[93,10,71,30]},
    {name:'keso',lastname:'tandashvili',score:[90,90,7,29]},
    {name:'lana',lastname:'chaduneli',score:[13,44,70,20]},
]
let avrg=[0,0,0,0];
function aver(){

for(let i=0;i<student.length;i++){
    for(let j=0;j<student[i].score.length;j++){
        avrg[j]+=student[i].score[j];
    }
}
for(let i=0;i<avrg.length;i++){
    avrg[i]/=subject.length;

}
let cvld=`<tr>`+
`<td colspan="2">average</td>`;

for(let i=0; i<subject.length;i++){
cvld+=`<td>${avrg[i]}</td>`;
}
cvld+=`</tr>`
tfoot.innerHTML=cvld;
return avrg;
}

let table=document.getElementById('table');
let thead=document.getElementById('head');
let tbody=document.getElementById('body');
let tfoot=document.getElementById('tfoot');
let cvld='<th>name</th>'+`<th>lastname</th>`
for(let i=0;i<subject.length;i++){
    cvld+=`<th>${subject[i]}</th>`;
}
thead.innerHTML+=cvld;
aver();

cvld='';
for(let i=0;i<subject.length;i++){
    cvld+=
    `<tr>
    <td>${student[i].name}</td>
    <td>${student[i].lastname}</td>`;

    for(let j=0;j<student.length;j++){
       cvld+=`<td class=${avrg[j]<student[i].score[j]?'green':'red'}>${student[i].score[j]}</td>`
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
        student.push({
            name:nm.value,lastname:lastnm.value,score:[Number(mathsc.value),Number(artsc.value),Number(jssc.value),Number(htmlsc.value)]
    });
    avrg=[0,0,0,0];
    aver();
     addnewrow(student[student.length-1]);
     return true;
     
 }
 function addnewrow(newstudent){
    let cvld=`<tr> 
    <td>${newstudent.name}</td>
    <td>${newstudent.lastname}</td>`;
    for(let j=0;j<newstudent.score.length;j++){
        cvld+=`<td class=${avrg[j]<newstudent.score[j]?'green':'red'}>${newstudent.score[j]}</td>`;
     }
     cvld+=`</tr>`;
    document.getElementById('body').innerHTML+=cvld;
    return true;
 }
document.getElementById('btn').addEventListener('click',function(){
document.getElementById('table').deleteRow(1);
});

