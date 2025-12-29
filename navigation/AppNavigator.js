import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertScreen from "../screens/AlertScreen";
import DownTimescreen from "../screens/DownTimescreen";
import LoginScreen from "../screens/LoginScreen";
import MachineDetails from "../screens/MachinDetails";
import Machines from "../screens/Machines";
import Summary from "../screens/Summary";

const Stack = createNativeStackNavigator()
export default function AppNavigator(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="machine" component={Machines}/>
                <Stack.Screen name ="machine-details" component={MachineDetails}/>
                <Stack.Screen name="summary" component={Summary}/>
                <Stack.Screen name="alert" component={AlertScreen}/>
                <Stack.Screen name ="downTimeScreen" component={DownTimescreen}/>
            </Stack.Navigator>
        
    )
}