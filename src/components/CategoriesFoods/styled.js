import styled from 'styled-components'

export const ContainerCategory = styled.div`
  
`
export const ListaCategory = styled.ul`
  list-style: none;
  display: flex;
`

export const ItemCategory = styled.li`
  margin: 0 8px;
  font-weight: bold;

  color: ${(props) => {
    if(props.colorSelected){
      return "red"
    } else {
      return ""
    }
  }}
`

