import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


import {jobItem} from '../styles';

const JobItem = (props) => {
    return(
        <TouchableOpacity
            style={jobItem.container}
            onPress={props.onSelect}
        >
            <Text style={jobItem.jobName}>{props.job.title}</Text>
            <Text style={jobItem.jobName}>{props.job.type} / {props.job.location}</Text>
        </TouchableOpacity>
    )
}

export {JobItem}