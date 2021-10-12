import Styled from 'styled-components';

export const FormContainer = Styled.div`
    width: 450px;
    height: 400px;
    box-shadow: 0px 3px 12px #1E36480A;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #525252;
    h2 {
        font-weight: 900;
    }
    .form-item {
        display: flex;
        flex-direction: column;
        input{
            padding-left: 10px;
            color: #525252;
            width: 300px;
            height: 35px;
            border-radius: 8px;
            border: none;
            background-color: #f4f4f4;
            outline: none;
            &:focus {
                background-color: #f0f8ff;
                border: 1px solid #4b9ce2;
            }
        }
       
    }
    input[type=submit] {
            background-color: #4b9ce2;
            color: #ffff;
            width: 300px;
            height: 35px;
            border: none;
            border-radius: 8px;
            font-size: 15px;
            cursor: pointer;
            &:hover {
                background-color: #91c2ed; 
            }
      }

      p button {
          text-decoration: none;
          color: #4b9ce2;
          background: transparent;
          border: none;
          cursor: pointer;
      }
`


