function init() {
  handlebarsSetup()
  const formTemplate = Handlebars.compile(
    document.getElementById("recipe-form-template").innerHTML
  )
  document.getElementById("main").innerHTML = formTemplate({})
}

function createRecipe() {
  const recipeTemplate = Handlebars.compile(
    document.getElementById("recipe-template").innerHTML
  )
  document.getElementById("main").innerHTML = recipeTemplate(recipe())
}

function displayEditForm() {
  const name = document.getElementById("name").innerHTML
  const description = document.getElementById("description").innerHTML
  const ingredients = [...document.getElementsByClassName('ingredient')].map(i => i.innerHTML)

  const editRecipeForm = Handlebars.compile(
    document.getElementById("recipe-form-template").innerHTML
  )
  document.getElementById("main").innerHTML = editRecipeForm({
    name, description, ingredients
  })
}

function recipe() {
  const ingredientsIter = document.getElementsByName('ingredients').values()
  const ingredients = [...ingredientsIter].map(ingredient => ingredient.value)

  const name = document.getElementById('input-name').value
  const description = document.getElementById('input-description').value

  return {ingredients, name, description}
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li class="ingredient">' + ingredient + '</li>')
  })
  Handlebars.registerPartial(
    "recipeDetailsPartial",
    document.getElementById("recipe-details-partial").innerHTML
  )
  Handlebars.registerPartial(
    "recipeFormPartial",
    document.getElementById("recipe-form-partial").innerHTML
  )
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
