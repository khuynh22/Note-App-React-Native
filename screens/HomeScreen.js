import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenType } from "../constants/constants";

const HomeScreen = ({onExit}) => {
	return (
		<View style={styles.container}>
			<Pressable onPress={() => onExit(ScreenType.addNote)}>
				<View style={styles.itemButton}>
					<Text style={styles.title}>ADD A NOTE</Text>
					<Icon style={styles.icon} name="arrow-forward-outline" />
				</View>
			</Pressable>
			<Pressable onPress={() => onExit(ScreenType.allNotes)}>
				<View style={styles.itemButton}>
					<Text style={styles.title}>VIEW ALL NOTES</Text>
					<Icon style={styles.icon} name="arrow-forward-outline" />
				</View>
			</Pressable>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 40,
	},
	itemButton: {
		width: Dimensions.get("window").width - 100,
		height: "50%",
		backgroundColor: "#f5f5f5",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 30,
		borderRadius: 10,
		elevation: 10, // Android
		shadowColor: "#000", // iOS
		shadowOffset: { width: 2, height: 10 }, // iOS
		shadowOpacity: 0.22, // iOS
		shadowRadius: 2, // iOS
	},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
	icon: {
		fontSize: 20,
    	paddingTop: 20,
	},
});
