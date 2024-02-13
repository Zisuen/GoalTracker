import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

type STYLE_PROPS = {
  isChosen: boolean;
};
const stylesChoiceBtn = ({isChosen}: STYLE_PROPS) => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    btnContainer: {
      backgroundColor: isChosen ? theme.secondary : theme.secondary_disabled,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    btnLabel: {
      ...getFonts({fontSize: 16, fontWeight: '400'}),
    },
  });
};

export default stylesChoiceBtn;
