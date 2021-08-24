import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  Dimensions,
  ActivityIndicator,
  Platform,
  StatusBar,
  ViewStyle,
  Image,
  StyleSheet,
} from 'react-native';
import {
  TouchableWithoutFeedback,
  ScrollView as RNGHScrollView,
} from 'react-native-gesture-handler';

import theme from '../../../../../config/theme';
import iPhoneWithNotch from '../../../../../lib/iPhoneWithNotch';

const MODAL_MARGIN_TOP =
  Platform.OS === 'ios' ? iPhoneWithNotch.topArea + 96 : 96;

const STATUS_BAR_HEIGHT =
  StatusBar.currentHeight || (Platform.OS === 'ios' ? 20 : 24);

export const MODAL_HEIGHT =
  Dimensions.get('window').height - STATUS_BAR_HEIGHT - MODAL_MARGIN_TOP;

export const Touchable = styled(TouchableWithoutFeedback)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoaderWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoaderElement = styled(ActivityIndicator).attrs(() => ({
  size: 'large',
  color: `${theme.colors.accent}`,
}))`
  padding-top: ${MODAL_HEIGHT / 2}px;
`;

export const Loader = () => (
  <LoaderWrapper>
    <LoaderElement />
  </LoaderWrapper>
);

export const ScrollView = styled(RNGHScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 2000px;
  background-color: blue;
`;

export const Episode = styled(Text)`
  padding: 12px 0px 8px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.accent};
`;

export const Title = styled(Text)`
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.accent};
  padding-bottom: 24px;
`;

export const Logo = styled(Image).attrs({
  source: require('../../../../../assets/images/thin_logo.png'),
  resizeMode: 'contain',
})`
  align-self: center;
  width: 120px;
  height: 64px;
`;

export const Crawl = styled(Text)`
  padding: 12px 0px 32px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
  color: ${theme.colors.accent};
`;

export const Content = styled.View`
  background-color: ${theme.colors.lightBackground};
  padding: 16px 16px 64px;
`;

export const Label = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  color: ${theme.colors.labelGrey};
  margin: 16px 0px 8px;
`;

export const Field = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  color: ${theme.colors.darkBackground};
  margin: 0px 0px 16px 16px;
`;

export const Divider = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${theme.colors.accent};
`;

const CharacterFieldWrapper = styled.View`
  padding-top: 8px;
`;

const CharacterTitle = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  color: ${theme.colors.darkBackground};
  margin: 0px 0px 4px 16px;
`;

const CharacterSubTitle = styled(Text)`
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.labelGrey};
  margin: 0px 0px 12px 32px;
`;

export const CharacterField = (props: { title: string; subtitle: string }) => (
  <CharacterFieldWrapper>
    <CharacterTitle>{props.title}</CharacterTitle>
    <CharacterSubTitle>{props.subtitle}</CharacterSubTitle>
  </CharacterFieldWrapper>
);

export const HANDLE_STYLE = {
  width: 40,
  height: 4,
  borderRadius: 16,
  backgroundColor: theme.colors.accent,
} as ViewStyle;

export const MODAL_STYLE = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  overflow: 'hidden',
  backgroundColor: theme.colors.darkBackground,
} as ViewStyle;
