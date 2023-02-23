import {StyleSheet} from 'react-native';
import {measurements} from '../../constants/measurements';

export const styles = StyleSheet.create({
  input: {
    borderRadius: measurements.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
});
