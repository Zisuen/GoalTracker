import React, {useContext} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp} from '@react-navigation/native';
import Layout from '~/components/Layout';
import {logoutUser} from '~/services/api';
import {logout} from '~/services/redux/loginSlice';
import {RootStackParams} from '~/config/types/api.types';
import InformationRow from '~/components/Account/InformationRow';
import {RootState} from '~/services/redux/store';
import stylesAccount from '~/config/styles/screens/Account.styles';
import {ThemeContext} from '~/services/context/ThemeContext';
import Button from '~/components/Button';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const Account = ({navigation}: PROPS) => {
  const {isDark, switchTheme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const styles = stylesAccount();
  const {firstname} = useSelector((state: RootState) => state.user);
  const logoutHandler = async () => {
    const isLogedOut = await logoutUser();
    if (isLogedOut) {
      dispatch(logout());
    }
  };

  return (
    <Layout topPadding navigation={navigation} currentScreen={'Account'}>
      <Text style={styles.titleText}>Hello {firstname}</Text>
      <Text style={styles.subTitleText}>Here's your account settings.</Text>
      <InformationRow
        hasSwitch
        switchValue={isDark}
        switchFn={switchTheme}
        label="Light mode"
      />
      <Button
        btnLabel="Sign out"
        pressHandler={logoutHandler}
        styles={{
          buttonStyle: styles.buttonStyle,
          labelStyle: styles.labelStyle,
        }}
      />
    </Layout>
  );
};

export default Account;
