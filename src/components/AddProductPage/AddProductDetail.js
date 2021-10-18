import React, { useEffect, useState }from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    width: 800px;
    height: 600px; 
    background-color: #ffff;
    border-radius: 8px;
    color: #525252;
    padding: 30px;
    input, textarea {
        width: 600px;
        height: 45px;
        border: none;
        background-color: #f4f4f4;
        border-radius: 8px;
        outline: none;
        padding: 10px;
        resize: none;
    }
    .option-container {
        display: flex;
        flex-wrap: wrap;
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

`

function AddProductDetail() {

    const[categories, setCategories] = useState([])
    
    useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
        .then((response) => response.json())
        .then(response => setCategories(response))
      }, [])
    return (
        <Container>
            <h3>Ürün Detayları</h3>
            <label for="name">Ürün Adı</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Örnek: Iphone 12 Pro Max"
            />
            <label for="name">Açıklama</label>
            <textarea name="name" placeholder="Ürün açıklamasını girin."></textarea>
            <div className="option-container">
                <label for="category">Kategori</label>
                <select id="category" name="category">
                   {categories.map(category => {
                       return (
                           <option value={category.title}>{category.title}</option>
                       )
                   })}
                </select>

                <label for="brand">Marka</label>
                <select id="brand" name="brand">
                   {categories.map(category => {
                       return (
                           <option value={category.title}>{category.title}</option>
                       )
                   })}
                </select>

                <label for="color">Renk</label>
                <select id="color" name="color">
                   {categories.map(category => {
                       return (
                           <option value={category.title}>{category.title}</option>
                       )
                   })}
                </select>

                <label for="status">Kullanım Durumu</label>
                <select id="status" name="status">
                   {categories.map(category => {
                       return (
                           <option value={category.title}>{category.title}</option>
                       )
                   })}
                </select>
            </div>
        </Container>
    )
}

export default AddProductDetail;
