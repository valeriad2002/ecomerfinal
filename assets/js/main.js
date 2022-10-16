const items = [
	{
	  id: 1,
	  name: 'Hoodies',
	  price: 14.00,
	  image: 'assets/images/featured1.png',
	  category: 'hoodies',
	  quantity: 10
	},
	{
	  id: 2,
	  name: 'Shirts',
	  price: 24.00,
	  image: 'assets/images/featured2.png',
	  category: 'shirts',
	  quantity: 15
	},
	{
	  id: 3,
	  name: 'Sweatshirts',
	  price: 24.00,
	  image: 'assets/images/featured3.png',
	  category: 'shirts',
	  quantity: 20
	}
  ]
  let carrito = {}
/*=================== DOM =================== */
  document.addEventListener("DOMContentLoaded", () => {
	loadComponent();
	viewProductsBanner()
	viewProducts();
	
  });

/*================= LOADER =================== */
const loadComponent = () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
	loader.classList.add("hide");
  }, 500);
};

/*================== THEME DARK ================ */
const themeDark = document.getElementById("id--theme__dark");
console.log(themeDark);

themeDark.addEventListener("click", () => {
  document.body.classList.toggle("theme__dark");
  if (themeDark.classList.contains("bx-moon")) {
	//evaluar si existe la clase bx-moon
	themeDark.classList.replace("bx-moon", "bx-sun");
  } else {
	themeDark.classList.replace("bx-sun", "bx-moon");
  }
});


/*==============  ABRIR Y CERRA EL NAVBARR -- ABRIR Y CERRAR CARRITO DE COMPRAS ============*/
const openNav = document.getElementById("navOpen");
openNav.addEventListener("click", () => {
	console.log("si da clic en el openNAv");
	const nav = document.getElementById("id_nav")
	nav.classList.add("viewNav")
});

const closeNav = document.getElementById("id_navclose");
closeNav.addEventListener("click", () => {
	console.log("si da clic en el closeNav");
	const nav = document.getElementById("id_nav")
	nav.classList.remove("viewNav")
});

/*=================================*/
const cartShop = document.getElementById("id_btnShop")
cartShop.addEventListener("click", () => {
  const viewAside = document.getElementById("id_asidePage-mainCart")
  viewAside.classList.toggle("viewAside")
})
const closeCartShop = document.getElementById("id_asideClose")
closeCartShop.addEventListener("click", () => {
  const closeViewAside = document.getElementById("id_asidePage-mainCart")
  closeViewAside.classList.toggle("viewAside")
})
/*======================  PRODUCTOS EN EL MAIN  ======================= */
const viewProducts = () => {
    const productContainer = document.getElementById("viewProduct")

    let fragment = ``

	items.forEach( producto => {
        fragment += `
		<div class="mainPage--viewProduct__shop items">
			<div class="shop--productContImg" >
            	<img src="${producto.image}" class="shop--productImg" alt="">
			</div>
			<div class="shop--productNameCont" data-id="${producto.id}" >
				<h3 class="shop--productName">${producto.name}</h3>
				<h3> $ <span class="shop--productPrice"> ${producto.price}</span></h3>
				<p>Items <span class="shop--productQuantity"> ${producto.quantity} </span> </p>
				<button class="btn-add boton bt" data-id="${producto.id}">+</i></button>
			</div>
        </div>
		`

    })
    productContainer.innerHTML = fragment

}
/*========================*/
/*
const productContBanner = document.getElementById("id_banner")

productContBanner.addEventListener('click', e => {
	const botonBanner = document.getElementById('banner--btn_next')
	console.log(botonBanner);
	if (botonBanner) {
		console.log('le di click al boton');
	}
	console.log('le di click al secction banner');

	/*
	e.target.dataset.next
	productContBanner.innerHTML = ``
    let fragment = ``
	productContBanner.innerHTML = fragment
	
})
*/
const viewProductsBanner = () => {
	let fragment = `
			<div id="idImgItem" class="headPage--banner__contImg">
				<div>
					<img
						src="${items[0].image}"
						class="img--prod"
						alt="imagen de blusa amarilla" />
				</div>
			</div>
			<div data-next="${items[0].id}" id="banner--btn_next" class="banner--btn_next bx bxs-right-arrow"></div>
			<div class="headPage--banner__inf">
				<h2 class="headPage--banner__inf__title">
					NEW PRENDA  ${items[0].name} COLLECTION 2022
				</h2>
				<p>
					DESCRIPCION DEL PRODUCTO 
				</p>
				<h3 class="headPage--banner__inf__price">$${items[0].price}</h3>
				<div class="headPage--banner__inf__btnShop">
					<div class="headPage--banner__inf__btnShop__btnDis">
						<button date-id="${items[0].id}">
							<h3>Discover</h3>
						</button>
					</div>
					<div class="headPage--banner__inf__btnShop__btnAdd">
						<button date-id="${items[0].id}">
							<h3 class="">Add to car</h3>
						</button>
					</div>
				</div>
			</div>
		`
	const productContBanner = document.getElementById("id_banner")
	const botonBanner = document.getElementById('banner--btn_next')
	console.log(botonBanner);
	if (botonBanner) {
		console.log('si esta el boton');
		productContBanner.addEventListener('click', e => {
			console.log(botonBanner);
			if (botonBanner) {
				console.log('le di click al boton');
			}
			console.log('le di click al secction banner')			
		})
		
	}else{
		console.log('no esta el boton');
		productContBanner.innerHTML = fragment
	}
}

