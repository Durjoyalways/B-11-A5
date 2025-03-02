
 const today = new Date();


 const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const dayOfWeek = daysOfWeek[today.getDay()];


 const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const month = monthsOfYear[today.getMonth()];

 const date = today.getDate();

 const year = today.getFullYear();

 const formattedDate = `${dayOfWeek}, ${month} ${date}, ${year}`;


 document.getElementById('currentDate').innerText = formattedDate;