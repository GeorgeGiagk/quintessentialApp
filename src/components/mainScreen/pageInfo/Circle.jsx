import {
	Container,
	Outer,
	Inner,
} from '../../../styles/mainScreen/pageInfo/circle';

const Circle = ({ bgColor }) => {
	return (
		<Container>
			<Outer backgroundColor={bgColor}>
				<Inner></Inner>
			</Outer>
		</Container>
	);
};

export default Circle;
