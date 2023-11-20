function checkAge() {
    const dobInput = document.getElementById('dob');
    const dobValue = new Date(dobInput.value);

    const today = new Date();
    age = today.getFullYear() - dobValue.getFullYear();

    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
    let birthMonth = dobValue.getMonth();
    let birthDay = dobValue.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    const ageMessage = document.getElementById('ageMessage');
    if (isNaN(age))
    {
        ageMessage.textContent = 'The date is incorrect, try again.';
    }
    else
    {
        ageMessage.textContent = `Your age is ${age} years.`;

        ageMessage.style.display = 'block';

        if (age < 18) {
            ageMessage.innerHTML += 'You need parental permission to use this site.';
        }
        else {
            let dayOfWeek = getDayOfWeek(dobValue.getDay());
            ageMessage.innerHTML += 'You were born on a ' + dayOfWeek;

            let continueBttn = document.getElementById('continueBttn');
            continueBttn.style.display = 'block';
        }
    }
}

function getDayOfWeek(dayIndex) {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayIndex];
}

function leaveAgeCheck() {
    let popup = document.getElementById('age-control');
    popup.style.display = 'none';
}