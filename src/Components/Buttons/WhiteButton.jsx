import BlackArrow from '../../assets/ButtonIcon/BlackArrow.png';




const WhiteButton = (props) => {


    return(
        <button className='w-[12rem]' to='whoim' onClick={props.callback}>
            <div className='flex justify-evenly align-middle items-center p-7 w-[12rem] h-[2rem] border-solid border-black border-2 animate-pulse duration-700 opacity-[.1]' id="home-continue-button">
                <p className='text-black text-2xl mr-[1rem]'>Continue</p>
                <img src={BlackArrow} alt="Arrow" className='w-[2rem] h-[.7rem]' />
            </div>
        </button>
    );
}


export default WhiteButton;