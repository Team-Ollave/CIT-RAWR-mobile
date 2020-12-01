import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from '../../utils/colors';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import { userContext } from '../../userContext';
import estyles from './estyles';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import ipConfig from '../../ipConfig.js';
import axios from 'axios';

export default function ReservationRoomScreen({ navigation, route }) {
  const [eventName, setEventName] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formattedDate, setfDate] = useState('Set date');
  const [formattedStartTime, setfStartTime] = useState('Set start');
  const [formattedEndTime, setfEndTime] = useState('Set end');
  const { user } = useContext(userContext);
  const { roomId } = route.params;

  const submitReservationRequest = async () => {
    try {
      const response = await axios.post(ipConfig + '/api/reservations/', {
        event_name: eventName,
        event_date: formattedDate,
        start_time: formattedStartTime,
        end_time: formattedEndTime,
        event_description: eventDesc,
        room: roomId,
        requestor: user.id,
      });
      console.log(response.status);
      if (response.status === 201) {
        navigation.navigate('ReservationSuccessScreen');
      }
    } catch (error) {
      setShowError(true);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode === 'date') {
      setfDate(moment(currentDate).format('MM-DD-YYYY'));
    } else if (mode === 'start') {
      setfStartTime(moment(currentDate).format('hh:mm A'));
    } else {
      setfEndTime(moment(currentDate).format('hh:mm A'));
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showStartTimepicker = () => {
    showMode('start');
  };

  const showEndTimepicker = () => {
    showMode('end');
  };
  return (
    <View style={estyles.container}>
      <View style={estyles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={estyles.headerText}>Reserve a Room</Text>
      </View>
      <View style={estyles.mainContent}>
        <View style={estyles.eventName}>
          <Text style={estyles.eventHeaderText}>Event Name</Text>
          <TextInput
            style={[estyles.textInput, estyles.eventNameTextInput]}
            value={eventName}
            onChangeText={(text) => setEventName(text)}
          />
        </View>
        <View style={estyles.eventDescription}>
          <Text style={estyles.eventHeaderText}>Event Description</Text>
          <TextInput
            multiline
            style={[estyles.textInput, estyles.eventDescriptionTextInput]}
            placeholder="What will you be doing?"
            value={eventDesc}
            onChangeText={(text) => setEventDesc(text)}
          />
        </View>
        <View style={estyles.dateTime}>
          <View style={estyles.dateTimeContainer}>
            <Text style={estyles.eventHeaderText}>Start Time</Text>
            <TouchableOpacity
              onPress={showStartTimepicker}
              style={[estyles.dateTimePickerInput, { marginRight: 24 }]}
            >
              <Text style={estyles.dateTimeText}>{formattedStartTime}</Text>
              <Feather name="clock" size={20} color={Colors.black} />
            </TouchableOpacity>
            <View style={estyles.dateContainer}>
              <Text style={estyles.eventHeaderText}>Set Date</Text>
              <TouchableOpacity
                onPress={showDatepicker}
                style={[estyles.dateTimePickerInput, estyles.datePickerInput]}
              >
                <Text style={estyles.dateTimeText}>{formattedDate}</Text>
                <Feather name="calendar" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={estyles.dateTimeContainer}>
            <Text style={estyles.eventHeaderText}>End Time</Text>
            <TouchableOpacity
              onPress={showEndTimepicker}
              style={estyles.dateTimePickerInput}
            >
              <Text style={estyles.dateTimeText}>{formattedEndTime}</Text>
              <Feather name="clock" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              style={{ position: 'absolute' }}
              testID="dateTimePicker"
              value={date}
              mode={mode === 'date' ? mode : 'time'}
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
          <Text
            style={[
              estyles.errorMessage,
              { display: showError ? 'flex' : 'none' },
            ]}
          >
            Make sure your inputs are valid.
          </Text>
        </View>
      </View>
      <View style={estyles.footer}>
        <View style={estyles.footerContainer}>
          <TouchableOpacity
            style={estyles.reserveButtonContainer}
            onPress={submitReservationRequest}
          >
            <Text style={estyles.reserveButtonText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
