let food = document.querySelector(".food");
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");

let recipe;

// Fetch data from API
const fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();
    recipe = data.meals;
    showData(recipe);
}
fetchData("indian");

// Search functionality
const searchData = async () => {
    let input = document.querySelector("#search");
    input.addEventListener("keydown", async (e) => {
        if(e.key === "Enter") {
            let inputVal = input.value;
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);
            const data = await api.json();
            recipe = data.meals;
            showData(recipe);
        }
    })
}
searchData();

// Show data with hoverable recipe link
let showData = (items) => {
    food.innerHTML = items.map((meal) => `
        <div class="meal-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img"/>
            <a href="https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}" 
               target="_blank" class="recipe-link">View Recipe</a>
            <h5>${meal.strMeal}</h5>
        </div>
    `).join('');
}

// Cuisine button events
indian.addEventListener("click", () => fetchData("indian"));
canadian.addEventListener("click", () => fetchData("canadian"));
american.addEventListener("click", () => fetchData("american"));
thai.addEventListener("click", () => fetchData("thai"));
british.addEventListener("click", () => fetchData("british"));
russian.addEventListener("click", () => fetchData("russian"));
