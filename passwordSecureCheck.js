const passwordField = document.querySelector(".passwordField");
const passwordSubmit = document.querySelector(".passwordSubmit");
// results
const lengthCheck = document.querySelector(".lengthCheck");
const caseVarietyCheck = document.querySelector(".caseVarietyCheck");
const specialCharactersCheck = document.querySelector(".specialCharactersCheck");
// master result
const result = document.querySelector(".result");

function checkLength() {
    const password = String(passwordField.value);
    if (password.length >= 12) {
        lengthCheck.textContent = "";
        return true;
    } else {
        lengthCheck.textContent = "- Your password is too short! (min. 12 characters)";
        return false;
    }
}

function checkCaseVariety() {
    const password = String(passwordField.value);
    let upperCaseCount = 0;
    let lowerCaseCount = 0;

    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            upperCaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowerCaseCount++;
        }
    }

    if (upperCaseCount >= 1 && lowerCaseCount >= 1) {
        caseVarietyCheck.textContent = "";
        return true;
    } else {
        caseVarietyCheck.textContent = "- Your password does not have the combination of uppercase and lowercase letters";
        return false;
    }
}

function checkSpecialCharacters() {
    const password = String(passwordField.value);
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (specialCharacters.test(password)) {
        specialCharactersCheck.textContent = "";
        return true;
    } else {
        specialCharactersCheck.textContent = "- Your password does not contain any special character";
        return false;
    }
}

function runTest() {
    const isLengthOkay = checkLength();
    const isCaseVarietyOkay = checkCaseVariety();
    const isSpecialCharactersOkay = checkSpecialCharacters();

    if (isLengthOkay && isCaseVarietyOkay && isSpecialCharactersOkay) {
        result.textContent = "Your password is secure!";
        result.style.color = "#90EE90";
    } else {
        result.textContent = "Your password is not secure.";
        result.style.color = "#CD5C5C";
    }
}

passwordSubmit.addEventListener("click", runTest);

// make enter work as a submit button
passwordField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        runTest();
    }
});