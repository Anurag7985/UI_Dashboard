import React from 'react'

export default function Login() {
  return (
    <div className='container'>
        <div className='login-form'>
            <div className='login-form-cont1'>
                <img id='logo' src='/images/logo-login.png'/>
            </div>
            <div className='login-form-cont2'>
                <h1 id='head'>Log in</h1>
                <p>Enter to continue and explore within your grasp</p> 
                <form>
                    <div className='login-form-email-sec'>
                        <label id='email-label' for="email">Email ID</label><br/>
                        <input type="email" id="email" placeholder="Enter your Email ID" required/>
                    </div>
                    <div className='login-form-pass-sec'>
                        <label for="password">Password</label><br/>
                        <input type="password" id="password" placeholder="Enter your Password" required/>
                    </div>
                    <div className='login-form-forgot-sec'>
                        <input type="checkbox" id="remember-me"/>
                        <label for="remember-me">Remember Me</label>
                        <a id='forgot-btn' href="#">Forgot password?</a>
                    </div>
                    <button id='sub-btn' type="submit">Login to Continue</button>
                </form>

            </div>
            
           

        </div>
     
    </div>
  )
}
