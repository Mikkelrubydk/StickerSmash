import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Our team</Text>
        <Text style={styles.text}>Meet the people behind StickerSmash</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    gap: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 32,
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
