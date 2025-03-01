
 function showAlert(event) {
    let numberDisplay = document.getElementById("changedNumber");

    let currentNumber = parseInt(numberDisplay.textContent);

    let oldNumber = document.getElementById("changingNumber")
    let convertedNumber = parseInt(oldNumber.textContent);
    alert(" Board updated successfully"); 
    currentNumber -= 1;

    numberDisplay.textContent = currentNumber;

    convertedNumber += 1;

    oldNumber.textContent = convertedNumber;


    event.target.disabled = true;

 
}




// another page e jai

const buttons = document.querySelectorAll('.best-btn');


buttons.forEach(button => {
    button.addEventListener('click', showAlert);
});



function boxClick(){
    window.location.href = 'new.html';
    
}

const box = document.getElementById("notun-page");
box.addEventListener('click', boxClick);



// ager page e fire asi





