// Constants for today's price and annual return
const todayPricePerGram = 8024; // in INR
const annualReturn = 7.98; // 7.98% annual return

// Conversion factors
const gramsToPavan = 8; // 1 pavan = 8 grams
const gramsToPound = 453.6; // 1 pound = 453.6 grams

// Event listener for the prediction form
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected date
    const date = document.getElementById('date').value;
    if (date) {
        // Calculate the number of years from the current year (2024)
        const currentYear = new Date().getFullYear();
        const selectedYear = new Date(date).getFullYear();
        const yearsDifference = selectedYear - currentYear;

        // Calculate the predicted price based on the annual return
        const predictedPricePerGram = calculatePredictedPrice(todayPricePerGram, annualReturn, yearsDifference);

        // Calculate the predicted price in pavan and pounds
        const predictedPricePavan = predictedPricePerGram * gramsToPavan; // Price for pavan
        const predictedPricePound = predictedPricePerGram * gramsToPound; // Price for pounds

        // Display the predicted price in all units with formatting
        document.getElementById('predictedPriceGram').textContent = `₹${predictedPricePerGram.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per gram`;
        document.getElementById('predictedPricePavan').textContent = `₹${predictedPricePavan.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per pavan`;
        document.getElementById('predictedPricePound').textContent = `₹${predictedPricePound.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per pound`;
    }
});

// Function to calculate predicted price based on compound interest
function calculatePredictedPrice(currentPrice, interestRate, years) {
    return currentPrice * Math.pow(1 + (interestRate / 100), years);
}

// Function to show current date and time
function updateDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleString();
    document.getElementById('dateTime').textContent = `Current Date and Time: ${dateTime}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
