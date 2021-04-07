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
    top: 0px;
    max-width:150px;
    max-height:150px;
    width: auto;
    height: auto;
`

export const Mensagem = styled.p`
  position: absolute;
  top: 50px;
  font-size: 50px;
  font-weight: bold;
  color: #ef77cd;
  z-index: 1;
`
export const Mensagem1 = styled.p`
  position: absolute;
  top: 150px;
  font-size: 30px;
  font-weight: bold;
  color: #FF52CE;
  z-index: 1;
`
export const Mensagem2 = styled.p`
  position: absolute;
  top: 200px;
  font-size: 30px;
  font-weight: bold;
  color: #FFA52D;
  z-index: 1;
`

export const Enfeite = styled.div`
    position: absolute;
    top: -50px;
    right: 30px;
    width: 35px;
    height: 160px;
    transform: rotate(35deg);
    border-radius: 30px;
    background-image: linear-gradient(192deg,#f8ffae,#43c6ac 98%);
`

export const Enfeite2 = styled.div`
    position: absolute;
    left: 15px;
    top: 0;
    width: 40px;
    height: 194px;
    transform: rotate(35deg);
    border-radius: 30px;
    background-image: linear-gradient(168deg,#fc5c7d,#6a82fb);
`

export const Enfeite3 = styled.div`
    position: absolute;
    bottom: 20%;
    left: 10%;
    width: 20px;
    height: 210px;
    transform: rotate(35deg);
    border-radius: 30px;
    background-image: linear-gradient(185deg,#fdbb2d 1%,#22c1c3);
`

export const Enfeite4 = styled.div`
    position: absolute;
    bottom: 50%;
    right: 10%;
    width: 20px;
    height: 210px;
    transform: rotate(35deg);
    border-radius: 30px;
    background-image: linear-gradient(185deg,#fdbb2d 1%,#22c1c3);
`

export const Enfeite5 = styled.div`
    position: absolute;
    bottom: 0%;
    right: 10%;
    width: 20px;
    height: 210px;
    transform: rotate(35deg);
    border-radius: 30px;
    background-image: linear-gradient(192deg,#FF52CE 10%,#ef77cd);
`

export const BackButton = styled.button`
    position: absolute;
    bottom: 400px;
    border: none;
    background-color: transparent;
    color: #FFA52D;
    font-size: 30px;
    font-weight: bold;
`

export const ImgErroFeliz = styled.img`
    position: absolute;
    bottom: 0px;
    z-index: 1;
`