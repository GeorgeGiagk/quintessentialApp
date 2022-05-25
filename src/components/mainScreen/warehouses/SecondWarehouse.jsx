import styled from 'styled-components';
import Sidebar from './../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const SecondWarehouse = () => {
	return (
		<Container>
			<Sidebar />
			<Navbar title="Αποθήκη 2" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	font-family: 'SF Pro Display';
`;

export default SecondWarehouse;
