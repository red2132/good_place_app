import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigations/root/RootNavigator';
import {QueryClientProvider} from '@tanstack/react-query';
import queryCleint from './src/api/queryClient';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryCleint}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
