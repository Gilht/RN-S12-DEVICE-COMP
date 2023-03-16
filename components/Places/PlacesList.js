import { FlatList, View, Text, StyleSheet } from "react-native"
import { PlaceItem } from "./PlaceItem"

export const PlacesList = ({places}) => {

    if(!places || places.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No items added - add new :p </Text>
            </View>
        )
    }
  return <FlatList 
  data={places} keyExtractor={(item) => item.id}
  renderItem={({item}) => <PlaceItem place={item} />} 
  />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
})