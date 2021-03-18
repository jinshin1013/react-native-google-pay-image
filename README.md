# react-native-google-pay-image

Displays the Google Pay image.

## Installation

```sh
yarn add react-native-google-pay-image
```

## Usage

```js
import { GooglePayImageView } from 'react-native-google-pay-image'

// ...

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log('ONPRESS')}>
        <GooglePayImageView type="plain" style={styles.box} />
      </TouchableWithoutFeedback>
    </View>
  )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
