import React, { useState } from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native';

import {todo_card} from '../styles'


const TodoCard = (props) =>{ //or (props)
    return(
       
        <TouchableOpacity 
            style={todo_card.container}
            onPress={() => props.onDone(props.data.id)}
            onLongPress={() => props.onRemove()}
            >
            <Text style={[
                todo_card.todoText,
                {textDecorationLine: props.data.isDone ? 'line-through' : null}]}
                >{props.data.todo}</Text>  
        </TouchableOpacity>    )
}

export{TodoCard}