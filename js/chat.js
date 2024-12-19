window.onload = function() {
    const sendButton = document.getElementById('send-btn'); // ÇáÒÑ áÅÑÓÇá ÇáÑÓÇáÉ
    const messageInput = document.getElementById('message-input'); // ÍŞá ÇáÅÏÎÇá

    // ÇáÊÍŞŞ ãä æÌæÏ ÒÑ ÇáÅÏÎÇá æÇáÑÓÇáÉ
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', function() {
            const messageText = messageInput.value.trim(); // ÇáÍÕæá Úáì ÇáäÕ ÇáãÏÎá

            if (messageText !== "") {
                const messageContainer = document.querySelector('.chat-messages'); // ÇáÍÇæíÉ áÚÑÖ ÇáÑÓÇÆá
                
                // ÅäÔÇÁ ÑÓÇáÉ ÌÏíÏÉ ãä ÇáãÓÊÎÏã
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'sent');
                newMessage.innerHTML = `<p>${messageText}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                
                messageContainer.appendChild(newMessage); // ÅÖÇİÉ ÇáÑÓÇáÉ ááÍÇæíÉ
                messageInput.value = ''; // ãÓÍ ÍŞá ÇáÅÏÎÇá ÈÚÏ ÇáÅÑÓÇá

                // ÅÙåÇÑ ÑÓÇáÉ "ÇáäÙÇã íßÊÈ ÇáÂä"
                const typingMessage = document.createElement('div');
                typingMessage.classList.add('message', 'typing');
                typingMessage.innerHTML = `<p>Typing...</p>`;
                
                messageContainer.appendChild(typingMessage); // ÅÖÇİÉ ÇáÑÓÇáÉ ÇáãÄŞÊÉ

                // ÇáÊãÑíÑ áÃÓİá áÅÙåÇÑ ÇáÑÓÇáÉ ÇáÌÏíÏÉ
                messageContainer.scrollTop = messageContainer.scrollHeight;

                // ÈÚÏ 3 ËæÇäí¡ ÇÓÊÈÏÇá ÑÓÇáÉ "ÇáäÙÇã íßÊÈ ÇáÂä..." ÈÑÏ ÍŞíŞí
                setTimeout(function() {
                    messageContainer.removeChild(typingMessage); // ÅÒÇáÉ ÑÓÇáÉ "íßÊÈ ÇáÂä"

                    const replyMessage = document.createElement('div');
                    replyMessage.classList.add('message', 'received');
                    replyMessage.innerHTML = `<p>Hi, Welcome to ChatNow! 
We are currently working on developing this website!
This will be an all-inclusive community for superhero enthusiasts, Featuring videos, Comics, and a group chat to discuss all things related to superhero movies. 
-MohamedKhaled-</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                    
                    messageContainer.appendChild(replyMessage); // ÅÖÇİÉ ÇáÑÏ ÇáİÚáí
                    messageContainer.scrollTop = messageContainer.scrollHeight; // ÇáÊãÑíÑ áÃÓİá
                }, 3000); // ÊÃÎíÑ 3 ËæÇäí ŞÈá ÇáÑÏ
            }
        });
    }
};
