const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients as ri")
           .join("recipes as r", "r.id", "ri.recipe_id")
           .join("ingredients as i", "i.id", "ri.ingredient_id")
           .join("units as u", "u.id", "ri.unit_id")
           .where("ri.recipe_id", recipe_id)
           .select("i.name as ingredient","u.name as unit","ri.quantity")

}


function getInstructions(recipe_id) {
    return db("recipes as r")
           .join("recipe_steps as rs", "r.id", "rs.recipe_id")        
           .where("r.id", recipe_id)
           .select("step_order as step","step_detail as instructions")
           .orderBy("step_order","asc")
}

module.exports = {
   getRecipes, 
   getShoppingList,
   getInstructions
}