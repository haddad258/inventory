
import AsyncStorage from "@react-native-async-storage/async-storage";
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
const CreateZones = async (zone) => {
    try {
        const value = await AsyncStorage.getItem('Local-ist');

        if (value) {
            const NEWobj = JSON.parse(value);
            NEWobj.push(zone)
            await AsyncStorage.setItem('Local-ist', JSON.stringify(removeDuplicates(NEWobj)));
            return NEWobj;
        }
        else {
            var list = JSON.stringify([zone])
            await AsyncStorage.setItem('Local-ist', list);
        }
    } catch (error) {

        return null;
    }
};
const getListZones = async () => {
    try {

        const value = await AsyncStorage.getItem('Local-ist');
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


        const value = await AsyncStorage.getItem('Local-ist');
        if (value) {
            const NEWobj = JSON.parse(value);
            
            const arrayWithoutD = NEWobj.filter(function (letter) {
                return letter.codeLocal !== zone.codeLocal;
            });
            await AsyncStorage.setItem('Local-ist', JSON.stringify(removeDuplicates(arrayWithoutD)));
              Alert("Done")
            return NEWobj;
        }
        else {
            var list = JSON.stringify([zone])
            await AsyncStorage.setItem('Local-ist', list);
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