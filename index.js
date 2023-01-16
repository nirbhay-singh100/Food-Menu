$.ajax({
  type: 'get',
  url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
  success: function(response){
    for(var i=0 ; i<response.meals.length ; i++){
      var mealName = response.meals[i].strMeal;
      var mealURL = response.meals[i].strMealThumb
      var mealId = response.meals[i].idMeal

      var card = `<div class="col-md-4 bg-light cards">
        <p> ${mealName}</p>
        <img src=${mealURL} class="rounded mx-auto d-block" alt="">
        <p> ${mealId} </p>
      </div>`

      $('#menu').append(card)
    }

  }
})
