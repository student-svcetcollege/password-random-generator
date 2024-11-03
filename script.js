const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "~!#$%^@&*()_+/";

const passwordField = document.getElementById('password');
const passwordLength = document.getElementById('passlen');
const includeUppercase = document.getElementById('uppercase');
const includeLowercase = document.getElementById('lowercase');
const includeNumbers = document.getElementById('number');
const includeSymbols = document.getElementById('symbols');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePassword = () => {
    let password = "";
    const length = parseInt(passwordLength.value);
    const options = [];

    if (includeUppercase.checked) options.push(upperset);
    if (includeLowercase.checked) options.push(lowerset);
    if (includeNumbers.checked) options.push(numberset);
    if (includeSymbols.checked) options.push(symbolset);

    if (options.length === 0) {
        passwordField.value = "Select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomSet = options[Math.floor(Math.random() * options.length)];
        password += getRandomData(randomSet);
    }
    passwordField.value = password;
};

document.getElementById("btn").addEventListener("click", generatePassword);
