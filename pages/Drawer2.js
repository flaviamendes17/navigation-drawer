import { StyleSheet, Text, View } from "react-native";


export default function Drawer2() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Praia: lugar favorito 🦞</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffdd",
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