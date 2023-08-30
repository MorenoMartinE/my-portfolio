import Me from '../../../assets/Left Icons/man.png';
import MyWork from '../../../assets/Left Icons/screen.png'
import MySkills from '../../../assets/Left Icons/implant.png';
import MyProfile from '../../../assets/Left Icons/underground.png';
import Contact from '../../../assets/Left Icons/neon-sign.png';
import About from '../../../assets/Left Icons/code.png';

import {Link} from 'react-router-dom';




const Sidebar = (props) => {

    return(
        <div className={props.isOnTop ? "overflow-scroll max-h-[80vh] top-[4.5rem] absolute bg-[var(--ligth-grey)] bg-opacity-70 rounded shadow  flex justify-evenly flex-col ml-5 duration-700 shadow-xs min-w-[15rem] backdrop-blur-sm z-[2]" : "overflow-scroll max-h-[80vh] top-[3.9rem] absolute  bg-gray-600 rounded shadow flex justify-evenly items-center flex-col ml-5 duration-700 shadow-xs min-w-[15rem] bg-opacity-70 backdrop-blur-sm z-[2]"}>
            <Link to="/whoim" className='flex content-center p-4 mt-2'>
                <img src={Me} className='w-10'/>
                <p className='text-white text-center w-40 justify-center align-middle'>Who I'm</p>
            </Link>
            <Link className='flex content-center p-4 mt-2' to="/mywork">
                <img src={MyWork} className='w-10'/>
                <p className='text-white text-center w-40 justify-center align-middle' >My Work</p>
            </Link>
            <Link className='flex content-center p-4 mt-2' to="/myskills">
                <img src={MySkills} className='w-10'/>
                <p className='text-white text-center w-40 justify-center align-middle' >My Skills</p>
            </Link>
            <Link className='flex content-center p-4 mt-2' to="/myprofile">
                <img src={MyProfile} className='w-10'/>
                <p className='text-white text-center w-40 justify-center align-middle' >My Profile</p>
            </Link>
            <Link className='flex content-center p-4 mt-2'>
                <img src={Contact} className='w-10' to="/contact"/>
                <p className='text-white text-center w-40 justify-center align-middle'>Contact</p>
            </Link>
            <Link className='flex content-center p-4 mt-2' to="/about">
                <img src={About} className='w-10'/>
                <p className='text-white text-center w-40 justify-center align-middle' >About This Page</p>
            </Link>            
        </div>
    );

}

export default Sidebar;