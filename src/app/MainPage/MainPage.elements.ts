import { Image } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../config/theme';
import iPhoneWithNotch from '../../lib/iPhoneWithNotch';

export const PADDING_TOP = iPhoneWithNotch.topArea + 20;

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.lightBackground};
`;

export const LogoWrapper = styled.View`
  padding: ${PADDING_TOP}px 0px 8px;
  background-color: ${theme.colors.darkBackground};
`;

export const Logo = styled(Image).attrs({
  source: require('../../assets/images/full_logo.png'),
  resizeMode: 'contain',
})`
  align-self: center;
  width: 120px;
  height: 64px;
`;
