

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../views/SignInScreen";
import SignUpScreen from "../views/SignUpScreen";
import Tabs from "./Tabs";

const RootStack = createNativeStackNavigator();

export default function RootStackScreen({navigation}) {
    return (
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}></RootStack.Screen>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}></RootStack.Screen>
            <RootStack.Screen name="Tabs" component={Tabs}></RootStack.Screen>
        </RootStack.Navigator>
    );
}