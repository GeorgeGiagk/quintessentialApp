import menuLogo from '../../../assets/images/menuLogo.png';
import homeLogo from '../../../assets/images/homeLogo.png';
import warehouse1Logo from '../../../assets/images/warehouse1Logo.png';
import warehouse2Logo from '../../../assets/images/warehouse2Logo.png';
import warehouse3Logo from '../../../assets/images/warehouse3Logo.png';
import warehouse4Logo from '../../../assets/images/warehouse4Logo.png';
import entryLogo from '../../../assets/images/entryLogo.png';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	MenuHeader,
	Ul,
	Li,
	ButtonContainer,
} from '../../../styles/mainScreen/sidebar/sidebarMenu';

const SidebarMenu = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<MenuHeader>
				<span>
					<img src={menuLogo} alt="menuIcon" />
				</span>
				<h2>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</h2>
			</MenuHeader>
			<nav>
				<Ul>
					<Li onClick={() => navigate('/home')}>
						<span>
							<img src={homeLogo} alt="" />
						</span>
						Κεντρική σελίδα
					</Li>
					<Li onClick={() => navigate('/firstwarehouse')}>
						<span>
							<img src={warehouse1Logo} alt="" />
						</span>
						Αποθήκη 1
					</Li>
					<Li onClick={() => navigate('/secondwarehouse')}>
						<span>
							<img src={warehouse2Logo} alt="" />
						</span>
						Αποθήκη 2
					</Li>
					<Li onClick={() => navigate('/thirdwarehouse')}>
						<span>
							<img src={warehouse3Logo} alt="" />
						</span>
						Αποθήκη 3
					</Li>
					<Li onClick={() => navigate('/fourthwarehouse')}>
						<span>
							<img src={warehouse4Logo} alt="" />
						</span>
						Αποθήκη 4
					</Li>
				</Ul>
			</nav>
			<MenuHeader>
				<span>
					<img src={menuLogo} alt="" />
				</span>
				<h2>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</h2>
			</MenuHeader>
			<ButtonContainer>
				<span>
					<img src={entryLogo} alt="" />
				</span>
				<button>Καταχώριση</button>
			</ButtonContainer>
		</Container>
	);
};

export default SidebarMenu;
