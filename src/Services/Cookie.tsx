import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItem(key: string, value: string) {
	await AsyncStorage.setItem(key, value);
}

export async function getItem(key: string) {

	const val = await AsyncStorage.getItem(key);
	try {
		if (val !== null || val !== '') {
			return val
		} else {
			return false
		}
	} catch (error) {
		console.log('error')
	}
}

export async function removeData(key: string) {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	}
	catch (exception) {
		return false;
	}
}

