const express = require("express")
const ingredient = require("./ingredient-model")

const router = express.Router()

// Get All Recipes By ingredient ID
router.get("/:id/recipes", async (req, res, next) => {
  
   try {  
    const recipes = await ingredient.getRecipesByIngredientID(req.params.id)
    res.json(recipes)
   } catch(err) {
      next(err)
   }

})

module.exports = router