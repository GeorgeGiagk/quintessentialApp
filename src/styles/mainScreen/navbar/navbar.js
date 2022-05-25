import styled from 'styled-components';
import { smallMobile } from '../../responsive';
import { mobile } from '../../responsive';

export const Container = styled.div`
	border-bottom: 2px solid #dadada;
	height: 70px;
	flex-basis: 85%;
	margin-top: 2rem;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${smallMobile({ justifyContent: 'center' })}
`;

export const Header = styled.h1`
	margin-left: 2rem;
	font-size: 25px;
	font-weight: 400;
	color: #282121;
	${mobile({ fontSize: '15px' })};
	${smallMobile({ display: 'none' })}
`;

export const SearchContainer = styled.div`
	margin-right: 2rem;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: start;
	outline: none;
	border-radius: 8px;
	border: 1px solid #b6b6b6;
	width: 477px;
	height: 36px;
	${mobile({ width: '340px' })};
`;

export const Span = styled.span`
	margin: 0 1rem;

	img {
		width: 21px;
		height: 22px;
	}
`;

export const Search = styled.input`
	margin-left: 1rem;
	width: 20rem;
	font-size: 15px;
	border: none;
	outline: none;
	color: #000000;
	${mobile({ width: '14rem', fontSize: '12px', marginLeft: '0' })};
`;
