const videoData = [
    { title: "Robert Dawny JR back to MCU", thumbnail: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/07/robert-downey-jr-comic-con-doctor-doom.jpg?fit=990%2C557&ssl=1", videoPage: "https://rr1---sn-25glenlz.googlevideo.com/videoplayback?expire=1734651608&ei=eFpkZ_P2HKaAi9oP56q6uAg&ip=185.38.193.127&id=o-AK0wLE84reO-129ANB97_65ln9D0UVW6aoNKOuMlZ-z4&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI8Bq6sRVY-vz-rq_DMzrBBEezUtmTrCKpg8884WpjD3jitH3mjXGdQ48O75PK8hDHJoQ8PHCYbv&vprv=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=4314585&ratebypass=yes&dur=41.322&lmt=1722269857221989&fexp=24350590,24350705,24350737,24350827,24350851,24350859,51326932,51335594,51371293&c=ANDROID_VR&txp=5530434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAPiNsu_WibiJv3zUpX5r_lMfulaWCcEQ5U7UA6f34y1-AiEA6jDU2W3FEz51QuzcjWY1-LZMtlCKM8U0Bao6ljrTKRs%3D&title=He%27s%20BACK!%20-%20%22Victor%20Von%20Doom%20X%20Iron%20Man%22%20Edit%20%7C%20lady%20gaga-%20bloody%20mary&rm=sn-5acuxaxjvh-up5d7l,sn-hpa6s7e&rrc=79,104&req_id=e9fd2aa8a18a3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1734630019,&mh=2u&mip=156.203.128.194&mm=29&mn=sn-25glenlz&ms=rdu&mt=1734629848&mv=m&mvi=1&pl=19&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIgXPi66X5KEItJtSXlnZ0ogaFIXpO9sV6j0YgHa-CvMe4CIQDKhXVXQPm7J-s4O9-T7wQmqG2f0CZ6DdGbIKycNlXDQQ%3D%3D" },
    
{ title: "Superman-Justice league Zack Snyder", thumbnail: "https://i.ytimg.com/vi/o4gG8onLOyc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkQuqxwGX9eSvKX95SxdoLYF5ojQ", videoPage: "https://rr1---sn-4g5ednse.googlevideo.com/videoplayback?expire=1734646618&ei=-kZkZ4bJNLT62roPuc-T8QE&ip=49.145.211.166&id=o-AGnVphBr1PlYigkPdfGuXU548oazYuDiE7LG-7ppWyGo&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI_cWCdHL4ATwoSEedLW001-aGgCeBzx3EbaQ2bMeecnFzuBSi0iUgk4Sban2ee9y5Nql3Mpd7bp&spc=x-caUNgLXU_MPnqwtwGsNuI6OPuSII8rb3MIvqQLLmo_MBTumG_eBR551QyFRbWJeg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=ryP981imoJs3rg1WRambVp0Q&rqh=1&gir=yes&clen=3100957&ratebypass=yes&dur=29.525&lmt=1728573571043245&fexp=24350590,24350705,24350732,24350737,24350827,24350851,24350907,51326932,51331020,51335594,51353497,51371294&c=MWEB&sefc=1&txp=5430434&n=bEqqyXwOAHK_6A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgad195ka-6HIhZzl_PsVoTelKCY6CrfhvrabPnTiRLkoCIFLHKVxoB6vOeqBbvOsy_JN7QMAFlGExw9PHytIRKuoC&title=%22Save%20All%20of%20Them%22%20-%20Superman%20Edit%20%7C%20Lady%20Gaga-%20Bloody%20Mary%20(slowed%20%2B%20reverb)&rm=sn-2aqu-jbtk7s,sn-2aqu-hoaly7l,sn-hoaz7l&rrc=79,79,104,80&req_id=b66968a72a24a3ee&ipbypass=yes&redirect_counter=4&cm2rm=sn-hgnl67e&cms_redirect=yes&cmsv=e&met=1734630754,&mh=5v&mip=156.203.128.194&mm=34&mn=sn-4g5ednse&ms=ltu&mt=1734630533&mv=m&mvi=1&pl=19&rms=ltu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgPLarg2gX3lXrITQ9iPp1ifn3NVP6Q4SzJ94ruAqmUHACIDoDjItI1g08X2BOFqw6yH5l8xCX_xOUNWIJOhHZYKtj" },

{ title: "Supergirl and The Flash-The Flash 2023", thumbnail: "https://theactionelite.com/wp-content/uploads/2023/06/The-Flash.jpg", videoPage: "https://rr5---sn-25ge7nsk.googlevideo.com/videoplayback?expire=1734652760&ei=-F5kZ7boJe-gp-oP4ez7yAI&ip=197.56.90.44&id=o-APeqPNUT0uu5HPzlufj-7bRrE0MgoanqjC9Zt37oYsUd&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=eg&bui=AfMhrI_SKc6GfWvtAjm8VJLDyp--p3Vlli-3ZlrdTwjg95ewJWryFxu_KRF_QV4nN_dDywRUTqaQVKSv&vprv=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=6872611&ratebypass=yes&dur=59.712&lmt=1725386694971799&fexp=24350590,24350705,24350737,24350827,24350851,24350860,51326932,51335594,51371294&c=ANDROID_VR&txp=4530434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgA0zxbwmqxjOruQCy6v6pYevrYaQ30w79CiOH17n46L0CIQDG-L95XQVTYm5SWbitEch-eKDrquqNcu6yRbo_e5RCBw%3D%3D&title=Revival%20Flash%20%23edit%20%23trending%20%23shorts%20%23flash&rm=sn-uxaxjvhxbt2u-j5pr7s,sn-25gkk76&rrc=79,104&req_id=f13df8bfc6e6a3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1734631172,&mh=vh&mip=156.203.128.194&mm=29&mn=sn-25ge7nsk&ms=rdu&mt=1734630802&mv=m&mvi=5&pl=19&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRQIhAMA8YlJ6Jctcz-kCccQQnpTgawZc8nERV4F2DZKdUTPZAiAYuz9WMeJS8_IOBRZDF4oihY1sghoTW8ZckBphvZwoBQ%3D%3D" }

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
