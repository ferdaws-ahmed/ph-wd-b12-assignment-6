


// load categories ----------->

const loadCategories = async() => {
    try{
        const res = await fetch("https://openapi.programming-hero.com/api/categories");

    const data = await res.json();
    displayCategory(data.categories);
    }
    catch (error){
        console.log(error)
    }
}


const displayCategory = (category) => {
    
    const categoryDiv = document.getElementById('category-section');
    
    category.forEach((cat) => {
       categoryDiv.innerHTML  += `
       <li class="list-none text-xl py-2 px-4 mt-4 rounded-lg cursor-pointer hover:transition hover:bg-green-400">${cat.category_name}</li>
       `

    })

    categoryDiv.addEventListener('click', (e)=>{
        const allLi = document.querySelectorAll('li');
        allLi.forEach((li)=>{
            li.classList.remove('bg-green-500')
        })
        if(e.target.localName === 'li'){
            e.target.classList.add('bg-green-500')
        }
    })
}





loadCategories()



// load all trees 

const loadAllPlants = async () =>{
    try{
        const res = await fetch("https://openapi.programming-hero.com/api/plants");
        const data = await res.json();
        displayAllPlants(data.plants)
        
    }
    catch(error){
        console.log(error);
    }
}

const displayAllPlants = (plants) =>{
    const cardTrees = document.getElementById('card-tree-section');

    plants.forEach((plant) => {
        console.log(plant)
        cardTrees.innerHTML += `
          <div class= "bg-white p-3 rounded-lg w-[265px] hover:shadow-2xl ">
                <div class="w-[243px] h-[185px]">
                    <img class="w-full h-full object-cover rounded-md" src="${plant.image}">
                </div>
                  <h1 class="mt-3 text-xl font-bold">${plant.name}</h1>
                  <p class="my-3 h-16 text-xs">${plant.description}</p>
                  <div class="flex justify-between  mb-3 ">
                    <h2 class="bg-green-200 px-2 rounded-full">${plant.category}</h2>
                    <h2 class="font-semibold mr-3"><span class=" text-xl font-bolder">৳</span>${plant.price}</h2>
                  </div>
                  <button class="bg-green-700 w-full text-white rounded-3xl py-1 cursor-pointer active:bg-green-400 active:transition">Add to Cart</button>
               </div>
        `
    })
}





loadAllPlants()