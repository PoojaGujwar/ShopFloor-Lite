import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MachineDetails({route,navigation}){
    const {machine} = route.params
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{machine.name}</Text>
            <Text style={styles.info}>Machine Id: {machine.id}</Text>
            <Text style={styles.info}>Status: Running</Text>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>navigation.navigate("DownTimescreen",{machine})}
            >
                <Text style={styles.btnText}>Report Downtime</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, padding:24, backgroundColor:"#f2f2f2"},
    title:{fontSize:24, fontWeight:"bold", marginBottom:20},
    info:{fontsize:16, marginBottom:8},
    btn:{
        marginTop:30,
        backgroundColor:"#f44336",
        padding:14,
        borderRadius:8
    },
    btnText:{textAlign:"center",color:"#fff",fontWeight:"bold"
    }
})