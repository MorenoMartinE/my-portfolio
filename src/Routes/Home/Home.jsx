import WhiteButton from '../../Components/Buttons/WhiteButton.jsx';

import Lottie from 'lottie-react';
import Loading from '../../assets/Animation/Load.json';
import { Link } from 'react-router-dom';



const Home = (props) => {

    const fadeIn = () => {
        document.getElementById('home-div').style.opacity = 1;
    }

    const handlerContinueClick = () => {
        document.getElementById('home-div').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('hid-link').click();
            props.setOnLoading(false);
        }, 700);
    }

    setTimeout(() => {
        fadeIn();
    }, 500);


    return(
        <>
        <div className="min-h-screen min-w-full flex flex-col justify-center align-middle items-center py-[11vh] font-poppins bg-white duration-700 transition-all opacity-0" id="home-div">
            <Lottie animationData={Loading} className='z-[1]' id="lottie-intro-animation" />
            <WhiteButton callback={handlerContinueClick} />
            <Link className='hidden' to='/whoim' id='hid-link'/>
        </div>
        </>
    );
}

export default Home;