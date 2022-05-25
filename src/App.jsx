import LoginScreen from './components/loginScreen/LoginScreen';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import FirstWarehouse from './components/mainScreen/warehouses/FirstWarehouse';
import SecondWarehouse from './components/mainScreen/warehouses/SecondWarehouse';
import ThirdWarehouse from './components/mainScreen/warehouses/ThirdWarehouse';
import FourthWarehouse from './components/mainScreen/warehouses/FourthWarehouse';
import MainScreen from './components/mainScreen/MainScreen';

function App() {
	return (
		<Container>
			<Routes>
				<Route path="" element={<LoginScreen />} />
				<Route path="/firstwarehouse" element={<FirstWarehouse />} />
				<Route path="/secondwarehouse" element={<SecondWarehouse />} />
				<Route path="/thirdwarehouse" element={<ThirdWarehouse />} />
				<Route path="/fourthwarehouse" element={<FourthWarehouse />} />
				<Route path="home" element={<MainScreen />} />
			</Routes>
		</Container>
	);
}

const Container = styled.div`
	max-width: 100%;
`;

export default App;
