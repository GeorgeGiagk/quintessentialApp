import styled from 'styled-components';
import { mobile, tablets } from '../responsive';

export const Container = styled.div`
	img {
		height: 100vh;
		${tablets({ width: '478px' })}
		${mobile({ display: 'none' })}
	}
`;
