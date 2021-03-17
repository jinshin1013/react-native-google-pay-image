import React from 'react'
import { Platform, requireNativeComponent, StyleProp, ViewStyle } from 'react-native'

export type GooglePayImageProps = {
  type?: 'buy' | 'plain'
  style?: StyleProp<ViewStyle>
}

const BuyWithGooglePayImageViewManager = requireNativeComponent<GooglePayImageProps>('BuyWithGooglePayImageView')
const PlainGooglePayImageViewManager = requireNativeComponent<GooglePayImageProps>('PlainGooglePayImageView')

export const GooglePayImageView: React.FC<GooglePayImageProps> = ({ type, ...props }) => {
  if (Platform.OS !== 'android') {
    return null
  }

  if (type === 'buy') {
    return <BuyWithGooglePayImageViewManager {...props} />
  }

  return <PlainGooglePayImageViewManager {...props} />
}
