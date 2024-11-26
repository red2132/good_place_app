import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigations/root/RootNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
