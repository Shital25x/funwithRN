import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Activity = () => {
  return (
    <View style={styles.container}>
      {/* FIRST */}
      <View style={styles.head}>
        <View style={styles.logo}>
        <Text>HODLINFO</Text>
        </View>
        {/* topbtn */}
        <View style={styles.topbtn}>
          <View>
            <Text>INR</Text>
          </View>
          <View>
            <Text>BTC</Text>
          </View>
          <View>
            <Text>BUY BTC</Text>
          </View>
        </View>
        {/* connect telegram */}
        <View style={styles.telegram}>
        <View>
            <Text>57</Text>
        </View>
        <View><Text>Connect Telegram</Text></View>
      </View>

      </View>

    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({

});
