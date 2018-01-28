import React from 'react';
import { View, Alert } from 'react-native';
import { Container, Header,Title, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';


export default class Notify extends React.Component {
  
  render() {
    console.log("Notifying......")
    alert("saving details....");
    return (
      <Container>
        <View/>
            <Text>Notification</Text>
            <Text>Details saved successfully</Text>
            <Text>Check the link below</Text>
                
      </Container>
    );
  }
}

