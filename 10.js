/* ---------- LOGOUT FUNCTION ---------- */
function logout() {
 if(confirm('Are you sure you want to logout?')) {
  localStorage.removeItem('rememberMe');
  localStorage.removeItem('userEmail');
  window.location.href = './login.html';
 }
}

/* ---------- FOOD ICONS ---------- */
const foodIcons = {
 tomato: "🍅",
 carrot: "🥕",
 spinach: "🥬",
 milk: "🥛",
 onion: "🧅",
 potato: "🥔",
 cucumber: "🥒",
 broccoli: "🥦",
 apple: "🍎",
 banana: "🍌",
 orange: "🍊",
 lemon: "🍋",
 grape: "🍇",
 strawberry: "🍓",
 watermelon: "🍉",
 mango: "🥭",
 pineapple: "🍍",
 avocado: "🥑",
 lettuce: "🥬",
 garlic: "🧄",
 pepper: "🌶️",
 corn: "🌽",
 pumpkin: "🎃",
 mushroom: "🍄",
 cheese: "🧀",
 butter: "🧈",
 egg: "🥚",
 bread: "🍞",
 rice: "🍚",
 pasta: "🍝",
 chicken: "🍗",
 beef: "🥩",
 fish: "🐟",
 shrimp: "🦐",
 yogurt: "🥛",
 salad: "🥗",
 pizza: "🍕",
 burger: "🍔",
 hotdog: "🌭"
};

function getFoodIcon(foodName) {
 let name = foodName.toLowerCase().split(/[^a-z]/)[0];
 return foodIcons[name] || "🍱";
}

/* ---------- GEMINI API CONFIG ---------- */
const GEMINI_API_KEY = "AIzaSyCeMfXqAQ4KGvOYLY7x_gtDM85SE3lmzYk";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

/* ---------- AUTO-EXPIRY PRODUCE LIST ---------- */
const autoExpiryProduce = [
 'onion', 'tomato', 'cabbage', 'broccoli', 'cauliflower', 'spinach',
 'apple', 'orange', 'grapes', 'papaya', 'mango', 'watermelon', 'lemon',
 'carrot', 'cucumber', 'banana', 'strawberry', 'blueberry', 'pineapple',
 'lettuce', 'kale', 'lime', 'peach', 'plum', 'avocado', 'pear'
];

/* ---------- 10 FOOD DATABASE WITH RECIPES ---------- */
const foodDB={

 tomato:{
  img:"https://images.unsplash.com/photo-1561136594-7f68413baa99",
  weight:120,
  recipe:"Tomato Soup — Tomato, garlic, onion. Boil and blend."
 },

 carrot:{
  img:"https://images.unsplash.com/photo-1447175008436-054170c2e979",
  weight:80,
  recipe:"Roasted Carrots — Olive oil, salt, roast 20min."
 },

 spinach:{
  img:"https://images.unsplash.com/photo-1576045057995-568f588f82fb",
  weight:50,
  recipe:"Spinach Stir Fry — Garlic, oil, sauté quickly."
 },

 milk:{
  img:"https://images.unsplash.com/photo-1580910051074-3eb694886505",
  weight:500,
  recipe:"Milk Pancakes — Flour, egg, milk, fry lightly."
 },

 onion:{
  img:"https://images.unsplash.com/photo-1508747703725-719777637510",
  weight:100,
  recipe:"Caramelized Onion — Slow cook with butter."
 },

 potato:{
  img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655",
  weight:200,
  recipe:"Mashed Potato — Boil, mash, butter, salt."
 },

 cucumber:{
  img:"https://images.unsplash.com/photo-1604977042946-1eecc30f269e",
  weight:150,
  recipe:"Cucumber Salad — Lemon, salt, pepper."
 },

 broccoli:{
  img:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  weight:180,
  recipe:"Garlic Broccoli — Steam and sauté."
 },

 apple:{
  img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
  weight:140,
  recipe:"Apple Oats — Cook apple with cinnamon."
 },

 banana:{
  img:"https://images.unsplash.com/photo-1574226516831-e1dff420e8f8",
  weight:130,
  recipe:"Banana Smoothie — Blend banana + milk."
 }

};

