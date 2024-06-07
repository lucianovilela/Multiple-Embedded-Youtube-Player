"use strict";


export function parse(urls) {

    urls = urls.map(url => (url.split("&")[0]))  //remove all tags after vid
        .filter((v, i, arr) => arr.findIndex((v2) => v2 === v) === i)


    var videoids = urls.map(url => (url.split("v=")[1]))
        .filter(url => url != null)
    return videoids;
}

var uid=0;
var darked = false;
export function addPlayer(vid, target) {
    var sec_html = document.createElement('div');
    sec_html.id = "sec_" + uid;
    sec_html.setAttribute("style", "flex-wrap: wrap;display:flex;")
    var vid_html = document.createElement('div');
    vid_html.id = 'player' + uid;

    var chat_html = document.createElement("iframe");
    chat_html.referrerPolicy = "origin";
    var dark_theme_tag = "&dark_theme=" + (darked ? 1 : 0)
    chat_html.src = "https://www.youtube.com/live_chat?v=" + vid + "&embed_domain=kkchengaf.github.io" + dark_theme_tag
    chat_html.bksrc = "https://www.youtube.com/live_chat?v=" + vid + "&embed_domain=kkchengaf.github.io" + dark_theme_tag
    chat_html.frameBorder = "0";
    chat_html.setAttribute("class", "livechatiframe")
    //chat_html.style.display = toggleDisplayString(!chatShowed)
    chat_html.id = "chat" + uid;

    sec_html.appendChild(vid_html)
    sec_html.appendChild(chat_html)


    var top_sec_html = document.createElement('div');
    top_sec_html.id = "sec" + uid
    top_sec_html.appendChild(sec_html)

    //var t = document.getElementById(target);
    //target.appendChild(top_sec_html);

    var player = new YT.Player(vid_html.id, {
        height: 'auto',
        width: 'auto',
        videoId: vid,
        events: {
            'onStateChange':()=>{ console.log('onPlayerStateChange')} 
        }
    });
    return { vid: vid, ply: player, uid: uid++, html:top_sec_html }
}
