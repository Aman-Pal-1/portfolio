document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("signUpBtn");
    const signInBtn = document.getElementById("signInBtn");
    const signUpForm = document.querySelector(".lp-signup");
    const signInForm = document.querySelector(".lp-signin");

    signUpBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signUpForm.classList.add("active");
        signInForm.classList.remove("active");
    });

    signInBtn.addEventListener("click", function (e) {
        e.preventDefault();
        signInForm.classList.add("active");
        signUpForm.classList.remove("active");
    });
});
