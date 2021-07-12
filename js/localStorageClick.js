

const localStorageClick = function(){
	let id = +this.getAttribute('data-id')
	console.log(this.querySelector('path').getAttribute('stroke'))
	if (this.querySelector('path').style.fill == 'orange') {
		this.querySelector('path').style.fill = ''
		this.querySelector('path').setAttribute('stroke', '#666662')
	}
	else{
		this.querySelector('path').style.fill = 'orange'
		this.querySelector('path').setAttribute('stroke', 'orange')
	}
	let storageArray = localStorage.getItem('favorites');
	if (storageArray) {
		storageArray = JSON.parse(storageArray)
	}
	else{
		storageArray = []
	}

	
	if(storageArray.includes(id)){
		
		storageArray.splice(storageArray.indexOf(id), 1)

	} else{
		storageArray.push(id)
	}

	storageArray = JSON.stringify(storageArray)
	localStorage.setItem('favorites',storageArray);
	
}


	

