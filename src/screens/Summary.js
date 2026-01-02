import { StyleSheet, Text, View } from "react-native";


export default function Summary(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <View style={styles.card}>
                <Text>Total Machines: 12</Text>
                <Text>Running: 9</Text>
                <Text>Stopped: 3</Text>
            </View>
            <View style={styles.card}>
                <Text>Downtime Today: 2 hrs</Text>
                <Text>Critical Alerts: 1</Text>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: "#f2f2f2" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
})