document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      queryType: document.querySelector('input[name="queryType"]:checked').value,
      message: document.getElementById('message').value,
      consent: document.getElementById('consent').checked,
    };
  
    // Simulate form submission (replace with an actual API call if necessary)
    console.log('Form Submitted:', formData);
    alert('Thank you for your submission! We will get back to you shortly.');
    document.getElementById('contactForm').reset();
  });
  // script.js
/*document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Gather data
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log or send to a server
    console.log('Form Submitted:', data);
    alert('Thank you for contacting us!');

    // Optionally, reset the form
    this.reset();
});*/


// script.js
/*document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Collect and display form data
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Submitted:', data);
    alert('Thank you for reaching out! We will get back to you soon.');

    // Reset form fields
    this.reset();
});*/


  