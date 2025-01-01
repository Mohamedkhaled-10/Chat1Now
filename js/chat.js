window.onload = function() {
    const sendButton = document.getElementById('send-btn'); // الزر لإرسال الرسالة
    const messageInput = document.getElementById('message-input'); // حقل الإدخال
    const messageContainer = document.querySelector('.chat-messages'); // الحاوية لعرض الرسائل

    // إضافة الخيارات للمستخدم في البداية
    function showOptions() {
        const optionsMessage = document.createElement('div');
        optionsMessage.classList.add('message', 'received');
        optionsMessage.innerHTML = `
            <p>مرحباً! كيف يمكنني مساعدتك؟ اختر أحد الخيارات:</p>
            <button class="option-btn" data-option="منتج">أحدث تصريحات للأفلام</button>
            <button class="option-btn" data-option="دعم فني">أفلام منتظرة</button>
            <button class="option-btn" data-option="حساب">أفلام</button>
        `;
        messageContainer.appendChild(optionsMessage); // إضافة الرسالة مع الخيارات
        messageContainer.scrollTop = messageContainer.scrollHeight; // التمرير لأسفل

        // إضافة حدث لكل زر اختيار
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedOption = button.getAttribute('data-option');
                handleUserOption(selectedOption); // معالجة الاختيار
            });
        });
    }

    // التحقق من وجود زر الإدخال والرسالة
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', function() {
            const messageText = messageInput.value.trim(); // الحصول على النص المدخل

            if (messageText !== "") {
                // إنشاء رسالة جديدة من المستخدم
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'sent');
                newMessage.innerHTML = `<p>${messageText}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                
                messageContainer.appendChild(newMessage); // إضافة الرسالة للحاوية
                messageInput.value = ''; // مسح حقل الإدخال بعد الإرسال

                // إظهار رسالة "النظام يكتب الآن"
                const typingMessage = document.createElement('div');
                typingMessage.classList.add('message', 'typing');
                typingMessage.innerHTML = `<p>Typing...</p>`;
                
                messageContainer.appendChild(typingMessage); // إضافة الرسالة المؤقتة

                // التمرير لأسفل لإظهار الرسالة الجديدة
                messageContainer.scrollTop = messageContainer.scrollHeight;

                // بعد 3 ثواني، استبدال رسالة "النظام يكتب الآن..." برد مخصص
                setTimeout(function() {
                    messageContainer.removeChild(typingMessage); // إزالة رسالة "يكتب الآن"

                    let replyMessage;

                    // التحقق من الاختيارات التي قد يرسلها المستخدم
                    if (messageText.includes("أحدث تصريحات الأفلام")) {
                        replyMessage = `<p>إليك تفاصيل المنتج: لدينا مجموعة واسعة من المنتجات المميزة التي يمكنك استكشافها في قسم المنتجات على موقعنا.</p>`;
                    } else if (messageText.includes("أفلام منتظرة")) {
                        replyMessage = `<p>نحن هنا لدعمك! إذا كنت تواجه مشكلة، يرجى تحديد نوع المشكلة وسنساعدك بأسرع وقت ممكن.</p>`;
                    } else if (messageText.includes("أفلام")) {
                        replyMessage = `<p>إذا كنت بحاجة إلى مساعدة في حسابك، يمكنك تغيير كلمة المرور أو تحديث بياناتك من خلال إعدادات الحساب.</p>`;
                    } else {
                        replyMessage = `<p>مرحبًا! شكراً على تواصلك معنا. نحن هنا للمساعدة. هل لديك استفسار محدد؟</p>`;
                    }

                    // إضافة الرد الفعلي
                    const replyMessageElement = document.createElement('div');
                    replyMessageElement.classList.add('message', 'received');
                    replyMessageElement.innerHTML = `<p>${replyMessage}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
                    
                    messageContainer.appendChild(replyMessageElement); // إضافة الرد
                    messageContainer.scrollTop = messageContainer.scrollHeight; // التمرير لأسفل
                }, 3000); // تأخير 3 ثواني قبل الرد
            }
        });
    }

    // إذا كانت الصفحة قد تم تحميلها بالكامل، عرض الخيارات للمستخدم
    showOptions();
};

