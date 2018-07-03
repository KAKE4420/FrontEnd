import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import screen from '../../../common/screen'
import pxToDp from '../../../common/pxToDp'
const { width, height, botBarHeight } = screen

type Props = {
    containerStyle: Object,
    onPress?: Function,
    lightColor: string,
    totalPrice: number,
}

type State = {

}
export default class ListcarBottom extends PureComponent <Props, State>{
    constructor(props) {
        super(props);
    }

    render() {
        
        let { containerStyle, lightColor, totalPrice, onPress } = this.props
        return (
            <View style={containerStyle}>
                <View style={{width:width*0.3, marginLeft:width * 0.07, justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style={{color:lightColor, fontSize: pxToDp(23)}}>￥{totalPrice}</Text>
                </View>
                <TouchableOpacity 
                    style={[styles.settleButton,{backgroundColor:lightColor}]} 
                    onPress={onPress}
                >
                    <Text style={{color:'white', fontSize: pxToDp(14)}}>去结算</Text>
                </TouchableOpacity>
            </View>    
        )      
    }
}

const styles = StyleSheet.create({
    settleButton: {
        backgroundColor: '#E51C23',
        borderRadius: 10,
        width: width * 0.283,
        height: botBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
})