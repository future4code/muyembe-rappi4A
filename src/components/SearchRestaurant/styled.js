import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export const ContainerSearchRestaurant = styled.div`
    display: flex;
    justify-content: center;
    margin: 8px 0;
`

export const IconSearch = styled(SearchIcon)`
    margin: 0 8px;
`
export const InputNameRestaurant = styled.input`
   height: 100%;
   width: 100%;
   border: none;
   margin-left: 8px;
`

export const FieldSearch = styled(TextField)`
   width: 90%;
   border: none;

   &:hover {
    ${(props) => {
        props.mouse()
    }} 
  }
`

export const FormSearchRestaurant = styled.form`
   width: 90%;
   height: 60px;
   border: none;
   display: flex;
   align-items: center;
   border: 1px solid gray;
   padding: 08px;
`


