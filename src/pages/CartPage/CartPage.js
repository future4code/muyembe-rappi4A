import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPages from '../../hooks/useProtectedPages';
import { goToRestaurantListPage } from '../../routes/Coordinator';
import { AddressDeliveryContainer, AddressDeliveryInfo, ContainerCartPage, PaymentTypeContainer, PaymentTypeForm, PriceContainer, TotalPrice } from './styled';
import { Button } from '@material-ui/core';

const CartPage = () => {
  useProtectedPages()
  const history = useHistory();

  return (
    <ContainerCartPage>
      <button onClick={() => goToRestaurantListPage(history)}> Ir para página inicial </button>
      <p className="cartCenteredText"> Meu carrinho </p>

      <AddressDeliveryContainer>
        <AddressDeliveryInfo>
          <div> Endereço de entrega </div>
          <div> Rua do endereço mockado, 000 </div>
        </AddressDeliveryInfo>
      </AddressDeliveryContainer>

      <p className="cartCenteredText"> Carrinho vazio </p>

      <PriceContainer>
        <p className="shippingPrice"> Frete R$0,00 </p>
        <TotalPrice>
          <p >SUBTOTAL </p>
          <p> R$00,00 </p>
        </TotalPrice>
      </PriceContainer>

      <PaymentTypeContainer>
        <p> Forma de pagamento </p>
        <hr></hr>

        <PaymentTypeForm>
          <input type="radio" id="dinheiro" name="pagamento" value="dinheiro" />
          <label for="dinheiro"> Dinheiro </label> <br />
          <input type="radio" id="cartao" name="pagamento" value="cartao" />
          <label for="cartao"> Cartão </label>
        </PaymentTypeForm>

      </PaymentTypeContainer>

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth
        type="submit"
      >
        Confirmar
      </Button>

    </ContainerCartPage>
  );
};

export default CartPage;