import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReservationRoomScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [formattedDate, setfDate] = useState('Set date');
  const [formattedTime, setfTime] = useState('Set time');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode == 'date') {
      setfDate(moment(currentDate).format('MM-DD-YYYY'));
    } else {
      setfTime(moment(currentDate).format('hh:mm A'));
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={estyles.container}>
      <View style={estyles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={estyles.headerText}>Reserve a Room</Text>
      </View>
      <View style={estyles.mainContent}>
        <View style={estyles.eventName}>
          <Text style={estyles.eventHeaderText}>Event Name</Text>
          <TextInput style={[estyles.textInput, estyles.eventNameTextInput]} />
        </View>
        <View style={estyles.eventDescription}>
          <Text style={estyles.eventHeaderText}>Event Description</Text>
          <TextInput
            multiline
            style={[estyles.textInput, estyles.eventDescriptionTextInput]}
            placeholder="What will you be doing?"
          />
        </View>
        <View style={estyles.dateTime}>
          <View style={estyles.dateTimeContainer}>
            <Text style={estyles.eventHeaderText}>Set Date</Text>
            <TouchableOpacity
              onPress={showDatepicker}
              style={estyles.dateTimePickerInput}
            >
              <Text style={estyles.dateTimeText}>{formattedDate}</Text>
              <Feather name="calendar" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={estyles.dateTimeContainer}>
            <Text style={estyles.eventHeaderText}>Set Time</Text>
            <TouchableOpacity
              onPress={showTimepicker}
              style={estyles.dateTimePickerInput}
            >
              <Text style={estyles.dateTimeText}>{formattedTime}</Text>
              <Feather name="clock" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <View style={estyles.eventRemarks}>
          <Text style={estyles.eventRemarksText}>
            *Application may take from 1 to 3 days.
          </Text>
        </View>
      </View>
      <View style={estyles.footer}>
        <View style={estyles.footerContainer}>
          <TouchableOpacity style={estyles.reserveButtonContainer}>
            <Text style={estyles.reserveButtonText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estyles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
  },
  mainContent: {
    paddingHorizontal: '1.5rem',
    height: '82%',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1.25rem',
  },
  backButtonContainer: {
    paddingRight: '1rem',
  },
  textInput: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
    paddingHorizontal: '1rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray4,
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingTop: '0.5rem',
  },
  eventName: {
    marginBottom: '1.25rem',
  },
  eventNameTextInput: {
    height: 40,
  },
  eventDescription: {
    textAlignVertical: 'top',
    marginBottom: '1.25rem',
  },
  eventDescriptionTextInput: {
    height: 180,
    paddingBottom: 5,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '1.25rem',
  },
  dateTimeContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  dateTimePickerInput: {
    height: 40,
    width: 144,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray4,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  dateTimeText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
  },
  footer: {
    height: 72,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.gray2,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  reserveButtonContainer: {
    backgroundColor: Colors.accentColor,
    borderRadius: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButtonText: {
    ...Typography.button('Poppins_500Medium'),
    color: '#ffffff',
  },
  headerText: {
    paddingLeft: 16,
    ...Typography.h6('Poppins_500Medium'),
    color: Colors.black,
  },
  eventHeaderText: {
    ...Typography.subtitle1('Poppins_400Regular'),
    color: Colors.black,
    paddingBottom: '0.25rem',
  },
  eventRemarksText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.gray4,
    fontStyle: 'italic',
  },
  dateTimeText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
  },
});
