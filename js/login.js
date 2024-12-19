// ����� ������ ���������� ������ ������ ��������
const users = [
    { username: "MohamedKhaled", password: "01556409015" },
    { username: "M7Y", password: "01027833996" },
    { username: "admin", password: "admin123" }
];

// ������ ��� ������� ��������
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// ����� ��� ��� ����� �������
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // ��� ����� ������� ���� �������

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // ����� �� �������� �� ����� ����������
    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    // ��� �� ������ ��� ��������
    if (user) {
        alert("Login successful!");
        window.location.href = "chat.html"; // �������� ��� ������ �������� ��� ����� ������
    } else {
        alert("Invalid username or password!"); // ��� ���� �������� ��� �����
    }
});
