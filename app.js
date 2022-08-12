// Ползунок
function valueInpTypeRange() {
 var rng = document.getElementById('inp_type_range');
 var p = document.getElementById('inp_type_range_valuy_p');
 p.innerHTML = rng.value + ' %';
}





//Навешиваем событие
var a = document.getElementById('inp_type_range');
a.addEventListener('input', valueInpTypeRange);



// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}




function addClassOpen(e){
	if (e.classList.value == '') {
	  e.classList.value = 'open'

	} else {
	  e.classList.value = ''
	}
  }
  const icon4 = document.querySelector('#nav-icon4'),
  		bodyFixed = document.querySelector('body'),
		navMenu = document.querySelector('.nav__menu')

icon4.addEventListener('click', ()=>{
  addClassOpen(icon4)
  navMenu.classList.toggle('nav__menuOpen')
  bodyFixed.classList.toggle('body__menuOpen')

})

function show(value) {
	document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")

  dropdown.addEventListener('click',()=>{
	dropdown.classList.toggle("active")
  }) 
