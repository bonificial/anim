import React, { Component } from 'react';
import {Text,View,StyleSheet,Image,ImageBackground, Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';

export default class SplashScreen extends React.Component {
    render() {
        let { height, width } = Dimensions.get('window');
        

        return (
<ImageBackground source={(require('./resources/images/gradient1.jpg'))} style={{width:'100%', height:'100%'}}>

                <View style={{flex:1,flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>

                            <Image source={(require('./resources/images/store.gif'))} style={{height:150, width:200}}/>

                </View>

</ImageBackground>

        );
    }

 
}
const styles = StyleSheet.create({

})