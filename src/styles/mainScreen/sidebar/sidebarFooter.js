import styled from 'styled-components';

export const SettingsContainer = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	border-top: 2px solid #00000012;
	margin-top: 100px;
	cursor: pointer;

	button {
		border: none;
		background: none;
		color: #000000;
		font-size: 10px;
	}
	span {
		margin-left: 1rem;
	}

	&:hover {
		background-color: #072c5e;
	}
`;
