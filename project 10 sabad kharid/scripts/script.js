let productcontainer = document.querySelector('#products');
let cartheader = document.querySelector('.cart-header');
let cartcotainer = document.querySelector('.cart');
let toggleDarkMode = document.querySelector('.darkmode');
let cartItems = document.querySelector('.cart-item');




  toggleDarkMode.addEventListener ('click' , function(){

      document.body.classList.toggle('dark');
  });

function showAllProducts (){
    for(let i = 0; i < products.length; i++){
        productcontainer.innerHTML += `        <div class="product-item" id="product">
        <div class="product-img"><img src="` + products[i].imgSrc + `" alt=""></div>
        <div class="product-title">` +products[i].name + `</div>
        <div class="product-instock">تعداد موجود: ` + products[i].instock + ` </div>
        <div class="product-data">
            <div class="product-price"> ` + products[i].price + ` </div>
            <div class="add-to-cart" onclick = "addToCart( ` + products[i].id + ` )"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
    </div>
`;
     }
}

showAllProducts();

let n = 0;

cartheader.addEventListener('click', function(){
      if (n == 0){
        cartcotainer.style.bottom = '-10px';
        n++;
      }else{
        cartcotainer.style.bottom = '-363px';
        n--;
      }
});

let cart = [];

function addToCart(id){


    let item = products.find(function(p){
          return p.id == id;
    });


    item.changeNumberofUnit = 1;
    cart.push(item);
    renderCartItems();
    // console.log('product ' + id + ' add to cart');
}

function renderCartItems () {
  cartItems.innerHTML = '';

   for (let i = 0; i < cart.length ; i++){
            cartItems.innerHTML += `  <li class="cart-li">
                    
            <div class="p-name">` + cart[i].name + `</div>
      
        <div class="p-price"> ` + cart[i].price + ` </div>
        <div class="p-unit">
            <span class="plus" onclick="changeNumberofUnit('plus' , ` + cart[i].id + `)" ><i class="fa-solid fa-plus"></i></span>
            <span class="unit"> ` + cart[i].changeNumberofUnit + ` </span>
            <span class="min"  onclick="changeNumberofUnit('min' , ` + cart[i].id + `)" ><i class="fa-solid fa-minus"></i></span>
        </div>
    </li>
   `
   }
}

function changeNumberofUnit (action , id) {
    
  cart = cart.map (function(item) {
      let oldNumberOfUnite = item.changeNumberofUnit;

      if(item.id == id){

        if(action == 'plus' && oldNumberOfUnite < item.instock){
          oldNumberOfUnite++;

        }else if(action == 'min' && oldNumberOfUnite > 1){
          oldNumberOfUnite--;
        }

      }
      item.changeNumberofUnit = oldNumberOfUnite;
      return item;
  });

  renderCartItems(); 
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
