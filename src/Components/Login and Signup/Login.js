import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function LoginForm() {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(true);
  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password ) {
      alert('Please fill in both fields.');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login logic here

    try {
      if (e.target.name === "createaccount"){
        let createUser = await createUserWithEmailAndPassword(auth,username,password);
        console.log(createUser);
        
      } else{
        let loginUser  = await signInWithEmailAndPassword (auth, username, password) ;
        console.log(loginUser);
      }
      navigate('/');
    } catch (error) {
      console.error(error)
    }

    
  };

  const onSignUp = (e) => {
    e.preventDefault();
    console.log(signup);
    setSignup(!signup)
  }

  return (
    <div className='login-main-container' >
            
        <form className='login-card-container' >
          {signup ?
          <div>

          
            <h2>Login</h2>
            <input
                className='login-input'
                type="text"
                id="username"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className='login-input'
                placeholder='Password'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          :
          <div>

          
            <h2>Sign Up</h2>
            <input
                className='login-input'
                type="text"
                id="username"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className='login-input'
                placeholder='Password'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          }
          <div style={{display:'flex',justifyContent:'space-evenly', width:"100%"}}>
            <button name='login' className='login-button'  onClick={handleFormSubmit}>Log In</button>
            { signup ? 
            <button  type='button' className='login-button' onClick={onSignUp}>sign up</button> 
            : <button name='createaccount'  className='login-button' onClick={handleFormSubmit}>Create Account</button> }

            
          </div>
            
        </form> 

      
    </div>
  );
}

export default LoginForm;
