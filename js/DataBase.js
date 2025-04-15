// class Nutrition {
//   constructor(energy, fat, carbohydrate, protein) {
//     this.energy = energy;
//     this.fat = fat;
//     this.carbohydrate = carbohydrate;
//     this.protein = protein;
//   }
// }

// class Recipe {
//   constructor(img, name, author, category, likes, nutrition) {
//     this.img = img;
//     this.name = name;
//     this.author = author;
//     this.category = category;
//     this.likes = likes;
//     this.nutrition = nutrition;
//   }
// }

// const recipes = [
//   new Recipe("../assets/images/Turmeric Roasted Cauliflower Salad (lowfodmap).jpg", "Turmeric Roasted Cauliflower Salad (lowfodmap)", "Joana Jardim", "Vegetarian dishes", 37, new Nutrition("143kcal", "6g", "18g", "5g")),
//   new Recipe("../assets/images/Vegetable & Egg Scramble (lowfodmap).jpeg", "Vegetable & Egg Scramble (lowfodmap)", "Joana Jardim", "Lean & Green, Low Added Sugar, Diabetic Friendly, HBP Friendly, Vegetarian dishes", 33, new Nutrition("87kcal", "4g", "8g", "5g")),
//   new Recipe("../assets/images/Green Beans With Tofu and Roasted Peanuts (lowfodmap).jpg", "Green Beans With Tofu and Roasted Peanuts (lowfodmap)", "Joana Jardim", "Vegetarian dishes", 22, new Nutrition("99kcal", "6g", "8g", "6g")),
//   new Recipe("../assets/images/Berry Almond Smoothie (full fat milk).jpg", "Berry Almond Smoothie (full fat milk)", "Joana Jardim", "Breakfast and snacks, Vegetarian dishes, Desserts", 13, new Nutrition("106kcal", "6g", "5g", "9g")),
//   new Recipe("../assets/images/High Protein Blueberry Cheesecake.png", "High Protein Blueberry Cheesecake", "Vasiliki Stavrou", "Desserts", 11, new Nutrition("260kcal", "17g", "23g", "4g")),
//   new Recipe("../assets/images/Asian Chicken Almond Salad.jpeg", "Asian Chicken Almond Salad", "Vasiliki Stavrou", "Chicken Dishes, Salads, Lean & Green", 11, new Nutrition("72kcal", "3g", "6g", "7g")),
//   new Recipe("../assets/images/Spicy Sausage and Veggie Stir Fry.webp", "Spicy Sausage and Veggie Stir Fry", "Vasiliki Stavrou", "Meat dishes, Lean & Green", 11, new Nutrition("73kcal", "3g", "6g", "5g")),
//   new Recipe("../assets/images/Berry Almond Smoothie.jpg", "Berry Almond Smoothie", "Vasiliki Stavrou", "Breakfast and snacks, Vegetarian dishes, Desserts", 10, new Nutrition("84kcal", "4g", "7g", "7g")),
//   ...Array.from({ length: 46 }, (_, i) => new Recipe("random", `Recipe ${i + 1}`, "Random Author", "Random Category", Math.floor(Math.random() * 100), new Nutrition(`${Math.floor(Math.random() * 500)}kcal`, `${Math.floor(Math.random() * 30)}g`, `${Math.floor(Math.random() * 50)}g`, `${Math.floor(Math.random() * 40)}g`)))
// ]



// class Food {
//   constructor(name, brand, nutrition) {
//     this.name = name;
//     this.brand = brand;
//     this.nutrition = nutrition;
//   }
// }

// const loveRecipes = [];

// const nutritionData = [
//   new Food("Ackee, canned, drained", "McCance and Widdowson's", new Nutrition("151 kcal", "15 g", "1 g", "3 g")),
//   new Food("Agar, dried, soaked and drained", "McCance and Widdowson's", new Nutrition("20 kcal", "0 g", "0 g", "0 g")),
//   new Food("Allspice, ground", "McCance and Widdowson's", new Nutrition("9 kcal", "0 g", "2 g", "0 g")),
//   new Food("Amaranth leaves, boiled in unsalted water", "McCance and Widdowson's", new Nutrition("3 kcal", "0 g", "0 g", "0 g")),
//   new Food("Amaranth leaves, raw", "McCance and Widdowson's", new Nutrition("5 kcal", "0 g", "1 g", "0 g")),
//   new Food("Amla", "McCance and Widdowson's", new Nutrition("53 kcal", "0 g", "14 g", "0 g")),
//   new Food("Apples, cooking, baked with sugar, flesh only, weighed with skin", "McCance and Widdowson's", new Nutrition("57 kcal", "0 g", "14 g", "0 g")),
//   new Food("Apples, cooking, baked without sugar, flesh only, weighed with skin", "McCance and Widdowson's", new Nutrition("40 kcal", "0 g", "10 g", "0 g")),
//   new Food("Apples, cooking, stewed with sugar, flesh only", "McCance and Widdowson's", new Nutrition("81 kcal", "0 g", "21 g", "0 g")),
//   ...Array.from({ length: 180 }, (_, i) => new Food(`Recipe ${i + 1}`, "Random Author", new Nutrition(`${Math.floor(Math.random() * 500)}kcal`, `${Math.floor(Math.random() * 30)}g`, `${Math.floor(Math.random() * 50)}g`, `${Math.floor(Math.random() * 40)}g`)))
// ];

