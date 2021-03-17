package com.reactnativegooglepayimage

import android.view.LayoutInflater
import android.view.View
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class BuyWithGooglePayImageViewManager : SimpleViewManager<View>() {
  override fun getName() = "BuyWithGooglePayImageView"

  override fun createViewInstance(reactContext: ThemedReactContext): View {
    return LayoutInflater.from(reactContext).inflate(
      R.layout.buy_with_googlepay_button, null
    )
  }
}
