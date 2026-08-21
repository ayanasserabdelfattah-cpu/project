
$(document).click(function (e) {
    if (!$(e.target).closest('.navbar').length) {
        $('.navbar-collapse').collapse('hide');
    }
});



const switchInput = document.getElementById('input');


// switchInput.addEventListener('change', () => {


// document.body.classList.toggle('dark' , switchInput.checked);
// });

// لما الصفحة تفتح
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    switchInput.checked = true;
}

switchInput.addEventListener('change', () => {
    document.body.classList.toggle('dark', switchInput.checked);

    localStorage.setItem('darkMode', switchInput.checked);
});







