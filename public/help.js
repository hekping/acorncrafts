const cardNumberInput = document.getElementById("cardNumber");
const cardTypeSelect = document.getElementById("cardType");



cardNumberInput.addEventListener("input", (event) => {
  const cardNumber = cardNumberInput.value;
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
  const dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const maestroRegex = /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/;
  const unionPayRegex = /^(62|88)\d{14,17}$/;
  const rupayRegex = /^6(?:011|5[0-9]{2})\d{12}$/;
  const mirRegex = /^220[0-4]\d{12}$/;
  const carteBancaireRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[0-9]{14})$/;
  const bcmcRegex = /^(?:6706|6771|6709)[0-9]{12}$/;
  const eloRegex = /^[0-9]{16}$/;
  const hiperCardRegex = /^606282\d{10}(\d{3})?$/;
  const auraRegex = /^(5078\d{2})(\d{2})(\d{11})$/;
  const kcbRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const baiduJcbRegex = /^(?:30[0-5][0-9]|31\d{2}|\d{4})\d{8,10}$/;
  const cabalRegex =
      /^(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400[0-9]|6044[1-9][0-9]|6045[0-9]{2}|6047[0-9]{2}|6048[0-9]{2}|6049[01][0-9]|60492[0-5])\d{10}(?:\d{3})?$/;
  const napasRegex = /^(?:9671|968)[0-9]{12}$/;

  let selectedCardType = null;
  if (visaRegex.test(cardNumber)) {
    selectedCardType = "visa";
  } else if (mastercardRegex.test(cardNumber)) {
    selectedCardType = "mastercard";
  } else if (amexRegex.test(cardNumber)) {
    selectedCardType = "amex";
  } else if (discoverRegex.test(cardNumber)) {
    selectedCardType = "discover";
  } else if (jcbRegex.test(cardNumber)) {
    selectedCardType = "jcb";
  } else if (dinersClubRegex.test(cardNumber)) {
    selectedCardType = "dinersclub";
  } else if (maestroRegex.test(cardNumber)) {
    selectedCardType = "maestro";
  } else if (unionPayRegex.test(cardNumber)) {
    selectedCardType = "unionpay";
  } else if (rupayRegex.test(cardNumber)) {
    selectedCardType = "rupay";
  } else if (mirRegex.test(cardNumber)) {
    selectedCardType = "mir";
  } else if (carteBancaireRegex.test(cardNumber)) {
    selectedCardType = "cartebancaire";
  } else if (bcmcRegex.test(cardNumber)) {
    selectedCardType = "bcmc";
  } else if (eloRegex.test(cardNumber)) {
    selectedCardType = "elo";
  } else if (hiperCardRegex.test(cardNumber)) {
    selectedCardType = "hipercard";
  } else if (auraRegex.test(cardNumber)) {
    selectedCardType = "aura";
  } else if (kcbRegex.test(cardNumber)) {
    selectedCardType = "kcb";
  } else if (baiduJcbRegex.test(cardNumber)) {
    selectedCardType = "baidujcb";
  } else if (cabalRegex.test(cardNumber)) {
    selectedCardType = "cabal";
  } else if (napasRegex.test(cardNumber)) {
    selectedCardType = "napas";
  }

  if (selectedCardType) {
    cardTypeSelect.value = selectedCardType;
  }
  event.target.value = event.target.value;
});


// Get the phone number input field
var phoneInput = document.getElementById("phone");

// Add an event listener to the phone number input field
phoneInput.addEventListener("input", function(e) {
  // Get the current value of the phone number input field
  var value = e.target.value;

  // Remove all non-digit characters from the input value
  value = value.replace(/\D/g, '');

  // Add a hyphen after the first three digits if the value is at least 4 digits long
  if (value.length >= 4) {
    value = value.slice(0, 3) + "-" + value.slice(3);
  }

  // Set the formatted value back to the input field
  e.target.value = value;
});

// Add an event listener to the phone number input field for keydown event
phoneInput.addEventListener("keydown", function(e) {
  // Get the current cursor position
  var cursorPosition = e.target.selectionStart;

  // Check if the backspace key was pressed and if the cursor is right after the hyphen
  if (e.key === "Backspace" && e.target.value.charAt(cursorPosition-1) === "-") {
    // Prevent the default behavior of the backspace key
    e.preventDefault();

    // Move the cursor one position to the left
    e.target.setSelectionRange(cursorPosition-1, cursorPosition-1);
  }
});
const ssnInput = document.getElementById("ssn");

ssnInput.addEventListener("input", (event) => {
  const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  const groups = input.match(/^(\d{0,3})(\d{0,2})(\d{0,4})$/); // Split input into groups of up to 3, 2, and 4 digits

  if (groups) {
    const formatted = `${groups[1]}${groups[1] && groups[2] ? "-" : ""}${
        groups[2]
    }${groups[2] && groups[3] ? "-" : ""}${groups[3]}`; // Add hyphens between groups
    event.target.value = formatted;
  }
});


const cardExpiryInput = document.getElementById("cardExpiry");

cardExpiryInput.addEventListener("input", (event) => {
  const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  const groups = input.match(/^(\d{0,2})(\d{0,2})$/); // Split input into groups of up to 2 digits

  if (groups) {
    const formatted = `${groups[1]}${groups[1] && groups[2] ? "/" : ""}${
        groups[2]
    }`; // Add slash between groups
    event.target.value = formatted;
  }
});

