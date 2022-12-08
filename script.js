var ToggleButton=document.querySelector(".btn2");
var ToggleTarget=document.querySelector(".cartbox");
ToggleTarget.style.display="none";
ToggleButton.addEventListener('click',displayFunction);
function displayFunction(){
        if (ToggleTarget.style.display === "none") {
            ToggleTarget.style.display = "block";
        } 
        else {
            ToggleTarget.style.display = "none";
        }
        

    
}
var a=0;
function burgerFunction(){
    var CartButton=document.querySelector(".cart-quantity-input1");
    a++;
    CartButton.value=a;
}
var b=0;
function burgerFunction2(){
    var CartButton=document.querySelector(".cart-quantity-input2");
    b++;
    CartButton.value=b;
}
var c=0;
function burgerFunction3(){
    var CartButton=document.querySelector(".cart-quantity-input3");
    c++;
    CartButton.value=c;
}var d=0;
function burgerFunction4(){
    var CartButton=document.querySelector(".cart-quantity-input4");
    d++;
    CartButton.value=d;
}var e=0;
function burgerFunction5(){
    var CartButton=document.querySelector(".cart-quantity-input5");
    e++;
    CartButton.value=e;
}var f=0;
function burgerFunction6(){
    var CartButton=document.querySelector(".cart-quantity-input6");
    f++;
    CartButton.value=f;
}var g=0;
function burgerFunction7(){
    var CartButton=document.querySelector(".cart-quantity-input7");
    g++;
    CartButton.value=g;
}var h=0;
function burgerFunction8(){
    var CartButton=document.querySelector(".cart-quantity-input8");
    h++;
    CartButton.value=h;
}var i=0;
function burgerFunction9(){
    var CartButton=document.querySelector(".cart-quantity-input9");
    i++;
    CartButton.value=i;
}var j=0;
function burgerFunction10(){
    var CartButton=document.querySelector(".cart-quantity-input10");
    j++;
    CartButton.value=j;
}var k=0;
function burgerFunction11(){
    var CartButton=document.querySelector(".cart-quantity-input11");
    k++;
    CartButton.value=k;
}


//let burger1=document.querySelector("#burger1");
// burger1.addEventListener("click",()=>{
//     console.log(number1.value);
// })

