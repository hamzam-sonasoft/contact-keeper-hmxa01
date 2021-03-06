import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import ContactState from '../../context/contact/ContactState';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (ContactState.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map(contact =>
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    )
                    : contacts.map(contact =>
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem key={contact.id} contact={contact} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
