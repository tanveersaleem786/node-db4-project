const db = require("../data/config")

function getRecipesByIngredientID(ingredient_id) {
    return db("recipes_ingredients as ri")
           .join("ingredients as i", "i.id", "ri.ingredient_id")
           .join("recipes as r", "r.id", "ri.recipe_id")
           .where("i.id", ingredient_id)
           .select("r.name as recipe_name","r.description")
}

module.exports = {
    getRecipesByIngredientID
    
}