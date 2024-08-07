"use client";
import React from 'react'

function NavBar() {
  return (
    <div id={"sidepan"} className="sidepanel darktheme hide">
        <div id={"sidepanbar"} className="sidepanelbar darktheme" onClick="toggleSidePanel()"></div>
        <div className={"sidepaneldiv"} onClick="toggleSidePanelKeyOnly()"><span className={"sidepaneldes"}>Key Only</span></div><br />
        <button className={"keybtn"} onClick="togglePlayAll()">P</button><span id={"playdes"} className={"btndes"}><span className="mode on">Play</span>/<span className={"mode"}>Pause</span> all videos</span><br />
        <button className={"keybtn"} onClick="toggleMuteAll()">M</button><span id={"mutedes"} className={"btndes"}><span className="mode on">Mute</span>/<span className={"mode"}>Unmute</span> all videos</span><br />
        <button className={"keybtn"} onClick="toggleUrlArea()">H</button><span id={"textareades"} className={"btndes"}><span className="mode on">Hide</span>/<span className={"mode"}>Show</span> text box</span><br />
        <button className={"keybtn"} onClick="toggleSlider()">S</button><span id={"sliderdes"} className={"btndes"}><span className={"mode"}>Hide</span>/<span className="mode on">Show</span> resize Sliders</span><br />
        <button className={"keybtn"} onClick="toggleDarkTheme()">D</button><span id={"darkdes"} className={"btndes"}><span className="mode on">Disable</span>/<span className={"mode"}>Enable</span> Dark theme</span><br />
        <button className={"keybtn"} onClick="toggleAspectRatioLock()">L</button><span id={"aspectratiodes"} className={"btndes"}><span className="mode on">Unlock</span>/<span className={"mode"}>Lock</span> resize aspect ratio</span><br />
        <button className={"keybtn"} onClick="setUniformSize()">K</button><span id={"setsizedes"} className={"btndes"}><span className="mode on">Set</span> all videos same size</span><br />
        <button className={"keybtn"} onClick="syncReplay()">R</button><span id={"syncdes"} className={"btndes"}><span className="mode on">Sync</span> all replay (delay)</span><br />
        <button className={"keybtn"} onClick="toggleLivechat()">C</button><span id={"chatdes"} className={"btndes"}><span className={"mode"}>Hide</span>/<span className="mode on">Show</span> live Chat</span><br />
        <button className={"keybtn"} onClick="toggleLivechatDarkTheme()">N</button><span id={"chatdarkdes"} className={"btndes"}><span className={"mode"}>Disable</span>/<span className="mode on">Enable</span> live chat dark theme</span><br />
        <button className={"keybtn"} onClick="toggleSidePanel()">T</button><span id={"sidepandes"} className={"btndes"}><span className="mode on">Collapse</span>/<span className={"mode"}>Expand</span> This Panel</span><br />
        <div className={"sidepaneldiv"} onClick="window.open('https://github.com/kkchengaf/Multiple-Embedded-Youtube-Player')"><span className={"sidepaneldes"}>Github @kkchengaf</span></div>
      </div>

  )
}

export default NavBar