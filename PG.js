function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    const username = document.getElementById('username').value.trim();
    if (!username) {
      alert("Please enter your name.");
      return;
    }
  
    // Save to localStorage
    localStorage.setItem(username, password);
  
    document.getElementById('generatedPassword').textContent =
      `Generated password for ${username}: ${password}`;
  }
  
  function recallPassword() {
    const username = document.getElementById('recallUsername').value.trim();
    if (!username) {
      alert("Please enter a name to recall.");
      return;
    }
  
    const password = localStorage.getItem(username);
  
    if (password) {
      document.getElementById('recalledPassword').textContent =
        `Password for ${username}: ${password}`;
    } else {
      document.getElementById('recalledPassword').textContent =
        `No password found for ${username}.`;
    }
  }
  