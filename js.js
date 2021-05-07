
 const inpt=document.querySelector('.input_class');
 const content=document.querySelector('#content');
 
 const btn=document.querySelector('.btn_class');
 let dataa='';
 btn.addEventListener('click',serchmusics);



 
 function serchmusics(){
    fetch(`https://itunes.apple.com/search?term=${inpt.value}`)
    .then(response=>response.json())
    .then(data=>{
        dataa=data;
        position();
    })
 }
 function position(){
     let cvld='';
     for(let i=0;i<dataa.results.length;i++){
    cvld+=
    `<div class="parent">
     <div class=music_content>
     <P>${dataa.results[i].artistName}</p>
            <audio controls>
  <source src="${dataa.results[i].previewUrl}" type="audio/ogg">
  

    </audio>
   

    </div>
    </div>`

     }
     content.innerHTML=cvld;
 }
 