// localStorage.setItem("Foods", JSON.stringify(nutritionData));

// class Micronutrient {
//   constructor(name, amount, unit) {
//     this.name = name;
//     this.amount = amount;
//     this.unit = unit;
//   }
// }

// const micronutrients = [
//   new Micronutrient("Cholesterol", "0.0", "mg"),
//   new Micronutrient("Water", "76.7", "g"),
//   new Micronutrient("Vitamin B-12", "0.0", "µg"),
//   new Micronutrient("Vitamin E", "", "mg"),
//   new Micronutrient("Lactose", "0.0", "g"),
//   new Micronutrient("Sugars", "0.8", "g"),
//   new Micronutrient("Magnesium", "40.0", "mg"),
//   new Micronutrient("Zinc", "0.6", "mg"),
//   new Micronutrient("Manganese", "", "mg"),
//   new Micronutrient("Riboflavin", "0.07", "mg"),
//   new Micronutrient("Folate, total", "41.0", "µg"),
//   new Micronutrient("Fatty acids, total saturated", "", "g"),
//   new Micronutrient("Chloride", "340.0", "mg"),
//   new Micronutrient("Fiber", "", "g"),
//   new Micronutrient("Vitamin A", "", "µg"),
//   new Micronutrient("Vitamin C", "30.0", "mg"),
//   new Micronutrient("Vitamin K", "", "µg"),
//   new Micronutrient("Alcohol", "", "g"),
//   new Micronutrient("Calcium", "35.0", "mg"),
//   new Micronutrient("Phosphorus", "47.0", "mg"),
//   new Micronutrient("Copper", "0.27", "mg"),
//   new Micronutrient("Selenium", "", "µg"),
//   new Micronutrient("Niacin", "0.6", "mg"),
//   new Micronutrient("Folic acid", "", "µg"),
//   new Micronutrient("Fatty acids, total monounsaturated", "", "g"),
//   new Micronutrient("Sodium", "240.0", "mg"),
//   new Micronutrient("Vitamin B-6", "0.06", "mg"),
//   new Micronutrient("Vitamin D (D2 + D3)", "0.0", "µg"),
//   new Micronutrient("Starch", "0.0", "g"),
//   new Micronutrient("Caffeine", "", "mg"),
//   new Micronutrient("Iron", "0.7", "mg"),
//   new Micronutrient("Potassium", "270.0", "mg"),
//   new Micronutrient("Fluoride", "", "µg"),
//   new Micronutrient("Thiamin", "0.03", "mg"),
//   new Micronutrient("Pantothenic acid", "", "mg"),
//   new Micronutrient("Fatty acids, total trans", "0.0", "g"),
//   new Micronutrient("Fatty acids, total polyunsaturated", "", "g")
// ];

// class Account {
//   constructor(email, user, passwd, repices, foods) {
//     this.email = email;
//     this.user = user;
//     this.passwd = passwd;
//     this.repices = repices;
//     this.foods = foods;
//   }
// }

// class Recipes {
//   constructor(img, name, author, category, like, nutrition) {
//     this.img = img;
//     this.name = name;
//     this.author = author;
//     this.category = category;
//     this.like = like;
//     this.nutrition = nutrition;
//   }
// }



























class User {
  constructor(id, email, username, password, personalization, myFoods, myRecipes) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.personalization = personalization;
    this.myFoods = myFoods;
    this.myRecipes = myRecipes;
  }
}

class Recipe {
  constructor(
    conerSrc, name, description, author, totalTime,
    preparationTime, finalWeight, portions, ingredients,
    cookingMethods, categorys, like, numberLike, id) {
    this.conerSrc = conerSrc;
    this.name = name;
    this.description = description;
    this.author = author;
    this.totalTime = totalTime;
    this.preparationTime = preparationTime;
    this.finalWeight = finalWeight;
    this.portions = portions;
    this.ingredients = ingredients; //food truyen --Mảng chứa các food thêm vào
    this.cookingMethods = cookingMethods;
    this.categorys = categorys;
    this.like = like;
    this.numberLike = numberLike;
    this.id = id;
  }
}

class Food {
  constructor(id, name, source, category, quantity, macronutrients, micronutrients) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.category = category;
    this.quantity = quantity;
    this.macronutrients = macronutrients;
    this.micronutrients = micronutrients;
  }
}

class Macronutrient {
  constructor(engergy, carbohydrate, fat, protein) {
    this.engergy = engergy;
    this.carbohydrate = carbohydrate;
    this.fat = fat;
    this.protein = protein;
  }
}

