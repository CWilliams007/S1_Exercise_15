"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
    Author: Chad Williams
    Date:   4.11.19
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function () {
      // retrieve field value pairs from url
      var formData = location.search.slice(1);
      formData = formData.replace(/\+/g, " ");
      formData = decodeURIComponent(formData);
      var formFields = formData.split(/[&=]/g);

      // write the field values to the order form
      document.forms.order.elements.orderDate.value = formFields[1];
      document.forms.order.elements.modelName.value = formFields[5];
      document.forms.order.elements.qty.value = formFields[7];
      document.forms.order.elements.initialCost.value = formFields[9];
      document.forms.order.elements.protectionName.value = formFields[13];
      document.forms.order.elements.protectionCost.value = formFields[15];
      document.forms.order.elements.subtotal.value = formFields[17];
      document.forms.order.elements.salesTax.value = formFields[19];
      document.forms.order.elements.totalCost.value = formFields[21];


});

window.addEventListener('load', function () {
      document.getElementById("subButton").onclick = runSubmit;
      document.getElementById('cardName').oninput = validateName;
      document.getElementById('expMonth').onchange = validateMonth;
      document.getElementById('expYear').onchange = validateYear;
      document.getElementById('cvc').oninput = validateCVC;
});

function runSubmit() {
      validateName();
      validateCredit();
      validateNumber();
      validateMonth();
      validateYear();
      validateCVC();
}

function validateCVC() {
      var cardCVC = document.getElementById('cvc');
      var creditCard = document.querySelector('input[name="credit"]:checked').value;
      if (cardCVC.validity.valueMissing) {
            cardCVC.setCustomValidity("Enter your CVC number");
      } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
            cardCVC.setCustomValidity('Enter a 4-digit CVC number');
      } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
            cardCVC.setCustomValidity('Enter a 3-digit CVC number');
      } else {
            cardCVC.setCustomValidity('')
      }
}

function validateMonth() {
      var cardMonth = document.getElementById('cardMonth');
      if (cardMonth.selectedIndex === 0) {
            cardMonth.setCustomValidity("Enter your card month");
      } else {
            cardMonth.setCustomValidity('');
      }
}

function validateYear() {
      var cardYear = document.getElementById('cardYear');
      if (cardYear.selectedIndex === 0) {
            cardYear.setCustomValidity("Enter your card year");
      } else {
            cardYear.setCustomValidity('');
      }
}

function validateNumber() {
      var cardNumber = document.getElementById('cardNumber');
      if (cardNumber.validity.valueMissing) {
            cardNumber.setCustomValidity("Enter your card number");
      } else if (cardNumber.validity.patternMismatch) {
            cardNumber.setCustomValidity('Enter a valid card number');
      } else {
            cardNumber.setCustomValidity('');
      }
}

function validateCredit() {
      var creditCard = document.forms.payment.elements.credit[0];
      if (creditCard.validity.valueMissing) {
            creditCard.setCustomValidity("Select your credit card")
      } else {
            creditCard.setCustomValidity('');
      }
}


function validateName() {
      var cardName = document.getElementById('cardName');
      if (cardName.validity.valueMissing) {
            cardName.setCustomValidity('Enter your name as it appears on your card');
      } else {
            cardName.setCustomValidity('');
      }
};

function sumDigits(numStr) {
      var digitTotal = 0;
      for (var i = 0; i < numStr.length; i++) {
            digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
}

function luhn(idNum) {
      // retrieve the odd numbered digits
      // retrieve the even numbered digits
      // return whether the sum of the digists is divisible by 10 

}