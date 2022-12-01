let forw = document.getElementById('forw');
let back = document.getElementById('back');


let pereb = document.getElementsByClassName('pereb');

let iter = 0;

// alert(pereb.length)

forw.onclick = next;



function next() {
	iter++;
	// alert(iter);
	// alert(pereb.length);
	if (iter == pereb.length) {
		pereb[iter-1].style.display = 'none';
		iter=-1;
		next();
	}

	if (iter>0) {
		pereb[iter-1].style.display = 'none';
	}
	
	pereb[iter].style.display = 'block';

}




back.onclick = backs;

function backs() {
	iter--;

	if (iter< 0) {
		pereb[0].style.display = 'none';
		iter = pereb.length-1;
		// iter = pereb.length-1;
		// pereb[0].style.display = 'none';

		// return;
	}

	pereb[iter].style.display = 'block';
	pereb[iter+1].style.display = 'none';

	// alert(iter);
}









// let cei = document.getElementById('link');

// let darg = document.getElementById('link2');

// let mida = document.getElementById('link3');



// console.log(darg.innerHTML)


// window.addEventListener('scroll', function(){
	
// 	if (window.scrollY > 0) {


		
// 			setTimeout(function(){
// 				cei.click(); console.log(window.scrollY)
// 			},1)

// 			setTimeout(function(){
// 				cei.removeAttribute("href");
// 			},200)


// 			if (window.scrollY < 600.2000122070312) {
// 				setTimeout(function(){
// 					mida.click(); 
// 				},1)
// 			}
					
// 		}

// 	if (window.scrollY > 900) {
// 		setTimeout(function(){
// 				darg.click();
// 			},1)

// 		setTimeout(function(){
// 				darg.removeAttribute("href");
// 			},200)
// 	}	
	
// })



    
   
  