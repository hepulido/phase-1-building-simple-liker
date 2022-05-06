// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const init = () => {
  const inputForm = document.querySelector('article');
  inputForm.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
    fetch(mimicServerCall)
    .then(response => response.json())
    .catch (error => {
      alert("Wrong name! Please try again!");
      console.log(error.message);
      document.body.append(error.message)
    });
    
    // .then(data => {
    //   const title = document.querySelector('section#movieDetails h4');
    //   const summary = document.querySelector('section#movieDetails p');
    //   title.innerText = data.title;
    //   summary.innerText = data.summary;
    // });
  });
}

document.addEventListener('DOMContentLoaded', init);



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
