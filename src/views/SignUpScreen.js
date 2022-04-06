import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function SignUpScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Sign up screen</Text>
        <Button
            title='Go to Sign In'
            onPress={() => navigation.navigate('SignInScreen')}/>
      </SafeAreaView>
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
  