import { StyleSheet, Text, View,Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import color from '../misc/color'

const OptionModal = ({visible,onclose,currentItem, onPlayPress, onPlaylistPress}) => {
    const {filename} = currentItem
  return (
    <Modal animationType='slide' transparent visible={visible}>
        <View style={styles.modal}>
            <Text numberOfLines={2} style={styles.title}>{filename} </Text>
            <View style={styles.optionContainer}>
                <TouchableWithoutFeedback onPress={onPlayPress}>
                <Text style={styles.options}>
                    Play
                </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPlaylistPress}>
                <Text style={styles.options}>
                    Add to Play list
                </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <TouchableWithoutFeedback onPress={onclose}>
        <View style={styles.modalBg}/>
        </TouchableWithoutFeedback>
    </Modal>
  )
}

export default OptionModal

const styles = StyleSheet.create({
    modal:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor:color.APP_BG,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        zIndex:10000
    },
    optionContainer:{
        padding:20,
    },
    title:{
       fontSize:18,
       fontWeight:'bold',
       padding:20,
       paddingBottom:0,
       color:color.FONT_MEDIUM 
    },
    options:{
        fontSize:16,
        fontWeight:'bold',
        color:color.FONT,
        paddingVertical:10,
        letterSpacing:1
    },
    modalBg:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor:color.MODAL_BG

    }
})