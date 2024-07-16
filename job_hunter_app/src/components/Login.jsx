import React from 'react'

export default function Login() {
  return (
    <div className='container'>
        <div className='login-form'>
            <h1 id='head'>Log in</h1>
            <p>it all depends upon your</p>
            <form>
                <div>
                    <label for="email">Email ID</label>
                    <input type="email" id="email" placeholder="Enter your Email ID" required/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your Password" required/>
                </div>
                <div>
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember Me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login to Continue</button>
            </form>

        </div>
     
    </div>
  )
}
