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
  const cameraAngle
