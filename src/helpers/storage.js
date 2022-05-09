import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    // console.log("storeData: ", key, value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw new Error(e.message);
  }
};


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // console.log("Value from storage=>", value)
    return value;
  } catch (e) {
    throw new Error(e.message);
  }
};

