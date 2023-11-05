document.addEventListener("DOMContentLoaded", function () {
    showSavedWords();
  });
  
  const sampleWords = [
    "Erudite - Having or showing great knowledge or learning.",
    "Magnificent - Very impressive and beautiful.",
    "Courageous - Showing or having courage.",
    "Hilarious - Extremely funny.",
    "Powerful - Having a lot of strength, influence, or authority.",
    "Rapid - Moving or happening quickly.",
    "Compassionate - Feeling or showing sympathy and concern for others.",
    "Vital - Essential for life or existence.",
    "Truthful - Telling or representing the truth.",
    "Ingenious - Clever and original.",
  ];
  
  function showSavedWords() {
    const savedWords = sampleWords;
    const wordList = document.getElementById("wordList");
  
    if (savedWords.length === 0) {
      wordList.innerHTML = "<p>No words saved yet.</p>";
    } else {
      const listItems = savedWords.map((word) => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        return listItem;
      });
      listItems.forEach((item) => {
        wordList.appendChild(item);
      });
    }
  }
  