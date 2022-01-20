module.exports = function toReadable(number) {
    let tNum = number.toString();
    let lenS = tNum.length;
    let array = [["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",],
    ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",],
    ["thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion",]]
    let textRevers = "";
    if (number == 0) {
        textRevers = "zero";
    } else {
        for (let i = 0; i < lenS; i += 3) {
            let text = "";
            if (+tNum.substring(lenS - i - 3, lenS - i - 2) != 0) text += `${array[0][+tNum.substring(lenS - i - 3, lenS - i - 2)]} hundred`;
            if (+tNum.substring(lenS - i - 2, lenS - i) != 0) {
                +tNum.substring(lenS - i - 2, lenS - i) <= 19
                    ? (text += ` ${array[0][+tNum.substring(lenS - i - 2, lenS - i)]}`)
                    : (text += ` ${array[1][+tNum.substring(lenS - i - 2, lenS - i - 1)]} ${array[0][+tNum.substring(lenS - i, lenS - i - 1)]}`);
            };
            if (i != 0 && text) text += ` ${array[2][i / 3 - 1]}`;
            textRevers = text + textRevers;
        }
    }
    textRevers = textRevers.replace(/\s{2,}/g, ' ')
    textRevers = textRevers.trim();
    return textRevers;
}
