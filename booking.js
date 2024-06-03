$(document).ready(() => {

    const nameFieldCheck = () => {
        const nameField = document.getElementById('name');

        if(nameField.value === '') {
            $('.name_error').slideDown();
            nameField.style.borderColor ='red';
        } else {
            $('.name_error').slideUp();
            nameField.style.borderColor = 'green';
        }
    }

    const emailValidation = () => {
        const emailField = document.getElementById('email');
        const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(emailField.value).toLowerCase());
    }

    const emailCheck = () => {
        const emailField = document.getElementById('email');

        if(emailField.value === '' || emailValidation != true) {
            $('.email_error').slideDown();
            emailField.style.borderColor ='red';
        } else {
            $('.email_error').slideUp();
            emailField.style.borderColor = 'green';
        }
    }

    const dateValidation = () => {
        const dateErrorElement = $('.date_error');
        const dateFields = document.querySelectorAll('.date');
        let hasEmptyField = false;
    
        dateFields.forEach(dateField => {
            if (dateField.value === '') {
                dateErrorElement.text('Please fill in all date fields.');
                dateErrorElement.slideDown();
                dateField.style.borderColor = 'red';
                hasEmptyField = true;
            } else {
                dateField.style.borderColor = '';
            }
        });
    
        if (hasEmptyField) {
            return;
        }
    
        const day = parseInt(document.getElementById('day').value, 10);
        const month = parseInt(document.getElementById('month').value, 10) - 1;
        const year = parseInt(document.getElementById('year').value, 10);
        
        const inputDate = new Date(year, month, day);
        const today = new Date();
    
        // Clear time part for comparison
        inputDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
    
        if (inputDate < today) {
            dateErrorElement.text('Please select a date in the future.');
            dateErrorElement.slideDown();
            dateFields.forEach(dateField => {
                dateField.style.borderColor = 'red';
            });
        } else {
            dateErrorElement.slideUp();
            dateFields.forEach(dateField => {
                dateField.style.borderColor = 'green';
            });
        }
    }
    

    const timeCheck = () => {
        const hours = document.getElementById('hrs').value;
        const minutes = document.getElementById('mins').value;

        if(hours === '' || minutes === '') {
            $('.time_error').text('Please fill in all time fields.');
            $('.time_error').slideDown();
            hours.style.borderColor ='red';
            minutes.style.borderColor ='red';
        } else if (hours > 23 || minutes > 59) {
            $('.time_error').text('Please select a valid time.');
            $('.time_error').slideDown();
            hours.style.borderColor ='red';
            minutes.style.borderColor ='red';
        }else {
            $('.time_error').slideUp();
            hours.style.borderColor = 'green';
            minutes.style.borderColor = 'green';
        }
    }
    




    $('.submit').on('click', (e) => {
        e.preventDefault();
        nameFieldCheck();
        emailCheck();
        dateValidation();
        timeCheck();
    })
})