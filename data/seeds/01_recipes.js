
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "Fried Chicken", description:"Awsome Tast"},
    {name: "Fried Fish ", description:"Lovely Tast"}
  ])
};
