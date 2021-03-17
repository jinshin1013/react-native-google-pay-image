import { requireNativeComponent, ViewStyle } from 'react-native';

type GooglePayImageProps = {
  color: string;
  style: ViewStyle;
};

export const GooglePayImageViewManager = requireNativeComponent<GooglePayImageProps>(
  'GooglePayImageView'
);

export default GooglePayImageViewManager;
