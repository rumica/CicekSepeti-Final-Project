import React, { useEffect, useState, useContext }from 'react'
import { CategoryContext } from '../../context/CategoryContext';
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    width: 800px;
    height: 750px; 
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

function AddProductDetail() {

    const [categories, setCategories] = useContext(CategoryContext)
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [statuses, setStatuses] = useState ([]);

      useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all')
        .then((response) => response.json())
        .then(response => setBrands(response))
      }, [])

      useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/color/all')
        .then((response) => response.json())
        .then(response => setColors(response))
      }, [])

      useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/status/all')
        .then((response) => response.json())
        .then(response => setStatuses(response))
      }, [])

      
    return (
        <Container>
            <h3>Ürün Detayları</h3>
            <label htmlFor="name">Ürün Adı</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Örnek: Iphone 12 Pro Max"
            />
            <label htmlFor="name">Açıklama</label>
            <textarea 
                name="name" 
                placeholder="Ürün açıklamasını girin.">
            </textarea>
            <div className="option-container">
                <form>
                    <label htmlFor="category">Kategori</label>
                    <select id="category" name="category">
                    {categories.map(category => {
                        return (
                            <option value={category.title}>{category.title}</option>
                        )
                    })}
                    </select>

                    <label htmlFor="brand">Marka</label>
                    <select id="brand" name="brand">
                    {brands.map(brand => {
                        return (
                            <option value={brand.title}>{brand.title}</option>
                        )
                    })}
                    </select>

                    <label htmlFor="color">Renk</label>
                    <select id="color" name="color">
                    {colors.map(color => {
                        return (
                            <option value={color.title}>{color.title}</option>
                        )
                    })}
                    </select>

                    <label htmlFor="status">Kullanım Durumu</label>
                    <select id="status" name="status">
                    {statuses.map(status => {
                        return (
                            <option value={status.title}>{status.title}</option>
                        )
                    })}
                    </select>
                </form>
            </div>
            <button>Kaydet</button>
        </Container>
    )
}

export default AddProductDetail;
