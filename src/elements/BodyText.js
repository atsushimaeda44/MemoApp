import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function BodyText(props) {
  return (
    <View>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

export default BodyText;
