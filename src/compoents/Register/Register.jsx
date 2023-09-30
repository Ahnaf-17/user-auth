/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        console.log("chap porse");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.terms.checked;

        console.log(email, password,check);
        if (password.length < 6) {
            setRegError("password should be more then 6 characters")
            return;
        }else if(!check){
            setRegError("Accept na kore koi jaba");
            return;
        }

        setRegError('')
        setSuccess('')
        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('user created')
            })
            .catch(error => {
                console.error(error)
                setRegError(error.message)
            })
    }

    return (
        <div className=' mx-auto'>
            <div className='mx-auto w-1/2'>
                <h2 className='mb-4 text-2xl'>Register</h2>
                <form onSubmit={handleRegister}>
                    <input className='mb-2 w-full px-2 py-2 rounded-lg' placeholder='Enter your email' type="email" name="email" id="" required /><br />
                    <div className='relative mb-2'>
                        <input className=' w-full px-2 py-2 rounded-lg'
                            placeholder='Enter your password'
                            type={showPass ? "text" : "password"}
                            name="password" id="" required />
                             <span className='absolute top-3 right-2' onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span><br />
                    </div>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Agree na kore dhuka jabena</label>
                    <input className='mb-2 w-full btn
                 btn-primary' type="submit" value="Register" />
                </form>
                {
                    regError && <p className='text-xl text-red-500'>{regError}</p>
                }
                {
                    success && <p className='text-xl text-green-600'>{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;