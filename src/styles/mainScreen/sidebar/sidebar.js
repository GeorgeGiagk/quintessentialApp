import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 15%;

	border-right: 2px solid #dadada;
`;
export const LogoWrapper = styled.div`
	display: flex;
	align-items: end;
	margin: 2.5rem 2rem 0 2.5rem;
`;
export const ImageContainer = styled.div`
	img {
		width: 43.54px;
		height: 43px;
	}
`;

export const Header = styled.h1`
	margin-left: 20px;
	color: #282121;

	font-size: 17px;
`;
