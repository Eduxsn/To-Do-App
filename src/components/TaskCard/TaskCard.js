import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';

export function TaskCard(props) {
    return (
        <View>
            <View style={styles.taskCard}>

                <View style={styles.dotAndTaskText}>
                    <View style={styles.categoryDot}></View>
                    <Text style={styles.taskText}><Text>{props.taskName}</Text></Text>
                    <Text>{}</Text>
                </View>

                <View style={styles.buttonsArea}>
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]} activeOpacity={.7} >
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} activeOpacity={.7} onPress={props.remove} >
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )

}


const styles = StyleSheet.create({
    taskCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 15,
        
    },
    dotAndTaskText: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%'
    },
    categoryDot:{
        width: 16,
        height: 16,
        borderWidth: 2,
        borderRadius: 60,
    },
    taskText:{
        marginLeft: 10,
        maxWidth: '90%',
        flexWrap: 'wrap',
        color: '#474747',
    },
    buttonsArea:{
        flexDirection: 'row',
    },
    actionButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    editButton:{
        backgroundColor: '#e642a3',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: '400'
    },
    deleteButton:{
        marginLeft: 8,
        backgroundColor: '#fa5d58'
    },
    
});