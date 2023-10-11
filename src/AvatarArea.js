import React from 'react';
import test_pp_icon from "./photos/pefil.jpg";
import test_pp_icon_2 from "./photos/On an island.jpg";
import test_pp_icon_3 from "./photos/Juli.jpg";
import test_pp_icon_4 from "./photos/post.jpg";
import test_pp_icon_5 from "./photos/post.jpg";
import test_pp_icon_9 from "./photos/messi.jpg";
import test_pp_icon_7 from "./photos/neymar.jpg";
const dataPrueba = [
    {
        username: 'Ana zemoga',
        src: test_pp_icon_2,
        name: '@Anaz'
    },
    {
        username: 'Juliana zemoga',
        src: test_pp_icon_3,
        name: '@JulianaZemoga'
    },
    {
        username: 'Mauricio Zemoga',
        src: test_pp_icon_4,
        name: '@Mauricio'
    },
    {
        username: 'Camilo Zemoga',
        src: test_pp_icon_5,
        name: '@Camilo'
    },
    {
        username: 'Leonel Messi',
        src: test_pp_icon_9,
        name: '@Messi'
    },
    {
        username: 'Neymarjr',
        src: test_pp_icon_7,
        name: '@Neymarjr'
    },
]
function AvatarArea() {
    return (
        <div>
            <div className="avatar-area-main-box">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo" />
                <div className="avatar-name">
                    <div id="linked-username">sleydavid_</div>
                    <div style={{ color: "#8e8e8e" }}>Sley David Murillo Peña</div>
                </div>
                <div className="profile-switch-and-follow-button">Cambiar</div>
            </div>
            <div style={{ margin: "12px 0 12px", display: "flex" }}>
                <div style={{ color: "#8e8e8e" }}>Sugerencias para ti</div>
                <div style={{ marginLeft: "120px" }}>Ver todo</div>
            </div>
            
                {dataPrueba.map((user) => {
                    return (<div className="avatar-area-suggestions"><div className="avatar-area-main-box">
                        <img className="profile_photo_small" src={user.src} alt="logo" />
                        <div className="avatar-name">
                            <div id="linked-username">{user.username}</div>
                            <div style={{ color: "#8e8e8e" }}>{user.name}</div>
                        </div>
                        <div className="profile-switch-and-follow-button">Seguir</div>
                    </div></div>)
                })}
            <div className="all-gray">
                <div className="basic-link-help" style={{ marginTop: "30px" }}>
                    <div><a href="frontend/src#">Informacion</a></div>
                    <div>Ayuda</div>
                    <div>Prensa</div>
                    <div>API</div>
                    <div>Empleo</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Locations</div>
                    <div>Language</div>
                </div>
                <div style={{ marginTop: "30px" }}>© 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default AvatarArea;