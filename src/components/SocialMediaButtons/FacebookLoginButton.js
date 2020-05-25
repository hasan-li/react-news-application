import { createButton } from 'react-social-login-buttons';

import { FACEBOOK } from '../../constants/socialMedia';
import { getConfig } from './config';

const config = getConfig(FACEBOOK);

const FacebookLoginButton = createButton(config);

export default FacebookLoginButton;
