import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

ReactDOM.render(
	<React.StrictMode>
		<LocalizationProvider dateAdapter={DateAdapter}>
			<App />
		</LocalizationProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
