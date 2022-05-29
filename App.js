//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, FlatList, ScrollView, SectionList, ProgressViewIOSComponent, SafeAreaView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useRef } from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default function App() {
  let inpt = useRef()
  let [text,setText] = useState()
  let [todos, setTodos] = useState([
    //{text: 'abc', key:'1'},
    //{text: 'gfg', key:'2'},
    //{text: 'shfhfg', key:'3'},
    //{text: 'abfgdfgf', key:'4'},
    //{text: 'abc', key:'5'},
    //{text: 'abcdfgdf', key:'6'},
    //{text: 'abcdfgdfg', key:'7'},
    //{text: 'zxcabzcc', key:'8'},
    //{text: 'zxccabc', key:'9'},
    //{text: 'acvxbbc', key:'10'},
    //{text: 'axcbc', key:'11'},
  ])
  let rmTask = (index) => {
    console.log(index)
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != index)
    })
    // let cpy = [...todos]
    // cpy.splice(index,1)
    // setTodos(cpy)
  }
  let addTask = ()=>{
    if(text != null){
      setTodos((prevTodos)=>{
        return [...prevTodos,text]
      })
    }
    setText(null)
    inpt.current.clear()
    //console.log('newta')
  }
  //console.log(text)
  //console.log(todos)

  function TodoItem(props){
    
    return(
      <View style={styles.todo}>
        <Text style={styles.todoText}>{props.text}</Text>
        <TouchableOpacity key={props.idx} onPress={()=>{rmTask(props.idx)}}>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={{/*position:'absolute',height:50,width:windowWidth,left:-20,elevation:3,backgroundColor:'white',zIndex:10*/}}>
          <Text style={styles.header}>Todos..</Text>
        </View>
        
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem = {({item}) => (
              <TodoItem text={item.text} idx={item.key}/>
            )}
          />
        </View>
      </View>
      <KeyboardAvoidingView style={styles.form}>
                  {/* onChangeText={(txt)=>{setText(txt)}} */}
        <TextInput ref={inpt} onChangeText={(txt)=>{setText({text:txt,key:Math.random().toString()})}}   style={styles.input} placeholder={'add todo..'}/>
        <TouchableOpacity onPress={addTask} style={styles.addbtn}>
          <MaterialIcons name="send" size={30} color="black" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxHeight: windowHeight,
  },
  box: {
    flex: 1,
    margin: 20,
    paddingTop: 10
  },
  header: {
    fontSize: 35,
    marginBottom: 10
  },
  todo: {
   flex: 1,
   borderWidth: 1,
   borderColor: 'black',
   padding: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 10,
   borderRadius: 10
  },
  todoText: {
    fontSize: 23,
    marginLeft: 10
  },
  form: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 10
  },
  list: {
    flex: 10,
    //backgroundColor: 'pink',
    marginBottom: 40,
    //marginTop: 50
  }
});
