import Navbar from '../navbar/Navbar';

import {
	Container,
	NavbarContainer,
	MainContent,
} from '../../../styles/mainScreen/homepage/homepage';
import DataPanel from '../pageInfo/DataPanel';

const HomePage = () => {
	return (
		<Container>
			<NavbarContainer>
				<Navbar title="Κεντρική σελίδα" />
			</NavbarContainer>
			<MainContent>
				<DataPanel />
			</MainContent>
		</Container>
	);
};

export default HomePage;
