import React, { useEffect, useState, useContext }from 'react'
import { ProductContext } from '../../context/ProductContext';
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

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [statuses, setStatuses] = useState ([]);
    const [items, setItems] = useContext(ProductContext)

    
    useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
        .then((response) => response.json())
        .then(response => setCategories(response))
      }, [])

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

      const updateBrand = (e) => {
            setBrands(e.target.value)
      }

      const addProduct = e => {
          e.preventDefault()
          console.log(items)
      }


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
                <form onSubmit={addProduct}>
                    <label for="category">Kategori</label>
                    <select id="category" name="category">
                    {categories.map(category => {
                        return (
                            <option value={category.title}>{category.title}</option>
                        )
                    })}
                    </select>

                    <label for="brand">Marka</label>
                    <select id="brand" name="brand" value={brands} onChange={updateBrand}>
                    {brands.map(brand => {
                        return (
                            <option value={brand.title}>{brand.title}</option>
                        )
                    })}
                    </select>

                    <label for="color">Renk</label>
                    <select id="color" name="color">
                    {colors.map(color => {
                        return (
                            <option value={color.title}>{color.title}</option>
                        )
                    })}
                    </select>

                    <label for="status">Kullanım Durumu</label>
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
