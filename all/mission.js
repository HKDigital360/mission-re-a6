


// const loadAllProducts= ()=>{
// const url= ("https://fakestoreapi.com/products")
// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data))
// };

// const displayAllProduct=(products)=>{
// console.log(products);
// }

const loadAll=()=>{
const url = ("https://fakestoreapi.com/products");
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data))
}

const displayAllPro=(products)=>{

}

// const loadCategory=(event)=>{
//    event.preventDefault();
// const url=("https://fakestoreapi.com/products/categories")
// fetch(url)
// .then(res=>res.json())
// .then(cate=>{
//     const addAllCategory=["All",...cate];
//     displayCategory(addAllCategory);
// });
// };

// const displayCategory= (categories)=>{
//     // console.log(categories);
//     const mainContain = document.getElementById("main-container");
// mainContain.innerHTML=" ";



// mainContain.classList.add("flex", "justify-between", "flex-wrap", "gap-2", "px-70", "py-8");
// for (let category of categories){
//     // console.log(category)
//     const btnCategory=document.createElement("div");

//     btnCategory.innerHTML=`
 
//     <button onclick="loadAll()" class="rounded-3xl btn ">${category}</button>
    
//     `;
//     mainContain.append(btnCategory)
// }
// }


// loadAllProducts()