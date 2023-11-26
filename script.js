// Get the label element
var label = document.querySelector('label');

label.addEventListener('click', function() {
    // Check if the body has the 'light' class
    var isLight = document.body.classList.contains('light');

    if (isLight) {
        // If it's light, switch to dark
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        // If it's dark, switch to light
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
});
