// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react';
import right from "./photos/right.png"
import left from "./photos/left.png"
import test_pp_icon from "./photos/pefil.jpg";
import test_pp_icon_9 from "./photos/messi.jpg"
import test_pp_icon_7 from "./photos/neymar.jpg"
import test_pp_icon_2 from "./photos/On an island.jpg";
import test_pp_icon_3 from "./photos/Juli.jpg";
import test_pp_icon_4 from "./photos/post.jpg";
import test_pp_icon_5 from "./photos/post.jpg";
import StoryElement from "./StoryElement";


function StoryArea() {
    const scrollRef = useRef();

    const scrollRight = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft + 325,
            behavior: 'smooth'
        });
    };
    const scrollLeft = () => {
        const element = scrollRef.current;
        element.scrollTo({
            left: element.scrollLeft - 325,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div>
                <div className="story-left-button" onClick={scrollLeft}><img src={left} alt="left"/></div>
                <div className="story-area-box" ref={scrollRef}>
                    <StoryElement profilePicture={test_pp_icon}>
                        Sley David Murillo Peña 
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_2}>
                    Ana zemoga
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_3}>
                      Juliana Zemoga
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_7}>
                        Neymar jr
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        Royner Simón
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        Jhordan Rodman
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_9}>
                        Leonel Andres Messi
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_5}>
                        Mauricio Zemoga
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon_4}>
                        Camilo Zemoga
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        Josser Cordoba 
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        Luis carlos
                    </StoryElement>
                    <StoryElement profilePicture={test_pp_icon}>
                        Cristiano Ronaldo
                    </StoryElement>

                </div>
                <div className="story-right-button" onClick={scrollRight}><img src={right} alt="right"/></div>
            </div>

        </div>
    );
}

export default StoryArea;
