const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  const incrementCounter = () => {
    const target_number = +num.getAttribute("data-target-number");
    const current_number = parseInt(num.innerText);

    if (current_number < target_number) {
      num.innerText = Math.floor(current_number + target_number / 100);
      setTimeout(incrementCounter, 30);
    } else {
      num.innerText = target_number.toLocaleString();
    }
  };
  incrementCounter();
});


var navIcon = document.getElementById("navIcon");
var leftmenu =document.getElementById("leftMenu");
var body = document.getElementsByTagName("BODY")[0];

document.onclick= function(e){
    if(e.target.id !=='leftmenu' && e.target.id !=='navIcon'){
        navIcon.classList.remove('active');
        leftmenu.classList.remove('fitMenu');
    }
}

navIcon.addEventListener('click' , function(){
    navIcon.classList.toggle('active');
    leftmenu.classList.toggle('fitMenu');
    body.classList.toggle('overflow');
     
 });