class Micronutrient {
  constructor(
    cholesterol, fiber, sodium, water, vitaminA, vitaminB6, vitaminB12, vitaminC, vitaminD,
    vitaminE, vitaminK, starch, lactose, alcohol, caffeine, sugars, calcium, iron, magnesium, phosphorus,
    potassium, zinc, copper, fluoride, manganese, selenium, thiamin, riboflavin, niacin, pantothenicAcid,
    folateTotal, folicAcid, fattyAcidsTotalTrans, fattyAcidsTotalSaturated, fattyAcidsTotalMonounsaturated,
    fattyAcidsTotalPolyunsaturated, chloride) {
    this.cholesterol = cholesterol;
    this.fiber = fiber;
    this.sodium = sodium;
    this.water = water;
    this.vitaminA = vitaminA;
    this.vitaminB6 = vitaminB6;
    this.vitaminB12 = vitaminB12;
    this.vitaminC = vitaminC;
    this.vitaminD = vitaminD;
    this.vitaminE = vitaminE;
    this.vitaminK = vitaminK;
    this.starch = starch;
    this.lactose = lactose;
    this.alcohol = alcohol;
    this.caffeine = caffeine;
    this.sugars = sugars;
    this.calcium = calcium;
    this.iron = iron;
    this.magnesium = magnesium;
    this.phosphorus = phosphorus;
    this.potassium = potassium;
    this.zinc = zinc;
    this.copper = copper;
    this.fluoride = fluoride;
    this.manganese = manganese;
    this.selenium = selenium;
    this.thiamin = thiamin;
    this.riboflavin = riboflavin;
    this.niacin = niacin;
    this.pantothenicAcid = pantothenicAcid;
    this.folateTotal = folateTotal;
    this.folicAcid = folicAcid;
    this.fattyAcidsTotalTrans = fattyAcidsTotalTrans;
    this.fattyAcidsTotalSaturated = fattyAcidsTotalSaturated;
    this.fattyAcidsTotalMonounsaturated = fattyAcidsTotalMonounsaturated;
    this.fattyAcidsTotalPolyunsaturated = fattyAcidsTotalPolyunsaturated;
    this.chloride = chloride;
  }
}

const nutritionUnits = [
  "mg", "g", "µg", "mg", "g", "g", "mg", "mg", "mg", "mg", "µg", "g", "mg", "mg", "mg", "mg",
  "g", "µg", "mg", "µg", "g", "mg", "mg", "mg", "µg", "µg", "mg", "µg", "g", "g", "mg", "mg", "mg", "mg", "µg", "mg", "mg", "g", "g"
];

localStorage.setItem("Units", nutritionUnits);

// ingredients = [
//   new Food(
//     1,
//     "Ackee, canned, drained",
//     "McCance and Widdowson's",
//     "Vegetables and Vegetable Products",
//     112,
//     new Macronutrient(151, 0.8, 15.2, 2.9),
//     new Micronutrient(
//       0.0, null, 240.0, 76.7, null, 0.06, 0.0,
//       30.0, 0.0, null, null, 0.0, 0, 0, null, null,
//       0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
//       null, null, null, 0.03, 0.07, 0.6, null, 41.0,
//       null, 0.0, null, null, null, 340.0)
//   ),
//   new Food(
//     2,
//     "Agar, dried, soaked and drained",
//     "McCance and Widdowson's",
//     "Vegetables and Vegetable Products",
//     100,
//     new Macronutrient(20, 0.4, 0.7, 0.1),
//     new Micronutrient(
//       0.0, null, 240.0, 76.7, null, 0.06, 0.0,
//       30.0, 0.0, null, null, 0.0, 0, 0, null, null,
//       0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
//       null, null, null, 0.03, 0.07, 0.6, null, 41.0,
//       null, 0.0, null, null, null, 340.0)
//   )
// ];

let ingredients = [];


personalization = [
  // new Recipe(
  //   "../assets/images/Turmeric Roasted Cauliflower Salad (lowfodmap).jpg",
  //   "Turmeric Roasted Cauliflower Salad (lowfodmap)",
  //   "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor. Turmericadds lovely color and flavor to this easy vegan-friendly recipe",
  //   "Joana Jardim",
  //   "00:40",
  //   "00:40",
  //   "978.8 grams",
  //   4,
  //   ingredients,
  //   `STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin, add the turmeric,
  //   some seasoning and 2 tbsp oil, and toss together. Roast for 20-25 minutes until tender. Tip onto a plate and cool.
  //   STEP 2 Meanwhile boil the rice in salted water until tender, adding the edamame for the last minute of cooking,
  //   then drain well. Leave to cool, then tip into a large bowl. Add the roasted cauliflower, lemon juice, cucumber and
  //   some seasoning, and toss together. Add the herbs and toss again. Add mint for extra flavor. STEP 3 Whisk
  //   together the dressing ingredients. Divide the cauliflower and rice between plates, scatter over the cashews and
  //   drizzle with the dressing.`,
  //   "Vegetable",
  //   true)
];

let myFoods = [];

const temptCretiveFood = {
  cholesterol: null,
  fiber: null,
  sodium: null,
  water: null,
  vitaminA: null,
  vitaminB6: null,
  vitaminB12: null,
  vitaminC: null,
  vitaminD: null,
  vitaminE: null,
  vitaminK: null,
  starch: null,
  lactose: null,
  alcohol: null,
  caffeine: null,
  sugars: null,
  calcium: null,
  iron: null,
  magnesium: null,
  phosphorus: null,
  potassium: null,
  zinc: null,
  copper: null,
  fluoride: null,
  manganese: null,
  selenium: null,
  thiamin: null,
  riboflavin: null,
  niacin: null,
  pantothenicAcid: null,
  folateTotal: null,
  folicAcid: null,
  fattyAcidsTotalTrans: null,
  fattyAcidsTotalSaturated: null,
  fattyAcidsTotalMonounsaturated: null,
  fattyAcidsTotalPolyunsaturated: null,
  chloride: null
};


