//Absolutely unhinged relational logic with the help of ChatGPT
//I described most of the logic but needed help getting this working relationally across views/routes/etc

function updateUsageInRecipes(recipes, resources) {
    // Initialize or clear the usedInRecipes list to prevent duplication
    resources.forEach(resource => resource.usedInRecipes = []);
    recipes.forEach(recipe => recipe.usedInRecipes = []);

    recipes.forEach(recipe => {
        recipe.components.forEach(component => {
            // Normalize component name for comparison
            const componentName = component.name.trim().toLowerCase();

            // Check if the component is a resource
            const resource = resources.find(r => r.name.trim().toLowerCase() === componentName);
            if (resource) {
                if (!resource.usedInRecipes.includes(recipe.name)) {
                    resource.usedInRecipes.push(recipe.name);
                }
            }

            // Check if the component is another recipe
            const usedRecipe = recipes.find(r => r.name.trim().toLowerCase() === componentName);
            if (usedRecipe) {
                if (!usedRecipe.usedInRecipes.includes(recipe.name)) {
                    usedRecipe.usedInRecipes.push(recipe.name);
                }
            }
        });
    });
}


module.exports = { updateUsageInRecipes };
