import logo from '../../assets/images/loginLogo.png';
import { Container } from '../../styles/loginScreen/logo';

const Logo = () => {
	return (
		<Container>
			<img src={logo} alt="login-logo" />
		</Container>
	);
};

export default Logo;
