import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                "type": "personal",
                "id": "5e27df3fd285275c42ed5ecf",
                "name": "Bilal",
                "email": "harry@gmail.com",
                "phone": "032232322233",
                "user": "5e2692e5f9e770a450b42b75",
                "date": "2020-01-22T05:35:59.129Z",
                "__v": 0
            },
            {
                "type": "personal",
                "id": "5e27df35d285275c42ed5ece",
                "name": "Hamza",
                "email": "harry@gmail.com",
                "phone": "333-333-3333",
                "user": "5e2692e5f9e770a450b42b75",
                "date": "2020-01-22T05:35:49.666Z",
                "__v": 0
            },
            {
                "type": "personal",
                "id": "5e27d403d285275c42ed5ecc",
                "name": "Ted Johnson",
                "email": "ted@gmail.com",
                "phone": "222-222-2222",
                "user": "5e2692e5f9e770a450b42b75",
                "date": "2020-01-22T04:48:03.757Z",
                "__v": 0
            }
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;