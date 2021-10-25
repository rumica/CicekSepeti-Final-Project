import React, { useState } from 'react';
import LoginForm from './RegisterForm';

function LoginItem() {

  const testUser = {
    email: "test@test",
    password: 123,

  }

  const [user, setUser] = useState({
    email: ""
  });

  const [error, setError] = useState("");

  const Login = info => {
    console.log(info)
    if (info.email === testUser.email && info.password === testUser.password) {
      console.log("Success!")
      setUser({
        email: info.email
      })
    } else {
      console.log("Sorry, we can't find this user.")
      setError("Sorry, we can't find this user.")
    }
  };

   return (  
         <LoginForm  
         Login={Login}
         error={error}
         />   
  );
}

export default LoginItem;