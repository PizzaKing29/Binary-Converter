# Decimal to Binary Converter 🔢➡️💻

A simple JavaScript project that converts decimal numbers to binary. Great for learning basic DOM manipulation, number conversion logic, and user interaction in vanilla JS.

## 🌐 Demo

To use this tool:
1. Enter a decimal number into the input field.
2. Click the **Convert** button.
3. The binary result will appear in the output field.
4. Double-click the output to copy it to your clipboard!

## 🛠️ Features

- Converts any non-negative decimal number to binary.
- Outputs the binary equivalent in real-time.
- Clipboard functionality on double-click of output.
- Clean and minimal HTML/JS implementation.

## 📁 Files

- `index.html` – Contains the input, output, and convert button.
- `script.js` – Contains the logic for converting and copying the result.

## 📜 Code Overview

### JavaScript Functionality

- Listens for a button click to trigger conversion.
- Uses a `while` loop to compute the binary value.
- Listens for a double-click to copy the output to the clipboard.

### Sample Logic

```js
function calculateBinary () {
    let number = parseInt(input.value)
    let binary = ""
    while (number >= 1) {
        binary = (number % 2) + binary
        number = Math.floor(number / 2)
    }
    output.value = binary
}
