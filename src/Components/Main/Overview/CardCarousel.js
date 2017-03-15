import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Carousel from 'react-native-snap-carousel'
import * as Animatable from 'react-native-animatable'

const styles = {
    circle: {
      width: 250,
      height: 250,
      borderRadius: 500,
      backgroundColor: "#fbfbfb",
      borderWidth: 1,
      borderColor: "#eaeaea",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 1,
    },
    amount: {
      backgroundColor: 'transparent',
      textAlign: 'center',
      color: '#94c1f6',
      fontSize: 50,
      fontWeight: "100",
    },
    container: {
      height: 80,
      alignItems: "center",
      position: "relative",
      bottom: 170
    },
    amountContainer: {
      flex: 1,
      flexDirection: "row"
    },
    dollar: {
      backgroundColor: 'transparent',
      color: '#a5c2f9',
      fontSize: 20,
      marginTop: 8,
      fontWeight: "200",
    },
    title: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: 12,
      letterSpacing: 4,
      opacity: 0.65,
      color: "#000"
    },
    slide: {
      flexDirection: 'column',
      width: 250,
      paddingHorizontal: 5
    },
};

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      flexSpendRemaining: 200,
      flexSpendMonthly: 300,
      headerData: [
        {
          amount: "200",
          title: "FLEX SPENDING"
        },
        {
          amount: "8000",
          title: "AVAILABLE FUNDS"
        },
        {
          amount: "12000",
          title: "TOTAL SAVINGS"
        }
      ]
    });
  }
  _renderItem (data) {
    const fill = this.state.flexSpendRemaining / this.state.flexSpendMonthly * 100;

    return (
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.circle}>
          <AnimatedCircularProgress
            style={{ borderRadius: 300, flex: 1, alignSelf: "center", backgroundColor: "transparent" }}
            size={250}
            width={2}
            fill={fill}
            tintColor="#cecefa"
            backgroundColor="#ddd"
            linecap="round"
            >
            {
              (fill) => (
                <View style={styles.container}>
                  <View style={styles.amountContainer}>
                    <Text style={styles.dollar}>$</Text>
                    <Text style={styles.amount}>{data.amount}</Text>
                  </View>
                  <Text style={styles.title}>{data.title}</Text>
                </View>

              )
            }
          </AnimatedCircularProgress>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    return (
      <Animatable.View animation="fadeInUp" >
        <Carousel
          ref={'carousel'}
          items={this.state.headerData}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={viewportWidth}
          slideStyle={styles.slide}
          itemWidth={250}
          firstItem={1}
          style={{ height: 255, paddingLeft: 58, marginBottom: -10 }}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.3}
          showsHorizontalScrollIndicator={false}
        />
      </Animatable.View>
    );
  }
}
