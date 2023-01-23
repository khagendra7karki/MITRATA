import React from 'react'

export default function 
() {
  return (
<>    



   
  <body class="text-center">
    
<main class="form-signin w-100 m-auto">
  <form action="/" method="POST">
    <img class="mb-4" src="" alt="LOGO"/>
    <h1 class="h3 mb-3 fw-normal">Sign Up to find your match</h1>

    <div class="form-floating">
      <input type="text" name = "fname" class="form-control" id="floatingInput" placeholder="First Name" />
      <label for="floatingInput">First</label>
    </div>
    <div class="form-floating">
      <input type="text" name = "lname"  class="form-control" id="floatingPassword" placeholder="Last Name"/>
      <label for="floatingPassword">second</label>
    </div>
    <div class="form-floating">
      <input type="email" name = "email" class="form-control" id="floatingPassword" placeholder="name@example.com"/>
      <label for="floatingPassword">email address</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> AVoT
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2022–2025</p>
  </form>
</main>


    
  </body>


</>
  )
}
