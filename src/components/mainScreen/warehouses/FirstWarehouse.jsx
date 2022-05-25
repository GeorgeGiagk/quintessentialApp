import styled from 'styled-components';
import Sidebar from './../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const FirstWarehouse = () => {
	return (
		<Container>
			<Sidebar />
			<Navbar title="Αποθήκη 1" />
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	font-family: 'SF Pro Display';
`;
export default FirstWarehouse;
