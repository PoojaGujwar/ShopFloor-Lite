
import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
export default function DownTimescreen({route,navigation}){
    const {machine} = route.params
    const [reason, setReason] = useState("")
    console.log(machine)
    const handleSubmitBtn =()=>{
        if(!reason){
            Alert.alert("Error","Please enter downtime reason")
        }
        Alert.alert("Submitted",`Downtime reported for ${machine.name}`);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Downtime</Text>
            <Text style={styles.info}>{machine.name}</Text>
            <TextInput
            style={styles.input}
            placeholder="Downtime reason"
            value={reason}
            onChangeText={setReason}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmitBtn}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, padding:24, backgroundColor:"#f2f2f2"},
    title:{fontSize:24, fontWeight:"bold", marginBottom:20},
    info:{fontSize:16, marginBottom:10},
    input:{
        borderWidth:1,borderColor:"#ccc", borderRadius:8, padding:12, backgroundColor:"#fff"
    },
    btn:{
        marginTop:20, backgroundColor:"#2196F3", padding:14, borderRadius:8
    },
    btnText:{color:"#fff", textAlign:"center", fontWeight:"bold"}
})