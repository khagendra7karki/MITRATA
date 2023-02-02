import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Signin() {
  return (
    <div className= "App">    
    <div className="text-center">
      
  <main className="form-signin w-100 m-auto">
    <form action="/" method="POST">
      <img className="mb-4" src="" alt="LOGO"/>
      <h1 className="h3 mb-3 fw-normal">Sign In to find your match</h1>
  
      <div className="form-floating">
        <input type="email" name = "email" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
        <label htmlFor="floatingPassword">email address</label>
      </div>
      <div className="form-floating">
        <input type="password" name = "Password" className="form-control" id="floatingPassword" placeholder="password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <Button href="/dashboard" className="w-100 btn btn-lg btn-primary" type="submit">Sign In</Button>
      <p className="mt-5 mb-3 text-muted"><a href="/reset">&copy;Forget password</a></p>
    </form>
  </main>
    </div>  
  </div>
  )
}
