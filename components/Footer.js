import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
	return (
		<View style={styles.footerContainer}>
			<Text style={styles.footerTitle}>
				By Khang Nguyen Huynh
			</Text>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        width: "100%",
        height: "9%",
        backgroundColor: "lightblue",
        paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    footerTitle: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
    },
});
