import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';

const styles = {
  circle: {
    width: 245,
    height: 245,
    borderRadius: 500,
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderColor: '#eaeaea',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 12,
    shadowOpacity: 0.065,
    elevation: 1,
    alignSelf: 'center',
    marginTop: 5,
  },
  amount: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#77BDF5',
    fontSize: 45,
    fontWeight: '100',
  },
  container: {
    height: 72.5,
    alignItems: 'center',
    position: 'relative',
    bottom: 155
  },
  amountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dollar: {
    backgroundColor: 'transparent',
    color: '#a5c2f9',
    fontSize: 20,
    marginTop: 8,
    fontWeight: '200',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: 11,
    letterSpacing: 2.75,
    color: '#96939B'
  },
  slide: {
    flexDirection: 'column',
    width: 250,
  },
};

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);

    this.state = ({
      flexSpendRemaining: 200,
      flexSpendMonthly: 300,
      headerData: [
        {
          amount: '200',
          title: 'FLEX SPENDING'
        },
        {
          amount: '8,000',
          title: 'AVAILABLE FUNDS'
        },
        {
          amount: '12,000',
          title: 'PENDING FUNDS'
        },
        {
          amount: '120,000',
          title: 'CHASE SAVINGS'
        },
        {
          amount: '32,313,710',
          title: 'WELLS FARGO SAVINGS'
        },
        {
          amount: '1,522,248',
          title: 'TOTAL SAVINGS'
        },
        {
          amount: '200',
          title: 'FLEX SPENDING'
        },
        {
          amount: '8.17k',
          title: 'AVAILABLE FUNDS'
        },
        {
          amount: '12.28k',
          title: 'PENDING FUNDS'
        },
        {
          amount: '120.42k',
          title: 'CHASE SAVINGS'
        },
        {
          amount: '1.34mil',
          title: 'WELLS FARGO SAVINGS'
        },
        {
          amount: '1.52mil',
          title: 'TOTAL SAVINGS'
        }
      ]
    });
  }
  renderItem (data) {
    const fill = this.state.flexSpendRemaining / this.state.flexSpendMonthly * 100;

    return (
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.circle}>
          <AnimatedCircularProgress
            style={{ borderRadius: 300, flex: 1, alignSelf: 'center', backgroundColor: 'transparent' }}
            size={245}
            width={1}
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
          renderItem={this.renderItem}
          sliderWidth={viewportWidth}
          sliderHeight={viewportHeight}
          slideStyle={styles.slide}
          itemWidth={250}
          firstItem={1}
          style={{ height: 270, paddingLeft: 58, marginBottom: -10 }}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.3}
          showsHorizontalScrollIndicator={false}
        />
      </Animatable.View>
    );
  }
}
