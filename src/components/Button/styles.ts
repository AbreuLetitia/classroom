import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/types';
import {themes} from '../../themes';

export const useStyles = () => {
  const theme = useSelector((store: Store) => {
    return store.themes;
  });

  return StyleSheet.create({
    primary: {
      backgroundColor: themes[theme.selectedTheme].primary1,
      borderColor: themes[theme.selectedTheme].secondary1,
      textColor: themes[theme.selectedTheme].secondary1,
      shadowColor: themes[theme.selectedTheme].secondary1,
      borderRadius: 6,
      paddingVertical: 5,
      borderWidth: 1,
      paddingHorizontal: 15,
      shadowRadius: 3,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    warning: {
      backgroundColor: themes[theme.selectedTheme].primary1,
      borderColor: themes[theme.selectedTheme].warning1,
      textColor: themes[theme.selectedTheme].warning1,
      shadowColor: themes[theme.selectedTheme].warning1,
      borderRadius: 6,
      paddingVertical: 5,
      borderWidth: 1,
      paddingHorizontal: 15,
      shadowRadius: 3,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: themes[theme.selectedTheme].disabled1,
      borderColor: themes[theme.selectedTheme].disabled,
      textColor: themes[theme.selectedTheme].disabled,
      borderRadius: 6,
      paddingVertical: 5,
      borderWidth: 1,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
