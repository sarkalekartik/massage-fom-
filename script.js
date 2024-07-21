function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    // Additional validation logic can be added here

    // Show success message
    showSuccessMessage();
    return false; // Prevent default form submission
}

function showSuccessMessage() {
    var formContainer = document.querySelector('.contact-container');
    formContainer.innerHTML = '<h2>Thank you!</h2><p>Your message has been sent successfully.</p>';
}
