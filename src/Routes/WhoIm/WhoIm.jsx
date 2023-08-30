import { TypeAnimation } from 'react-type-animation';

import BlackSwipe from '../../Components/Buttons/BlackSwipe.jsx';


const WhoIm = () => {


    const fadeIn = () => {
        document.getElementById('frame-div').style.opacity = 1;
    }

    setTimeout(() => {
        fadeIn();
    }, 200);


    return(
        <>
        <div className="h-screen py-[11vh] flex flex-col justify-evenly items-center duration-700 opacity-0" id='frame-div'>
            <div className='flex justify-center items-center flex-col p-7 border-solid border-white border'>
                <p className='text-left w-[40vw]'>I'm a</p>
                <TypeAnimation
                sequence={[
                    "Developer",
                    2000,
                    "Writer",
                    4000,
                    "Designer",
                    2000,
                  ]}
                  speed={1}
                  repeat={Infinity}
                  style={{ fontSize: '1.5em' }}
                />
            </div>
            <div>
                <BlackSwipe />
            </div>
        </div>
        </>
    )
}

export default WhoIm;