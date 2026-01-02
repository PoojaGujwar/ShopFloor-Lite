import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({navigation}){
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Operator')

  useEffect(() => {
    const checkLogin = async () => {
      const storedUser = await AsyncStorage.getItem("userData");
      if (storedUser) {
        navigation.replace("Dashboard"); // go to dashboard if already logged in
      }
    };
    checkLogin();
  }, []);

  const handleLoginBtn =async()=>{
    if(!email){
      Alert.alert("Error","Please enter your email")
      return;
    }
    const jwtMock = "jwt-token-12345"
    const userData ={
      email,
      role,
      token:jwtMock,
      _id:"id_001"
    }
    try {
      await AsyncStorage.setItem("userData",JSON.stringify(userData))
      Alert.alert("Login Successful",`Role: ${role}`)
      navigation.replace("Dashboard")
    } catch (error) {
      console.log(error)
      Alert.alert("Error","Failed to save user data")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Shop Floor Lite</Text>
      <TextInput
       style={styles.input}
      placeholder="Enter your email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"

      />
      <View style={styles.roleContainer}>
        <TouchableOpacity onPress={()=>setRole("Operator")} style={[styles.roleButton, role === "Operator" && styles.roleSelected]}>
          <Text style={styles.roleText}>Operator</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setRole("Supervisor")} style={[styles.roleButton, role === "Supervisor" && styles.roleSelected]}>
          <Text style={styles.roleText}>Supervisor</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLoginBtn} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{backgroundColor:"#f2f2f2", flex:1, justifyContent:"center",padding:24},
  title:{fontSize:28, fontWeight:"bold", marginBottom:40,textAlign:"center"},
  input:{borderWidth:1, borderColor:"#ccc",padding:12, borderRadius:8, marginBottom:20, backgroundColor:"#fff"},
  roleButton:{padding:12, borderWidth:1, borderColor:"#666", borderRadius:8, width:"40%", alignItems:"center"},
  roleContainer:{flexDirection:"row", justifyContent:"space-around", marginBottom:30},
  loginBtn:{backgroundColor:"#2196F3", padding:15, borderRadius:8, alignItems:"center"},
  loginText:{color:"#fff",fontWeight:"bold", fontSize:"16"},
  roleSelected:{backgroundColor:"#4CAF50", borderColor:"#4CAF50",color:"#fff"},
  roleText:{ fontWeight:"bold",color:"#000"}
})