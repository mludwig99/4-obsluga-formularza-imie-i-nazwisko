console.log('Warsztaty-obsługa-formularza');




const submitForm = (event) => {
    event.preventDefault();

    let fName = document.querySelector('[name=fname]');
    let lastName = document.querySelector('[name=lname]')

    console.log(`Imie;  ${fName.value}, Nazwisko; ${lastName.value} `);

}

let form = document.getElementById('form');
form.addEventListener('submit', submitForm);
