
Subnautica Resource Tracker:

	Overview:
	
		Resource Catalog:
			A searchable database of all resources available in the game.
			Information about where to find these resources or how to produce them.
			What recipes they are used in (if resource in recipe, show recipe)
		
		Recipe Guide:
			List of crafting recipes.
			Required resources and where to find them.
		
		User Inventory System:
			Users can track what resources they currently have.
			Plan what resources they need for specific items or constructions.


	 Organization of Data:
		
		Data Relationships:
			Resources and Recipes: Many-to-many (a resource can be part of many recipes, and a recipe can require multiple resources).
			
			Users and Resources: One-to-many (a user can have many resources in their inventory, but a resource doesn't belong to a specific user).
		
		
		Models:
			Resource Model:
				This model stores details about each resource, including where it can be found in the game and which recipes use this resource.
				Data Fields: Name, Description, Location, Used_in (array of recipe IDs which use the resource)
				
			Recipe Model:
				Stores recipes, with each recipe listing the resources and quantities needed to craft an item.
				Data Fields: Name, Description, Resources required to craft (array of resource IDs and their required amounts)
			
			User Model:
				Manages user data, including authentication and their personal inventory of resources.
				Data Fields: Username, Email, Password (hashed), Inventory (array of resource IDs and quantities)
		
	Routes
		
		Resource Routes:
			§ GET /resources: Fetch all resources.
			§ GET /resources/:id: Get a specific resource by ID, including details like where to find it and which recipes it's used in.
			§ POST /resources (admin only): Add a new resource (if I decide to allow dynamic updating).
			§ PUT /resources/:id (admin only): Update a specific resource.
			§ DELETE /resources/:id (admin only): Delete a specific resource.
		
		Recipe Routes:
			§ GET /recipes: Fetch all recipes.
			§ GET /recipes/:id: Get details of a specific recipe, including all resources needed.
			§ POST /recipes (admin only): Add a new recipe.
			§ PUT /recipes/:id (admin only): Update a recipe.
			§ DELETE /recipes/:id (admin only): Remove a recipe.
		
		User Inventory Routes:
			§ GET /users/:userId/inventory: Get the inventory of a specific user.
			§ POST /users/:userId/inventory: Add or update items in a user's inventory.
			§ DELETE /users/:userId/inventory/:resourceId: Remove an item from a user's inventory.
		
		Authentication Routes:
			§ POST /users/register: Register a new user.
			§ POST /users/login: Log in a user.
			§ POST /users/logout: Log out a user.

