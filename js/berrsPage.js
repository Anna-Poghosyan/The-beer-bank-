let productBlock = document.getElementById('product-block');
const urlDefaultPage = `https://api.punkapi.com/v2/beers?page=1&per_page=9`;

let itemBeers =  localStorage.getItem('favorites');
if (itemBeers) {
	itemBeers = JSON.parse(itemBeers)
}
getBeers(urlDefaultPage)
.then((data)=>{
	
	containerBlock(data)
   productBlock.innerHTML = divContainer;
   window.addEventListener('scroll', scrollSearch);

   document.querySelectorAll('.fav').forEach((el)=>{
   	el.addEventListener('click', localStorageClick)
   })
})








