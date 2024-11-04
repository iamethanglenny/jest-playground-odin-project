function caesarCipher(str, shift) {
    return str
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
}

function shiftChar(char, shift) {
    if (isUpperCase(char)) {
        return shiftWithinAlphabet(char, shift, "A", "Z");
    } else if (isLowerCase(char)) {
        return shiftWithinAlphabet(char, shift, "a", "z");
    } else {
        return char;
    }
}

function isUpperCase(char) {
    return char >= "A" && char <= "Z";
}

function isLowerCase(char) {
    return char >= "a" && char <= "z";
}

function shiftWithinAlphabet(char, shift, startChar, endChar) {
    const start = startChar.charCodeAt(0);
    const end = endChar.charCodeAt(0);
    const newCharCode = ((char.charCodeAt(0) - start + shift) % 26 + 26) % 26 + start;
    return String.fromCharCode(newCharCode);
}

module.exports = caesarCipher;