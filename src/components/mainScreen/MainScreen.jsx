import Sidebar from './sidebar/Sidebar';
import HomePage from './homepage/HomePage';
import '../../assets/fonts/fonts.css';
import { Container } from '../../styles/mainScreen/mainScreen/mainScreen';

const MainScreen = () => {
	return (
		<Container>
			<Sidebar />
			<HomePage />
		</Container>
	);
};

export default MainScreen;
