
exports.seed = async function(knex) {
   await knex("recipe_steps").insert([
      {recipe_id: 1, step_detail:"Preheated Oven 350F", step_order:1},
      {recipe_id: 1, step_detail:"Put Chicken in the Oven", step_order:2},
     

      {recipe_id: 2, step_detail:"Preheated Oven 350F", step_order:1},
      {recipe_id: 2, step_detail:"Put the Fist in the Oven", step_order:2},
      
      
   ])
};
