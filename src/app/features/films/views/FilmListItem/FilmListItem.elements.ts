import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import theme from '../../../../../config/theme';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  flex-direction: row;
  padding: 12px;
  background-color: ${theme.colors.lightBackground};
  border-color: ${theme.colors.accent};
  border-radius: 12px;
  border-width: 1px;
`;

export const EpisodeContainer = styled.View`
  flex-direction: column;

  margin-right: 12px;
  align-items: center;
  justify-content: center;
`;

export const Episode = styled(Text)`
  font-size: 40px;
  line-height: 40px;
  color: ${theme.colors.darkBackground};
  font-weight: 900;
`;

export const EpisodeLabel = styled(Text)`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.labelGrey};
`;

export const DataWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 800;
`;

export const ReleaseDate = styled(Text)`
  align-self: flex-end;
  font-size: 18px;
  line-height: 22px;
  color: ${theme.colors.labelGrey};
`;