let communityFoods = [
  new Food(
    1,
    "Quinoa, cooked",
    "USDA FoodData Central",
    "Grains and Cereals",
    185,
    new Macronutrient(222, 39.4, 3.6, 8.1),
    new Micronutrient(
      0.0, 5.2, 13.0, 130.0, null, 0.23, 0.0,
      0.0, 0.0, 0.4, null, 2.8, 0.0, 0.0, 0.0,
      0.0, 64.0, 2.8, 89.0, 152.0, 318.0, 1.4, 0.35,
      null, 0.43, 0.0, 0.21, 0.17, 1.1, null, 149.0,
      0.0, 0.0, 0.6, 1.7, 1.0, null
    )
  ),
  new Food(
    2,
    "Salmon, baked",
    "McCance and Widdowson's",
    "Fish and Seafood",
    150,
    new Macronutrient(280, 0.0, 18.0, 30.0),
    new Micronutrient(
      85.0, 0.0, 90.0, 100.0, 50.0, 0.65, 5.4,
      0.0, 12.0, 0.8, null, 0.0, 0.0, 0.0, 0.0,
      0.0, 29.0, 0.8, 38.0, 437.0, 628.0, 1.2, 0.45,
      null, null, 29.0, 0.4, 0.2, 3.5, 0.6, 16.0,
      0.0, 0.0, 4.0, 6.0, 6.5, null
    )
  ),
  new Food(
    3,
    "Avocado, raw",
    "USDA FoodData Central",
    "Fruits",
    136,
    new Macronutrient(227, 11.8, 20.0, 2.7),
    new Micronutrient(
      0.0, 9.0, 10.0, 88.0, 12.0, 0.26, 0.0,
      14.0, 0.0, 2.1, 21.0, 0.7, 0.0, 0.0, 0.0,
      2.0, 29.0, 0.9, 52.0, 78.0, 485.0, 0.7, 0.19,
      null, 0.28, 0.0, 0.06, 0.13, 1.8, 2.8, 81.0,
      0.0, 0.0, 2.9, 10.5, 4.5, null
    )
  ),
  new Food(
    4,
    "Broccoli, steamed",
    "McCance and Widdowson's",
    "Vegetables and Vegetable Products",
    100,
    new Macronutrient(35, 7.0, 0.5, 3.0),
    new Micronutrient(
      0.0, 3.1, 33.0, 90.0, 47.0, 0.12, 0.0,
      89.0, 0.0, 0.4, 101.0, 0.0, 0.0, 0.0, 0.0,
      1.4, 316.0, 0.7, 21.0, 66.0, 325.0, 0.4, 0.09,
      null, 0.18, 0.0, 0.07, 0.21, 1.0, null, 63.0,
      0.0, 0.0, 0.1, 0.2, 0.1, null
    )
  ),
  new Food(
    5,
    "Chicken breast, grilled",
    "USDA FoodData Central",
    "Meat and Poultry",
    120,
    new Macronutrient(198, 0.0, 4.0, 37.0),
    new Micronutrient(
      104.0, 0.0, 85.0, 80.0, 0.0, 0.34, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 27.0, 0.9, 29.0, 343.0, 403.0, 1.0, 0.12,
      null, null, 14.0, 0.09, 0.07, 6.0, 0.7, 5.0,
      0.0, 0.0, 1.0, 1.5, 0.8, null
    )
  ),
  new Food(
    6,
    "Almonds, raw",
    "USDA FoodData Central",
    "Nuts and Seeds",
    28,
    new Macronutrient(161, 6.0, 14.0, 6.0),
    new Micronutrient(
      0.0, 3.5, 1.0, 3.0, 0.0, 0.14, 0.0,
      0.0, 0.0, 7.0, 0.0, 1.2, 0.0, 0.0, 0.0,
      0.0, 270.0, 2.0, 135.0, 200.0, 268.0, 3.1, 0.44,
      null, 1.0, 0.0, 0.21, 0.32, 0.9, null, 26.0,
      0.0, 0.0, 1.8, 7.3, 4.0, null
    )
  ),
  new Food(
    7,
    "Greek yogurt, plain",
    "McCance and Widdowson's",
    "Dairy and Eggs",
    150,
    new Macronutrient(97, 5.0, 5.0, 9.0),
    new Micronutrient(
      15.0, 0.0, 50.0, 130.0, 10.0, 0.05, 0.2,
      0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 0.0, 0.0,
      4.0, 141.0, 0.1, 11.0, 100.0, 193.0, 1.0, 0.04,
      null, null, 0.0, 0.02, 0.07, 0.3, 0.7, 7.0,
      0.0, 0.0, 3.2, 1.4, 0.2, null
    )
  ),
  new Food(
    8,
    "Sweet potato, baked",
    "USDA FoodData Central",
    "Vegetables and Vegetable Products",
    130,
    new Macronutrient(103, 24.0, 0.2, 2.3),
    new Micronutrient(
      0.0, 3.3, 36.0, 100.0, 384.0, 0.15, 0.0,
      2.0, 0.0, 0.1, 6.0, 6.6, 0.0, 0.0, 0.0,
      6.5, 27.0, 0.7, 30.0, 54.0, 475.0, 0.3, 0.14,
      null, 0.69, 0.0, 0.07, 0.14, 0.8, null, 11.0,
      0.0, 0.0, 0.0, 0.1, 0.0, null
    )
  ),
  new Food(
    9,
    "Blueberries, fresh",
    "McCance and Widdowson's",
    "Fruits",
    100,
    new Macronutrient(57, 14.0, 0.3, 0.7),
    new Micronutrient(
      0.0, 2.4, 1.0, 84.0, 6.0, 0.06, 0.0,
      9.7, 0.0, 0.5, 9.0, 0.0, 0.0, 0.0, 0.0,
      10.0, 6.0, 0.3, 12.0, 10.0, 77.0, 0.2, 0.04,
      null, 0.17, 0.0, 0.04, 0.05, 0.5, null, 6.0,
      0.0, 0.0, 0.0, 0.1, 0.1, null
    )
  ),
  new Food(
    10,
    "Egg, boiled",
    "USDA FoodData Central",
    "Dairy and Eggs",
    50,
    new Macronutrient(78, 0.6, 5.0, 6.0),
    new Micronutrient(
      186.0, 0.0, 70.0, 35.0, 35.0, 0.12, 0.5,
      0.0, 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 22.0, 0.7, 10.0, 50.0, 69.0, 0.7, 0.03,
      null, null, 10.0, 0.04, 0.45, 0.4, 0.2, 22.0,
      0.0, 0.0, 1.4, 2.0, 0.7, null
    )
  ),
  new Food(
    11,
    "Lentils, cooked",
    "USDA FoodData Central",
    "Legumes",
    200,
    new Macronutrient(230, 40.0, 1.0, 18.0),
    new Micronutrient(
      0.0, 16.0, 4.0, 140.0, 3.0, 0.36, 0.0,
      3.0, 0.0, 0.1, 2.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 73.0, 6.6, 90.0, 180.0, 731.0, 2.5, 0.37,
      null, 0.87, 0.0, 0.25, 0.15, 2.8, null, 358.0,
      0.0, 0.0, 0.1, 0.2, 0.1, null
    )
  ),
  new Food(
    12,
    "Spinach, raw",
    "McCance and Widdowson's",
    "Vegetables and Vegetable Products",
    30,
    new Macronutrient(7, 1.0, 0.1, 0.9),
    new Micronutrient(
      0.0, 0.8, 24.0, 27.0, 141.0, 0.08, 0.0,
      8.0, 0.0, 0.2, 58.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 167.0, 0.8, 15.0, 30.0, 194.0, 0.2, 0.05,
      null, 0.19, 0.0, 0.04, 0.07, 0.4, null, 146.0,
      0.0, 0.0, 0.0, 0.0, 0.0, null
    )
  ),
  new Food(
    13,
    "Beef, sirloin, grilled",
    "USDA FoodData Central",
    "Meat and Poultry",
    100,
    new Macronutrient(212, 0.0, 9.0, 31.0),
    new Micronutrient(
      89.0, 0.0, 66.0, 60.0, 0.0, 0.39, 2.4,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 21.0, 2.5, 23.0, 315.0, 343.0, 4.0, 0.11,
      null, null, 25.0, 0.07, 0.06, 5.8, 0.5, 7.0,
      0.0, 0.0, 3.8, 3.9, 0.7, null
    )
  ),
  new Food(
    14,
    "Banana, raw",
    "McCance and Widdowson's",
    "Fruits",
    120,
    new Macronutrient(90, 23.0, 0.2, 1.1),
    new Micronutrient(
      0.0, 2.6, 1.0, 90.0, 5.0, 0.36, 0.0,
      8.7, 0.0, 0.0, 0.0, 10.0, 0.0, 0.0, 0.0,
      12.0, 5.0, 0.3, 27.0, 22.0, 358.0, 0.2, 0.07,
      null, 0.15, 0.0, 0.11, 0.10, 1.3, null, 20.0,
      0.0, 0.0, 0.0, 0.1, 0.0, null
    )
  ),
  new Food(
    15,
    "Oats, rolled, cooked",
    "USDA FoodData Central",
    "Grains and Cereals",
    234,
    new Macronutrient(158, 27.0, 2.5, 6.0),
    new Micronutrient(
      0.0, 4.0, 6.0, 200.0, 0.0, 0.10, 0.0,
      0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0,
      0.0, 54.0, 2.0, 60.0, 129.0, 177.0, 1.5, 0.24,
      null, 0.45, 0.0, 0.13, 0.10, 0.7, null, 13.0,
      0.0, 0.0, 0.4, 0.8, 0.6, null
    )
  ),
  new Food(
    16,
    "Tuna, canned in water",
    "McCance and Widdowson's",
    "Fish and Seafood",
    85,
    new Macronutrient(86, 0.0, 1.0, 19.0),
    new Micronutrient(
      29.0, 0.0, 300.0, 60.0, 10.0, 0.22, 1.3,
      0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 17.0, 0.7, 10.0, 153.0, 237.0, 0.9, 0.05,
      null, null, 17.0, 0.04, 0.07, 2.5, 0.3, 9.0,
      0.0, 0.0, 0.2, 0.3, 0.4, null
    )
  ), 
  new Food(
    17,
    "Kale, raw",
    "USDA FoodData Central",
    "Vegetables and Vegetable Products",
    67,
    new Macronutrient(33, 6.0, 0.5, 2.9),
    new Micronutrient(
      0.0, 2.0, 25.0, 60.0, 241.0, 0.15, 0.0,
      93.0, 0.0, 0.6, 120.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 447.0, 1.6, 38.0, 55.0, 491.0, 0.3, 0.13,
      null, 0.20, 0.0, 0.09, 0.11, 1.1, null, 62.0,
      0.0, 0.0, 0.1, 0.2, 0.1, null
    )
  ),
  new Food(
    18,
    "Peanut butter, natural",
    "USDA FoodData Central",
    "Nuts and Seeds",
    32,
    new Macronutrient(188, 7.0, 16.0, 8.0),
    new Micronutrient(
      0.0, 3.0, 5.0, 2.0, 0.0, 0.15, 0.0,
      0.0, 0.0, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0,
      2.0, 135.0, 1.5, 92.0, 168.0, 318.0, 1.9, 0.55,
      null, 0.63, 0.0, 0.07, 0.12, 2.1, null, 12.0,
      0.0, 0.0, 3.0, 7.0, 4.4, null
    )
  ),
  new Food(
    19,
    "Mango, fresh",
    "McCance and Widdowson's",
    "Fruits",
    165,
    new Macronutrient(100, 25.0, 0.6, 1.4),
    new Micronutrient(
      0.0, 2.8, 2.0, 135.0, 54.0, 0.12, 0.0,
      36.0, 0.0, 0.2, 11.0, 0.0, 0.0, 0.0, 0.0,
      17.0, 14.0, 0.4, 43.0, 18.0, 168.0, 0.2, 0.05,
      null, 0.13, 0.0, 0.06, 0.09, 0.7, null, 43.0,
      0.0, 0.0, 0.1, 0.2, 0.1, null
    )
  ),
  new Food(
    20,
    "Brown rice, cooked",
    "USDA FoodData Central",
    "Grains and Cereals",
    195,
    new Macronutrient(216, 45.0, 1.8, 5.0),
    new Micronutrient(
      0.0, 3.5, 10.0, 140.0, 0.0, 0.15, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 43.0, 1.2, 83.0, 154.0, 268.0, 0.9, 0.29,
      null, 0.58, 0.0, 0.10, 0.07, 1.0, null, 15.0,
      0.0, 0.0, 0.3, 0.7, 0.5, null
    )
  )
];

