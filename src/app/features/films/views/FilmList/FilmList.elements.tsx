import { Animated, FlatList, ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../../../../config/theme';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const List = styled(Animated.createAnimatedComponent(FlatList))`
  flex: 1;
`;

export const Divider = styled.View`
  height: 8px;
  background-color: ${theme.colors.lightBackground};
`;

export const Loader = styled(ActivityIndicator).attrs(() => ({
  size: 'large',
  color: `${theme.colors.darkBackground}`,
}))`
  margin-top: 20px;
  transform: scale(0.75);
`;

export const NoResultsWrapper = Animated.createAnimatedComponent(styled.View`
  flex: 1;
`);

export const NoResultsText = styled(Text)`
  font-size: 24px;
  line-height: 28px;
  color: ${theme.colors.labelGrey};
  padding: 300px 20px 20px;
`;
