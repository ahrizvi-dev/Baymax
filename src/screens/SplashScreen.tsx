import {StyleSheet, Image, View} from 'react-native';
import React, { useEffect } from 'react';
import {Colors, Fonts, lightColors} from '../utils/Constants';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {screenHeight, screenWidth} from '../utils/Scaling';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../components/globle/CustomText';
import LottieView from 'lottie-react-native';

const bottomColors = [...lightColors].reverse();

const SplashScreen:React.FC = () => {

const baymaxAnimation = useSharedValue(screenHeight * 0.8);
const messageContainerAnimation = useSharedValue(screenHeight * 0.8);

const launchAnimation = async () => {
  messageContainerAnimation.value = screenHeight * 0.001; 
  setTimeout(()=>{
    baymaxAnimation.value = - screenHeight * 0.02;
  },600)
};

useEffect(()=>{
  launchAnimation()
},[])

const animateImageStyle = useAnimatedStyle(()=>{
  return {
    transform:[{
      translateY:
      withTiming(baymaxAnimation.value
        ,{duration:1200}
      ),
    }],
  };
});
const messageContainerStyle = useAnimatedStyle(()=>{
  return {
    transform:[{
      translateY:
      withTiming(messageContainerAnimation.value
        ,{duration:1200}
      ),
    }],
  };
});


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer,animateImageStyle]}>
        <Image
          source={require('../assets/images/launch.png')}
          style={styles.img}
        />
      </Animated.View>
      <Animated.View style={[styles.gradientContainer,messageContainerStyle]}>
        <LinearGradient colors={bottomColors} style={styles.gradient}>
          <View style={styles.textContainer}>
            <CustomText fontSize={34} fontFamily={Fonts.Theme}>Baymax!</CustomText>
            <LottieView source={require('../assets/animations/sync.json')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width:280,height:100}}
            autoPlay={true}
            loop
            />
            <CustomText>Synchrozing best configuration for you...</CustomText>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: screenWidth - 20,
    height: screenHeight * 0.5,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gradientContainer: {
    position: 'absolute',
    height: '35%',
    bottom: 0,
    width: '100%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingTop:30,
  },
  textContainer:{
    backgroundColor:'white',
    flex:1,
    borderRadius:20,
    padding:20,
    shadowOffset:{width:1,height:1},
    shadowOpacity:1,
    shadowRadius:2,
    alignItems:'center',
    shadowColor:Colors.border,
  },
});
