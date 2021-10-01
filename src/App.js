// import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

import Phonebook from './components/Phonebook';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';

function App() {
  // const [contacts, setContacts] = useState([]);
  //
  // useEffect(() => {
  //    const readContacts = JSON.parse(localStorage.getItem('contacts'));
  //    if (readContacts) {
  //      setContacts(readContacts);
  //    }
  //  }, []);

  //  useEffect(() => {
  //    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //  }, [contacts]);

  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const handleAddContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handlerUniqName = name => {
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Phonebook title="Phonebook">
      <ContactForm
        onAdd={handleAddContact}
        onCheckforUniqName={handlerUniqName}
      />
      <Contacts
        title="Contacts"
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
    </Phonebook>
  );
}

export default App;
