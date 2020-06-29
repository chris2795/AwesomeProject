import React, {Component} from 'react';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
  Content,
  Text,
  Thumbnail,
} from 'native-base';
import FadeCarousel from 'rn-fade-carousel';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
// import {Col, Row, Grid} from 'react-native-easy-grid';

import {Inset, stackFactory} from 'react-native-spacing-system';

import * as Animatable from 'react-native-animatable';
import {
  Row,
  Column as Col,
  Grid,
  setBreakPoints,
} from 'react-native-responsive-grid';
import {dummyData} from '../component/NewsItem';
// import { ScrollView } from 'react-native-gesture-handler';

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024,
});
const spacing = {
  sm: 10,
  md: 12,
  lg: 25,
};
const {width: screenWidth} = Dimensions.get('window');
const Stack = stackFactory(spacing);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newlists: dummyData,
    };
  }
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    headerShown: false,
  };
  componentDidMount() {
    console.log(this.state.newlists);
  }
  slides = [
    <Image
      source={require('../assets/bg_home.jpg')}
      style={styles.imageScroll}
      resizeMode="cover"
    />,
    <Image
      source={require('../assets/bg_header.jpg')}
      style={styles.imageScroll}
      resizeMode="cover"
    />,
  ];

  render() {
    let listdata = this.state.newlists.map((item, i) => {
      return (
        <Col smSize={25} mdSize={25} lgSize={25}>
        <View style={styles.card}>
          <Text style={styles.titleNews}>{item.title}</Text>
          <Image source={item.image} style={styles.cardImage} />
          <View style={{flexDirection: 'row', padding: 10}}>
            <Thumbnail source={item.thumb} />
            {/* News Claimer */}
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>{item.officeUploader}</Text>
              <Text style={styles.namedesc}>{item.nameUploader}</Text>
            </View>
          </View>
          {/* News Description */}
          <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}>
              <Text style={{color: 'grey'}}>{item.description}</Text>
            </ViewMoreText>
          </View>
          {/* News Description */}
        </View>
        </Col>
      );
    });
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#2773c4" barStyle="light-content" />

        <View style={styles.container}>
          <View style={styles.containerStyle}>
            <FadeCarousel
              elements={this.slides}
              containerStyle={styles.carouselContainer}
              fadeDuration={2000}
              stillDuration={2000}
              start={true}
            />
          </View>
          <Animatable.View style={styles.footer}>
            <Text style={styles.titles}>News and Events</Text>
            <ScrollView horizontal={true} style={styles.horizontalView}>
              {listdata}
            </ScrollView>
            <Row style={{marginTop: 50, padding: 10}}>
              <Col smSize={50} mdSize={5} lgSize={25}>
                <View
                  style={{
                    marginTop: 30,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#f5f3f2',
                    marginBottom: 10,
                    marginLeft: 5,
                    marginRight: 5,

                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    elevation: 5,
                  }}>
                  <Text style={styles.titleNews}>asdasd</Text>
                  <Image
                    source={require('../assets/crunchy_maki.jpg')}
                    style={styles.cardImage}
                  />
                  <View style={{flexDirection: 'row', padding: 10}}>
                    {/* <Thumbnail source={item.thumb} /> */}

                    {/* News Claimer */}
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.name}>asdsadsad</Text>
                      <Text style={styles.namedesc}>asdasdsd</Text>
                    </View>
                  </View>
                </View>
              </Col>
              <Col smSize={50} mdSize={50} lgSize={25}>
                <View
                  style={{
                    marginTop: 30,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#f5f3f2',
                    marginBottom: 10,
                    marginLeft: 5,
                    marginRight: 5,

                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    elevation: 5,
                  }}>
                  <Text style={styles.titleNews}>asdasd</Text>
                  <Image
                    source={require('../assets/crunchy_maki.jpg')}
                    style={styles.cardImage}
                  />
                  <View style={{flexDirection: 'row', padding: 10}}>
                    {/* <Thumbnail source={item.thumb} /> */}

                    {/* News Claimer */}
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.name}>asdsadsad</Text>
                      <Text style={styles.namedesc}>asdasdsd</Text>
                    </View>
                    <View
                      style={{
                        marginStart: 15,
                        marginEnd: 15,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                </View>
              </Col>
            </Row>
          </Animatable.View>
        </View>
      </ScrollView>

      // <View style={styles.container}>
      //
      //   <ImageBackground
      //     source={require('../assets/bg1.jpg')}
      //     style={styles.image}>
      //     <View style={styles.containerStyle}>
      //       <FadeCarousel
      //         elements={this.slides}
      //         containerStyle={styles.carouselContainer}
      //         fadeDuration={2000}
      //         stillDuration={2000}
      //         start={true}
      //       />
      //     </View>
      //     <Animatable.View style={styles.footer}>
      //       <Text style={styles.titles}>News and Events</Text>
      //       <ScrollView horizontal>{listdata}</ScrollView>
      //     </Animatable.View>
      //   </ImageBackground>
      // </View>
    );
  }
}

const {width} = Dimensions.get('screen');
const height_logo = width * 0.7 * 1;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,

    marginStart: 5,
    fontWeight: '200',
    color: '#082f9c',
  },
  namedesc: {
    fontSize: 16,

    marginStart: 5,
    fontWeight: '200',
    color: '#92949c',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  horizontalView: {
    flex: 1,
  },
  titleNews: {
    fontSize: 20,
    margin: 1,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#082f9c',
  },
  card: {
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f5f3f2',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    width:  height_logo,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    // shadowOffset: {
    //   width: 1,
    //   height: 3,
    // },
  },
  titles: {
    color: '#404142',
    fontSize: 38,

    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    fontWeight: '100',
    fontStyle: 'normal',
    marginLeft: 8,
    textShadowColor: '#c5c7c9',
  },
  containerStyle: {
    height: 400,
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageScroll: {
    width: screenWidth,
    height: 500,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  header: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  logocontain: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 500,
    width: '100%',
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 28,
  },
  text: {
    marginTop: 5,
    color: 'gray',
  },
  button: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textsignIn: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// {
//   /* <View style={{flex: 1, flexDirection: 'row'}}>
//             <View style={{width: '50%', height: '100%'}}>
//               <Button
//                 transparent
//                 style={{alignSelf: 'flex-start'}}
//                 onPress={this.props.navigation.openDrawer}>
//                 <Icon name="menu" style={{color: '#99cfcf'}} />
//               </Button>
//             </View>
//             <View style={{width: '50%', height: '100%'}}>
//               <Button
//                 transparent
//                 style={{alignSelf: 'flex-end'}}
//                 onPress={this.props.navigation.openDrawer}>
//                 <Icon name="menu" style={{color: '#99cfcf'}} />
//               </Button>
//             </View>
//           </View> */
// }
