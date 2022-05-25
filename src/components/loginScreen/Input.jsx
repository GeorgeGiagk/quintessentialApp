import { Container, Label, StyleInput } from '../../styles/loginScreen/input';

const Input = ({ label, type, value }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<StyleInput type={type} value={value} readOnly></StyleInput>
		</Container>
	);
};

export default Input;
