import { View, Text , StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, TextInput, Keyboard} from 'react-native';
import React,{useState} from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import EmojiSelector, { Categories } from "react-native-emoji-selector";

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [showPicker, setShowPicker] = useState(false); 

  const handleInputChange = (text) => {
    setInputText(text);
  };
  const handleEmojiSelect = (emoji) => { 
    setSelectedEmoji(emoji); 
    setShowPicker(false); 
};
  const addItemToList = () => {
    if (inputText.trim() !== '' && selectedEmoji !== '') {
      const newItem = {
        id: Date.now(),
        name: `${selectedEmoji} ${inputText.trim()}`
      };
      setItems([...items, newItem]);
      setInputText('');
      setSelectedEmoji('');
      setModalVisible(false);
    } else {
      alert('Please enter both text and select an emoji.');
    }
  };

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  }
  return (
    <View style={{flex:1}}>
      <SafeAreaView style={styles.topContainer}>
        <Text style= {styles.name}>Habit Tracker</Text>
        <TouchableOpacity onPress={modalHandler}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={() => {modalHandler(false);Keyboard.dismiss} }>
          <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={styles.modalContent}>
                <View style={styles.inputContainer}>
                  <TouchableOpacity style={styles.emojiInput} onPress={() => setShowPicker(true)}>
                      <MaterialIcons name="emoji-symbols" size={24} color="black" />
                  </TouchableOpacity>
                  
                  <TextInput
                    style={styles.input}
                    placeholder="Enter item..."
                    value={inputText}
                    onChangeText={handleInputChange}
                  />
                  
                  <TouchableOpacity style={styles.addButton} onPress={addItemToList}>
                    <AntDesign name="enter" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {showPicker && ( 
        <EmojiSelector 
            onEmojiSelected={handleEmojiSelect} 
            category={Categories.all} 
            showTabs={true} 
            showSearchBar={true} 
            showHistory={true} 
            columns={10} 
            placeholder="Search emoji..."
        /> 
    )} 
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  topContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  emojiInput:{
    width: '10%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    height: 35,
    width: '80%',
  },
  addButton: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
})