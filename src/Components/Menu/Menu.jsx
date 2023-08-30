import Sidebar from './Sidebar/Sidebar.jsx';
import Hanburger from './Hamburger/Hamburger.jsx';
import { useState } from 'react';




const Menu = (props) => {

    const [isOnTop, setIsOnTop] = useState(true);
    document.addEventListener('scroll', (e) => {
        if(window.scrollY > 20){
            setIsOnTop(false);
        }else{
            setIsOnTop(true);
        }
    });
    

    const [isOnMenu, setIsOnMenu] = useState(false);
    const hamburgerHandler = (bool) => {
        setIsOnMenu(bool);
    }

    const fadeIn = () => {
        document.getElementById('menu-div').style.opacity = 1;
    }

    setTimeout(() => {
        fadeIn();
    }, 100);
    
    return(
        <>
            <menu 
                id='menu-div'
                onClick={() => hamburgerHandler(!isOnMenu)}  
                className={isOnTop ? 
                    "bg-gradient-to-r from-indigo-500  to-purple-500 w-screen fixed h-[4rem] flex items-center delay-0 duration-700 top-0 shadow-xs opacity-0"
                    : 
                    "bg-gradient-to-r from-indigo-500  to-purple-500 w-screen fixed h-[3.5rem] flex items-center delay-0 duration-1000 top-0 shadow-xs backdrop-blur-sm opacity-0"
                }>
                    <Hanburger />
            </menu>

            <div className={isOnMenu ? "fixed duration-700" : "fixed duration-700 translate-x-[100vw]"}>
            <Sidebar setIsOnMenu={setIsOnMenu} isOnTop={isOnTop}/>
            </div>
        </>
    )
}


export default Menu;