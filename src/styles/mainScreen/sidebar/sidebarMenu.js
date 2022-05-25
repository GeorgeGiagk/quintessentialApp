import styled from 'styled-components';

export const Container = styled.div``;

export const MenuHeader = styled.div`
	margin-left: 0.5rem;
	display: flex;
	align-items: center;

	h2 {
		color: #00000094;
		font-size: 10px;
		font-weight: 200;
	}

	span {
		margin-right: 8px;
	}

	img {
		width: 15.58px;
		height: 12.04px;
	}
`;

export const Ul = styled.ul`
	list-style-type: none;
	justify-content: start;
	padding: 0;
	margin-bottom: 50px;
	cursor: pointer;
`;

export const Li = styled.li`
	margin-bottom: 2px;
	padding: 9px;
	font-size: 14px;
	display: flex;

	background-color: ${(props) => (props.active ? '#072c5e' : 'transparent')};
	color: ${(props) => (props.active ? '#fff' : '#C4C4C4')};

	&:hover {
		background-color: #072c5e;
		color: #fff;
	}

	span {
		margin: 0 20px 0 20px;
	}

	img {
		width: 22px;
		height: 20px;
	}
`;

export const ButtonContainer = styled.div`
	padding: 4px 0;
	margin: 10px 0;
	display: flex;
	align-items: flex-start;
	cursor: pointer;

	span {
		margin-left: 30px;
	}

	button {
		margin-left: 10px;
		background: none;
		border: none;
		color: #c4c4c4;
		font-size: 14px;
	}

	&:hover {
		background-color: #072c5e;
	}
`;
