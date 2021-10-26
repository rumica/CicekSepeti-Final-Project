import React, { useEffect, useState, useContext }from 'react'
import { CategoryContext } from '../../contexts/CategoryContext';
import downloadIcon from '../../assets/download.png'
import { Container } from './ScProductDetail';

const AddProductDetail = () => {

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
                    <label htmlFor="price">Fiyat</label>
                    <input type="number" placeholder="Bir fiyat girin."/>
                </form>
            </div>
            <h3>Ürün Görseli</h3>
            <div className="border">
                <img src={downloadIcon} alt="" />
                <p>Sürükleyip bırakarak yükle veya</p>
                <button className="choose-photo">Görsel Seçin</button>
            </div>
            <button>Kaydet</button>
        </Container>
    )
}

export default AddProductDetail;
