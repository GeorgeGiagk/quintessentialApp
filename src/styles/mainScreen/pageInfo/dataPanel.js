import styled from 'styled-components';
import { mobile, smallMobile } from '../../responsive';

export const Container = styled.div`
	display: flex;

	justify-content: space-around;
	${mobile({ flexDirection: 'column' })}
`;

export const Panel = styled.div`
	display: flex;

	${mobile({ padding: '30px', alignItems: 'center', justifyContent: 'center' })}
	${smallMobile({ padding: '20px', justifyContent: 'start' })}
`;
