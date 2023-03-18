import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { ImagePicker } from "./ImagePicker";

export const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const changeTitleHandler = (text) => {
    setEnteredTitle(text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.text}></Text>
        <TextInput style={styles.input} onChange={changeTitleHandler} value={enteredTitle} />
      </View>
      <ImagePicker />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: '#ce8c8c',
    backgroundColor: '#E5E5F2',
    borderRadius: 6
  }
})