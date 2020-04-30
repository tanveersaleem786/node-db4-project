const express = require("express")
const recipe = require("./recipe-model")

const router = express.Router()

// Get All Recipes
router.get("/", async (req, res, next) => {
  
   try {  
    const recipes = await recipe.getRecipes()
    res.json(recipes)
   } catch(err) {
      next(err)
   }

})

// Get All ingredients By Recipe ID
router.get("/:id/shoppingList", async (req, res, next) => {
   
   try {  
    const recipes = await recipe.getShoppingList(req.params.id)    
    res.json(recipes)
   } catch(err) {
      next(err)
   }

})

// Get All Recipe Steps By Recipe ID
router.get("/:id/instructions", async (req, res, next) => {
   
   try {  
    const recipes = await recipe.getInstructions(req.params.id)    
    res.json(recipes)
   } catch(err) {
      next(err)
   }

})





module.exports = router