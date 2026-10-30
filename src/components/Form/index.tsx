import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../store/reducers/contactsSlice'
import { FormContainer, InputGroup, Input, Button } from './styles'

const Form = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email || !phone) return

    dispatch(addContact({ fullName, email, phone }))
    setFullName('')
    setEmail('')
    setPhone('')
  }

  return (
    <FormContainer onSubmit={handleAddContact}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputGroup>
      <Button type="submit">+ Adicionar Contacto</Button>
    </FormContainer>
  )
}

export default Form