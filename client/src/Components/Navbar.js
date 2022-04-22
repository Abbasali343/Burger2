import react from 'react';
import '../App.css';

const Navbar = () => {
    return(

        <>
        <div className='navbar'>
            <div className='logo'>
                <a className='home' href='/'>Home</a>
            </div>
            <div className='btn'>
            <a className='reg' href='/registration'>SignUp</a>
            <a className='log' href='/login'>SignIn</a>
            </div>
            
        </div>
        </>

    )
}

export default Navbar