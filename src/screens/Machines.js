
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import machines from "../data/machineData";

export default function Machines({navigation}){
    console.log(machines)
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Machines</Text>
            <FlatList 
            data={machines}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity 
                style={styles.card}
                onPress={()=>navigation.navigate("Machine-Details",{machine:item})}
                >
                    <Text style={styles.cardText}>{item.name}</Text>
                </TouchableOpacity>
            )}

            
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1, padding:20, backgroundColor:"#f2f2f2"},
    title:{fontSize:24, fontWeight:"bold",marginBottom:20},
    card:{
        backgroundColor:"#fff",padding:16, borderRadius:8, marginBottom:12
    },
    cardText:{fontSize:16, fontWeight:"bold"}
})