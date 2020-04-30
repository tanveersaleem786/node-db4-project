
exports.seed = async function(knex) { 
  await knex("recipe_steps").truncate()
  await knex("recipes_ingredients").truncate()  
  await knex("ingredients").truncate()
  await knex("recipes").truncate()     
};
