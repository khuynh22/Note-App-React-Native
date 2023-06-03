import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenType } from "../constants/constants";

const BackButton = ({ onButtonClick }) => {
	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Button
				// remember to pass in the data you want to send back to the parent, App.js in the BackButton component
					onPress={() => onButtonClick(ScreenType.home)}
					color={"white"}
					title="< Back"
				/>
			</View>
		</View>
	);
};

export default BackButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	button: {
		margin: 20,
		backgroundColor: "lightblue",
		borderRadius: 10,
	},
});
