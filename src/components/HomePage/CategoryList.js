import React, { useContext } from 'react';
import Styled from 'styled-components';
import Category from './Category';
import { CategoryContext } from '../../contexts/CategoryContext';

const Container = Styled.div`
    margin: 25px 60px;
    display: flex;
    justify-content: space-around;
`
const CategoryList = () => {

    const [categories, setCategories] = useContext(CategoryContext);

    return(
        <>
            <Container>
                {categories.map(category => (
                    <Category
                    category={category.title}
                    key={category.id}
                    />
                ))}
            </Container>
        </>
    );
}

export default CategoryList;