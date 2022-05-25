import styled from 'styled-components';
import { mobile, smallMobile } from '../../responsive';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 85%;
`;

export const NavbarContainer = styled.div`
	height: 250px;
	${mobile({ height: '180px' })}
	${smallMobile({ height: '140px' })}
`;
export const MainContent = styled.main`
	margin-left: 4rem;
`;
