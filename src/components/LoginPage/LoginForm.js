import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from '../RegisterPage/ScRegisterForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm({Login, error}) {

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

  const notify = () => toast.error("E-mailiniz veya şifreniz hatalı!", {theme: "colored"});


  fetch("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", requestOptions)
    .then(response => response.json())
    .then(result => result.hasOwnProperty('access_token') ? sessionStorage.setItem('token', result.access_token) : notify())
    .catch(error => console.log('error', error));

    setTimeout(()=> {
      if (sessionStorage.getItem("token") !== null) {
        window.location.href = '/';
      }
    }, 500)

  }

  const handleClick = () => {
    history.push("/register-page")
  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <FormContainer>
              <ToastContainer />
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