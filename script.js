let jokepromise = new Promise((resolve, reject) => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json(); // JSON mein convert karo
    })
    .then((data) => {
      resolve(data.value); // Joke value ko resolve karo
    })
    .catch((error) => {
      reject(error); // Agar error ho to reject karo
    });
});

jokepromise
  .then((data) => {
    console.log("Joke:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });