import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import colors from '../constants/colors';

const screenWidth = Dimensions.get('window').width;
const boxSize = 20; 

const BanterLoader = () => {
  const navigation = useNavigation(); 

  const [animations] = useState(
    Array(9)
      .fill()
      .map(() => ({
        translateX: new Animated.Value(0),
        translateY: new Animated.Value(0),
      }))
  );

  useEffect(() => {
    const animateBoxes = () => {
      const animationsSequence = animations.map((anim, index) =>
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim.translateX, {
              toValue: index % 3 === 0 ? 26 : index % 3 === 1 ? -26 : 0,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateY, {
              toValue: index === 2 ? 52 : 0,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateX, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateY, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
          ])
        )
      );

      Animated.stagger(100, animationsSequence).start();

      setTimeout(() => navigation.navigate('landing'), 2000);
    };

    animateBoxes();
  }, [animations, navigation]);

  return (
    <View style={styles.container}>
      {animations.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.box,
            {
              transform: [
                { translateX: anim.translateX },
                { translateY: anim.translateY },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 72,
    height: 72,
    marginLeft: -36,
    marginTop: -36,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: boxSize,
    height: boxSize,
    backgroundColor: colors.punkan,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 5,
  },
});

export default BanterLoader;
