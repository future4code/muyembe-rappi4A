import React, { useContext, useState } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext';
import {ContainerCategory, ItemCategory, ListaCategory} from './styled'

const CategoriesFoods = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const onClickCategory = (category) => {
    setters.setCategorySelected(category)
  }

  return (
    <ContainerCategory>
      <ListaCategory>
        {states.categoriesRestaurants.map((category, index) => {
          let isSelected
          if(states.categorySelected === category ) {
            isSelected = true
          } else {
            isSelected = false
          }  
          return (
            <ItemCategory 
              key={index} 
              colorSelected={isSelected}
              onClick={() => onClickCategory(category)}
            >
              {category}
            </ItemCategory>
          )
        })}
      </ListaCategory>
        
    </ContainerCategory>
  );
  }
  export default CategoriesFoods;