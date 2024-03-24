import { useState } from "react";
import { convertLessThanOneThousand } from "./utils";
import styles from "./NumbersToWords.module.css";

const NumbersToWords = () => {

    const [word, setWord] = useState('');
    const [number, setNumber] = useState('');

    const convertNumbersToWords = () => {
        let num = number;
        if (num === 0) {
            return 'zero';
        }

        let result = '';

        if (num < 0) {
            result = 'negative ';
            num = Math.abs(num);
        }

        if (num >= 10000000) {
            result += convertLessThanOneThousand(Math.floor(num / 10000000)) + ' crore ';
            num %= 10000000;
        }

        if (num >= 100000) {
            result += convertLessThanOneThousand(Math.floor(num / 100000)) + ' lakh ';
            num %= 100000;
        }

        if (num >= 1000) {
            result += convertLessThanOneThousand(Math.floor(num / 1000)) + ' thousand ';
            num %= 1000;
        }

        result += convertLessThanOneThousand(num);

        setWord(result.trim());
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.center}>Number To Words</h1>
            <div className={styles.inputContainer}>
                <div id="numberInput">Enter the number</div>
                <input
                    className={styles.numberInput}
                    aria-labelledby="numberInput"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                {/* onSubmit convert the number to words and display below */}
            </div>
            <div className={styles.center}>
                <button
                    type="button"
                    className={styles.submitBtn}
                    onClick={convertNumbersToWords}
                >
                    Submit
                </button>
            </div>

            <h3 className={`${styles.center} ${styles.word}`}>In words: {word}</h3>

        </div>
    )
}

export default NumbersToWords;