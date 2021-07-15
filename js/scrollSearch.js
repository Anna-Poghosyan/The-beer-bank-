let pageCount = 2;
const scrollSearch = () => {

    const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;

    if (scrollable === scrolled) {

        const urlNextpage = `https://api.punkapi.com/v2/beers?page=${pageCount}&per_page=9`;

        getBeers(urlNextpage)
            .then((data) => {
                containerBlock(data)
                productBlock.innerHTML += divContainer;
                document.querySelectorAll('.fav').forEach((el)=>{
   	el.addEventListener('click', localStorageClick);
   })
                pageCount++;
            })
    }
       if(divContainer){
             	divContainer = '';
             }
}