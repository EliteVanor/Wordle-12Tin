let currentWord = '';

function showRandomWord() {
    const words = [
        { word: "Erudite", definition: "Having or showing great knowledge or learning." },
        { word: "Magnificent", definition: "Very impressive and beautiful." },
        { word: "Courageous", definition: "Showing or having courage." },
        { word: "Hilarious", definition: "Extremely funny." },
        { word: "Powerful", definition: "Having a lot of strength, influence, or authority." },
        { word: "Rapid", definition: "Moving or happening quickly." },
        { word: "Compassionate", definition: "Feeling or showing sympathy and concern for others." },
        { word: "Vital", definition: "Essential for life or existence." },
        { word: "Truthful", definition: "Telling or representing the truth." },
        { word: "Ingenious", definition: "Clever and original." }
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    currentWord = randomWord;
    document.getElementById("wordOfDay").textContent = randomWord.word;
    document.getElementById("definition").style.display = 'none';
}

function revealDefinition() {
    if (currentWord) {
        document.getElementById("definition").textContent = currentWord.definition;
        document.getElementById("definition").style.display = 'block';
    }
}

function addNewWord(event) {
    event.preventDefault();
    const newWord = document.getElementById("newWord").value;
    const newDefinition = document.getElementById("newDefinition").value;
    const wordList = document.getElementById("wordList");
    const newEntry = document.createElement("li");
    newEntry.innerHTML = `<strong>${newWord}:</strong> ${newDefinition}`;
    wordList.appendChild(newEntry);
    document.getElementById("newWord").value = "";
    document.getElementById("newDefinition").value = "";
}
