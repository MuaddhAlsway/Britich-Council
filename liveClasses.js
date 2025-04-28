
let disocunt = document.getElementById('DiscountNow');
let SignIn = document.getElementById('SignIn');
let check = localStorage.getItem('discountNOOW') === 'true';
let checkOut = localStorage.getItem('SignItem') === 'true';
disocunt.classList.add('DiscountNow');
SignIn.classList.add('SignIn');


disocunt.innerHTML = check ?  'Get it' : 'Get your discount now!';
function Discount(){
  document.addEventListener('click', () =>{
    if(!check){
        disocunt.innerHTML = 'Get it';
        check = true 
    } else{
      disocunt.innerHTML = 'Get your discount now!';
      check = false
    }

    localStorage.setItem('discountNOOW', check);
  })
}

Discount()


SignIn.innerHTML = checkOut ?' Access in your Account' : 'Sign in at English Online';

function Get(){
  document.addEventListener('click', () =>{
    if(!check){
      SignIn.innerHTML = 'Access in your Account';

      checkOut = true  
    } else{
      SignIn.innerHTML = 'Sign in at English Online';

      checkOut = false

    }

    localStorage.setItem('SignItem', checkOut);
  })

}

Get()



function button1(){

  let HighlightRoffal = document.getElementById('HighlightRoffal')
  let commanRaffal = document.getElementById('commanRaffal'); 
  let Raffal = document.getElementById('Raffal');
  document.getElementById('Button1').addEventListener('click', () => { 
    document.getElementById('Migual').style.display = 'none';

    if (commanRaffal.style.display === 'none') {
      commanRaffal.style.display = 'block';
      HighlightRoffal.style.display = 'block';
      Raffal.style.display = 'inline'
  
    } else {
      commanRaffal.style.display = 'none';
      HighlightRoffal.style.display = 'none';
      Raffal.style.display = 'none'
    }

})
}

function button2() {

  let Migual = document.getElementById('Migual');
  let HighlightMigual = document.getElementById('HighlightMigual');
  let commanMigual = document.getElementById('commanMigual'); 
  document.getElementById('Button2').addEventListener('click', () => {
    document.getElementById('Raffal').style.display = 'none';

    if (Migual.style.display === 'none') {
      commanMigual.style.display = 'block'; 
      HighlightMigual.style.display = 'block'; 
      Migual.style.display = 'inline'; 
      

    } else {
      commanMigual.style.display = 'none'; 
      HighlightMigual.style.display = 'none';
      Migual.style.display = 'none'; 
    }
  });
}

button1()
button2();






function SignSecond() {
  
  let SignSecondd = document.getElementById('SignIn1');
  SignSecondd.classList.add('SignIn1');
  let checkOutSeond = localStorage.getItem('SignIn1') === 'true';
  SignSecondd.innerHTML = checkOutSeond ? 'Access in your Account' : 'Sign in at English Online';

  SignSecondd.addEventListener('click', () => {
    if (!checkOutSeond) {
      SignSecondd.innerHTML = 'Access in your Account';
      checkOutSeond = true;
    } else {
      SignSecondd.innerHTML = 'Sign in at English Online';
      checkOutSeond = false;
    }

    // Update the state in localStorage
    localStorage.setItem('SignIn1', checkOutSeond);
  });
}

// Initialize the function
SignSecond();
