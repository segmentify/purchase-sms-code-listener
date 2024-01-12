import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { usePostRead } from '../hooks';
import { useEffect } from 'react';

export function IndexPage() {
  const { mutateAsync } = usePostRead(['usePostRead']);

  const shipData = () =>
    mutateAsync({
      text: 'Hello World',
    }).then((res) => console.log('res', res));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shipData} style={styles.confirmButton}>
        <Text>Ship Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    margin: 10,
  },
});
