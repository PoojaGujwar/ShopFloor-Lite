import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertScreen from "../screens/AlertScreen";
import Dashboard from "../screens/DashboardScreen";
import DownTimescreen from "../screens/DownTimescreen";
import LoginScreen from "../screens/LoginScreen";
import MachineDetails from "../screens/MachinDetails";
import Machines from "../screens/Machines";
import Summary from "../screens/Summary";

const Stack = createNativeStackNavigator()
export default function AppNavigator(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Machine" component={Machines}/>
                <Stack.Screen name ="Machine-Details" component={MachineDetails}/>
                <Stack.Screen name ="DownTimescreen" component={DownTimescreen}/>
                <Stack.Screen name="Summary" component={Summary}/>
                <Stack.Screen name="Alert" component={AlertScreen}/>
                
        
            </Stack.Navigator>
        
    )
}