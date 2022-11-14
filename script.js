
let big = document.getElementsByName('bigpic');

let links = ['Фото/food1.jpg','Фото/food2.jpeg','Фото/food3.jpeg','Фото/food4.jpg','Фото/food5.jpg']

let iter = 0;


big[2].onclick = function() {


		iter++;

		if (iter == links.length) {
			iter = 0
		}

		big[0].src = links[iter];
}


big[1].onclick = function() {


		if (iter == 0) {
			iter = links.length;
		}

		big[0].src = links[iter-1];
		iter--;
		

}