localStorage.setItem("Community Foods", JSON.stringify(communityFoods));


let users = [
  new User(1, "root@root.vn", "root", "12345678", personalization, myFoods),
];

// console.log(myFoods);


let communityRepices = [
  new Recipe(
    "../assets/images/Turmeric Roasted Cauliflower Salad (lowfodmap).jpg",
    "Turmeric Roasted Cauliflower Salad (lowfodmap)",
    "Our roasted cauliflower salad with turmeric is low in calories and packed with punchy flavor. Turmericadds lovely color and flavor to this easy vegan-friendly recipe",
    "Joana Jardim",
    "00:40",
    "00:40",
    "978.8 grams",
    4,
    [
      new Food(
        1,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        100,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        1,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        121,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Heat the oven to 200C/fan 180C/gas 6. Put the cauliflower in an ovenproof dish or tin, add the turmeric,
    some seasoning and 2 tbsp oil, and toss together. Roast for 20-25 minutes until tender. Tip onto a plate and cool.
    STEP 2 Meanwhile boil the rice in salted water until tender, adding the edamame for the last minute of cooking,
    then drain well. Leave to cool, then tip into a large bowl. Add the roasted cauliflower, lemon juice, cucumber and
    some seasoning, and toss together. Add the herbs and toss again. Add mint for extra flavor. STEP 3 Whisk
    together the dressing ingredients. Divide the cauliflower and rice between plates, scatter over the cashews and
    drizzle with the dressing.`,
    "Vegetable",
    false,
    10,
    1
  ),
  new Recipe(
    "../assets/images/Vegetable & Egg Scramble (lowfodmap).jpeg",
    "Spicy Grilled Chicken Skewers",
    "Juicy chicken skewers marinated with spicy chili and smoky paprika, perfect for a summer BBQ.",
    "Liam Carter",
    "01:00",
    "00:30",
    "750 grams",
    4,
    [
      new Food(
        3,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        100,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        11,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        100,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Marinate chicken pieces with chili powder, paprika, garlic, and olive oil for 30 minutes. 
      STEP 2 Thread onto skewers and grill over medium heat for 20 minutes, turning occasionally. 
      STEP 3 Serve with a side of yogurt dip and fresh lime wedges.`,
    "Meat",
    false,
    23,
    2
  ),
  
  new Recipe(
    "../assets/images/Berry Almond Smoothie (full fat milk).jpg",
    "Vegan Stuffed Bell Peppers",
    "Colorful bell peppers stuffed with quinoa, black beans, and a medley of spices.",
    "Emma Rodriguez",
    "01:15",
    "00:45",
    "1200 grams",
    6,
    [
      new Food(
        9,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        284,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        4,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        252,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Preheat oven to 180C. Hollow out bell peppers and set aside. 
      STEP 2 Cook quinoa and mix with black beans, cumin, and salsa. 
      STEP 3 Stuff peppers, bake for 30 minutes, and garnish with cilantro.`,
    "Vegetable",
    false,
    7,
    3
  ),
  new Recipe(
    "../assets/images/Asian Chicken Almond Salad.jpeg",
    "Beef Stir-Fry with Broccoli",
    "A quick and savory beef stir-fry with crunchy broccoli and a rich oyster sauce.",
    "Ava Patel",
    "00:30",
    "00:15",
    "650 grams",
    3,
    [new Food(
      12,
      "Allspice, ground",
      "McCance and Widdowson's",
      "Vegetables and Vegetable Products",
      633,
      new Macronutrient(9, 0, 2, 0),
      new Micronutrient(
        0.0, null, 240.0, 76.7, null, 0.06, 0.0,
        30.0, 0.0, null, null, 0.0, 0, 0, null, null,
        0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
        null, null, null, 0.03, 0.07, 0.6, null, 41.0,
        null, 0.0, null, null, null, 340.0))],
    `STEP 1 Slice beef thinly and marinate with soy sauce. 
      STEP 2 Stir-fry beef in a hot wok for 5 minutes, then add broccoli and oyster sauce. 
      STEP 3 Cook for another 5 minutes and serve with rice.`,
    "Meat",
    false,
    22,
    4
  ),
  new Recipe(
    "../assets/images/Spicy Sausage and Veggie Stir Fry.webp",
    "Mushroom Risotto",
    "Creamy risotto loaded with earthy mushrooms and finished with Parmesan.",
    "Luca Bianchi",
    "01:00",
    "00:50",
    "900 grams",
    4,
    [
      new Food(
        7,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        345,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        8,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        333,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        9,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        284,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
    ],
    `STEP 1 Sauté mushrooms in butter until golden. 
      STEP 2 Add Arborio rice and gradually stir in hot vegetable stock over 40 minutes. 
      STEP 3 Stir in Parmesan and serve with a sprinkle of parsley.`,
    "Vegetable",
    false,
    31,
    5
  ),
  new Recipe(
    "../assets/images/Spicy Sausage and Veggie Stir Fry.webp",
    "Blueberry Pancakes",
    "Fluffy pancakes bursting with fresh blueberries, perfect for a weekend brunch.",
    "Olivia Smith",
    "00:25",
    "00:15",
    "500 grams",
    2,
    [
      new Food(
        9,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        284,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        10,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        783,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        11,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        345,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Mix flour, sugar, and baking powder with milk and eggs. 
      STEP 2 Fold in blueberries and cook spoonfuls on a hot griddle for 3 minutes per side. 
      STEP 3 Serve with maple syrup.`,
    "Dessert",
    false,
    77,
    6
  ),
  new Recipe(
    "../assets/images/Berry Almond Smoothie.jpg",
    "Thai Coconut Curry",
    "A fragrant curry with creamy coconut milk, tender chicken, and bold Thai spices.",
    "Mia Wong",
    "00:50",
    "00:30",
    "1000 grams",
    5,
    [
      new Food(
        2,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        112,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        3,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        644,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Sauté curry paste with oil, then add coconut milk. 
      STEP 2 Add chicken and simmer for 20 minutes. 
      STEP 3 Stir in fish sauce, lime, and basil before serving with rice.`,
    "Meat",
    false,
    70,
    7
  ),
  new Recipe(
    "../assets/images/Spicy Sausage and Veggie Stir Fry.webp",
    "Roasted Root Vegetables",
    "A hearty mix of roasted carrots, parsnips, and beets with rosemary seasoning.",
    "Ethan Brown",
    "01:10",
    "00:40",
    "1100 grams",
    6,
    [
      new Food(
        8,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        333,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        9,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        284,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Preheat oven to 190C. Toss vegetables with olive oil and rosemary. 
      STEP 2 Roast for 45 minutes until caramelized. 
      STEP 3 Season with salt and pepper before serving.`,
    "Vegetable",
    false,
    33,
    8
  ),
  new Recipe(
    "../assets/images/Berry Almond Smoothie.jpg",
    "Spaghetti Carbonara",
    "Classic Italian pasta with creamy egg sauce, pancetta, and black pepper.",
    "Giulia Rossi",
    "00:30",
    "00:20",
    "700 grams",
    4,
    [new Food(
      3,
      "Allspice, ground",
      "McCance and Widdowson's",
      "Vegetables and Vegetable Products",
      644,
      new Macronutrient(9, 0, 2, 0),
      new Micronutrient(
        0.0, null, 240.0, 76.7, null, 0.06, 0.0,
        30.0, 0.0, null, null, 0.0, 0, 0, null, null,
        0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
        null, null, null, 0.03, 0.07, 0.6, null, 41.0,
        null, 0.0, null, null, null, 340.0)
    ),
    new Food(
      4,
      "Ackee, canned, drained",
      "McCance and Widdowson's",
      "Vegetables and Vegetable Products",
      252,
      new Macronutrient(151, 0.8, 15.2, 2.9),
      new Micronutrient(
        0.0, null, 240.0, 76.7, null, 0.06, 0.0,
        30.0, 0.0, null, null, 0.0, 0, 0, null, null,
        0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
        null, null, null, 0.03, 0.07, 0.6, null, 41.0,
        null, 0.0, null, null, null, 340.0)
    ),
    new Food(
      5,
      "Agar, dried, soaked and drained",
      "McCance and Widdowson's",
      "Vegetables and Vegetable Products",
      272,
      new Macronutrient(20, 0, 0, 0),
      new Micronutrient(
        0.0, null, 240.0, 76.7, null, 0.06, 0.0,
        30.0, 0.0, null, null, 0.0, 0, 0, null, null,
        0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
        null, null, null, 0.03, 0.07, 0.6, null, 41.0,
        null, 0.0, null, null, null, 340.0)
    ),
  ],
    `STEP 1 Cook spaghetti until al dente. 
      STEP 2 Fry pancetta until crispy, then mix with egg and Parmesan off heat. 
      STEP 3 Toss with pasta and top with pepper.`,
    "Pasta",
    false,
    55,
    9
  ),
  new Recipe(
    "../assets/images/High Protein Blueberry Cheesecake.png",
    "Chocolate Lava Cake",
    "Rich chocolate cake with a molten center, served warm with vanilla ice cream.",
    "Isabella Lee",
    "00:40",
    "00:25",
    "400 grams",
    2,
    [
      new Food(
        7,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        345,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        8,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        333,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Melt chocolate and butter together. 
      STEP 2 Mix with eggs, sugar, and flour, then pour into ramekins. 
      STEP 3 Bake at 200C for 12 minutes and serve immediately.`,
    "Dessert",
    false,
    25
  ),
  new Recipe(
    "../assets/images/Berry Almond Smoothie (full fat milk).jpg",
    "Grilled Vegetable Pizza",
    "A light pizza with grilled zucchini, peppers, and mozzarella on a thin crust.",
    "Mason Davis",
    "01:00",
    "00:40",
    "850 grams",
    4,
    [
      new Food(
        5,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        272,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        6,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        337,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Roll out pizza dough and grill vegetables. 
      STEP 2 Top dough with sauce, cheese, and veggies. 
      STEP 3 Bake at 220C for 20 minutes until crispy.`,
    "Vegetable",
    false,
    63,
    10
  ),
  new Recipe(
    "../assets/images/Green Beans With Tofu and Roasted Peanuts (lowfodmap).jpg",
    "Lamb Kofta with Tzatziki",
    "Spiced lamb meatballs served with a cool cucumber yogurt sauce.",
    "Zara Khan",
    "00:55",
    "00:30",
    "900 grams",
    5,
    [
      new Food(
        7,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        345,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        8,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        333,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        9,
        "Allspice, ground",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        284,
        new Macronutrient(9, 0, 2, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Mix lamb with spices and form into balls. 
      STEP 2 Grill kofta for 15 minutes, turning occasionally. 
      STEP 3 Serve with tzatziki and flatbread.`,
    "Meat",
    false,
    22,
    11
  ),
  new Recipe(
    "../assets/images/Turmeric Roasted Cauliflower Salad (lowfodmap).jpg",
    "Pumpkin Soup",
    "A velvety soup made with roasted pumpkin and a hint of nutmeg.",
    "Harper Evans",
    "00:45",
    "00:25",
    "950 grams",
    4,
    [
      new Food(
        1,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        100,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        2,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        112,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Roast pumpkin at 180C for 20 minutes. 
      STEP 2 Blend with stock and cream, then simmer with nutmeg for 10 minutes. 
      STEP 3 Serve with crusty bread.`,
    "Vegetable",
    false,
    25,
    12
  ),
  new Recipe(
    "../assets/images/High Protein Blueberry Cheesecake.png",
    "Mango Sticky Rice",
    "Sweet sticky rice paired with ripe mango and a drizzle of coconut sauce.",
    "Chloe Tan",
    "00:50",
    "00:30",
    "600 grams",
    3,
    [
      new Food(
        7,
        "Ackee, canned, drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        345,
        new Macronutrient(151, 0.8, 15.2, 2.9),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      ),
      new Food(
        8,
        "Agar, dried, soaked and drained",
        "McCance and Widdowson's",
        "Vegetables and Vegetable Products",
        333,
        new Macronutrient(20, 0, 0, 0),
        new Micronutrient(
          0.0, null, 240.0, 76.7, null, 0.06, 0.0,
          30.0, 0.0, null, null, 0.0, 0, 0, null, null,
          0.8, 35.0, 0.7, 40.0, 47.0, 270.0, 0.6, 0.27,
          null, null, null, 0.03, 0.07, 0.6, null, 41.0,
          null, 0.0, null, null, null, 340.0)
      )
    ],
    `STEP 1 Cook sticky rice in a steamer for 20 minutes. 
      STEP 2 Heat coconut milk with sugar and pour over rice. 
      STEP 3 Serve with sliced mango and extra sauce.`,
    "Dessert",
    false,
    27,
    13
  )
];

// localStorage.setItem("Community Recipes", JSON.stringify(communityRepices));