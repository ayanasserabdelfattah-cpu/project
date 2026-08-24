function Api() {

    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    var data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        password: password
    };

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {

            console.log("STATUS:", this.status);
            console.log("RESPONSE:", this.responseText);
                if (this.status == 201) {
            window.location.href = "Login.html";
        }

        }
    };

    xhttp.open(
        "POST",
        "http://127.0.0.1:8000/api/register",
        true
    );

    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");

    xhttp.send(JSON.stringify(data));
}

document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    Api();

});