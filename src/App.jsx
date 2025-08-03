import contactListData from "./data/contactListData";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from "./components/Screens/ChatScreen";
import React, { useState } from "react";
import './App.css';
import InTheSamePage from "./components/Screens/InTheSamePage";


const App = () => {
	const [contactList, setContactList] = useState(contactListData);

	const addMessage = (id, message) => {
		setContactList(prev => {

			const foundContact = prev.find(contact => contact.id === id);
			if (!foundContact) return prev;

			const updateContact = {
				...foundContact,
				chat: [...foundContact.chat, message]
			};

			const otherContact = prev.filter(contact => contact.id !== id)

			return (
				[updateContact, ...otherContact]
			)
		})


	}
	const deleteMessage = (contactId, messageIndex) => {
		setContactList(prev =>
			prev.map(contact => {
				if (contact.id === contactId) {
					return {
						...contact,
						chat: contact.chat.filter((_, i) => i !== messageIndex)
					};
				} else {
					return contact;
				}
			})
		);
	};

	return (
		<Router>
			<Routes>
				<Route path="/" element={<InTheSamePage contactList={contactList} deleteMessage={deleteMessage} addMessage={addMessage} />} >
					<Route index element={<div className="chatscreen-start"><img src="./start.png" alt="" /></div>} />
					<Route path="chat/:id" element={<ChatScreen />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App