/*=============== CArgando los productos en el carrito ================= */

const itemsProduct = document.getElementById('viewProduct')
console.log(itemsProduct);

itemsProduct.addEventListener( 'click', e => {
	
	if (e.target.classList.contains('boton')) {
		setCarrito(e.target.parentElement)
	}
})
const setCarrito = obj => {
	const product = {
		id: obj.dataset.id,
		nombre: obj.querySelector('h3').textContent,
		precio: obj.querySelector('span').textContent,
		cantidad: 1
	}
	if(carrito.hasOwnProperty(product.id)){
		//console.log('la cantidad del carrito');
		if (carrito[product.id].cantidad === items[product.id-1].quantity) {
			alert('NO PUEDE INGRESAR MAS PRODUCTOS')
			return
		}else{
			product.cantidad = carrito[product.id].cantidad+1
			product.precio =carrito[product.id].precio++
		}
	}
	carrito[product.id]= {...product}
	aggCarShop()
}
/*============== AGREGANDO PRODUCTOS EN EL ASIDE ==============*/
const carShop = document.getElementById("carShop")

carShop.addEventListener('click', e => {
	btnPlus(e)
})
const aggCarShop = () => {
	
	carShop.innerHTML=``
	let fragment = ``
	Object.values(carrito).forEach(product => {
		//console.log(carrito);
		//console.log(product);
		if (product.cantidad === items.quantity) {
			console.log('la cantidad de este producto es igual a la de arreglo');
		}
		const converPrice = parseInt(product.precio)
		//console.log(typeof converPrice);
		const total = converPrice * product.cantidad
		fragment += `
			<div class="asidePage__carShop" >
				<h3 class="asidePage__carShopName">${product.nombre}</h3>
				<h5>$<span class="asidePage__carShopPrice">${product.precio}</span></h5>
				<p>Items <span class="asidePage__carShopQuantity"> ${product.cantidad} </span> </p>
				<button class="btn-rest_shop bt" data-id="${product.id}">-</i></button>
				<button class="btn-add_shop bt" data-id="${product.id}">+</i></button>
				<h5 class="asidePage__carShopTotal">SubTotal:$ <span> ${total} </span> </h5>
			</div>
		`
	})
	carShop.innerHTML = fragment
	totalCartShop()
}

/*========================== LIMPIAMOS EL CARRITO ======================== */
const trashCarShop = document.getElementById('asidePage__totalShop')
const trashFuntion = () => {
	trashCarShop.innerHTML  = `<div><img class="asidePage-mainCart__imgCartEmpty" src="./assets/images/empty-cart.png" alt=""></div>
	<p class="asidePage-mainCart__titleCartEmpty">EL Carrito esta vacio</p>
	<i class='bx bx-cart bx-tada' ></i> `
}
const totalCartShop = () => {
	const totalShop = document.getElementById("asidePage__totalShop")
	const contNavBar = document.getElementById('id_circuloPeNum')
	const shopCantidadItem = Object.values(carrito).reduce( ( acc , {cantidad} ) => acc + cantidad,0 )
	contNavBar.innerText = shopCantidadItem
	//console.log(shopCantidadItem);
	const shopTotalCompra = Object.values(carrito).reduce( ( acc , {cantidad,precio} ) => acc + cantidad * precio,0 )
	if(Object.keys(carrito).length !== 0){
		totalShop.innerHTML = ` 
		<div class="asidePage__totalShopCont">
			<h3 class="totalShopCont--purchase">TOTAL: $ <span>${shopTotalCompra}</span> </h3>
			<h3 class="totalShopCont--items">TOTAL DE ITEMS: <span>${shopCantidadItem} </span> </h3>
			<button class="btn-check bt">Checkout</button> 
			<i class='bx bx-trash' id="trashAll"></i>
		</div> `
	}
	try{
		const btnTrashAll = document.getElementById("trashAll")
		btnTrashAll.addEventListener( "click", () => {
		carrito = {}
		aggCarShop()
		trashFuntion()
		})
	}catch(errorTrash){
		console.log('error: al momento de vaciar el carrito ');
	}
	
}	

