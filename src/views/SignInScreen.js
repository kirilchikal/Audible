import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';

export default function SignInScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Sign in screen</Text>
        <Button
            title='Go to Sign Up'
            onPress={() => navigation.navigate('SignUpScreen')}/>
        <View style={styles.btn} >
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text>Sign in</Text>
        </TouchableOpacity>

        </View>
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
    btn: {
        margin: 20
    }
  });
  