import styled from 'styled-components';

export const ContainerCartPage = styled.main`
    margin: 0 16px;

    .cartCenteredText {
        text-align:center;
    }
`

export const AddressDeliveryContainer = styled.section`
    align-items: center;
    background-color: #eeeeee;
    display: flex;
    height: 76px;
`

export const AddressDeliveryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 16px;
`

export const PriceContainer = styled.section`
    margin-top: 72px;

    .shippingPrice {
        display: flex;
        justify-content: flex-end;
    }
`

export const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PaymentTypeContainer = styled.section`
    margin-top: 24px;
    
    hr {
        border-top: 1px solid black;
    }
`

export const PaymentTypeForm = styled.form`
    #cartao {
        margin-top: 16px;
    }
`