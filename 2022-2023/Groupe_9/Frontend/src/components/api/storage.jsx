// import AsyncStorage from ''


// export const storeData = async (value: any) => {
//     try {
//         const jsonValue = JSON.stringify(value)
//         await AsyncStorage.setItem('@lesson_x', jsonValue)
//         //console.log('Data stored successfully')
//     } catch (e) {
//         console.log('Problem when storing data', e)
//     }
// }

// export const getStoredData = async () => {
//     try {
//         const jsonValue = await AsyncStorage.getItem('@lesson_x')
        
//         return JSON.parse(jsonValue)
//     } catch(e) {
//         console.log('Problem when get data', e)
//     }
// }

// export const removeData = async () => {
//     try {
//         await AsyncStorage.removeItem('@lesson_x');
//         //console.log('Data removed successfully')
//         return true;
//     }
//     catch(exception) {
//         console.log('Problem when delete data', exception)
//         return false;
//     }
// }