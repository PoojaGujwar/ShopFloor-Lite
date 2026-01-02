import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DashboardScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await AsyncStorage.getItem("userData");
      if (data) setUser(JSON.parse(data));
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userData");
    navigation.replace("Login");
  };

  if (!user) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Role: {user.role}</Text>
      <Text style={styles.info}>Tenant: {user._id}</Text>

      <View style={styles.card}>
        {user.role === "Operator" ? (
          <>
            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => navigation.navigate("machine")}
            >
              <Text style={styles.navText}>Machines</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => navigation.navigate("Alert")}
            >
              <Text style={styles.navText}>Alerts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navBtn}
              onPress={() => navigation.navigate("Summary")}
            >
              <Text style={styles.navText}>Summary</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#f2f2f2" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  info: { fontSize: 16, marginBottom: 6, textAlign: "center" },
  card: { marginTop: 30, padding: 16, backgroundColor: "#fff", borderRadius: 8 },
  logoutBtn: { marginTop: 40, backgroundColor: "#f44336", padding: 14, borderRadius: 8 },
  logoutText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  navBtn: { backgroundColor: "#2196F3", padding: 14, borderRadius: 8, marginVertical: 10 },
  navText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