/* ---------- NUTRITION DATABASE (per 100g) ---------- */
const nutritionDB = {
 tomato: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
 carrot: { calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
 spinach: { calories: 23, protein: 2.7, carbs: 3.6, fat: 0.4 },
 milk: { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
 onion: { calories: 40, protein: 1.1, carbs: 9, fat: 0.1 },
 potato: { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
 cucumber: { calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1 },
 broccoli: { calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
 cauliflower: { calories: 25, protein: 1.9, carbs: 5, fat: 0.3 },
 cabbage: { calories: 25, protein: 1.3, carbs: 6, fat: 0.1 },
 apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
 banana: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
 orange: { calories: 47, protein: 0.9, carbs: 12, fat: 0.3 },
 lemon: { calories: 29, protein: 1.1, carbs: 9, fat: 0.3 },
 grape: { calories: 67, protein: 0.6, carbs: 17, fat: 0.4 },
 grapes: { calories: 67, protein: 0.6, carbs: 17, fat: 0.4 },
 strawberry: { calories: 32, protein: 0.8, carbs: 8, fat: 0.3 },
 watermelon: { calories: 30, protein: 0.6, carbs: 8, fat: 0.2 },
 mango: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },
 pineapple: { calories: 50, protein: 0.5, carbs: 13, fat: 0.1 },
 avocado: { calories: 160, protein: 2, carbs: 9, fat: 15 },
 lettuce: { calories: 15, protein: 1.2, carbs: 3, fat: 0.2 },
 garlic: { calories: 149, protein: 6.4, carbs: 33, fat: 0.5 },
 pepper: { calories: 31, protein: 1, carbs: 6, fat: 0.3 },
 corn: { calories: 86, protein: 3.3, carbs: 19, fat: 1.2 },
 mushroom: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
 cheese: { calories: 402, protein: 25, carbs: 1.3, fat: 33 },
 butter: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 },
 egg: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
 bread: { calories: 265, protein: 9, carbs: 49, fat: 3.3 },
 rice: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
 pasta: { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
 chicken: { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
 beef: { calories: 250, protein: 26, carbs: 0, fat: 15 },
 fish: { calories: 82, protein: 18, carbs: 0, fat: 0.7 },
 shrimp: { calories: 99, protein: 24, carbs: 0, fat: 0.3 },
 yogurt: { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
 salad: { calories: 20, protein: 1.2, carbs: 3.7, fat: 0.3 }
};

let items=[];
let wasteTotal=0;

/* ---------- EXPIRY NOTIFICATION POP-UP ---------- */
let notificationTimeout;

function showExpiryNotification(expiryDate) {
 if (!expiryDate) return;

 const today = new Date();
 today.setHours(0, 0, 0, 0);

 const expDate = new Date(expiryDate);
 expDate.setHours(0, 0, 0, 0);

 const daysRemaining = Math.floor((expDate - today) / (1000 * 60 * 60 * 24));

 const popup = document.getElementById('notificationPopup');
 let title = '';
 let message = '';
 let severity = '';

 if (daysRemaining < 0) {
  title = '⚠️ EXPIRED ITEM';
  message = `This item has already expired ${Math.abs(daysRemaining)} days ago!`;
  severity = 'critical';
 } else if (daysRemaining === 0) {
  title = '🔴 USE TODAY!';
  message = 'This item expires today. Consume immediately!';
  severity = 'critical';
 } else if (daysRemaining === 1) {
  title = '🟠 EXPIRES TOMORROW';
  message = 'Please use this item tomorrow before it expires.';
  severity = 'high';
 } else if (daysRemaining <= 3) {
  title = '🟡 USE WITHIN 3 DAYS';
  message = 'This item will expire soon. Plan your meal!';
  severity = 'medium';
 } else if (daysRemaining <= 7) {
  title = '✅ GOOD TO USE';
  message = `${daysRemaining} days remaining before expiry.`;
  severity = 'low';
 } else {
  title = '✅ FRESH STOCK';
  message = `Plenty of time! Expires in ${daysRemaining} days.`;
  severity = 'low';
 }

 popup.innerHTML = `
  <div class="popup-title">${title}</div>
  <div class="popup-message">${message}</div>
  <div class="popup-days">${daysRemaining} Days Remaining</div>
  <button class="popup-close" onclick="closeExpiryNotification()">Dismiss</button>
 `;

 popup.classList.add('show');
 popup.classList.remove('closing');

 // Auto-close after 6 seconds
 clearTimeout(notificationTimeout);
 notificationTimeout = setTimeout(() => {
  closeExpiryNotification();
 }, 6000);
}

function closeExpiryNotification() {
 const popup = document.getElementById('notificationPopup');
 popup.classList.add('closing');
 setTimeout(() => {
  popup.classList.remove('show');
  popup.classList.remove('closing');
 }, 300);
}

// Event listener for expiry date input
document.addEventListener('DOMContentLoaded', function() {
 const expiryDateInput = document.getElementById('expiryDate');
 if (expiryDateInput) {
  expiryDateInput.addEventListener('change', function(e) {
   showExpiryNotification(e.target.value);
  });
 }
});

/* ---------- GEMINI HELPER FUNCTIONS ---------- */
async function identifyFoodWithGemini(name) {
 try {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    contents: [{
     parts: [{
      text: `You are a food identification expert specializing in fresh produce, vegetables, and fruits. 
             The user mentioned: "${name}". 
             Identify what food item this is. For fresh produce items, provide realistic typical weights.
             Respond ONLY with a JSON object in this exact format (NO OTHER TEXT):
             {"foodName": "exact food name in lowercase", "weight": number in grams, "description": "short description"}
             
             Examples:
             {"foodName": "apple", "weight": 150, "description": "fresh apple"}
             {"foodName": "tomato", "weight": 120, "description": "ripe red tomato"}
             {"foodName": "banana", "weight": 120, "description": "yellow banana"}
             {"foodName": "cabbage", "weight": 300, "description": "fresh green cabbage"}
             {"foodName": "cauliflower", "weight": 200, "description": "fresh white cauliflower"}
             {"foodName": "mango", "weight": 180, "description": "ripe yellow mango"}
             {"foodName": "grapes", "weight": 100, "description": "fresh green grapes"}
             
             Return ONLY valid JSON, absolutely NO other text.`
     }]
    }]
   })
  });
  const data = await response.json();
  const text = data.candidates[0].content.parts[0].text;
  const foodData = JSON.parse(text);
  return foodData;
 } catch (error) {
  console.error("Gemini identification error:", error);
  return { foodName: name.toLowerCase(), weight: 100, description: "Unknown food" };
 }
}

async function getProductImage(foodName) {
 try {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    contents: [{
     parts: [{
      text: `Provide a direct Google Images or Unsplash URL for a high-quality product photo of "${foodName}". 
             Respond ONLY with the URL, nothing else.`
     }]
    }]
   })
  });
  const data = await response.json();
  let imageUrl = data.candidates[0].content.parts[0].text.trim();
  if (!imageUrl.startsWith("http")) {
   imageUrl = "https://images.unsplash.com/photo-1498837167922-ddd27525d352";
  }
  return imageUrl;
 } catch (error) {
  return "https://images.unsplash.com/photo-1498837167922-ddd27525d352";
 }
}

async function generateRecipeWithGemini(foodName) {
 try {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    contents: [{
     parts: [{
      text: `Create a simple, quick recipe for "${foodName}" that can be prepared in under 30 minutes.
             Format: "Recipe Name — Main ingredients, brief cooking instructions."
             Keep it short (one sentence).`
     }]
    }]
   })
  });
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
 } catch (error) {
  return "Simple stir fry with basic seasonings.";
 }
}

