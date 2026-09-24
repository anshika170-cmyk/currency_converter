# 💱 Currency Converter

A simple and responsive **Currency Converter Web Application** built using **HTML, CSS, and JavaScript**. The application allows users to convert an amount from one currency to another using real-time exchange rates fetched from an API.

## 🚀 Features

* 💰 Convert currencies instantly
* 🌍 Supports multiple international currencies
* 🔄 Select source and target currencies
* 💵 Enter any amount for conversion
* 📊 Fetches exchange rates using an API
* 🚩 Displays currency flags
* 🔁 Swap source and target currencies
* ⚡ Real-time conversion
* 📱 Responsive and user-friendly interface
* ❌ Handles invalid input and API errors

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **JavaScript (ES6+)** – Application logic and API integration
* **Fetch API** – Fetching exchange-rate data
* **REST API** – Getting currency exchange rates
* **DOM Manipulation** – Updating the UI dynamically
* **Async/Await** – Handling asynchronous API requests
* **JSON** – Processing API responses

## 📚 JavaScript Concepts Practiced

This project helped practice several important JavaScript concepts:

### 1. Variables

```javascript
let amount = 100;
const fromCurrency = "USD";
```

### 2. Functions

Functions are used to organize the conversion logic and UI operations.

```javascript
function convertCurrency() {
    // conversion logic
}
```

### 3. DOM Manipulation

JavaScript is used to access and modify HTML elements dynamically.

```javascript
const amountInput = document.querySelector("#amount");
```

### 4. Event Listeners

User interactions are handled using event listeners.

```javascript
button.addEventListener("click", convertCurrency);
```

### 5. Fetch API

The application fetches exchange-rate information from an external API.

```javascript
const response = await fetch(apiURL);
const data = await response.json();
```

### 6. Async/Await

`async` and `await` are used to handle API requests cleanly.

```javascript
async function getExchangeRate() {
    const response = await fetch(apiURL);
    const data = await response.json();
}
```

### 7. JSON

API responses are received in JSON format and processed using JavaScript.

### 8. Arrays

Currency lists can be stored and processed using arrays.

```javascript
const currencies = ["USD", "INR", "EUR", "GBP", "JPY"];
```

### 9. Loops

Loops can be used to dynamically generate currency options.

```javascript
currencies.forEach((currency) => {
    // create currency option
});
```

### 10. Conditional Statements

Conditions are used for validation and error handling.

```javascript
if (amount <= 0) {
    // show error
}
```

### 11. Error Handling

The application handles API or network errors using `try...catch`.

```javascript
try {
    // API request
} catch (error) {
    console.log(error);
}
```

## 🔄 How It Works

The basic workflow of the application is:

```text
User enters amount
        ↓
Selects source currency
        ↓
Selects target currency
        ↓
Clicks Convert
        ↓
JavaScript sends API request
        ↓
Exchange rate is received
        ↓
Amount is converted
        ↓
Result is displayed
```

### Conversion Formula

```text
Converted Amount = Amount × Exchange Rate
```

For example:

```text
100 USD × USD/INR exchange rate = INR equivalent
```

## 📁 Project Structure

```text
Currency-Converter/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└──codes.js
```

👩‍💻 Author

Anshika Singh

Aspiring Software Developer | Web Developer | Problem Solver