const recipes = [
    {
        "id": 1,
        "name": "Battery",
        "description": "Mobile power source.",
        "resources": [
            { "name": "Acid Mushroom", "amount": 2 },
            { "name": "Copper Ore", "amount": 1 }
        ],
        "category": "Electronics",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    {
        "id": 2,
        "name": "Copper Wire",
        "description": "Copper atoms fabricated into basic electrical wiring.",
        "resources": [
            { "name": "Copper Ore", "amount": 2 },
        ],
        "catergory": "Electronics",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    {
        "id": 3,
        "name": "Power Cell",
        "description": "High-capacity mobile power source.",
        "resources": [
            { "name": "Battery", "amount": 2 },
            { "name": "Silicone Rubber", "amount": 1 },
        ],
        "catergory": "Electronics",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    {
        "id": 4,
        "name": "Silicone Rubber",
        "description": "Synthetic, silicone-based rubber.",
        "resources": [
            { "name": "Creepvine Seed Cluster", "amount": 1 },
        ],
        "catergory": "Basic Materials",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    {
        "id": 5,
        "name": "Titanium",
        "description": "Ti. Basic building material.",
        "resources": [
            { "name": "Metal Salvage", "amount": 1 },
        ],
        "catergory": "Basic Materials",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    {
        "id": 6,
        "name": "Titanium Ingot",
        "description": "Ti. Condensed titanium bar.",
        "resources": [
            { "name": "Titannium", "amount": 10 },
        ],
        "catergory": "Basic Materials",
        "usedIn": ["Seamoth", "Habitat Builder"]
    },
    //Add more later!
  ];


module.exports = recipes;

//Makes the recipes array available to be imported into other parts of the app