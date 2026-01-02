import { FlatList, StyleSheet, Text, View } from "react-native";
import alerts from "../data/alertData";


export default function AlertScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Alerts</Text>
            <FlatList
            data={alerts}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View style={styles.card}>
                    <Text style={styles.msg}>{item.message}</Text>
                    <Text style={styles.severity}>{item.severity}</Text>
                </View>
            )}
            ></FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, padding:20, backgroundColor:"#f2f2f2"},
    title:{fontSize:24, fontWeight:"bold", marginBottom:20},
    card:{
        backgroundColor:"#fff",
        padding:16,
        borderRadius:8,
        marginBottom:12,
    },
    msg:{fontSize:15, fontWeight:"bold"},
    severity:{marginTop:6,color:"#f44336", fontWeight:"bold"}
})