let divContainer = '';
function containerBlock(data){

                 for (let i = 0; i < data.length; i++) {
                    divContainer += `
		<div>
			<div class="fav" data-id = "${data[i].id}">
				<svg width="50" height="50" >
				<g>
				<path style="fill: ${(itemBeers.includes(data[i].id))? 'orange':''}"  stroke="${(itemBeers.includes(data[i].id))? 'orange':'#666662'}" style = 'color:red' id="svg_2" d="m12.64006,21.31051l8.8456,0l2.73336,-8.40328l2.73336,8.40328l8.8456,0l-7.15623,5.19345l2.7335,8.40328l-7.15623,-5.1936l-7.15623,5.1936l2.7335,-8.40328l-7.15623,-5.19345l-0.00001,0z" fill="#ffffff"/> 
				</g>
				</svg>
			</div>
			<div onclick="getSingleBeer(${data[i].id})">
				<img src=${data[i].image_url || './image/beer.jpg'} class="newsImage"/>
				<h5>${data[i].name}</h5>
				<span>${data[i].tagline}</span>
			</div>
		</div>` 

                }

                
}