async function suggestRecipesForExpiringItems() {
 const expiringSoon = items.filter(item => {
  let today = new Date(); today.setHours(0,0,0,0);
  let expDate = new Date(item.expiry); expDate.setHours(0,0,0,0);
  let diff = Math.floor((expDate - today) / (1000*60*60*24));
  return diff > 0 && diff <= 5;
 });

 if (expiringSoon.length === 0) {
  return "No items expiring soon. Add more items to get recipe suggestions!";
 }

 const itemsList = expiringSoon.map(i => i.name).join(", ");
 
 try {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    contents: [{
     parts: [{
      text: `Based on these items that expire soon: ${itemsList}
             Suggest 3-4 different recipes that can use these ingredients.
             Format each recipe on a new line as: "Recipe Name - Brief description"
             Be creative and practical.`
     }]
    }]
   })
  });
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
 } catch (error) {
  return "Use items in a mixed vegetable stir fry or salad.";
 }
}

/* ---------- CATEGORY ---------- */
function getCategory(exp){
 let today=new Date(); today.setHours(0,0,0,0);
 let expDate=new Date(exp); expDate.setHours(0,0,0,0);
 let diff=Math.floor((expDate-today)/(1000*60*60*24));

 if(diff<=0) return "expired";
 if(diff<=3) return "eatNow";
 return "eatLater";
}

function getFood(name){
 return foodDB[name.toLowerCase()] ||
 {img:"https://images.unsplash.com/photo-1498837167922-ddd27525d352",weight:100,recipe:"Simple veggie stir fry."};
}

/* ---------- GET NUTRITION INFO ---------- */
function getNutrition(foodName) {
 const name = foodName.toLowerCase().split(/[^a-z]/)[0];
 return nutritionDB[name] || { calories: 0, protein: 0, carbs: 0, fat: 0 };
}

/* ---------- CALCULATE TOTAL NUTRITION ---------- */
function calculateTotalNutrition() {
 let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
 
 items.forEach(item => {
  const nutrition = getNutrition(item.name);
  const weight = item.weight || 100;
  const multiplier = weight / 100;
  
  totals.calories += nutrition.calories * multiplier;
  totals.protein += nutrition.protein * multiplier;
  totals.carbs += nutrition.carbs * multiplier;
  totals.fat += nutrition.fat * multiplier;
 });
 
 return totals;
}

/* ---------- UPDATE NUTRITION DISPLAY ---------- */
function updateNutritionDisplay() {
 const nutrition = calculateTotalNutrition();
 const summaryDiv = document.getElementById('nutritionSummary');
 
 if (summaryDiv) {
  summaryDiv.innerHTML = `
   <div style="text-align: center; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 10px;">
     <div style="font-size: 24px; font-weight: 700; color: #FF6B6B;">${Math.round(nutrition.calories)}</div>
     <div style="font-size: 12px; opacity: 0.8;">Calories kcal</div>
   </div>
   <div style="text-align: center; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 10px;">
     <div style="font-size: 24px; font-weight: 700; color: #4ECDC4;">${Math.round(nutrition.protein * 10) / 10}g</div>
     <div style="font-size: 12px; opacity: 0.8;">Protein</div>
   </div>
   <div style="text-align: center; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 10px;">
     <div style="font-size: 24px; font-weight: 700; color: #FFE66D;">${Math.round(nutrition.carbs * 10) / 10}g</div>
     <div style="font-size: 12px; opacity: 0.8;">Carbs</div>
   </div>
   <div style="text-align: center; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 10px;">
     <div style="font-size: 24px; font-weight: 700; color: #FF9FF3;">${Math.round(nutrition.fat * 10) / 10}g</div>
     <div style="font-size: 12px; opacity: 0.8;">Fat</div>
   </div>
  `;
 }
}

async function addItem(){
 let name=foodName.value.trim();
 let expiry=expiryDate.value;
 if(!name)return;

 // Get storage location
 const storageLocation = document.querySelector('input[name="storageLocation"]:checked').value;

 notification.innerHTML = '<div class="alert">✅ Adding item...</div>';

 // Instant identification - no API delay
 let foodData = await identifyFoodWithGemini(name);
 
 // Check if this is a produce item with auto-expiry
 const isProduce = autoExpiryProduce.some(item => foodData.foodName.toLowerCase().includes(item));
 
 // If produce and no expiry date provided, auto-calculate based on storage
 if (isProduce && !expiry) {
  let expiryDate = new Date();
  if (storageLocation === 'fridge') {
   expiryDate.setDate(expiryDate.getDate() + 8); // 7-10 days average
  } else {
   expiryDate.setDate(expiryDate.getDate() + 3); // 3-4 days, using 3 for safety
  }
  expiry = expiryDate.toISOString().split("T")[0];
 } else if (!expiry) {
  // Non-produce items MUST have expiry date
  notification.innerHTML = '<div class="alert">❌ Please enter expiry date for this item</div>';
  setTimeout(() => { notification.innerHTML = ''; }, 2000);
  return;
 }
 
 // Fast recipe lookup from database instead of API
 let recipe = getRecipeFromDB(foodData.foodName) || await generateRecipeWithGemini(foodData.foodName);

 // Create storage warning message
 let storageWarning = storageLocation === 'fridge' 
  ? '❄️ Fridge Storage: Lasts 7-10 days'
  : '🌡️ Room Temperature: Only 3-4 days!';

 items.push({
  name: foodData.foodName,
  img: "", // Skip image to save time
  weight: foodData.weight,
  recipe: recipe.split('\n')[0] || recipe, // Just first line for display
  expiry,
  category: getCategory(expiry),
  storageLocation: storageLocation,
  storageWarning: storageWarning,
  isProduce: isProduce
 });

 // Show appropriate notification
 const autoExpiryText = isProduce && !expiryDate.value ? ' (Auto-calculated)' : '';
 let warningNote;
 
 if (storageLocation === 'outside') {
  warningNote = `<div class="alert" style="background: rgba(255, 152, 0, 0.3); border-left: 4px solid #FF9800;">⚠️ ${foodData.foodName.toUpperCase()} - Outside Storage: Use within 3-4 days!${autoExpiryText}</div>`;
 } else if (isProduce) {
  // Produce in fridge - not expiring soon
  warningNote = `<div class="alert" style="background: rgba(76, 175, 80, 0.3); border-left: 4px solid #4CAF50;">✅ ${foodData.foodName.toUpperCase()} - Fridge: Not expiring soon (7-10 days)${autoExpiryText}</div>`;
 } else {
  // Non-produce in fridge
  warningNote = `<div class="alert">✅ Added: ${foodData.foodName.toUpperCase()} - Fridge: Keep fresh up to 10 days${autoExpiryText}</div>`;
 }

 notification.innerHTML = warningNote;

 setTimeout(() => {
  notification.innerHTML = '';
 }, 3000);

 foodName.value = '';
 expiryDate.value = '';
 render();
}


