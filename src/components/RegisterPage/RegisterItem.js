import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function RegisterItem() {

  const [user, setUser] = useState({
    email: ""
  });

  const [error, setError] = useState("");

  const Login = info => {
    console.log(info)
    if (info.email.length > 7  && info.password.length > 7) {
      console.log("Başarılı bir şekilde üye oldunuz!")
      setUser({
        email: info.email
      })
    } else {
      console.log("E-mailiniz ve şifreniz en az 8 karakter içermelidir.")
      setError("E-mailiniz ve şifreniz en az 8 karakter içermelidir.")
    }
  };

  return (
    
        <RegisterForm  
         Login={Login}
         error={error}
         />   
  );
}

export default RegisterItem;