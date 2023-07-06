/*
  Pig Latin Translator
  Miguel Rodriguez
  7-05-2023

  When the DOM content is fully loaded:
    - Define the translateToPigLatin function:
      - Split the input string into words.
      - Translate each word to Pig Latin based on the rules.
      - Join the translated words into a sentence.
      - Return the translated sentence.

    - Define the translate function:
      - Get the input text.
      - Call the translateToPigLatin function with the input text.
      - Set the output text.

    - Add a click event listener to the "Translate" button:
      - Call the translate function.
      
*/

document.addEventListener("DOMContentLoaded", function() {
  // Event listener to ensure code is executed after the HTML document is fully loaded

  function translateToPigLatin(input) {
    // Function to translate input text to Pig Latin

    if (!input || input.length === 1) {
      // Check if input is empty or a single character
      return "Input cannot be translated.";
    }

    let words = input.split(" ");
    // Split the input into individual words

    let translatedWords = [];

    for (let i = 0; i < words.length; i++) {
      // Loop through each word in the input

      let word = words[i].toLowerCase();
      // Convert word to lowercase for consistency

      let translatedWord;

      if (isVowel(word[0])) {
        // Check if word starts with a vowel
        translatedWord = word + "way";
        // Append 'way' to the end of the word
      } else if (isConsonant(word[0]) && isConsonant(word[1])) {
        // Check if word starts with two consonants
        translatedWord = word.slice(2) + word.slice(0, 2) + "ay";
        // Move the two consonants to the end of the word and append 'ay'
      } else if (isConsonant(word[0])) {
        // Check if word starts with a single consonant
        translatedWord = word.slice(1) + word[0] + "ay";
        // Move the first consonant to the end of the word and append 'ay'
      } else {
        // Word starts with a non-alphabetic character, no translation needed
        translatedWord = word;
      }

      translatedWords.push(translatedWord);
      // Add the translated word to the array of translated words
    }

    return translatedWords.join(" ").trim();
    // Join the translated words back into a sentence, trimming whitespace
  }

  function isVowel(letter) {
    // Function to check if a letter is a vowel
    return ["a", "e", "i", "o", "u"].includes(letter);
  }

  function isConsonant(letter) {
    // Function to check if a letter is a consonant
    return !isVowel(letter);
  }

  function translate() {
    // Function to handle the translation when the "Translate" button is clicked

    let inputElement = document.getElementById("inputText");
    // Get the input text area element

    let outputElement = document.getElementById("output");
    // Get the output element

    let inputText = inputElement.value;
    // Get the value of the input text area

    let translation = translateToPigLatin(inputText);
    // Translate the input text to Pig Latin

    outputElement.textContent = translation;
    // Display the translation in the output element
  }

  let translateButton = document.getElementById("translateButton");
  // Get the "Translate" button element

  translateButton.addEventListener("click", translate);
  // Add click event listener to the "Translate" button
});
