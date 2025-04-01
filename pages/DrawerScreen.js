import { StyleSheet, Text, View } from "react-native";


export default function DrawerScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Flavinha 💌</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9d6af",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        color: "#333",
    },
})