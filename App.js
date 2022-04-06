import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';
import ScrollContentViewNativeComponent from 'react-native/Libraries/Components/ScrollView/ScrollContentViewNativeComponent';
import BottomTab from './src/routes/Tabs';

import RootStackScreen from './src/routes/RootStackScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#212237'}} forceInset={{ top: 'always', bottom:'always' }}>
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
    </SafeAreaView>


    // <SafeAreaView style={styles.container}>
    //   <Text>Hello</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
