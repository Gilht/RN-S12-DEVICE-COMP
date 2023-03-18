import { View, Button, Alert} from "react-native"
export { LaunchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker'

export const ImagePicker = () => {
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    async function verifyPermissions () {
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if(cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('you dont have permissions');
            return false;
        }

        return true;
    }

    async function takeImageHandler () {
        const hasPermission = await verifyPermissions();

        if(!hasPermission) {
            return;
        }
       const image = await LaunchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
       });
    }
  return (
    <View>
        <View>ImagePicker</View>
        <Button title='take a pic ' onPress={takeImageHandler} />
    </View>
    
  )
}
