
$(document).click(function (e) {
    if (!$(e.target).closest('.navbar').length) {
        $('.navbar-collapse').collapse('hide');
    }
});



const switchInput = document.getElementById('input');


switchInput.addEventListener('change', () => {


document.body.classList.toggle('dark' , switchInput.checked);
});






