document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const formError = document.getElementById('formError');
  const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Reset error messages
    formError.textContent = '';
    passwordError.textContent = '';

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formError.textContent = 'Please enter a valid email address.';
      return;
    }

    // Validate password (minimum 8 characters)
    if (password.length < 8) {
      passwordError.textContent =
        'Password must be at least 8 characters long.';
      return;
    }

    // Redirect to the home page (index.html) if all validations pass
    window.location.href = 'index.html'; // Change to your home page URL
  });
});
