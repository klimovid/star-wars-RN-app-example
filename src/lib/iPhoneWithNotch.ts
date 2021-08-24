import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIPhoneWithNotch = DeviceInfo.hasNotch() && Platform.OS === 'ios';

export default {
  topArea: isIPhoneWithNotch ? 20 : 0,
  bottomArea: isIPhoneWithNotch ? 28 : 0,
};