/* ---------- REAL SCANNER ---------- */
async function scanItem(event){
 const file = event.target.files[0];
 if (!file) return;

 // Show loading notification
 notification.innerHTML = '<div class="alert">🤖 AI Scanning food item...</div>';

 try {
  // Detect actual MIME type from file
  let mimeType = file.type || "image/jpeg";
  if (!mimeType.startsWith("image/")) {
   mimeType = "image/jpeg";
  }

  // Convert image to base64
  const reader = new FileReader();
  
  reader.onload = async function(e) {
   const fullDataUrl = e.target.result;
   const base64Image = fullDataUrl.split(',')[1];
   
   // Log for debugging
   console.log("File type:", file.type);
   console.log("MIME type:", mimeType);
   console.log("Base64 length:", base64Image.length);
   
   try {
    // Use Gemini Vision API to identify food and expiry
    const requestBody = {
     contents: [{
      parts: [
       {
        inlineData: {
         mimeType: mimeType,
         data: base64Image
        }
       },
       {
        text: `You are an expert food scientist. Analyze this food image ONLY.

RESPOND WITH ONLY A JSON OBJECT - NO OTHER TEXT:
{
  "foodName": "tomato",
  "condition": "fresh",
  "daysToExpiry": 6,
  "weight": 120
}

Rules:
- foodName: lowercase single word (tomato, apple, bread, etc)
- condition: fresh|aged|expired
- daysToExpiry: integer (5-7 for fresh, 2-4 for aged, 0 or negative for expired)
- weight: estimated grams

Only JSON response allowed!`
       }
      ]
     }]
    };

    console.log("Sending request to Gemini API...");
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log("API Response:", data);

    // Better response checking
    if (!response.ok) {
     console.error("API Error:", data);
     notification.innerHTML = `<div class="alert">❌ API Error: ${data?.error?.message || 'Unknown error'}</div>`;
     setTimeout(() => { notification.innerHTML = ''; }, 3000);
     return;
    }

    // Check for valid response structure
    if (!data.candidates || !Array.isArray(data.candidates) || data.candidates.length === 0) {
     console.error("No candidates in response");
     notification.innerHTML = '<div class="alert">❌ Could not analyze image. Please try with a clearer food photo.</div>';
     setTimeout(() => { notification.innerHTML = ''; }, 3000);
     return;
    }

    const candidate = data.candidates[0];
    if (!candidate.content?.parts?.[0]?.text) {
     console.error("No text in response:", candidate);
     notification.innerHTML = '<div class="alert">❌ No analysis received. Please try again.</div>';
     setTimeout(() => { notification.innerHTML = ''; }, 3000);
     return;
    }

    const analysisText = candidate.content.parts[0].text.trim();
    console.log("Analysis text:", analysisText);
    
    try {
     // Extract JSON from response (in case there's extra text)
     const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
     if (!jsonMatch) {
      throw new Error("No JSON found in response");
     }
     
     const analysis = JSON.parse(jsonMatch[0]);
     console.log("Parsed analysis:", analysis);

     // Calculate expiry date based on days to expiry
     let d = new Date();
     d.setDate(d.getDate() + analysis.daysToExpiry);
     let expiry = d.toISOString().split("T")[0];
     
     // Get recipe from database or default
     let recipe = getRecipeFromDB(analysis.foodName) || `Quick ${analysis.foodName} recipe - See chat for details`;
     
     // Add item to inventory
     items.push({
      name: analysis.foodName + " (" + analysis.condition + ")",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      weight: analysis.weight || 100,
      recipe: recipe,
      expiry,
      category: getCategory(expiry)
     });

     // Show success notification
     notification.innerHTML = `<div class="alert">✅ Scanned: ${analysis.foodName.toUpperCase()} - ${analysis.condition} - Expires in ${analysis.daysToExpiry} days</div>`;
     
     setTimeout(() => {
      notification.innerHTML = '';
     }, 4000);

     render();

    } catch (parseError) {
     console.error("JSON parse error:", parseError);
     console.error("Response text was:", analysisText);
     notification.innerHTML = '<div class="alert">❌ Could not parse AI response. Please try again.</div>';
     setTimeout(() => { notification.innerHTML = ''; }, 3000);
    }

   } catch (apiError) {
    console.error("Gemini API error:", apiError);
    notification.innerHTML = '<div class="alert">❌ Connection error. Check API key and try again.</div>';
    setTimeout(() => { notification.innerHTML = ''; }, 3000);
   }
  };
  
  reader.readAsDataURL(file);
  
  // Reset file input
  event.target.value = '';

 } catch (error) {
  console.error("Scanner error:", error);
  notification.innerHTML = '<div class="alert">❌ Error processing image.</div>';
  setTimeout(() => { notification.innerHTML = ''; }, 3000);
 }
}



/* ---------- DELETE ITEM ---------- */
function deleteItem(index) {
 items.splice(index, 1);
 render();
}

