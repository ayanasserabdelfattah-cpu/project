const searchInput = document.getElementById('search');
const itemList = document.getElementById('itemList').getElementsByClassName('col-md-4');
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i].textContent.toLowerCase();
        itemList[i].style.display = item.includes(filter) ? '' : 'none';
    }
});





// fetch("API_URL")
//     .then(response => response.json())
//     .then(doctor => {

//         document.querySelector(".doctor-image").src = doctor.image;
//         document.querySelector(".doctor-name").textContent = doctor.name;
//         document.querySelector(".doctor-specialization").textContent = doctor.specialization;

//     });


// لما يجى ال api