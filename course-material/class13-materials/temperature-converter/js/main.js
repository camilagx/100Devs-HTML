//Write your pseduo code first! 


document.querySelector("#convert").addEventListener('click', () => {
    //Enter in a value, have the value be converted from celcius to fahrenheit and display it in the DOM
    // get input element 
    //Grab the input celcius value and store in variable
    let celcius = document.querySelector("#weather").value;

    // Convert to fahrenheit using this formula (Celsius * 1.8) + 32
    // Store in variable
    let fahrenheit = (celcius * 1.8) + 32;

    // get the element where we'll be displaying the fahrenheit value
    // insert in its innerText
    document.querySelector('#result').innerText = fahrenheit;
});