import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormContainer } from '../RegisterPage/ScRegisterForm';

function LoginForm({Login, error}) {

  let history = useHistory(); 
  const [info, setInfo] = useState({
    email:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(info);
  }

  const handleClick = () => {
    history.push("/register-page")
  }


  return (
      <div>
          <form onSubmit={handleSubmit}>
              <FormContainer>
                  <h2>Giriş Yap</h2>
                  <p>Fırsatlardan yararlanmak için giriş yap!!</p>
                  <div className="form-item">
                      <label htmlFor="email">Email:</label>
                      <input 
                      type="email" 
                      name="email" 
                      id="email"  
                      onChange={e => setInfo({...info, email: e.target.value})} value={info.email}/>
                  </div>
                  <div className="form-item">
                      <label htmlFor="password">Şifre:</label>
                      <input 
                      type="password" 
                      name="password" 
                      id="password"  
                      onChange={e => setInfo({...info, password: e.target.value})} value={info.password}/>
                  </div>
                  <input type="submit" value="Giriş" />
                  <p>Hesabın yok mu? <button onClick={handleClick}>Üye Ol</button></p>
                </FormContainer>
          </form>
      </div>
  )
}

export default LoginForm;