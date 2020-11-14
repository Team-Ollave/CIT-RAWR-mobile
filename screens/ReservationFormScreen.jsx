import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../utls/typography';
import { Colors } from '../utls/colors';

export default function ReservationRoomScreen() {
  return (
    <View style={styles.container}>
      <View style={estyles.header}>
        <Text style={styles.headerText}>Reserve a Room</Text>
      </View>
      <View style={estyles.mainContent}>
        <View style={estyles.eventName}>
            <Text style={estyles.eventHeaderText}>Event Name</Text>
            <TextInput style={[estyles.textInput, estyles.eventNameTextInput]}/>
        </View>
        <View style={estyles.eventDescription}>
            <Text style={estyles.eventHeaderText}>Event Description</Text>
            <TextInput style={[estyles.textInput, estyles.eventDescriptionTextInput]}/>
        </View>
        <View style={estyles.dateTime}>
            <View style={estyles.eventDate}>
            <Text style={estyles.eventHeaderText}>Date</Text>
            {/* Date picker */}
            </View>
            <View style={estyles.eventTime}>
            <Text style={estyles.eventHeaderText}>Time</Text>
            {/* Time Picker */}
            </View>
        </View>
        <View style={estyles.eventRemarks}>
            <Text styles={estyles.eventRemarksText}>
            *Application may take from 1 to 3 days.
            </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  
});
const estyles = EStyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    textInput: {
        borderRadius: '0.5rem',
        borderColor: Colors.gray4,
        borderWidth: 1,
    },
    eventNameTextInput:{
      height: '40px',
    },
    eventDescriptionTextInput:{
      height: '180px',
    },
    dateTime: {
        flexDirection: 'row',
        justifyContent: '',
    },
    headerText: {
        ...Typography.h6('Poppins_500Medium'),
        color: Colors.black,
    },
    eventHeaderText: {
        ...Typography.subtitle1('Poppins_400Regular'),
        color: Colors.black,
    },
    eventRemarksText: {
        ...Typography.caption('Poppins_400Regular'),
        color: Colors.gray4,
    }
});
