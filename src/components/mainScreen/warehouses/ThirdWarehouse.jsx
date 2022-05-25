import styled from 'styled-components';
import Sidebar from './../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';

const ThirdWarehouse = () => {
	return (
		<Container>
			<Sidebar />
			<Navbar title="Αποθήκη 3" />
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	font-family: 'SF Pro Display';
`;
export default ThirdWarehouse;
