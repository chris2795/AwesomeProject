import React from 'react-native'
import {View, StyleSheet, Text, Image, Dimension} from 'react-native'

const {width, height} = Dimension.get('window')

const CarouselItem = {{item}} => {
return(
    <View>
        <Image/>
        <View>
            <Text>
                Title
            </Text>
            <Text>
                Sub
            </Text>
        </View>
    </View>
)
}

cosnt styles = StyleSheet.create ({
cardView : {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: }
}

})