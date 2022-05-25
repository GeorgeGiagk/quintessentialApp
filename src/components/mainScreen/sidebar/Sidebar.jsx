import sidebarLogo from '../../../assets/images/sidebarLogo.png';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';
import {
	Container,
	LogoWrapper,
	ImageContainer,
	Header,
} from '../../../styles/mainScreen/sidebar/sidebar';

const Sidebar = () => {
	return (
		<Container>
			<LogoWrapper>
				<ImageContainer>
					<img src={sidebarLogo} alt="sidebarLogo" />
				</ImageContainer>
				<Header>
					Warehouse <br /> management
				</Header>
			</LogoWrapper>
			<SidebarMenu />
			<SidebarFooter />
		</Container>
	);
};

export default Sidebar;
