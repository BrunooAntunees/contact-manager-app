import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { store, RootState } from './store'
import { GlobalStyle, Container, Title } from './styles'
import Form from './components/Form'
import ContactCard from './components/ContactCard'

const ContactList = () => {
  const { items } = useSelector((state: RootState) => state.contacts)

  return (
    <div>
      {items.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Title>Lista de Contactos</Title>
        <Form />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App