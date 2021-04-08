import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../buttons/style'

const Button = (props) => {
    const type = props.type
    const content = props.content
    const onPress = props.onPress

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={onPress}
            >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default Button