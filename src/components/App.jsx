import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {

  const contacts = useSelector(getContacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    );
  
}
