import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from './ScRegisterForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm({Login, error}) {

  if (sessionStorage.getItem("token") !== null) {
    window.location.href = '/';
  }

  let history = useHistory(); 
  const [info, setInfo] = useState({
    email:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
      "email": `${info.email}`,
      "password": `${info.password}`
      });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

  const notify = (result) => result.message.map((element) => toast.warn(element.charAt(0).toUpperCase() + element.slice(1)));

  fetch("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", requestOptions)
    .then(response => response.json())
    .then(result => result.hasOwnProperty('access_token') ? handleClick() : notify(result))
    .catch(error => console.log('error', error));
  }

  const handleClick = () => {
    history.push("/login-page")
  }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <FormContainer>
              <ToastContainer />
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
