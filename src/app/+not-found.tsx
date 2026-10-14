import { Link,Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Pagina não encontrada" }} />
    <View style={styles.container}>
      <Text>Pagina não encontrada</Text>
      <Link href="/" style={styles.button}>Inicio</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#165db3",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "none",
    color: "#fff",
  }
});
