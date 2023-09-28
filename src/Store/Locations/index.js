
import AsyncStorage from "@react-native-async-storage/async-storage";
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
const CreateZones = async (zone) => {
    try {
        const value = await AsyncStorage.getItem('Location-list');

        if (value) {
            const NEWobj = JSON.parse(value);
            NEWobj.push(zone)
            await AsyncStorage.setItem('Location-list', JSON.stringify(removeDuplicates(NEWobj)));
            return NEWobj;
        }
        else {
            var list = JSON.stringify([zone])
            await AsyncStorage.setItem('Location-list', list);
        }
    } catch (error) {

        return null;
    }
};
const getListZones = async () => {
    try {

        const value = await AsyncStorage.getItem('Location-list');
        if (value) {
            return  JSON.parse(value);
        }
        return [] ;
    } catch (error) {
        ;
        return null;
    }
};
const deleteZone = async (zone) => {
    try {


        const value = await AsyncStorage.getItem('Location-list');
        if (value) {
            const NEWobj = JSON.parse(value);
            
            const arrayWithoutD = NEWobj.filter(function (letter) {
                return letter.code !== zone.code;
            });
            await AsyncStorage.setItem('Location-list', JSON.stringify(removeDuplicates(arrayWithoutD)));
            return NEWobj;
        }
        else {
            var list = JSON.stringify([zone])
            await AsyncStorage.setItem('Location-list', list);
        }
    } catch (error) {
        ;
        return null;
    }
};
export default {

    CreateZones,
    getListZones,
    deleteZone,

};