import styled from 'styled-components';
import { mobile } from '../responsive';
import '../../assets/fonts/fonts.css';

export const Container = styled.div`
	display: flex;
	align-items: center;
	/* font-family: 'Product Sans'; */
`;

export const Header = styled.h1`
	color: #474ebb;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 44px;
	letter-spacing: 0.3rem;
	margin-bottom: 4.5rem;

	${mobile({ fontSize: '30px', marginBottom: '2rem' })}
`;
export const Form = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LoginButton = styled.button`
	margin: 4rem 0;
	background-color: #04347f;
	color: #fff;
	border-radius: 8px;
	padding: 15px 85px;
	border: none;
	font-size: 18px;
	${mobile({ fontSize: '15px' })}
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: #14298a;
		cursor: pointer;
	}

	&:active {
		cursor: pointer;
		background-color: #09218d;
	}
`;

export const ForgotPassButton = styled.button`
	border: none;
	background-color: #fff;
	color: #000000;
	font-size: 16px;
	margin-top: 2rem;

	${mobile({ fontSize: '14px' })}
	&:hover {
		cursor: pointer;
		color: #14298a;
	}

	&:active {
		cursor: pointer;
		color: #09218d;
	}
`;
