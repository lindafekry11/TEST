const PRODUCTS_DATA = [
    {
      id: "Glass_1",
      name: "Silver framed",
      price: "14500",
      description: "Glasses",
      imageURL:
        "https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Glasses",
    },
    {
      id: "Glass_2",
      name: "Cropped shot ",
      price: "12000",
      description: "Glasses",
      imageURL:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Glasses",
    },
    {
      id: "Glass_3",
      name: "levitating eye glasses",
      price: "9800",
      description: "Glasses",
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Glasses",
    },
    {
      id: "Glass_4",
      name: "Gold colerd",
      price: "8500",
      description: "Glasses",
      imageURL:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Glasses",
    },
  
    {
      id: "Pant_1",
      name: "Blue denim jeans ",
      price: "7800",
      description: "jeans",
      imageURL:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Pants",
    },
    {
      id: "Pant_2",
      name: "Oregen pants",
      price: "5666",
      description: " pants",
      imageURL:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Pants",
    },
    {
      id: "Pant_3",
      name: "acer",
      price: "4999",
      description: "acer",
      imageURL:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Pants",
    },
  
    {
      id: "Pant_4",
      name: "Pearson wears",
      price: "4999",
      description: "Pant",
      imageURL:
        "https://images.unsplash.com/photo-1551854838-212c50b4c184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      category: "Pants",
    },
    {
      id: "Accessory_1",
      name: "Gold and silver beaded ",
      price: "7800",
      description: "beaded",
      imageURL:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
    {
      id: "Accessory_2",
      name: "Blue stone",
      price: "5666",
      description: " stone",
      imageURL:
        "https://images.unsplash.com/photo-1613843351058-1dd06fda7c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
    {
      id: "Accessory_3",
      name: "clear glass fragrance",
      price: "4999",
      description: "fragrance",
      imageURL:
        "https://images.unsplash.com/photo-1551533257-bbd74dff1f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
  
    {
      id: "Accessory_4",
      name: "Red leather handbag",
      price: "4999",
      description: "handbag",
      imageURL:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
  ];
  

function renderCheckout() {
    let CART=[];
    CART = JSON.parse(localStorage.getItem('cartIitems'));
     
    if(CART != null && CART.length > 0){
        let indexrr=[];
      
      
        for(let i = 0; i < CART.length; i++){
          for(let j = 0; j < PRODUCTS_DATA.length; j++){
              if(CART[i].id == PRODUCTS_DATA[j].id) {
                indexrr.push(j);
                PRODUCTS_DATA[j].count = CART[i].count ;
                PRODUCTS_DATA[j].cartID = i ;
                
              }
      
      
          }
        }
      
      
        let rowContainer = document.getElementById('checkout-table-row');
        rowContainer.innerHTML = "";
        let total = 0;
        indexrr.forEach((item, index) => {
            total += (PRODUCTS_DATA[item].count * PRODUCTS_DATA[item].price);
            rowContainer.innerHTML += `
			<tr>
				<td class="t-row">${index + 1}</td>
				<td class="t-row">${PRODUCTS_DATA[item].name}</td>
				<td class="t-row">$ ${PRODUCTS_DATA[item].price}</td>
				<td class="t-row">${PRODUCTS_DATA[item].count}</td>
				<td class="t-row">$ ${ PRODUCTS_DATA[item].count * PRODUCTS_DATA[item].price}</td>
			</tr>
			`;
        });
        document.getElementById('total').innerHTML = total;
    } else {
        document.getElementById('confirmPurchase').style.display = 'none';
    }



}
function confirmPurchase() {
/*    let currUserId = sessionStorage.getItem('currUserId');
    let currentUserCartKey = 'cart_' + currUserId;
*/
    localStorage.removeItem('cartIitems');
    //    localStorage.setItem(currentUserCartKey, JSON.stringify([]));
    window.alert('Thank You for purchase.');
    window.location = '/index.html';
}
