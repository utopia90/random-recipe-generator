const searchBar = document.getElementById('search-bar')
const startBtn = document.getElementById('start-btn')
const mainTitle = document.getElementById('title')
const recipesDiv = document.getElementById('recipe-container');
const titleRecipesDiv = document.getElementById('title-container');
const bodyDoc = document.querySelector("body");

document.addEventListener('DOMContentLoaded',function(){
    eventListeners();

    function eventListeners(){
        startBtn.addEventListener('click',() => {
            startApp();
        })
    }
})


function startApp(){
mainTitle.classList.add('hide');
startBtn.classList.add('hide');
recipesDiv.classList.remove('hide');
searchBar.classList.add('hide');
titleRecipesDiv.classList.remove('hide');
bodyDoc.classList.remove('background');

 
showRecipes();
}
function showRecipes(){
    

    let userInput=searchBar.value;
    console.log(userInput);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`, {
    }).then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not reach the API: " + response.statusText);
        }
    }).then(function(data) {
        let mealTitle = document.createElement('div');
        let mealContent = document.createElement('div');
        
        mealTitle.innerHTML= `<h1 id='title-meal'>${data.meals[0].strMeal}</h1>`;

        mealContent.innerHTML = `
        <div id='grid-display'><img class="recipe-img" src='${data.meals[0].strMealThumb}'/><p class="instructions"> ${data.meals[0].strInstructions}</p></div>`

        recipesDiv.appendChild(mealContent);
        titleRecipesDiv.appendChild(mealTitle);
    });
}
