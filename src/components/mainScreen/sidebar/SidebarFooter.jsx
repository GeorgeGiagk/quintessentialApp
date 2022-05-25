import settingsLogo from '../../../assets/images/settingsLogo.png';

import { SettingsContainer } from '../../../styles/mainScreen/sidebar/sidebarFooter';

const SidebarFooter = () => {
	return (
		<SettingsContainer>
			<span>
				<img src={settingsLogo} alt="settingsLogo" />
			</span>
			<button>ΡΥΘΜΙΣΕΙΣ</button>
		</SettingsContainer>
	);
};

export default SidebarFooter;
