// Description: This file contains the javascript for the index.html page

  function sendPrompt() {

    // hit /prompt endpoint in server with POST and form data
    const topic = document.getElementById("topic").value;
    const style = document.getElementById("style").value;
    const tone = document.getElementById("tone").value;
    const language = document.getElementById("language").value;

    const data = { topic, style, tone, language };
    console.log("data: " + JSON.stringify(data));
    fetch('/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      mode: 'cors'
    }).then(response => response.text()) // Parse the response as plain text
      .then(text => {
        console.log(text); // Should print
        document.getElementById("response").innerHTML = text;
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  
  
  }