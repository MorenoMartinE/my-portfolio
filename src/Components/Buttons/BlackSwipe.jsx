import {useState, useRef} from 'react';

const BlackSwipe = () => {

    const [swipeControl, setSwipeControl] = useState({
        transform: `translateX(0px)`
    });


    const swipeHandler = (e) =>{

        console.log(e.target.offsetLeft);

        let result;
        if(e.changedTouches[0].clientX - e.target.offsetLeft > 0){
            result = e.changedTouches[0].clientX - (e.target.offsetLeft * 1.2)
            setSwipeControl({
                transform: `translateX(${result}px)`
            });
        }else{
            setSwipeControl({
                transform: `translateX(0px)`
            });
        } 


                
        if(e.changedTouches[0].clientX > window.screen.width - (e.target.offsetLeft * 1.2)){

            setSwipeControl({
                float: `right`,
            });
        }

 

        
    }

    const realeaseHandler = (e) => {
        e.target.style.opacity = 1;
    }

    function useDebounce(callback, ms) {
        const timeoutId = useRef();
    
        return (...params) => {
            clearInterval(timeoutId.current);
            timeoutId.current = setTimeout(() => {
                callback(...params);
            }, ms);
        }
    }
   
    const debounceSwipe = useDebounce(swipeHandler, 5);

    return(
        <div className="border border-white rounded-3xl w-[14rem] h-[2rem]">
            <div style={swipeControl} className="bg-white h-[1.9rem] w-[1.9rem] rounded-3xl " id="slider-dot" onTouchMove={debounceSwipe} onTouchEnd={realeaseHandler}>
            </div>
        </div>
    );
}

export default BlackSwipe;