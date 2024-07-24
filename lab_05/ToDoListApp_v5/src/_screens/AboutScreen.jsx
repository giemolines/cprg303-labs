import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import MainLayout from '../_layouts/MainLayout'
import { ScrollView } from 'react-native-gesture-handler'

const AboutScreen = ({navigation}) => {
  return (
    <MainLayout>
      <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        <Text>Lorem ipsum odor amet, consectetuer adipiscing elit. Ante sollicitudin potenti dui mauris fames sollicitudin. Mollis mi nec suspendisse ad primis ex. Magna per amet tortor dolor nam vivamus cubilia laoreet mauris. Nulla efficitur ridiculus ultrices imperdiet euismod elit? Faucibus primis hendrerit; sit pretium fringilla sociosqu. Mauris vehicula leo platea viverra eu purus aliquet. Taciti cubilia nunc et faucibus mus semper egestas varius.

Potenti ultrices ac auctor suspendisse pretium tristique. Quis quam iaculis morbi lectus aenean lacus curabitur. Porta posuere pulvinar convallis curabitur magna auctor purus cras. Libero tempus erat; netus metus ante id. Commodo dui auctor morbi sit torquent aliquet. Arcu curabitur interdum hendrerit sapien risus felis consectetur morbi. Taciti elit dictumst ad quisque suscipit nullam finibus primis. Tellus dapibus tempor quisque habitant lacus congue dui maecenas.

Convallis potenti tortor curabitur mi taciti commodo convallis fusce. Maecenas laoreet taciti; habitasse mattis platea nascetur etiam. Diam blandit eu nam elementum aliquet montes. Platea tempor purus enim malesuada cubilia tellus pharetra pulvinar. Dapibus feugiat diam dolor quis luctus fusce ac maximus. Torquent morbi consequat malesuada ipsum nec ligula. Sagittis ornare scelerisque eu dis magna quam. Inceptos placerat conubia, tortor arcu diam phasellus hac. Erat ad eget adipiscing donec et cubilia porta.</Text>
    </MainLayout>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})