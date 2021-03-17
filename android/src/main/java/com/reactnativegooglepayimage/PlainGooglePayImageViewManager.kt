package com.reactnativegooglepayimage

import android.view.LayoutInflater
import android.view.View
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class PlainGooglePayImageViewManager : SimpleViewManager<View>() {
  override fun getName() = "PlainGooglePayImageView"

  override fun createViewInstance(reactContext: ThemedReactContext): View {
    return LayoutInflater.from(reactContext).inflate(
      R.layout.googlepay_button, null
    )
  }
}
