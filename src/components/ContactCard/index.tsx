import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeContact, editContact, Contact } from '../../store/reducers/contactsSlice'
import { Card, Info, ActionButtons, Button, EditInput } from './styles'

type Props = {
  contact: Contact
}

const ContactCard = ({ contact }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [fullName, setFullName] = useState(contact.fullName)
  const [email, setEmail] = useState(contact.email)
  const [phone, setPhone] = useState(contact.phone)

  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(editContact({ id: contact.id, fullName, email, phone }))
    setIsEditing(false)
  }

  return (
    <Card>
      <Info>
        {isEditing ? (
          <>
            <EditInput value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <EditInput value={email} onChange={(e) => setEmail(e.target.value)} />
            <EditInput value={phone} onChange={(e) => setPhone(e.target.value)} />
          </>
        ) : (
          <>
            <h3>{contact.fullName}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </>
        )}
      </Info>
      <ActionButtons>
        {isEditing ? (
          <Button variant="success" onClick={handleSave}>Salvar</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
        )}
        <Button variant="danger" onClick={() => dispatch(removeContact(contact.id))}>
          Remover
        </Button>
      </ActionButtons>
    </Card>
  )
}

export default ContactCard