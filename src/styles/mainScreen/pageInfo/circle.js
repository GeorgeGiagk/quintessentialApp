import styled from 'styled-components';
import { desktop } from '../../responsive';

export const Container = styled.div``;
export const Outer = styled.div`
	width: 82.78px;
	height: 83.22px;
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor};
	cursor: pointer;

	${desktop({ width: '82.78px', height: '83.22px' })}
`;
export const Inner = styled.div`
	width: 70%;
	height: 70%;
	border-radius: 50%;
	background-color: #ffffff;

	transform: translate(21%, 21%);
`;
