const mainly = document.querySelector(".mainly");

const improve = document.querySelector(".blockk");
const improve2 = document.querySelector(".block3");

console.log(improve2);

const dropdown = document.querySelector(".drop_down");
const dropdown2 = document.querySelector(".drop_down2");


dropdown.addEventListener('click',function(){
    improve.classList.toggle('block');
})

dropdown2.addEventListener('click',function(){
    improve2.classList.toggle('block');
})




fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json =>{
                for(let i=0;i<json.length;i++){
                    mainly.innerHTML+=`
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
              <div class="card rem" style="width: 15rem;">
                <img src="${json[i].image}" class="card-img-top" style="height:340px;"alt="..."> 
                
                <div class="card-body">
                  <img src="star-fill.svg" alt="">
                  <img src="star-fill.svg" alt="">
                  <img src="star-fill.svg" alt="">
                  <img src="star-fill.svg" alt="">
                  <img src="star-fill.svg" alt="">
                  <img src="star-fill.svg" alt="">
                  <p class="card-text">${json[i].category}</p>
                  <p>${json[i].price}$</p>
                </div>
              </div>
            </div>`
                }
            })
            