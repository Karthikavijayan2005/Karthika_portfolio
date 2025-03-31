document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thank you for your message, ' + name + '! I will get back to you soon.';
        document.getElementById('contact-form').reset(); // Reset form fields
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
    }
});