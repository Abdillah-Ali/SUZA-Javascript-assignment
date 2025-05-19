function validateCard(cardNumber) {
    const patterns = [
      { type: "American Express",
        regex: /^3[47][0-9]{13}/ ,
        type: "Master Card",
        regex: /^5[1-5][0-9]14/ },
      { type: "VISA", regex: /^4[0-9]{12}([0-9]{3})?/ ,
       type: "Discover", regex: /^6011[0-9]11,12/ },
      { type: "Diners Club", regex: /^30[0-5][0-9]{11,13}/ }
    ];
  
    for (let card of patterns) {
      if (card.regex.test(cardNumber)) {
        return `Valid{card.type} card`;}
      
    
    }
    return "Invalid card number. Please check the format.";
  }
  
  // Call the function here
  console.log(validateCard("341234567890123")); 
  console.log(validateCard("5112345678901234"));
  console.log(validateCard("4012345678901"));
  console.log(validateCard("6011123456789012"));
  console.log(validateCard("30512345678901"));
