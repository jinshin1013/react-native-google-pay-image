import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { GooglePayImageView } from 'react-native-google-pay-image'

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log('ONPRESS')}>
        <GooglePayImageView type="plain" style={styles.box} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: 60,
    marginVertical: 20,
  },
})
