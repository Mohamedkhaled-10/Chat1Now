window.onload = function() {
    const sendButton = document.getElementById('send-btn'); // ���� ������ �������
    const messageInput = document.getElementById('message-input'); // ��� �������

    // ������ �� ���� �� ������� ��������
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', function() {
            const messageText = messageInput.value.trim(); // ������ ��� ���� ������

            if (messageText !== "") {
                const messageContainer = document.querySelector('.chat-messages'); // ������� ���� �������
                
                // ����� ����� ����� �� ��������
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'sent');
                newMessage.innerHTML = `<p>${messageText}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                
                messageContainer.appendChild(newMessage); // ����� ������� �������
                messageInput.value = ''; // ��� ��� ������� ��� �������

                // ����� ����� "������ ���� ����"
                const typingMessage = document.createElement('div');
                typingMessage.classList.add('message', 'typing');
                typingMessage.innerHTML = `<p>Typing...</p>`;
                
                messageContainer.appendChild(typingMessage); // ����� ������� �������

                // ������� ����� ������ ������� �������
                messageContainer.scrollTop = messageContainer.scrollHeight;

                // ��� 3 ����� ������� ����� "������ ���� ����..." ��� �����
                setTimeout(function() {
                    messageContainer.removeChild(typingMessage); // ����� ����� "���� ����"

                    const replyMessage = document.createElement('div');
                    replyMessage.classList.add('message', 'received');
                    replyMessage.innerHTML = `<p>Hi, Welcome to ChatNow! 
We are currently working on developing this website!
This will be an all-inclusive community for superhero enthusiasts, Featuring videos, Comics, and a group chat to discuss all things related to superhero movies. 
-MohamedKhaled-</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                    
                    messageContainer.appendChild(replyMessage); // ����� ���� ������
                    messageContainer.scrollTop = messageContainer.scrollHeight; // ������� �����
                }, 3000); // ����� 3 ����� ��� ����
            }
        });
    }
};
