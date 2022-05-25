import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Label = styled.label`
	font-size: 16px;
	color: #000000de;
	line-height: 19px;
	margin-top: 2.2rem;
	${mobile({ fontSize: '15px' })}
`;

export const StyleInput = styled.input`
	width: 100%;
	max-width: 450px;
	background-color: #ffffff;
	height: 52px;
	outline: none;
	border-radius: 8px;
	margin: 0.9rem 0;
	text-align: center;
	border: 2px solid #b8b8b8;
	color: #828282;
	font-weight: 700;
	font-size: 18px;
	${mobile({ fontSize: '15px' })}
	&:hover,
	&:focus {
		cursor: pointer;
		border: 2px solid #474ebb;
		color: #474ebb;
	}
`;
