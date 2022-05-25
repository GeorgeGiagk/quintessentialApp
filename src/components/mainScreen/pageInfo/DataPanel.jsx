import Circle from './Circle';
import {
	Container,
	Panel,
} from '../../../styles/mainScreen/pageInfo/dataPanel';
import HomePageData from './HomePageData';

const DataPanel = () => {
	return (
		<Container>
			<Panel>
				<Circle bgColor="#C2566D" />
				<HomePageData title="ΕΞΑΓΩΓΗ" />
			</Panel>
			<Panel>
				<Circle bgColor="#F0C17D" />
				<HomePageData title="ΜΕΤΑΚΙΝΗΣΗ" />
			</Panel>
			<Panel>
				<Circle bgColor="#2BC3A7" />
				<HomePageData title="ΕΙΣΑΓΩΓΗ" />
			</Panel>
		</Container>
	);
};

export default DataPanel;
