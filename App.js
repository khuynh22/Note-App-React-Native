import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "./components/BackButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScreenType } from "./constants/constants";
import AddNote from "./screens/AddNote";
import AllNotes from "./screens/AllNotesScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	const [screen, setScreen] = useState(ScreenType.home);
	const [notes, setNotes] = useState([]);
	const updateScreen = (data) => {
		setScreen(data);
	};
	let content;
	if (screen === ScreenType.addNote) {
		content = (
			<AddNote
				onExit={updateScreen}
				onSave={(data) =>
					setNotes([...notes, { id: Date.now(), note: data }])
				}
			/>
		);
	} else if (screen === ScreenType.allNotes) {
		content = <AllNotes notes={notes} />;
	} else if (screen === ScreenType.home) {
		content = <HomeScreen onExit={updateScreen} />;
	}
	console.log(notes);

	return (
		<View style={styles.container}>
			<Header />
			{screen !== ScreenType.home && (
				<BackButton onButtonClick={updateScreen} />
			)}
			{content}
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
