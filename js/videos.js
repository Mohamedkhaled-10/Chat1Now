const videoData = [
    { title: "Robert Dawny JR back to MCU", thumbnail: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/07/robert-downey-jr-comic-con-doctor-doom.jpg?fit=990%2C557&ssl=1", videoPage: "https://c.top4top.io/m_32768lmkk2.mp4" },
    
{ title: "Superman-Justice league Zack Snyder", thumbnail: "https://i.ytimg.com/vi/o4gG8onLOyc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkQuqxwGX9eSvKX95SxdoLYF5ojQ", videoPage: "https://i.top4top.io/m_32882jxad1.mp4" },

{ title: "Supergirl and The Flash-The Flash 2023", thumbnail: "https://theactionelite.com/wp-content/uploads/2023/06/The-Flash.jpg", videoPage: "https://a.top4top.io/m_32767un921.mp4" },

{ title: "Superman | Official Teaser Trailer", thumbnail: "https://img.youtube.com/vi/uhUht6vAsMY/maxresdefault.jpg", videoPage: "https://a.top4top.io/m_3288gmz5g0.mp4" }

];

const videoGrid = document.getElementById("video-grid");

videoData.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");
    videoCard.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
        <h3 class="video-title">${video.title}</h3>
    `;
    
    videoCard.addEventListener("click", () => {
        showVideoPlayer(video.videoPage);
    });

    videoGrid.appendChild(videoCard);
});

function showVideoPlayer(videoSrc) {
    // إنشاء عناصر المشغل ديناميكيًا
    const videoContainer = document.createElement("div");
    videoContainer.id = "video-container";
    videoContainer.innerHTML = `
        <video id="video-player" controls autoplay src="${videoSrc}"></video>
        <button id="close-btn">X</button>
    `;

    document.body.appendChild(videoContainer);
    videoContainer.style.display = "flex";

    // إغلاق المشغل عند النقر على زر الإغلاق
    document.getElementById("close-btn").addEventListener("click", () => {
        videoContainer.remove();
    });
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

