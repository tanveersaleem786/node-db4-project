
exports.up = async function(knex) {

    await knex.schema.createTable('recipes', (table) => {
         table.increments("id"),
         table.text("name").notNull(),
         table.text("description")
    })

    await knex.schema.createTable("ingredients", (table) => {
         table.increments("id"),
         table.text("name").notNull().unique()
    })

    await knex.schema.createTable("units", (table) => {
        table.increments("id"),
        table.text("name").notNull().unique()
   })

    await knex.schema.createTable("recipes_ingredients", (table) => {
         table.integer("recipe_id")
              .references("id")
              .inTable("recipes")
              .onDelete("CASCADE")
			  .onUpdate('CASCADE'),
         table.integer("ingredient_id")
              .references("id")
              .inTable("ingredients")
              .onDelete("CASCADE")
			  .onUpdate('CASCADE'),
         table.float("quantity").notNull(),
         table.integer("unit_id")
              .references("id")
              .inTable("units")
              .onDelete("CASCADE")
			  .onUpdate('CASCADE'),
         table.primary(["recipe_id","ingredient_id"])
    }) 

    await knex.schema.createTable("recipe_steps", (table) => {
         table.increments("id"),
         table.integer("recipe_id")
              .references("id")
              .inTable("recipes")
              .onDelete("CASCADE")
			  .onUpdate('CASCADE'),
         table.text("step_detail").notNull()
         table.text("step_order").default(null)
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_steps")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("units")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
  
};
