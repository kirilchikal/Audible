import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';

export default function BookDetailsScreen({route, navigation}) {
    const {item} = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Book screen</Text>
        <Text>Title: {item.title}</Text>
        
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
  