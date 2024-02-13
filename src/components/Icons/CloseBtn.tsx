import React, {useContext} from 'react';
import {View, ViewStyle} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  btnStyle: ViewStyle;
};

const CloseBtn = ({btnStyle}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View>
      <MCIcon name="close-box" color={theme.text} size={35} />
    </View>
  );
};

export default CloseBtn;
