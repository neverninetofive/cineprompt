// Definiere die verfügbaren Werte für jeden Dropdown-Menüpunkt
const subjectValues = ["An old man", "A young woman", "A child", "A family", "A group of friends"];
const genreValues = ["Action", "Drama", "Comedy", "Horror", "Sci-Fi Thriller"];
const locationValues = ["Western countryside in Nevada", "A busy city street in Tokyo", "A deserted beach in Hawaii", "A remote village in Africa", "A forest in Germany"];
const weatherValues = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"];
const cameraAngleValues = ["Close-up", "Medium shot", "Wide shot", "Bird's eye view", "Over-the-shoulder"];
const shotOnValues = ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic"];
const lightingValues = ["Cinematic", "Natural", "High-key", "Low-key", "Neon"];
const timeOfDayValues = ["Sunrise", "Morning", "Afternoon", "Evening", "Night"];
const filmLookValues = ["Noir", "Vintage", "Modern", "Grainy", "Saturated"];
const inStyleOfPhotographerValues = ["Ansel Adams", "Annie Leibovitz", "Steve McCurry", "Peter Lindbergh", "Helmut Newton"];
const inStyleOfFilmmakerValues = ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese", "Alfred Hitchcock"];

// Definiere die Konstanten für die IDs der HTML-Elemente
const generateButtonId = "generate-button";
const subjectDropdownId = "subject";
const genreDropdownId = "genre";
const locationDropdownId = "location";
const weatherDropdownId = "weather";
const cameraAngleDropdownId = "camera-angle";
const shotOnDropdownId = "shot-on";
const lightingDropdownId = "lighting";
const timeOfDayDropdownId = "time-of-day";
const filmLookDropdownId = "filmlook";
const inStyleOfPhotographerDropdownId = "in-style-of-photographer";
const inStyleOfFilmmakerDropdownId = "in-style-of-filmmaker";
const aspectRatioDropdownId = "aspect-ratio";
const qualityDropdownId = "quality";
const promptOutputId = "prompt-output";

// Funktion, um das Dropdown-Menü mit den verfügbaren Werten zu füllen
function populateDropdown(dropdownId, values) {
  const dropdown = document.getElementById(dropdownId);
  values.forEach(value => {
    const option = document.createElement("option");
    option.textContent = value;
    dropdown.appendChild(option);
  });
}

// Funktion, um den generierten Prompt anzuzeigen
function generatePrompt() {
  // Hole alle ausgewählten Werte aus den Dropdown-Menüs
  const subject = document.getElementById(subjectDropdownId).value;
  const genre = document.getElementById(genreDropdownId).value;
  const location = document.getElementById(locationDropdownId).value;
  const weather = document.getElementById(weatherDropdownId).value;
  const cameraAngle = document.getElementById(cameraAngleDropdownId).value;
  const shotOn = document.getElementById(shotOnDropdownId).value;
  const lighting = document.getElementById(lightingDropdownId).value;
  const timeOfDay = document.getElementById(timeOfDayDropdownId).value;
  const filmLook = document.getElementById(filmLookDropdownId).value;
  const inStyleOfPhotographer = document.getElementById(inStyleOfPhotographerDropdownId).value;
  const inStyleOfFilmmaker = document.getElementById(inStyleOfFilmmakerDropdownId).value;
  const aspectRatio = document.getElementById(aspectRatioDropdownId).value;
  const quality = document.getElementById(qualityDropdownId).value;
  
  // Generiere den Prompt-Text
  const promptText = ${subject}, ${genre} film, shot on ${shotOn} in ${location}, ${weather} weather, ${cameraAngle} shot, ${lighting} lighting, ${timeOfDay}, in the style of ${inStyleOfPhotographer} and ${inStyleOfFilmmaker}, ${filmLook} film look;
  
  // Füge die optionalen Parameter hinzu
  if (aspectRatio) {
  promptText += --ar ${aspectRatio};
  }
  if (quality) {
  promptText += --q ${quality};
  }
  
  // Zeige den generierten Prompt im Output-Feld an
  const promptOutput = document.getElementById(promptOutputId);
  promptOutput.textContent = promptText;
  }
  
  // Füge die Event-Listener für das Dropdown-Menü und den Generate-Button hinzu
document.addEventListener("DOMContentLoaded", () => {
  // Fülle alle Dropdown-Menüs mit den verfügbaren Werten
  populateDropdown(subjectDropdownId, subjectValues);
  populateDropdown(genreDropdownId, genreValues);
  populateDropdown(locationDropdownId, locationValues);
  populateDropdown(weatherDropdownId, weatherValues);
  populateDropdown(cameraAngleDropdownId, cameraAngleValues);
  populateDropdown(shotOnDropdownId, shotOnValues);
  populateDropdown(lightingDropdownId, lightingValues);
  populateDropdown(timeOfDayDropdownId, timeOfDayValues);
  populateDropdown(filmLookDropdownId, filmLookValues);
  populateDropdown(inStyleOfPhotographerDropdownId, inStyleOfPhotographerValues);
  populateDropdown(inStyleOfFilmmakerDropdownId, inStyleOfFilmmakerValues);
  populateDropdown(aspectRatioDropdownId, aspectRatioValues);
  populateDropdown(qualityDropdownId, qualityValues);

  const generateButton = document.getElementById(generateButtonId);
  generateButton.addEventListener("click", () => {
    // Hole alle ausgewählten Werte aus den Dropdown-Menüs
    const subject = document.getElementById(subjectDropdownId).value;
    const genre = document.getElementById(genreDropdownId).value;
    const location = document.getElementById(locationDropdownId).value;
    const weather = document.getElementById(weatherDropdownId).value;
    const cameraAngle = document.getElementById(cameraAngleDropdownId).value;
    const shotOn = document.getElementById(shotOnDropdownId).value;
    const lighting = document.getElementById(lightingDropdownId).value;
    const timeOfDay = document.getElementById(timeOfDayDropdownId).value;
    const filmLook = document.getElementById(filmLookDropdownId).value;
    const inStyleOfPhotographer = document.getElementById(inStyleOfPhotographerDropdownId).value;
    const inStyleOfFilmmaker = document.getElementById(inStyleOfFilmmakerDropdownId).value;
    const aspectRatio = document.getElementById(aspectRatioDropdownId).value;
    const quality = document.getElementById(qualityDropdownId).value;

    // Erstelle den generierten Prompt-Text
    const promptOutput = `A ${subject} in a ${genre} movie, shot on a ${shotOn} camera in ${location} on a ${weather} day. Shot from a ${cameraAngle} with ${lighting} lighting during ${timeOfDay}. Give it a ${filmLook} look, inspired by ${inStyleOfPhotographer} photography and directed in the style of ${inStyleOfFilmmaker}. --ar ${aspectRatio} --q ${quality}`;

    // Setze den generierten Prompt-Text im HTML-Element
    document.getElementById(promptOutputId).textContent = promptOutput;
  });
});