/* ---------- RENDER ---------- */
function render(){

 eatNow.innerHTML="";
 eatLater.innerHTML="";
 expired.innerHTML="";
 notification.innerHTML="";

 let today=new Date();

 items.forEach((item, index)=>{

   let exp=new Date(item.expiry);
   let diff=Math.floor((exp-today)/(1000*60*60*24));

   // Only show "expiring soon" warning for non-produce items or produce in outside storage
   const shouldShowWarning = !item.isProduce || item.storageLocation === 'outside';
   
   if(diff>5 && shouldShowWarning){
     // Green notification for items with more than 5 days
     notification.innerHTML+=`
     <div class="alert">
     ✅ ${item.name} - Safe to use (${diff} days left). Recipe: ${item.recipe}
     </div>`;
   }
   else if(diff>0 && diff<=5 && shouldShowWarning){
     // Yellow/Orange warning for 3-5 days, Green for fridge (0-3 days with green)
     if(diff<=3 && item.storageLocation === 'fridge'){
       notification.innerHTML+=`
       <div class="alert">
       ⚠️ ${item.name} expiring soon! Recipe: ${item.recipe}
       </div>`;
     } else if(diff<=3){
       // Red warning for outside storage items expiring soon
       notification.innerHTML+=`
       <div class="alert" style="background: rgba(255, 0, 0, 0.3); border-left: 4px solid #FF0000; color: #FF6B6B;">
       ⚠️ ${item.name} expiring soon! Recipe: ${item.recipe}
       </div>`;
     } else {
       // Yellow/Orange for 3-5 days
       notification.innerHTML+=`
       <div class="alert" style="background: rgba(255, 152, 0, 0.3); border-left: 4px solid #FF9800; color: #FFD54F;">
       ⏰ ${item.name} - Use within ${diff} days. Recipe: ${item.recipe}
       </div>`;
     }
   }

   if(diff<=0 && !item.counted){
     wasteTotal+=item.weight;
     item.counted=true;
   }

   let icon = getFoodIcon(item.name);
   
   // Get storage location info
   const storageIcon = item.storageLocation === 'fridge' ? '❄️ Fridge' : '🌡️ Outside';
   const storageColor = item.storageLocation === 'fridge' 
    ? 'rgba(76, 175, 80, 0.2)' // Green for fridge
    : 'rgba(255, 152, 0, 0.2)'; // Orange for outside
   const storageBorder = item.storageLocation === 'fridge' ? '#4CAF50' : '#FF9800';

   let div=document.createElement("div");
   div.className="food";
   
   // Determine storage status message
   let storageStatus;
   if (item.storageLocation === 'fridge' && item.isProduce) {
    storageStatus = '✅ Not expiring soon';
   } else if (item.storageLocation === 'fridge') {
    storageStatus = 'Lasts 7-10 days';
   } else {
    storageStatus = 'Only 3-4 days!';
   }
   
   // Show recipe only for "eatNow" and "eatLater", NOT for "expired"
   let recipeHTML = '';
   if (item.category !== 'expired') {
    recipeHTML = `<small>🥗 ${item.recipe}</small><br>`;
   }
   
   div.innerHTML=`
     <div style="font-size: 40px; text-align: center; margin-bottom: 8px;">${icon}</div>
     <b>${item.name}</b><br>
     Expiry: ${item.expiry}<br>
     <div style="background: ${storageColor}; border-left: 3px solid ${storageBorder}; padding: 8px; border-radius: 6px; margin: 8px 0; font-size: 12px; font-weight: 600;">
       ${storageIcon} - ${storageStatus}
     </div>
     ${recipeHTML}
     <button onclick="deleteItem(${index})" style="background:#ff5252; padding: 5px 10px; font-size: 12px; margin-top: 8px; width: auto;">🗑️ Remove</button>
   `;

   document.getElementById(item.category).appendChild(div);
 });

 wasteTracker.innerHTML="♻️ Waste Produced: "+wasteTotal+"g";
 
 // Update nutrition display
 updateNutritionDisplay();
}

/* ---------- RECIPE FORMATTER ---------- */
function formatRecipeOutput(recipe) {
 // Ensure recipe displays in correct order: Title → Ingredients → Instructions → Tips
 
 // Split recipe into sections
 const lines = recipe.split('\n');
 let title = '';
 let ingredients = [];
 let instructions = [];
 let tips = [];
 let currentSection = 'title';

 for (let line of lines) {
  if (line.includes('🍅') || line.includes('🍝') || line.includes('🥕') || 
      line.includes('🥬') || line.includes('🥛') || line.includes('🧅') ||
      line.includes('🥔') || line.includes('🍎') || line.includes('🍌') ||
      line.includes('🍗') || line.includes('🥗') || line.includes('🍚') ||
      line.includes('🍞') || line.includes('🥚') || line.includes('🐟')) {
   title = line;
   currentSection = 'title';
  } else if (line.includes('📋') || line.includes('Ingredients')) {
   currentSection = 'ingredients';
   ingredients.push(line);
  } else if (line.includes('🍳') || line.includes('Instructions')) {
   currentSection = 'instructions';
   instructions.push(line);
  } else if (line.includes('⏱️') || line.includes('👥') || line.includes('💡') || 
             line.includes('Prep Time') || line.includes('Servings') || line.includes('Tip')) {
   currentSection = 'tips';
   tips.push(line);
  } else {
   // Add to appropriate section
   if (currentSection === 'ingredients' && line.trim()) {
    ingredients.push(line);
   } else if (currentSection === 'instructions' && line.trim()) {
    instructions.push(line);
   } else if (currentSection === 'tips' && line.trim()) {
    tips.push(line);
   }
  }
 }

 // Reconstruct recipe in correct order
 let formatted = '';
 if (title) formatted += title + '\n\n';
 if (ingredients.length > 0) formatted += ingredients.join('\n') + '\n\n';
 if (instructions.length > 0) formatted += instructions.join('\n') + '\n\n';
 if (tips.length > 0) formatted += tips.join('\n');

 return formatted.trim();
}

