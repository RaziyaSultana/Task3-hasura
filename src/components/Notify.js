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
            <Text>https://docs.google.com/spreadsheets/d/1I2H0-sIvmMh28Qhx1yXwM-8YFoEG-YV5alopHKhngw4/edit?usp=drivesdk
              </Text>                
      </Container>
    );
  }
}

