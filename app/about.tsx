import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.conainer}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
