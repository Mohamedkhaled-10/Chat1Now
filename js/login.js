// ŞÇÆãÉ ÈÃÓãÇÁ ÇáãÓÊÎÏãíä æßáãÇÊ ÇáãÑæÑ ÇáãÈÏÆíÉ
const users = [
    { username: "MohamedKhaled", password: "01556409015" },
    { username: "M7Y", password: "01027833996" },
    { username: "admin", password: "admin123" }
];

// ÇáÍÕæá Úáì ÇáäãæĞÌ æÇáÚäÇÕÑ
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// ÅÖÇİÉ ÍÏË ÚäÏ ÅÑÓÇá ÇáäãæĞÌ
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // ãäÚ ÅÑÓÇá ÇáäãæĞÌ ÈÔßá ÇİÊÑÇÖí

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // ÇáÈÍË Úä ÇáãÓÊÎÏã İí ŞÇÆãÉ ÇáãÓÊÎÏãíä
    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    // ÅĞÇ Êã ÇáÚËæÑ Úáì ÇáãÓÊÎÏã
    if (user) {
        alert("Login successful!");
        window.location.href = "chat.html"; // ÇáÇäÊŞÇá Åáì ÇáÕİÍÉ ÇáÑÆíÓíÉ ÈÚÏ ÊÓÌíá ÇáÏÎæá
    } else {
        alert("Invalid username or password!"); // ÅĞÇ ßÇäÊ ÇáÈíÇäÇÊ ÛíÑ ÕÍíÍÉ
    }
});
