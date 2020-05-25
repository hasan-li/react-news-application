import { createButton } from 'react-social-login-buttons';

import { GOOGLE } from '../../constants/socialMedia';
import { getConfig } from './config';

const config = getConfig(GOOGLE);

const GoogleLoginButton = createButton(config);

export default GoogleLoginButton;