/* ---------- CHATBOT ---------- */
async function sendChat(){
 let input=chatInput.value.trim();
 if(!input)return;

 // Add user message FIRST - clearly visible
 let userDiv = document.createElement("div");
 userDiv.className = "user";
 userDiv.innerHTML = "<strong>You asked for:</strong> " + input;
 chat.appendChild(userDiv);

 // Clear input field
 chatInput.value="";
 
 // Scroll to show user message
 chat.scrollTop=chat.scrollHeight;

 let response = "";
 const inputLower = input.toLowerCase();
 
 // Check if user is asking for recipes based on INVENTORY (suggest mode)
 if(inputLower.includes("suggest") || inputLower.includes("what can i make") || 
    inputLower.includes("use up") || inputLower.includes("inventory") ||
    inputLower.includes("what should i cook") || inputLower.includes("stock")) {
  response = await suggestRecipesForExpiringItems();
 } else {
  // Otherwise, generate detailed recipe for the mentioned food
  response = await generateDetailedRecipeWithGemini(input);
 }

 // Add bot response BELOW user message
 let botDiv = document.createElement("div");
 botDiv.className = "bot";
 botDiv.id = "loading-msg";
 
 // Format recipe to ensure items/title comes before ingredients and instructions
 let formattedResponse = formatRecipeOutput(response);
 botDiv.textContent = formattedResponse;
 botDiv.style.whiteSpace = "pre-wrap";
 botDiv.style.wordWrap = "break-word";
 
 chat.appendChild(botDiv);
 chat.scrollTop=chat.scrollHeight;
}

