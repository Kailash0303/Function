function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Examples
console.log(validateEmail("example@example.com")); // true
console.log(validateEmail("user.name+tag+sorting@example.com")); // true
console.log(validateEmail("invalid-email")); // false