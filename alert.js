
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

     // Get the current date and time
     let currentTime = new Date();
     let timeString = currentTime.toLocaleTimeString(); 
 

    setTimeout(() => {
        const section2 = document.getElementById('added');
        section2.innerHTML += ` <p style="
            padding: 15px;
            margin: 10px 0;
            border-left: 5px solid #4CAF50; 
            background-color: #e8f5e9;
            color: #333;
            font-size: 18px;
            font-family: Arial, sans-serif;
            border-radius: 3px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        ">You have completed the task 
       at:${timeString}
        </p>`; // 0 ms delay to add content immediately after the alert closes
    }
    )


  

    
    newText.classList.add('.added-text');
    section2.appendChild(newText);
  
 
}





const buttons = document.querySelectorAll('.best-btn');


buttons.forEach(button => {
    button.addEventListener('click', showAlert);
    

});





function boxClick(){
    window.location.href = 'new.html';
    
}

const box = document.getElementById("notun-page");
box.addEventListener('click', boxClick);








// hiden
document.getElementById('clear-btn').addEventListener('click', function() {
    const section = document.getElementById('added');
    section.style.display = 'none'; 
});