/* ---------- RECIPE DATABASE ---------- */
const recipeDB = {
 tomato: `🍅 TOMATO ITALIAN PASTA
  
📋 Ingredients:
• 400g Tomato
• 200g Pasta (spaghetti)
• 4 cloves Garlic, minced
• 2 tbsp Olive oil
• 1 tsp Oregano
• Salt & Pepper to taste
• Fresh Basil (optional)
• Parmesan Cheese (optional)

🍳 Instructions:
1. Heat olive oil in pan, add minced garlic
2. Sauté garlic for 1 minute until fragrant
3. Add fresh tomatoes (or canned), crush them
4. Simmer for 15-20 minutes, add oregano
5. Meanwhile, cook pasta in salted boiling water
6. When pasta is al dente, drain and toss with sauce
7. Season with salt & pepper, garnish with basil

⏱️ Prep Time: 10 min | Cook Time: 25 min
👥 Servings: 2-3
💡 Tip: Fresh tomatoes taste better than canned!`,

 pasta: `🍝 CREAMY GARLIC PASTA

📋 Ingredients:
• 300g Pasta (penne/fettuccine)
• 200ml Heavy cream
• 4 cloves Garlic, minced
• 3 tbsp Butter
• 100g Parmesan Cheese, grated
• Salt & Black pepper
• Fresh parsley
• Red pepper flakes

🍳 Instructions:
1. Cook pasta in salted boiling water until al dente
2. Heat butter in pan, add minced garlic
3. Sauté garlic for 1 minute
4. Pour in heavy cream, mix well
5. Add Parmesan cheese, stir until creamy
6. Drain pasta, toss with sauce
7. Season with salt, pepper, add parsley

⏱️ Prep Time: 5 min | Cook Time: 15 min
👥 Servings: 3-4
💡 Tip: Don't boil the cream, just heat gently!`,

 carrot: `🥕 ROASTED GARLIC CARROTS

📋 Ingredients:
• 500g Carrots, sliced
• 3 tbsp Olive oil
• 4 cloves Garlic, minced
• 1 tsp Salt
• ½ tsp Black pepper
• 1 tsp Honey (optional)
• Fresh parsley (optional)

🍳 Instructions:
1. Preheat oven to 200°C
2. Toss carrot slices with olive oil and garlic
3. Spread on baking sheet
4. Season with salt and pepper
5. Roast for 25-30 minutes until golden
6. Drizzle with honey if desired
7. Garnish with parsley

⏱️ Prep Time: 10 min | Cook Time: 30 min
👥 Servings: 3-4
💡 Tip: Cut carrots evenly for uniform cooking!`,

 spinach: `🥬 GARLIC SPINACH STIR FRY

📋 Ingredients:
• 400g Fresh spinach
• 3 tbsp Olive oil
• 4 cloves Garlic, minced
• ½ tsp Red pepper flakes
• Salt & Pepper
• 1 tbsp Lemon juice

🍳 Instructions:
1. Heat olive oil in large pan
2. Add minced garlic, sauté for 30 seconds
3. Add spinach in batches, stir until wilted
4. Season with salt, pepper, and red pepper flakes
5. Add lemon juice, toss gently
6. Cook for 3-5 minutes total

⏱️ Prep Time: 5 min | Cook Time: 5 min
👥 Servings: 2-3
💡 Tip: Don't overcook - spinach wilts quickly!`,

 milk: `🥛 CREAMY MILK PANCAKES

📋 Ingredients:
• 500ml Milk
• 1½ cups Flour
• 2 Eggs
• 2 tbsp Sugar
• 2 tsp Baking powder
• Pinch of salt
• 2 tbsp Butter for cooking

🍳 Instructions:
1. Mix flour, sugar, baking powder, and salt
2. Whisk eggs with milk
3. Combine wet and dry ingredients gently
4. Heat butter on non-stick pan
5. Pour batter in circles, cook 2-3 min each side
6. Flip when bubbles form on surface
7. Serve warm with honey/syrup

⏱️ Prep Time: 10 min | Cook Time: 15 min
👥 Servings: 4-6
💡 Tip: Don't overmix batter for fluffy pancakes!`,

 onion: `🧅 CARAMELIZED SWEET ONIONS

📋 Ingredients:
• 4 large Onions, sliced
• 3 tbsp Butter
• 1 tbsp Olive oil
• 1 tsp Salt
• ½ tsp Sugar
• ½ tsp Black pepper
• 1 tbsp Balsamic vinegar

🍳 Instructions:
1. Slice onions thinly
2. Heat butter and oil in pan over medium heat
3. Add onions, stir occasionally
4. Cook for 30-40 minutes until golden brown
5. Add salt, sugar, and pepper
6. Continue cooking until caramelized
7. Finish with balsamic vinegar

⏱️ Prep Time: 5 min | Cook Time: 40 min
👥 Servings: 4
💡 Tip: Slow cooking is key for caramelization!`,

 potato: `🥔 CREAMY MASHED POTATOES

📋 Ingredients:
• 500g Potatoes
• 3 tbsp Butter
• 100ml Milk
• 1 tsp Salt
• ½ tsp White pepper
• Nutmeg (pinch)
• Fresh chives (optional)

🍳 Instructions:
1. Peel and cut potatoes into chunks
2. Boil in salted water for 15-20 minutes
3. Drain well and return to pot
4. Mash with fork or masher
5. Heat butter and milk together
6. Add to potatoes, mix until creamy
7. Season with salt, pepper, and nutmeg

⏱️ Prep Time: 10 min | Cook Time: 20 min
👥 Servings: 3-4
💡 Tip: Don't overmix or potatoes become gluey!`,

 apple: `🍎 SPICED APPLE OATMEAL

📋 Ingredients:
• 2 Apples, diced
• 1 cup Oats
• 2 cups Water
• 1 cup Milk
• 2 tbsp Sugar/Honey
• 1 tsp Cinnamon
• Pinch of nutmeg
• 2 tbsp Nuts (optional)

🍳 Instructions:
1. Bring water and milk to boil
2. Add oats, reduce heat to low
3. Cook for 5 minutes, stirring occasionally
4. Add diced apples and cinnamon
5. Cook for 5 more minutes until soft
6. Season with honey and nutmeg
7. Top with nuts

⏱️ Prep Time: 5 min | Cook Time: 10 min
👥 Servings: 2
💡 Tip: Use fresh apples for best flavor!`,

 banana: `🍌 CREAMY BANANA SMOOTHIE

📋 Ingredients:
• 2 Ripe Bananas
• 1 cup Milk
• ½ cup Yogurt
• 1 tbsp Honey
• 1 tsp Vanilla extract
• Handful of ice cubes
• Cinnamon powder

🍳 Instructions:
1. Peel and slice bananas
2. Add bananas to blender
3. Pour milk and yogurt
4. Add honey and vanilla
5. Add ice cubes
6. Blend until smooth
7. Pour into glass, sprinkle cinnamon

⏱️ Prep Time: 5 min | Cook Time: 0 min
👥 Servings: 2
💡 Tip: Use very ripe bananas for sweetness!`,

 chicken: `🍗 GARLIC BUTTER CHICKEN

📋 Ingredients:
• 500g Chicken breasts
• 4 tbsp Butter
• 5 cloves Garlic, minced
• 1 tsp Thyme
• Salt & Pepper
• ½ cup Lemon juice

🍳 Instructions:
1. Season chicken with salt and pepper
2. Heat butter in pan over medium-high
3. Add chicken, cook 6-7 minutes each side
4. Remove chicken, keep warm
5. Add garlic to same pan, sauté 1 minute
6. Add thyme and lemon juice
7. Pour sauce over cooked chicken

⏱️ Prep Time: 5 min | Cook Time: 15 min
👥 Servings: 3-4
💡 Tip: Don't overcook chicken to keep it moist!`,

 salad: `🥗 FRESH GARDEN SALAD

📋 Ingredients:
• 200g Mixed greens
• 1 Tomato, chopped
• ½ Cucumber, sliced
• 1 Carrot, shredded
• ¼ Red onion, sliced
• 3 tbsp Olive oil
• 1 tbsp Vinegar
• Salt & Pepper
• Croutons (optional)

🍳 Instructions:
1. Wash and dry all vegetables
2. Combine greens in a bowl
3. Add tomato, cucumber, carrot, onion
4. Whisk olive oil with vinegar
5. Add salt and pepper to dressing
6. Toss salad with dressing
7. Top with croutons if desired

⏱️ Prep Time: 10 min | Cook Time: 0 min
👥 Servings: 2
💡 Tip: Add dressing just before serving!`,

 rice: `🍚 FLUFFY WHITE RICE

📋 Ingredients:
• 1 cup White rice
• 2 cups Water
• 1 tsp Salt
• 1 tbsp Butter
• 2 Green cardamom pods
• 1 Bay leaf

🍳 Instructions:
1. Rinse rice under cold water until clear
2. Heat butter in pot, add cardamom and bay leaf
3. Add rice, stir for 1-2 minutes
4. Add water and salt
5. Bring to boil, then reduce heat to low
6. Cover and cook for 15-18 minutes
7. Turn off heat, let stand 5 minutes

⏱️ Prep Time: 5 min | Cook Time: 20 min
👥 Servings: 3-4
💡 Tip: Don't stir rice while cooking!`,

 bread: `🍞 SOFT HOMEMADE BREAD

📋 Ingredients:
• 3 cups All-purpose flour
• 1 cup Warm water
• 1 tbsp Sugar
• 1 tsp Salt
• 2 tbsp Olive oil
• 7g Instant yeast

🍳 Instructions:
1. Mix warm water, sugar, yeast - let sit 10 min
2. Add flour, salt, olive oil
3. Knead for 10 minutes until smooth
4. Cover bowl, let rise 1 hour (doubled)
5. Punch down, shape into loaf
6. Let rise another 30 minutes
7. Bake at 200°C for 30-35 minutes

⏱️ Prep Time: 20 min | Cook Time: 35 min
👥 Servings: 8 slices
💡 Tip: Use warm (not hot) water for yeast!`,

 eggs: `🥚 SCRAMBLED EGGS WITH CHEESE

📋 Ingredients:
• 4 Eggs
• 2 tbsp Butter
• ¼ cup Milk
• 100g Cheese, grated
• Salt & Pepper
• 1 tbsp Chives (optional)

🍳 Instructions:
1. Crack eggs into a bowl
2. Whisk with milk, salt, and pepper
3. Heat butter in non-stick pan
4. Pour egg mixture
5. Stir gently every 30 seconds
6. When almost cooked, add cheese
7. Remove from heat, stir in chives

⏱️ Prep Time: 5 min | Cook Time: 5 min
👥 Servings: 2
💡 Tip: Cook on low heat for creamy texture!`,

 fish: `🐟 GRILLED LEMON FISH

📋 Ingredients:
• 500g Fish fillets
• 3 tbsp Olive oil
• 2 Lemons
• 4 cloves Garlic, minced
• 1 tsp Dill
• Salt & Pepper

🍳 Instructions:
1. Preheat grill or pan to medium-high
2. Season fish with salt, pepper, dill
3. Mix olive oil with garlic and lemon juice
4. Brush fish with mixture
5. Grill 5-6 minutes per side
6. Garnish with lemon slices
7. Serve hot

⏱️ Prep Time: 10 min | Cook Time: 12 min
👥 Servings: 3-4
💡 Tip: Don't flip fish too often!`
};

