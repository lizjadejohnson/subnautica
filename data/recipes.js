const recipes = [
    {
        "id": 1,
        "name": "Battery",
        "description": "Mobile power source.",
        "components": [
            { "name": "Acid Mushroom", "amount": 2 },
            { "name": "Copper Ore", "amount": 1 }
        ],
        "category": "Electronics",
        "usedInRecipes": [],
    },
    {
        "id": 2,
        "name": "Copper Wire",
        "description": "Copper atoms fabricated into basic electrical wiring.",
        "components": [
            { "name": "Copper Ore", "amount": 2 },
        ],
        "category": "Electronics",
        "usedInRecipes": [],
    },
    {
        "id": 3,
        "name": "Power Cell",
        "description": "High-capacity mobile power source.",
        "components": [
            { "name": "Battery", "amount": 2 },
            { "name": "Silicone Rubber", "amount": 1 },
        ],
        "category": "Electronics",
        "usedInRecipes": [],
    },
    {
        "id": 4,
        "name": "Silicone Rubber",
        "description": "Synthetic, silicone-based rubber.",
        "components": [
            { "name": "Creepvine Seed Cluster", "amount": 1 },
        ],
        "category": "Basic Materials",
        "usedInRecipes": [],
    },
    {
        "id": 5,
        "name": "Titanium",
        "description": "Ti. Basic building material.",
        "components": [
            { "name": "Metal Salvage", "amount": 1 },
        ],
        "category": "Basic Materials",
        "usedInRecipes": [],
    },
    {
        "id": 6,
        "name": "Titanium Ingot",
        "description": "Ti. Condensed titanium bar.",
        "components": [
            { "name": "Titanium", "amount": 10 },
        ],
        "category": "Basic Materials",
        "usedInRecipes": [],
    },
    //Add more later!
  ];


module.exports = recipes;

//Makes the recipes array available to be imported into other parts of the app