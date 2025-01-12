// Function to get a random item from an array
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  // Function to load JSON data from a file using fetch
  async function loadJSON(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  }
  
  // Function to select and display random items from both activities and meals
  async function pickRandomItems() {
    // Load the activities and meals JSON files
    const activitiesData = await loadJSON('activities.json');
    const mealsData = await loadJSON('meals.json');
  
    // Randomly pick one item per family activity type
    const randomOutdoorActivity = getRandomItem(activitiesData.familyActivities[0].activities);
    const randomIndoorActivity = getRandomItem(activitiesData.familyActivities[1].activities);
  
    // Randomly pick one item per meal type
    const randomBreakfast = getRandomItem(mealsData.meals[0].mealIdeas);
    const randomLunch = getRandomItem(mealsData.meals[1].mealIdeas);
    const randomDinner = getRandomItem(mealsData.meals[2].mealIdeas);
  
    // Display the results on the web page
    document.getElementById('meal-output').innerHTML = `
      <h2>Meals</h2>
      <p><strong>Breakfast:</strong> ${randomBreakfast}</p>
      <p><strong>Lunch:</strong> ${randomLunch}</p>
      <p><strong>Dinner:</strong> ${randomDinner}</p>
    `;
  
    document.getElementById('activity-output').innerHTML = `
      <h2>Activities</h2>
      <p><strong>Outdoor Activity:</strong> ${randomOutdoorActivity}</p>
      <p><strong>Indoor Activity:</strong> ${randomIndoorActivity}</p>
    `;
  }
  
  // Call the function to pick and display random items
  pickRandomItems();
  