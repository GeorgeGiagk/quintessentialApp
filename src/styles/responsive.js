import { css } from 'styled-components';

export const tablets = (props) => {
	return css`
		@media only screen and (max-width: 1214px) {
			${props}
		}
	`;
};

export const desktop = (props) => {
	return css`
		@media only screen and (max-width: 1359px) {
			${props}
		}
	`;
};

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 931px) {
			${props}
		}
	`;
};

export const smallMobile = (props) => {
	return css`
		@media only screen and (max-width: 728px) {
			${props}
		}
	`;
};
