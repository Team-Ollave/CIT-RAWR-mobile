import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { Colors } from '../../utils/colors';

export default function Accordion({ title, children, open = false }) {
  const [isOpen, setIsOpen] = useState(open);
  const [bodySectionHeight, setBodySectionHeight] = useState(open ? 'auto' : 0);

  const toggleOpenAccordion = () => {
    if (isOpen) {
      setBodySectionHeight(0);
    } else {
      setBodySectionHeight('auto');
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => toggleOpenAccordion()}
        activeOpacity={0.6}
      >
        <View style={styles.labelContainer}>
          <MaterialIcons
            name={`keyboard-arrow-${isOpen ? `down` : `right`}`}
            size={20}
            color={Colors.black}
          />
          <Text style={styles.labelText}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.bodyContainer, { height: bodySectionHeight }]}>
        {children}
      </View>
    </>
  );
}
