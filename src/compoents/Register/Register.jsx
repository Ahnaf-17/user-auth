/* eslint-disable no-unused-vars */
import React from 'react';

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        console.log("chap porse");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
    }

    return (
        <div className=' mx-auto'> 
           <div className='mx-auto w-1/2'>
           <h2 className='mb-4 text-2xl'>Register</h2>
            <form onSubmit={handleRegister}>
                <input className='mb-2 w-3/4 px-2 py-2 rounded-lg' placeholder='Enter your email' type="email" name="email" id="" /><br />
                <input className='mb-2 w-3/4 px-2 py-2 rounded-lg' placeholder='Enter your password' type="password" name="password" id="" /><br />
                <input className='mb-2 w-3/4 btn
                 btn-primary' type="submit" value="Register" />
            </form>
           </div>
        </div>
    );
};

export default Register;