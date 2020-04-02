const UIForm = document.getElementById('loan-form');

// Listen for submit
UIForm.addEventListener('submit', calculateLoan);

// Calculate Loan
function calculateLoan(e) {
	const UIAmount = document.getElementById('amount');
	const UIInterest = document.getElementById('interest');
	const UIYears = document.getElementById('years');
	const UIMonthlyPayment = document.getElementById('monthly-payment');
	const UITotalPayment = document.getElementById('total-payment');
	const UITotalInterest = document.getElementById('total-interest');

	const principle = parseFloat(UIAmount.value);
	const calculateInterest = parseFloat(UIInterest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	// Compute monthly payments
	const x = Math.pow(1 + calculateInterest, calculatedPayments);
	const monthly = principle * x * calculateInterest / (x - 1);

	// Show calculated results
	if (isFinite(monthly)) {
		UIMonthlyPayment.value = monthly.toFixed(2);
		UITotalPayment.value = (monthly * calculatedPayments).toFixed(2);
		UITotalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);
	} else {
		showError('Please check your numbers');
	}

	e.preventDefault();
}

function showError(errorMessage) {
	// Create Div element
	const errorDiv = document.createElement('div');

	// Get card element
	const card = document.querySelector('.card');
	// Get heading element
	const heading = document.querySelector('.heading');

	// Add classes to errorDiv so it looks dangerous
	errorDiv.className = 'alert alert-danger';
	// Create text node
	errorDiv.appendChild(document.createTextNode(errorMessage));

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Clear error message after 3 seconds
	setInterval(clearError, 3000);
}

function clearError() {
	document.querySelector('.alert').remove();
}
