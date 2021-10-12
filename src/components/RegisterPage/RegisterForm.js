import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormContainer } from './ScRegisterForm';

function RegisterForm({Login, error}) {

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
    history.push("/login-page")
  }


  return (
      <div>
        {(error != "") ? (<div style={{position: "absolute", top: "50px", right: "10px", backgroundColor: "#ffe5e5", padding: "18px", borderRadius: "8px", boxShadow: "0px 3px 12px #1E36482E"}}>{error}</div>) : ""}
          <form onSubmit={handleSubmit}>
              <FormContainer>
                  <h2>Üye Ol</h2>
                  <p>Fırsatlardan yararlanmak için üye ol!</p>
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
                  <input type="submit" value="Üye Ol" />
                  <p>Hesabın var mı? <button onClick={handleClick}>Giriş Yap</button></p>
                </FormContainer>
            </form>
      </div>
  )
}

export default RegisterForm;
