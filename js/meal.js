// const loadMeal = () => {
//     fetch('')

//         .then(res => res.json())
//         .then(data => console.log(data.meals[0]))
// }
// loadMeal();

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
    // console.log(searchValue);
}

const displayFood = (meals) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    for (const meal of meals) {
        const mealItem = document.createElement('div');
        mealItem.classList.add('col')
        mealItem.innerHTML = `
            <div onclick="loadFoodDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(mealItem);

        // console.log(meal);
    }
}

const loadFoodDetails = (mealInput) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInput}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodDetails(data.meals[0]))
}

const displayFoodDetails = (mealItems) => {
    console.log(mealItems);
    const foodDetail = document.getElementById('foodDetailsResult');
    foodDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
        <div class="col-md-4">
        <img src="${mealItems.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${mealItems.strMeal}</h5>
            <h6>Catergory: ${mealItems.strCategory}</h6>
            <p>${mealItems.strInstructions.slice(0, 250)}</p>
            <button onclick="recipiVideo()" class="btn btn-primary">Tutorial</button>
        </div>
        </div>
        `;
    foodDetail.appendChild(div);
}

const recipiVideo = () => {
    window.location = 'https://www.youtube.com';
}