let average1;
class table{
    students=[];
    subjects=[];
    constructor(students,subjects){
        this.students=students;
        this.subjects=subjects;
      
        this.generateheader(subjects);
        this.average();
        this.addnewrow(students);
     
        this.eventListeners();
       this.daleterow();
    }
    eventListeners(){
        document.getElementById('id_button').addEventListener('click', this.addstudents.bind(this));
    }
    average(){
        let avrg=[0,0,0,0];
       for(let i=0;i<this.students.length;i++){
           for (let j=0;j<this.students[i].score.length;j++){
               avrg[i]+=this.students[i].score[j];
           }
       }
       for(let i=0;i<avrg.length;i++){
           avrg[i]/=this.subjects.length;
       }
       let cvld=`<tr>`+
       `<td colspan="2">average</td>`;
       
       for(let i=0; i<subjects.length;i++){
       cvld+=`<td>${avrg[i]}</td>`;
       }
       cvld+=`</tr>`
       document.getElementById('tft').innerHTML=cvld;
       average1=avrg;
    }
    
   generateheader(subjects){
    let cvld=`<th>name </th>`+`<th>lastname</th>`;
    for(let i=0;i<this.subjects.length;i++){    
        cvld+=`<th>${this.subjects[i]}</th>`;
    }
    document.getElementById('head').innerHTML+=cvld;
    }
    
    addnewrow(students){
        let cvld=`<tr>`;
        for(let i=0;i<this.students.length;i++){
            cvld+=`<td>${this.students[i].name}</td>
            <td>${this.students[i].lastname}</td>`;
            for(let j=0;j<this.students[i].score.length;j++){
                cvld+=`<td class=${average1[i]<this.students[i].score[j]?'green':'red'}>${ this.students[i].score[j]}</td>`;
            }
            cvld+=`</tr>`;
        }
        document.getElementById('body').innerHTML=cvld;
    }
    addnewrow2(student2){
        let cvld=`<tr>`;
            cvld+=`<td>${student2.name}</td>
            <td>${student2.lastname}</td>`;
            for(let j=0;j<student2.score.length;j++){
                cvld+=`<td class=${average1[j]<student2.score[j]?'green':'red'}>${ student2.score[j]}</td>`;
            }
            cvld+=`</tr>`;
        document.getElementById('body').innerHTML+=cvld;
    }
    addstudents(event){
        event.preventDefault();
        let name2=document.querySelector('#id_name ');
        let lastname2=document.querySelector('#id_lastname ');
        let score_math=document.querySelector('#id_score ');
        let score_art=document.querySelector('#id_score1 ');
        let score_javascript=document.querySelector('#id_score2 ');
        let score_html=document.querySelector('#id_score3 ');
        let student2={name:name2.value,lastname:lastname2.value,
            score:[Number(score_math.value),Number(score_art.value),Number(score_javascript.value),Number(score_html.value)]};
        this.students.push(student2);
        console.log(this.students);
        this.addnewrow2(student2);
    }  
    daleterow(){
        document.getElementById('btn').addEventListener('click',function(){
            document.getElementById('table').deleteRow(1);
            console.log(this.students);
            this.students.unshift();
            
            this.average();

            });
    }
    
}


let subjects=['matb','art','javascript','html'];
let students=[
    {name:'misho',lastname:'khutsishvili',score:[90,50,80,90] },
    {name:'gio',lastname:'bagashvili',score:[30,20,90,10] },
    {name:'kato',lastname:'qsovrelishvili',score:[45,80,20,79] },
    {name:'keso',lastname:'chaduneli',score:[89,56,24,90] },
]
let table1=new table(students,subjects);