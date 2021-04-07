import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const Emoji = styled.img`
    position: absolute;
    top: 0;
    max-width:9.375rem;
    max-height:9.375rem;
    width: auto;
    height: auto;
`

export const Mensagem = styled.p`
  position: absolute;
  top: 3.125rem;
  font-size: 3.125rem;
  font-weight: bold;
  color: #ef77cd;
  z-index: 1;
`
export const Mensagem1 = styled.p`
  position: absolute;
  top: 9.375rem;
  font-size: 1.875rem;
  font-weight: bold;
  color: #FF52CE;
  z-index: 1;
`
export const Mensagem2 = styled.p`
  position: absolute;
  top: 12.5rem;
  font-size: 1.875rem;
  font-weight: bold;
  color: #FFA52D;
  z-index: 1;
`

export const Enfeite = styled.div`
    position: absolute;
    top: -3.125rem;
    right: 1.875rem;
    width: 2.188rem;
    height: 10rem;
    transform: rotate(35deg);
    border-radius: 1.875rem;
    background-image: linear-gradient(192deg,#f8ffae,#43c6ac 98%);
`

export const Enfeite2 = styled.div`
    position: absolute;
    left: 0.938rem;
    top: 0;
    width: 2.5rem;
    height: 12.125rem;
    transform: rotate(35deg);
    border-radius: 1.875rem;
    background-image: linear-gradient(168deg,#fc5c7d,#6a82fb);
`

export const Enfeite3 = styled.div`
    position: absolute;
    bottom: 20%;
    left: 10%;
    width: 1.25rem;
    height: 13.125rem;
    transform: rotate(35deg);
    border-radius: 1.875rem;
    background-image: linear-gradient(185deg,#fdbb2d 1%,#22c1c3);
`

export const Enfeite4 = styled.div`
    position: absolute;
    bottom: 50%;
    right: 10%;
    width: 1.25rem;
    height: 13.125rem;
    transform: rotate(35deg);
    border-radius: 1.875rem;
    background-image: linear-gradient(185deg,#fdbb2d 1%,#22c1c3);
`

export const Enfeite5 = styled.div`
    position: absolute;
    bottom: 0%;
    right: 10%;
    width: 1.25rem;
    height: 13.125rem;
    transform: rotate(35deg);
    border-radius: 1.875rem;
    background-image: linear-gradient(192deg,#FF52CE 10%,#ef77cd);
`

export const BackButton = styled.button`
    position: absolute;
    top: 20rem;
    border: none;
    background-color: transparent;
    color: #FFA52D;
    font-size: 1.875rem;
    font-weight: bold;
    z-index: 1;
`

export const ImgErroFeliz = styled.img`
    position: absolute;
    bottom: 0px;
    z-index: 1;
    width: 18.75rem;
`