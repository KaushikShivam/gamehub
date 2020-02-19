import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Roboto';
		padding: 20px 20px;
    background-color: #132047;
    color: white;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