// معالجة الخيار الذي اختاره المستخدم
function handleUserOption(option) {
    const messageContainer = document.querySelector('.chat-messages'); // الحاوية لعرض الرسائل

    // إظهار رسالة "النظام يكتب الآن" عند اختيار خيار
    const typingMessage = document.createElement('div');
    typingMessage.classList.add('message', 'typing');
    typingMessage.innerHTML = `<p>Typing...</p>`;
    
    messageContainer.appendChild(typingMessage); // إضافة الرسالة المؤقتة
    messageContainer.scrollTop = messageContainer.scrollHeight; // التمرير لأسفل

    setTimeout(function() {
        messageContainer.removeChild(typingMessage); // إزالة رسالة "يكتب الآن"

        let replyMessage;

        // الرد بناءً على اختيار المستخدم
        if (option === "منتج") {
            replyMessage = `<p>إليك تفاصيلهو فيلم بطل خارق أمريكي قادم من كتابة وإخراج جيمس غان وهو مبنيٌّ على شخصية قصص دي سي المصورة سوبرمان. الفيلم من إنتاج دي سي فيلمز وتوزيع وارنر برذرز بيكتشرز ويعد أول فيلم قادم في عالم دي سي السينمائي (DCU) وإعادة بدء لسلسلة أفلام سوبرمان. الفيلم من بطولة ديفيد كورينسويت بدور كلارك كنت/سوبرمان ويشاركه التمثيل رايتشل بروسنان وإيزابيلا مونير وإدي غاثيجي وناثان فيليون وأنتوني كاريجان وماريا غابرييلا دي فاريا وسارا سامبايو وسكايلر جيسوندو ونيكولاس هولت وتيرينس روزمور ووندل بيرس وبروت تايلور فينس ونيفا هويل وبيك بينيت وميكايلا هوفر وكريستوفر ماكدونالد وميلي آلكوك. يستكشف الفيلم رحلة سوبرمان للتوفيق بين أصله الفضائي وعائلته البشرية.</p><img src="https://upload.wikimedia.org/wikipedia/ar/thumb/3/32/Superman_%282025_film%29_poster.jpg/260px-Superman_%282025_film%29_poster.jpg" alt="صورة فيلم سوبرمان" style="width:50%; max-width:500px; margin-top:10px;" />`;
        } else if (option === "دعم فني") {
            replyMessage = `<p></p><img src="https://upload.wikimedia.org/wikipedia/ar/thumb/3/32/Superman_%282025_film%29_poster.jpg/260px-Superman_%282025_film%29_poster.jpg" alt="صورة فيلم سوبرمان" style="width:50%; max-width:500px; margin-top:10px;" />
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvLREsZsA67x2xbv43gZfecSQxU9SUxxv18h5d5xjtNQPqEoQZ" alt="صورة فيلم سوبرمان" style="width:50%; max-width:500px; margin-top:10px;" />
            <img src="https://cdn.marvel.com/content/1x/avengerssecretwars_lob_crd_02.jpg" alt="صورة فيلم سوبرمان" style="width:50%; max-width:500px; margin-top:10px;" />
            <img src="https://cdn.marvel.com/content/1x/avengersdoomsday_lob_crd_01.jpg" alt="صورة فيلم سوبرمان" style="width:50%; max-width:500px; margin-top:10px;" />`;
        } else if (option === "حساب") {
            replyMessage = `<p>لسه بشتغل عليهم.</p>`;
        }

        // إضافة الرد الفعلي
        const replyMessageElement = document.createElement('div');
        replyMessageElement.classList.add('message', 'received');
        replyMessageElement.innerHTML = `<p>${replyMessage}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
        
        messageContainer.appendChild(replyMessageElement); // إضافة الرد
        messageContainer.scrollTop = messageContainer.scrollHeight; // التمرير لأسفل
    }, 3000); // تأخير 3 ثواني قبل الرد
}

document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});
