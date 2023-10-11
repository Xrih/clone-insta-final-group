import React from 'react';
import PostElement from "./PostElement";
import test_pp_icon_1 from "./photos/On an island.jpg";
import test_pp_icon_2 from "./photos/post.jpg";
import test_pp_icon_3 from "./photos/Juli.jpg";
import test_pp_icon_4 from "./photos/post.jpg";
import test_pp_icon_5 from "./photos/post.jpg";
import test_pp_icon_10 from "./photos/messivsjordan.jpg";
import test_post_video from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";
import test_post_video_2  from "./posts/jhonwick.mp4";
import test_pp_icon_11 from "./photos/cr7.jpg";
import test_post_video_3  from "./posts/badboysforlife .mp4"; 
import test_pp_icon_23 from "./photos/download.jpg";
import test_pp_icon_9 from "./photos/messi.jpg"


const dataPostSet = [
    {
        media: test_pp_icon_2, 
        likeCount: "10", 
        profilePicture: test_pp_icon_1,
        time: "6s",
        username: "Ana Zemoga",  
        explanation: "una imagen echa con inteligencia artificial....",
        
    },
    {
        media: test_post_video, 
        likeCount: "10", 
        mediaType: "video",
        profilePicture: test_pp_icon_1,
        time: "6s",
        username: "Juliana Zemoga",  
        explanation: "maravilla de paraiso..."
    },
    {
        media: test_pp_icon_10, 
        likeCount: "10", 
        profilePicture: test_pp_icon_4,
        time: "6s",
        username: "Camilo Zemoga",  
        explanation: "Messi vs Jhordan los GOAT..."
    },
    {
        media: test_post_video_2, 
        likeCount: "10", 
        mediaType: "video",
        profilePicture: test_pp_icon_5,
        time: "6s",
        username: "Mauricio Zemoga",  
        explanation: "JHONWICK..."
    },
    {
        media: test_pp_icon_11, 
        likeCount: "10", 
        profilePicture: test_pp_icon_5,
        time: "6s",
        username: "Jhordan Rodnman",  
        explanation: "SIIUUUUU..."
    },
    {
        media: test_post_video_3, 
        likeCount: "10", 
        mediaType: "video",
        profilePicture: test_pp_icon_5,
        time: "6s",
        username: "Tony",  
        explanation: "badboys..."
    },
    {
        media: test_pp_icon_23, 
        likeCount: "68m", 
        profilePicture: test_pp_icon_4,
        time: "6s",
        username: "Alison",  
        explanation: "EL GOAT..."
    },
    {
        media:test_pp_icon_23, 
        likeCount: "288m", 
        profilePicture: test_pp_icon_9,
        time: "7s",
        username: "Leonel Messi",  
        explanation: "Gracia Dios por permitime ser campeon del mundo..."
    },
]

function PostArea() {
    return (
        <div>
            {dataPostSet.map((post) => {
                return ( <PostElement 
                    media={post.media} 
                    likeCount={post.likeCount} 
                    profilePicture={post.profilePicture} 
                    time={post.time} 
                    username={post.username}
                    mediaType={post.mediaType}
                    explanation={post.explanation}/>)
            })}     
            </div>
    );
}

export default PostArea;