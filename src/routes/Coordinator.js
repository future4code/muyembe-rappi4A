export const goToSignUpPage = (history) => {
  history.push("/cadastro")
}

export const goToLoginPage = (history) => {
  history.push("/login")
}

export const goToRestaurantListPage = (history) => {
  history.push("/")
}

export const goToRestaurantPage = (history, id) => {
  history.push(`/restaurante/${id}`)
}

export const goToCartPage = (history) => {
  history.push("/carrinho")
}

export const goToProfilePage = (history) => {
  history.push("/perfil")
}

export const goToHistoryPage = (history) => {
  history.push("/historico-de-pedidos")
}

export const goToEditDataPage = (history) => {
  history.push("/editar-dados")
}

export const goToEditAddressPage = (history) => {
  history.push("/editar-endereco")
}