import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { ContainerCardRestaurant, ContainerShipping, ContainerImageLogoRestaurant, InfoShipping, InfoTimeDelivery, LogoRestaurant, NameRestaurant, ContainerNameAndTime, ContainerInfosCard, ContainerNotFound } from './styled'

const CardRestaurant = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);
      
  return (
    <>

      {states.dataRestaurantsView.length > 0 ? 
        states.dataRestaurantsView.map((item, index) => {  
          return(
            <ContainerCardRestaurant key={index}>
              <ContainerImageLogoRestaurant>
                <LogoRestaurant src={item.logoUrl} />
              </ContainerImageLogoRestaurant>
              <ContainerInfosCard>
                <ContainerNameAndTime>
                  <NameRestaurant>{item.name}</NameRestaurant>
                  <InfoTimeDelivery>{item.deliveryTime} min</InfoTimeDelivery>
                </ContainerNameAndTime>
                <ContainerShipping>
                  <InfoShipping>Frete: R$ {item.shipping.toFixed(2).toString().replace(".", ",")}</InfoShipping>
                </ContainerShipping>
              </ContainerInfosCard>
            </ContainerCardRestaurant>
          ) 
        })
        :
        <ContainerNotFound>Não encontramos :(</ContainerNotFound>
      }
    </>
  );
}
export default CardRestaurant;