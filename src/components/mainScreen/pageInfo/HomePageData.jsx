import {
	Container,
	Wrapper,
} from '../../../styles/mainScreen/pageInfo/homePageData';

const HomePageData = ({ title }) => {
	return (
		<Container>
			<Wrapper>
				<h2>{title}</h2>
				<p>
					Εξαγωγή υλικών ή ρεταλιών <br /> απο την αποθήκη
				</p>
			</Wrapper>
		</Container>
	);
};

export default HomePageData;
