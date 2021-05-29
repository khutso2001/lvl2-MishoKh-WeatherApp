
const mainly = document.querySelector(".mainly");
const improve = document.querySelector(".block_brand");
const improve2 = document.querySelector(".block_colors");
const improve3=document.querySelector(".block_size");
const improve4=document.querySelector(".blockprice");


const dropdown = document.querySelector(".drop_down_brand");
const dropdown2 = document.querySelector(".drop_down_colors");
const dropdown3=document.querySelector(".drop_down_size");
const dropdown4=document.querySelector(".drop_down_price");
dropdown.addEventListener('click',function(){
  improve.classList.toggle('block');
})
dropdown2.addEventListener('click',function(){
  improve2.classList.toggle('block');
})
dropdown3.addEventListener('click',function(){
improve3.classList.toggle('block');
})
dropdown4.addEventListener('click',function(){
improve4.classList.toggle('block');
})
let data;
const layout2=document.querySelector(".product2_layout");
const layout3=document.querySelector(".product3_layout");
const layout6=document.querySelector(".product6_layout");
layout2.addEventListener('click',function(e){
  lay(6,6,6)
}); 
layout3.addEventListener('click',function(e){
  lay(4,6,6)
}); 
layout6.addEventListener('click',function(e){
  lay(3,4,6)
});  
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json =>{
  data=json;
   lay(3,4,6);
   
})

const fulllay=document.querySelector(".class");
const rowlay=document.querySelector(".classrow");
fulllay.addEventListener('click',function(e){
  lay(2,4,6)
});
rowlay.addEventListener('click',function(e){
  layrow(12,12,12)
});
let product=document.querySelector("#classid");
const prodmin=document.querySelector(".minproduct");
product.addEventListener('change',function(e){
  if(product.value=="1"){
    lay(3,4,6,10)
  }
});
const prodmd=document.querySelector(".mdproduct");
product.addEventListener('change',function(e){
  if(product.value=="2"){
    lay(3,4,6,15)
  }
});
const prodmax=document.querySelector(".maxproduct");
product.addEventListener('change',function(e){
  if(product.value=="3"){
    lay(3,4,6,20)
  }
});

function lay(col3=3,col4=4,col6=6,qual=20){
let tmp='';
  for(let i=0;i<qual;i++){
    tmp+=`
    <div class="col-lg-${col3} col-md-${col4} col-sm-${col6} mb-2">
<div class="card rem" style="height: 100%;">
<img src="${data[i].image}" class="card-img-top" "alt="..."> 
<div class="card-body">
<i class="bi bi-star-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></i>
<i class="bi bi-star-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></i>
<i class="bi bi-star-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></i>
<i class="bi bi-star-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></i>
<i class="bi bi-star-half"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg></i>
  <p class="card-text">${data[i].category}</p>
  <p>${data[i].price}$</p>
</div>
</div>
</div>`

}

  mainly.innerHTML=tmp;
  console.log(qual);
}

  
function layrow(col4=4,col6=6,col12=12){
  let tmp='';
    for(let i=0;i<data.length;i++){
      tmp+=`
      <div class="col-lg-${col12} col-md-${col4} col-sm-${col6} mb-2">
      <div class="row g-0">
      <div class="col-md-4">
        <img src="${data[i].image}"style="width:30%"alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-title"><img src="" alt=""></p>
          <p class="card-text">Film Fit Cotton</p>
          <p class="card-text"><small class="text-muted">$500.00</small></p>
        </div>
      </div>
    </div>
  </div>`
  
  }
  
    mainly.innerHTML=tmp;
    
  }
 