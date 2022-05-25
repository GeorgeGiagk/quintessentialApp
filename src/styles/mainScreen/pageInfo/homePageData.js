import styled from 'styled-components';
import { desktop } from '../../responsive';
import { tablets } from '../../responsive';

export const Container = styled.div`
	background-color: #fdfdfd;
	border: 1px solid rgba(0, 0, 0, 0.12);
	border-radius: 5px;
	transform: translate(-17%, 40%);
	display: flex;
	align-items: center;

	${desktop({ transform: 'translate(-22%, 40%)' })}
	${tablets({ transform: 'translate(-22%, 35%)' })}
`;

export const Wrapper = styled.div`
	padding: 10px 50px;
	${desktop({ padding: '10px 30px' })}
	h2 {
		margin: 5px 0;
		font-size: 16px;
		${desktop({ fontSize: '12px', margin: '4px 0' })}
		${tablets({ fontSize: '11px' })}
	}
	p {
		color: #c4c4c4;
		margin: 0 0 5px;
		font-size: 13px;
		${desktop({ fontSize: '12px' })}
		${tablets({ fontSize: '11px' })}
	}
`;
