import { Dimensions, StyleSheet } from 'react-native';

const color = "#bcd4e6";

const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color
    },
    banner:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        alignItems:'center',
        marginTop:20

    },
    todoText:{
       fontSize: 35,
       fontWeight:'bold',
       color:'#0077b6',
       shadowColor:'#03045e',
       shadowOpacity:1, 
       shadowOffset: {width: 1, height: 1},
       shadowRadius: 1
    },
    todoCount:{
       fontSize: 25,
       fontWeight:'bold',
       color:'#0077b6',shadowColor:'#03045e',
       shadowOpacity:1, 
       shadowOffset: {width: 1, height: 1},
       shadowRadius: 1
    },
    emptyComponent:{
        fontSize: 25,
        fontWeight:'bold',
        color:'#0077b6',
        textAlign:'center'
    }
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#d7e3fc',
        padding:10,
        margin:10,
        borderRadius:8
    },
    countainer:{
        backgroundColor:'#b388eb',
        padding:10,
        margin:10,
        borderRadius:8
    },
    buttonContainer:{
        backgroundColor:'#0077b6',
        padding:10,
        margin:10,
        borderRadius:8,
        width:Dimensions.get('window').width/2.5,
        alignSelf:'center',
        borderRadius:8,
        shadowColor:'#03045e',
        shadowOpacity:1, 
        shadowOffset: {width: 0.5, height: 0.5},
        shadowRadius: 1
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})
export {main, todo_input, todo_card};

const todo_card = StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        borderRadius:8,
        backgroundColor:'#0077b6',
    },
    todoText:{
        color,
        fontWeight:'bold',
        fontSize: 20,
    }
})