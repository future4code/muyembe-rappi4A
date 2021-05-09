import React, { useContext, useState } from 'react'
import { ContainerSearchRestaurant, FieldSearch, FormSearchRestaurant, InputNameRestaurant, IconSearch, ContainerTypes } from './styled'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router';
import GlobalStateContext from '../../global/GlobalStateContext';

const SearchRestaurant = () => {
    const [form, onChange] = useForm({ nameRestaurant: "" })
    const { states, setters, requests } = useContext(GlobalStateContext);
    const history = useHistory();
  
    const onSubmitForm = (event) => {
      event.preventDefault()
      filterRestaurantsByName(form)
    }

    const filterRestaurantsByName = ({nameRestaurant}) => {
      setters.setIsListPageRestaurants(false)
      const restaurant  = states.restaurants.filter((item) => {
        const itemNameLowerCase = item.name.toLowerCase()
        return itemNameLowerCase.includes(nameRestaurant.toLowerCase())
      })
      setters.setDataRestaurantsView(restaurant)
    }
    
    return (
      <ContainerSearchRestaurant>
        <FormSearchRestaurant onSubmit={onSubmitForm}>
          <IconSearch color="disabled" onClick={onSubmitForm} />
          <InputNameRestaurant
            value={form.nameRestaurant}
            onChange={onChange}
            type="text"
            name="nameRestaurant"
            placeholder="Restaurante"
          />
        </FormSearchRestaurant>
      </ContainerSearchRestaurant>
    );
  }
  export default SearchRestaurant;