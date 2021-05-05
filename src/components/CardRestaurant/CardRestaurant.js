import React, { useContext, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { ContainerCardRestaurant, ContainerFooterInfoCard, ContainerImageLogoRestaurant, InfoShipping, InfoTimeDelivery, LogoRestaurant, NameRestaurant } from './styled'

const CardRestaurant = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
  
  const filterRestaurantCategory =
    states.restaurants &&
    states.restaurants.filter((restaurant) => {
      if(states.categorySelected === restaurant.category) {
        return restaurant
      }
    })

  return (
    <>
      {filterRestaurantCategory.map((item, index) => {
        console.log("item === ", item)
        return(
          <ContainerCardRestaurant key={index}>
            <ContainerImageLogoRestaurant>
              <LogoRestaurant src={item.logoUrl} />
            </ContainerImageLogoRestaurant>
            <NameRestaurant>{item.name}</NameRestaurant>
            <ContainerFooterInfoCard>
              <InfoTimeDelivery>{item.deliveryTime} min</InfoTimeDelivery>
              <InfoShipping>Frete: R$ {item.shipping.toFixed(2).toString().replace(".", ",")}</InfoShipping>
            </ContainerFooterInfoCard>
          </ContainerCardRestaurant>
        ) 
      })}
    </>
  );
}
export default CardRestaurant;