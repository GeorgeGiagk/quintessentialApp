import Logo from './Logo';
import Input from './Input';

import { useNavigate } from 'react-router-dom';

import {
	Container,
	Header,
	Form,
	LoginButton,
	ForgotPassButton,
} from '../../styles/loginScreen/loginScreen';

const LoginScreen = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Logo />
			<Form>
				<Header>ΣΥΝΔΕΣΗ</Header>
				<Input
					label="Δ/νση ηλεκτρονικού ταχυδρομείου''"
					type="email"
					value="john.doe@example.com"
				/>
				<Input
					label="Κωδικός πρόσβασης"
					type="password"
					value="••••••••••••••"
				/>
				<LoginButton onClick={() => navigate('/home')}>Είσοδος</LoginButton>

				<ForgotPassButton>Ξέχασα τον κωδικό μου</ForgotPassButton>
			</Form>
		</Container>
	);
};

export default LoginScreen;
