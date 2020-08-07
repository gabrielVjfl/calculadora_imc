import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'



const Navbar = () => {
    return (
        <View style={styles.navbar}> 
        
        <Image source={require('./img/logo.png')} style={{height: 110, width: 110, alignSelf: 'center', marginTop: 19}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
     backgroundColor:'purple',
     width: '100%',
     height: 130,
    
    
    }
})
export default Navbar