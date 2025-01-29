import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import Home from "./views/Home.jsx";
import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import injectContext from "./store/appContext";
import EditContact from "./views/EditContacts.jsx";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/addContact" element={<AddContact />} />
					<Route path="/editContact/:id" element={<AddContact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);