function getRecipeFromDB(foodName) {
 const name = foodName.toLowerCase().trim();
 return recipeDB[name] || null;
}

/* ---------- INGREDIENT NAME NORMALIZER ---------- */
function normalizeIngredientName(input) {
 // Remove common variations and normalize
 const singular = input.toLowerCase()
  .replace(/s\s*$/, '') // Remove trailing 's' for plurals
  .replace(/es\s*$/, '') // Remove trailing 'es'
  .trim();
 
 // Check if exact match exists
 if (recipeDB[singular]) return singular;
 
 // Check for common aliases
 const aliases = {
  'tomatos': 'tomato',
  'carrots': 'carrot',
  'spinaches': 'spinach',
  'milks': 'milk',
  'onions': 'onion',
  'potatos': 'potato',
  'cucumbers': 'cucumber',
  'brocolis': 'broccoli',
  'apples': 'apple',
  'bananas': 'banana',
  'oranges': 'orange',
  'lemons': 'lemon',
  'grapes': 'grape',
  'strawberries': 'strawberry',
  'watermelons': 'watermelon',
  'mangoes': 'mango',
  'pineapples': 'pineapple',
  'avocados': 'avocado',
  'lettuces': 'lettuce',
  'garlics': 'garlic',
  'peppers': 'pepper',
  'corns': 'corn',
  'pumpkins': 'pumpkin',
  'mushrooms': 'mushroom',
  'cheeses': 'cheese',
  'butters': 'butter',
  'eggs': 'eggs',
  'breads': 'bread',
  'rices': 'rice',
  'pastas': 'pasta',
  'chickens': 'chicken',
  'beefs': 'beef',
  'fishes': 'fish',
  'fish': 'fish',
  'shrimps': 'shrimp',
  'yogurts': 'yogurt',
  'salads': 'salad'
 };
 
 return aliases[singular] || null;
}

/* ---------- DETAILED RECIPE GENERATOR ---------- */
async function generateDetailedRecipeWithGemini(userInput) {
 // Extract potential food names from user input - more flexible matching
 const inputLower = userInput.toLowerCase().trim();
 const knownFoods = Object.keys(recipeDB);
 
 // Store all matching foods
 let matchedFoods = [];
 
 // Method 1: Check if any known food is mentioned directly in the input
 for (let food of knownFoods) {
  if (inputLower.includes(food)) {
   matchedFoods.push(food);
  }
 }

 // Method 2: Try to normalize and match ingredient names
 if (matchedFoods.length === 0) {
  const words = inputLower.split(/[\s,.\-_]+/);
  for (let word of words) {
   if (word.length > 2) { // Ignore very short words
    const normalized = normalizeIngredientName(word);
    if (normalized && !matchedFoods.includes(normalized)) {
     matchedFoods.push(normalized);
    }
   }
  }
 }

 // If we found matching food(s), return the recipe(s)
 if (matchedFoods.length > 0) {
  // If single food found, return its recipe instantly
  if (matchedFoods.length === 1) {
   return recipeDB[matchedFoods[0]];
  }
  
  // If multiple foods found, return first match with note about others
  let response = recipeDB[matchedFoods[0]];
  if (matchedFoods.length > 1) {
   response += `\n\n📌 Other ingredients available: ${matchedFoods.slice(1).map(f => f.toUpperCase()).join(', ')}\n📝 Ask for specific recipes for these ingredients!`;
  }
  return response;
 }

 // Check for recipe keywords
 if (inputLower.includes("suggest") || inputLower.includes("combine") || 
     inputLower.includes("mix")) {
  return await suggestRecipesForExpiringItems();
 }

 // If not in database, use Gemini API to generate recipe
 try {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    contents: [{
     parts: [{
      text: `You are a professional chef and cooking expert. Create a DETAILED, step-by-step recipe for: "${userInput}"

REQUIREMENTS:
- Include ALL ingredients with EXACT measurements
- Provide CLEAR, NUMBERED cooking steps (at least 8-10 steps)
- Each step should be specific and easy to follow
- Include preparation techniques
- Add cooking temperatures if applicable

FORMAT EXACTLY LIKE THIS:

🍳 ${userInput.toUpperCase()} RECIPE

📋 INGREDIENTS:
• [Exact quantity] [Ingredient name]
• [Exact quantity] [Ingredient name]
(list all ingredients with measurements)

🔪 PREPARATION:
1. [Prep step - what to do before cooking]
2. [Prep step - what to do before cooking]

🍳 COOKING INSTRUCTIONS (STEP BY STEP):
1. [First step with details]
2. [Second step with details]
3. [Third step with details]
4. [Fourth step with details]
5. [Fifth step with details]
6. [Sixth step with details]
7. [Seventh step with details]
8. [Eighth step with details]

⏱️ Timing:
• Prep Time: [X] minutes
• Cook Time: [X] minutes
• Total Time: [X] minutes

👥 Servings: [Number of people]

💡 Tips & Tricks:
• [Helpful tip 1]
• [Helpful tip 2]
• [Helpful tip 3]

Make the recipe DETAILED, PRACTICAL, and EASY TO FOLLOW. Each cooking instruction should be specific about temperature, time, and technique. Include what the food should look like at each stage.`
     }]
    }]
   })
  });

  const data = await response.json();
  if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
   return data.candidates[0].content.parts[0].text;
  }
  
  // Fallback if response is malformed
  return `❌ Could not generate recipe for "${userInput}" at this time. Please try again or choose from our instant recipes.`;
 } catch (error) {
  console.error("Gemini recipe generation error:", error);
  return `❌ Error generating recipe using Gemini API. Please try again.`;
 }
}

