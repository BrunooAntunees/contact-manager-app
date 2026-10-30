import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  id: number
  fullName: string
  email: string
  phone: string
}

interface ContactsState {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    { id: 1, fullName: 'Ana Silva', email: 'ana.silva@email.com', phone: '(11) 98888-1111' },
    { id: 2, fullName: 'Carlos Souza', email: 'carlos.souza@email.com', phone: '(11) 97777-2222' }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const newContact = {
        id: state.items.length > 0 ? Math.max(...state.items.map((c) => c.id)) + 1 : 1,
        ...action.payload
      }
      state.items.push(newContact)
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.items[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer