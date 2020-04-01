export function capitalize(sentence) {
    let capitalizedSentence = [];

    sentence
      .toLowerCase()
      .split(" ")
      .map(word => {
        return capitalizedSentence.push(word[0].toUpperCase() + word.slice(1));
      });

    return capitalizedSentence.join(" ");
  }