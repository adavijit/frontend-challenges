import { ones, tens, teens } from "./constants"

// Function to convert numbers less than 1000 into words
export const convertLessThanOneThousand = (num) => {
    let result = '';

    if (num >= 100) {
        result += ones[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
    }

    if (num >= 20) {
        result += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    }

    if (num > 0) {
        if (num < 10) {
            result += ones[num] + ' ';
        } else {
            result += teens[num - 10] + ' ';
        }
    }

    return result.trim();
}