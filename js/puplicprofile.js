// =============================
// Image Preview
// =============================

const imageInput = document.getElementById("imageInput");
const profileImage = document.getElementById("profileImage");

let savedImage = profileImage.src;

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        profileImage.src = URL.createObjectURL(file);
    }

});


// =============================
// Profile Elements
// =============================

const saveProfile = document.getElementById("saveProfile");
const editProfile = document.getElementById("editProfile");
const cancelProfile = document.getElementById("cancelProfile");

const profileForm = document.querySelector(".profile-form");
const profileActions = document.querySelector(".profile-actions");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");


// const profileImage = document.getElementById("profileImage");       اكنهم موجدين بس شلهم علشان متكررين فوق
// const imageInput = document.getElementById("imageInput");


// =============================
// Last Saved Data
// =============================

let savedProfile = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
    image: profileImage.src
};


// =============================
// Save
// =============================

saveProfile.addEventListener("click", function () {

    // حفظ آخر صورة
    savedImage = profileImage.src;

    // حفظ آخر بيانات
    savedProfile = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        image: profileImage.src
    };
//  اخفاء ال form
    profileForm.style.display = "none";
    // اظهار ال actions
    profileActions.style.display = "flex";
});


// =============================
// Edit
// =============================

editProfile.addEventListener("click", function () {

    // بيانات البروفايل المحفوظة تظل موجودة
    nameInput.value = savedProfile.name;
    emailInput.value = savedProfile.email;
    passwordInput.value = savedProfile.password;
    confirmPasswordInput.value = savedProfile.confirmPassword;

    // إظهار الصورة الحالية
    profileImage.src = savedImage;

    // فتح التعديل
    profileForm.style.display = "block";
    profileActions.style.display = "none";
});

// =============================
// Cancel
// =============================

cancelProfile.addEventListener("click", function () {

    const confirmCancel = confirm(
        "Are you sure you want to cancel your changes?"
    );

    if (!confirmCancel) {
        return;
    }

    // رجوع لآخر بيانات محفوظة
    nameInput.value = savedProfile.name;
    emailInput.value = savedProfile.email;
    passwordInput.value = savedProfile.password;
    confirmPasswordInput.value = savedProfile.confirmPassword;

    // رجوع لآخر صورة محفوظة
    profileImage.src = savedImage;

    // إلغاء اختيار الملف الحالي
    imageInput.value = "";

    profileForm.style.display = "none";
    profileActions.style.display = "flex";
});


