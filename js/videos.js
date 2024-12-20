const videoData = [
    { title: "Robert Dawny JR back to MCU", thumbnail: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/07/robert-downey-jr-comic-con-doctor-doom.jpg?fit=990%2C557&ssl=1", videoPage: "https://c.top4top.io/m_32768lmkk2.mp4" },
    
{ title: "Superman-Justice league Zack Snyder", thumbnail: "https://i.ytimg.com/vi/o4gG8onLOyc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkQuqxwGX9eSvKX95SxdoLYF5ojQ", videoPage: "https://b.top4top.io/m_32760ee1a1.mp4" },

{ title: "Supergirl and The Flash-The Flash 2023", thumbnail: "https://theactionelite.com/wp-content/uploads/2023/06/The-Flash.jpg", videoPage: "https://a.top4top.io/m_32767un921.mp4" }

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
    // ≈‰‘«¡ ⁄‰«’— «·„‘€· œÌ‰«„ÌﬂÌ«
    const videoContainer = document.createElement("div");
    videoContainer.id = "video-container";
    videoContainer.innerHTML = `
        <video id="video-player" controls autoplay src="${videoSrc}"></video>
        <button id="close-btn">X</button>
    `;

    document.body.appendChild(videoContainer);
    videoContainer.style.display = "flex";

    // ≈€·«ﬁ «·„‘€· ⁄‰œ «·‰ﬁ— ⁄·Ï “— «·≈€·«ﬁ
    document.getElementById("close-btn").addEventListener("click", () => {
        videoContainer.remove();
    });
}
