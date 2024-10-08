// Store item and Prices
const store = [
    { prices: 138.95, description: 'Alfonso 1 Light Brandy (500mL)'},
    { prices: 233.95, description: 'Alfonso 1 Light Brandy (700mL)'},
    { prices: 273.35, description: 'Alfonso 1 Light Brandy (1L)'},
    { prices: 54.50, description: 'Argentina Corned Beef (260g)'},
    { prices: 24.55, description: 'Argentina Meatloaf (170g)'},
    { prices: 33.15, description: 'Argentina Meatloaf (250g)'},
    { prices: 49.45, description: 'Argentina Vienna Sausage (260g)'},
    { prices: 59.00, description: 'Bingo Double Choco Singles (28g)'},
    { prices: 12.52, description: 'Breeze ActivBleach Powder Detergent (70g)'},
    { prices: 12.52, description: 'Breeze Rose Gold Perfume Powder Detergent (66g)'},
    { prices: 106.60, description: 'Camel Yellow (20 sticks)'},
    { prices: 51.55, description: 'CDO Karne Norte (260g)'},
    { prices: 20.50, description: 'CDO Karne Norte (100g)'},
    { prices: 28.65, description: 'CDO Karne Norte (150g)'},
    { prices: 35.50, description: 'Century Tuna Flakes Hot & Spicy (155g)'},
    { prices: 35.15, description: 'Century Tuna Flakes in Oil (155g)'},
    { prices: 78.20, description: 'Cerelac Rice & Soya (20g)'},
    { prices: 106.60, description: 'Chesterfield Menthol 100s (20 sticks)'},
    { prices: 106.60, description: 'Chesterfield Original (20 sticks)'},
    { prices: 3.79, description: 'Chupa Chups Milky Caramel Lollipop'},
    { prices: 3.79, description: 'Chupa Chups Milky Strawberry Lollipop'},
    { prices: 6.11, description: 'Combi Triple Choco Sandwich'},
    { prices: 10.10, description: 'Datu Puti Soy Sauce Pouch (200mL)'},
    { prices: 5.90, description: 'Datu Puti White Vinegar (100mL)'},
    { prices: 7.80, description: 'Datu Puti White Vinegar (200mL)'},
    { prices: 15.70, description: 'Del Monte Pineapple Tdibits (115g)'},
    { prices: 128.4, description: 'Emperador Light (750mL)'},
    { prices: 14.16, description: 'Energen Champion Choco NBA Twin Pack Hanger (60g)'},
    { prices: 7.67, description: 'Energen Chocolate Cereal Drink (40g)'},
    { prices: 7.74, description: 'Energen Vanilla Cereal Drink (40g)'},
    { prices: 26.30, description: 'Fresca Tuna Afritada (175g)'},
    { prices: 26.30, description: 'Fresca Tuna Caldereta (175g)'},
    { prices: 35, description: 'Frutos Original Chewy Candy (50 pcs)'},
    { prices: 345.15, description: 'Fundador Light (1L)'},
    { prices: 42.1, description: 'Gatorade Blue Bolt (500mL)'},
    { prices: 121.05, description: 'Ginebra Frasco (700mL)'},
    { prices: 61.05, description: 'Ginebra Gin Round (350mL)'},
    { prices: 121.5, description: 'GSM Blue Mojito (700mL)'},
    { prices: 161.6, description: 'GSM Blue Mojito Coolitro (1L)'},
    { prices: 5.99, description: 'Hansel Choco'},
    { prices: 5.99, description: 'Hansel Mocha'},
    { prices: 5.16, description: 'Hello! Coafed Chocolate (15g)'},
    // 2nd page
    { prices: 6.72, description: 'Keratin Plus Brazilian Hair Treatment Conditioner (20g)'},
    { prices: 6.32, description: 'Keratin Plus Gold Intense Brazilian Hair Treatment Conditioner (20g)'},
    { prices: 5.80, description: 'Knorr Cubes Singles Beef (10g)'},
    { prices: 5.75, description: 'Knorr Cubes Singles Pork (10g)'},
    { prices: 14.18, description: 'Knorr Mix Sinigang Original (22g)'},
    { prices: 24.90, description: 'Ligo Sardines Green (155g)'},
    { prices: 25.30, description: 'Ligo Sardines Red (155g)'},
    { prices: 21.50, description: 'Lucky Me! Go Mini Instant Noodles Soup Bulalo (40g)'},
    { prices: 21.80, description: 'Lucky Me! Go Mini Instant Noodles Spicy Bulalo (40g)'},
    { prices: 8.75, description: 'Lucky Me! Instant Noodles Chicken (55g)'},
    { prices: 14, description: 'Lucky Me! Pancit Canton Chilimansi (80g)'},
    { prices: 14, description: 'Lucky Me! Pancit Canton Extra Hot Chili Thin Noodles (75g)'},
    { prices: 14, description: 'Lucky Me! Pancit Canton Kalamansi (80g)'},
    { prices: 14, description: 'Lucky Me! Pancit Canton Original (80g)'},
    { prices: 14, description: 'Lucky Me! Pancit Canton Sweet & Spicy (80g)'},
    { prices: 10.25, description: 'Lucky Me! Spicy Labuyo Chicken (50g)'},
    { prices: 11, description: 'Mang Thomas All Around Sarsa (100g)'},
    { prices: 38, description: 'MAXX Cherry (50 pcs)'},
    { prices: 38, description: 'MAXX Honey Lemon (50 pcs)'},
    { prices: 41.60, description: 'Mega Prime Cream Corn (425g)'},
    { prices: 36.70, description: 'Mega Prime Whole Mushroom (198g)'},
    { prices: 4.96, description: 'Modess Cottony Soft w/ Wings'},
    { prices: 2.24, description: 'NESCAFE Classic Instant Coffee (1.9g)'},
    { prices: 20.65, description: 'Nissin Cup Noddles Mini Bulalo (40g)'},
    { prices: 20.65, description: 'Nissin Cup Noddles Mini Seafood (40g)'},
    { prices: 20.95, description: 'Nissin Cup Noddles Mini Spicy Hot Beef (40g)'},
    { prices: 20.65, description: 'Nissin Cup Noddles Mini Spicy Seafood (40g)'},
    { prices: 13.5, description: 'Nissin Ramen Seafood (55g)'},
    { prices: 13.10, description: 'Nissin Ramen Spicy Seafood (59g)'},
    { prices: 5.61, description: 'Oreo Vanilla (27.6g)'},
    { prices: 5.9, description: 'Pantene Hair Fall Conttrol Shampoo (12mL)'},
    { prices: 35.50, description: 'Pochi Strawberry Cream Gummy Candy (50pcs)'},
    { prices: 5.84, description: 'Presto Creams Peanut Butter (30g)'},
    { prices: 5.9, description: 'Rebisco Choco Sandwich'},
    { prices: 5.9, description: 'Rebisco Crackers (33g)'},
    { prices: 5.9, description: 'Rebisco Strawberry Sandwich'},
    { prices: 6.92, description: 'Rexona Men Motionsense Ice Cool Deodorant (3mL)'},
    { prices: 6.92, description: 'Rexona Men Motionsense Passion Deodorant (3mL)'},
    { prices: 156.40, description: 'Ricoa Choco Flat Tops (100pcs)'},
    { prices: 43.0, description: 'San Marino Tuna Corned (150g)'},
    { prices: 32.15, description: 'San Marino Tuna Corned (85g)'},
    { prices: 43, description: 'San Marino Tuna Corned Chili (150g)'},
    { prices: 32.15, description: 'San Marino Tuna Corned Chili (85g)'},
    { prices: 28.90, description: 'Shield+ 70% Ethyl Alcohol Aqua Clean (150mL)'},
    { prices: 13.65, description: 'Silka Soap Orange Papaya (45g)'},
    { prices: 6.2, description: 'Skyflakes Condensada (30g)'},
    { prices: 4.98, description: 'Speed Babad Fresh Roses with Fabric Conditioner Power Detergent (55g)'},
    { prices: 154.1, description: 'Stik-O Waferstick Chocolate (850g)'},
    { prices: 5.74, description: 'Sunsilk Smooth & Manageable Shampoo (15mL)'},
    { prices: 19.1, description: 'Tang Juice Powder Mixed Berries (19g)'},
    { prices: 190.10, description: 'Tic Tac Mint (152g)'},
    { prices: 190.10, description: 'Tic Tac Mini Mono Jar Orange (152g)'},
    { prices: 60.0, description: 'Todays Mixed Fruit Cocktail (432g)'},
    { prices: 6.1, description: 'Wafrets Brix Cheese (24g)'},
    { prices: 5.1, description: 'Wings Powder Solve Floral Fresh (60g)'},
    { prices: 21.70, description: 'Wow Ulam Caldereta (155g)'},
    // 3rd page
    { prices: 22.30, description: 'Youngs Town Sardines Green (155g)'},
    { prices: 22.75, description: 'Youngs Town Sardines Red (155g)'},
    { prices: 8.44, description: 'Zest-O Apple (200mL)'},
    { prices: 8.44, description: 'Zest-O Orange (200mL)'}
];