function thankYou(){

  var url_string = window.location.href;
  var decoded = decodeURI(url_string);
  var url = new URL(decoded);
  var name = url.searchParams.get("Name");

  var nameString = name.split(" ");
  var firstName = nameString[0];


  console.log(nameString);
  console.log(firstName);

  const thankYouMessage = document.querySelector('#thank-you-message-heading');

  thankYouMessage.innerHTML =
  `
  <h1 class="display-4 text-center mb-3">
    Thank you, ${firstName}.
  </h1>
  `
};

thankYou();
