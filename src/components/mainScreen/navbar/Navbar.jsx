import vector from '../../../assets/images/Vector.png';
import {
	Container,
	Wrapper,
	Header,
	SearchContainer,
	Span,
	Search,
} from '../../../styles/mainScreen/navbar/navbar';

const Navbar = ({ title }) => {
	return (
		<Container>
			<Wrapper>
				<Header>{title}</Header>

				<SearchContainer>
					<Span>
						<img src={vector} alt="" />
					</Span>

					<Search placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων" />
				</SearchContainer>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
