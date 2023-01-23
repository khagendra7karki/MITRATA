import React from 'react'

export default function 
() {
  return (
<>    



   
  <div className="text-center">
    
<main className="form-signin w-100 m-auto">
  <form action="/" method="POST">
    <img className="mb-4" src="" alt="LOGO"/>
    <h1 className="h3 mb-3 fw-normal">Sign Up to find your match</h1>

    <div className="form-floating">
      <input type="text" name = "fname" className="form-control" id="floatingInput" placeholder="First Name" />
      <label htmlFor="floatingInput">First</label>
    </div>
    <div className="form-floating">
      <input type="text" name = "lname"  className="form-control" id="floatingPassword" placeholder="Last Name"/>
      <label htmlFor="floatingPassword">second</label>
    </div>
    <div className="form-floating">
      <input type="email" name = "email" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
      <label htmlFor="floatingPassword">email address</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> I agree the terms & conditions.
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2022–2025</p>
  </form>
</main>


  </div>


</>
  )
}
