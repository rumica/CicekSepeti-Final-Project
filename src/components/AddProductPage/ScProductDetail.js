import Styled from 'styled-components';

export const Container = Styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content:flex-start;
    align-items: flex-start;
    width: 1300px;
    height: 700px; 
    background-color: #ffff;
    border-radius: 8px;
    color: #525252;
    padding: 30px;
    h3{
        margin-bottom: 20px;
    }
    input, textarea {
        width: 600px;
        height: 45px;
        border: none;
        background-color: #f4f4f4;
        border-radius: 8px;
        outline: none;
        padding: 10px;
        resize: none;
        margin-bottom: 15px;
    }
    textarea {
        height: 100px;
    }
    .option-container {
        form{
            display: flex;
            flex-direction: column;
        }
        select {
            width: 250px;
            height: 45px;
            border: none;
            border: none;
            background-color: #f4f4f4;
            border-radius: 8px;
            outline: none;
            padding: 10px;
        }
    }
    .border {
        border: 1px dotted #B1B1B1;
        width: 500px;
        height: 160px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .choose-photo {
            color: #B1B1B1;
            width: 84px;
            height: 50px;
            border-radius: 8px;
        }
    }
    button {
        background-color: #4B9CE2;
        color: #ffff;
        width: 315px;
        height: 45px;
        border-radius: 8px;
        border: none;
        margin-top: 100px;
    }

`