/*=========  ANADIENDO FUNCION A LOS BOTONES DE LOS CART SHOP ========== */
const btnPlus = e => {
	if (e.target.classList.contains('btn-add_shop')) {
		const productAdd = carrito[e.target.dataset.id]
		console.log(carrito[e.target.dataset.id].cantidad);
		console.log(items[e.target.dataset.id-1].quantity);
		if (carrito[e.target.dataset.id].cantidad === items[e.target.dataset.id-1].quantity) {
			alert('NO PUEDE INGRESAR MAS PRODUCTOS')
			return
		}else{
			
			productAdd.cantidad = carrito[e.target.dataset.id].cantidad + 1
			//carrito[e.target.dataset.id] = {...productAdd}
		}
		carrito[e.target.dataset.id] = {...productAdd}
	} 
	if(e.target.classList.contains('btn-rest_shop') ){
		const productRest = carrito[e.target.dataset.id]
		productRest.cantidad = carrito[e.target.dataset.id].cantidad - 1
		carrito[e.target.dataset.id] = {...productRest}
		if(productRest.cantidad === 0){
			delete carrito[e.target.dataset.id]
			//console.log('el carrito es');
			if (Object.keys(carrito).length === 0) {
				alert("el carrito de compras esta vacio");
				trashFuntion()				
			}
			
		}
	}
	aggCarShop()
}
/*================================================================== */


/*
items.forEach( producto => {
        fragment = `
		<div id="idImgItem" class="headPage--banner__contImg">
			<div>
				<img
					src="${producto.image}"
					class="img--prod"
					alt="imagen de blusa amarilla" />
			</div>
		</div>
		<div class="banner--btn_next">
			<i class='bx bxs-right-arrow'></i>
		</div>
		<div class="headPage--banner__inf">
			<h2 class="headPage--banner__inf__title">
				NEW PRENDA  ${producto.name} COLLECTION 2022
			</h2>
			<p>
				DESCRIPCION DEL PRODUCTO 
			</p>
			<h3 class="headPage--banner__inf__price">$${producto.price}</h3>
			<div class="headPage--banner__inf__btnShop">
				<div class="headPage--banner__inf__btnShop__btnDis">
					<button date-id="${producto.id}">
						<h3>Discover</h3>
					</button>
				</div>
				<div class="headPage--banner__inf__btnShop__btnAdd">
					<button date-id="${producto.id}">
						<h3 class="">Add to car</h3>
					</button>
				</div>
			</div>
		</div>
		`	
    })



	==============

	const viewProductsBanner = () => {
    productContBanner.innerHTML = `
		<div id="idImgItem" class="headPage--banner__contImg">
			<div>
				<img
					src="${items[0].image}"
					class="img--prod"
					alt="imagen de blusa amarilla" />
			</div>
		</div>
		<div data-next="${items[0].id}" id="banner--btn_next" class="banner--btn_next bx bxs-right-arrow"></div>
		<div class="headPage--banner__inf">
			<h2 class="headPage--banner__inf__title">
				NEW PRENDA  ${items[0].name} COLLECTION 2022
			</h2>
			<p>
				DESCRIPCION DEL PRODUCTO 
			</p>
			<h3 class="headPage--banner__inf__price">$${items[0].price}</h3>
			<div class="headPage--banner__inf__btnShop">
				<div class="headPage--banner__inf__btnShop__btnDis">
					<button date-id="${items[0].id}">
						<h3>Discover</h3>
					</button>
				</div>
				<div class="headPage--banner__inf__btnShop__btnAdd">
					<button date-id="${items[0].id}">
						<h3 class="">Add to car</h3>
					</button>
				</div>
			</div>
		</div>
	`
	
}
*/