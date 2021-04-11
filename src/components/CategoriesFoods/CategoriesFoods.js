import React from 'react'
import {ContainerCategory, ItemCategory, ListaCategory} from './styled'

const CategoriesFoods = ({categories}) => {
    
    return (
      <ContainerCategory>
          <ListaCategory>
            {categories.map((category, index) => {
                return (
                    <ItemCategory key={index}>{category}</ItemCategory>
                )
            })}
          </ListaCategory>
          
      </ContainerCategory>
    );
  }
  export default CategoriesFoods;