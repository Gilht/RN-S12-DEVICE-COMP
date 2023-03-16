import { View, Image, Text, Pressable, StyleSheet } from "react-native"

export const PlaceItem = ({place, onSelect}) => {
  return (
    <Pressable onPress={onSelect}>
        <Image source={{urit: place.imgUrl}}/>
        <View>
            <Text>{place.title}</Text>
            <Text>{place.adress}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    
})