import React,{Component} from 'react' ;
import { StyleSheet, Text, View,TouchableOpacity ,SafeAreaView , Image , ScrollView} from 'react-native';
import { Font } from 'expo';
import DietCard  from "../Cards/dietCard";
import WorkOut  from "../Cards/workoutCard";

export default class Tuesday extends Component{

    constructor(){
        super();
        this.state = {fontLoaded: false};
    }

    async componentDidMount() {
        await Font.loadAsync({
          'Eczar': require('../assets/fonts/Eczar/Eczar-Medium.ttf'),
          'Fredericka the Great' : require('../assets/fonts/Fredericka_the_Great/FrederickatheGreat-Regular.ttf'),
          'Raleway': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
          'Lora': require('../assets/fonts/Lora/Lora-Regular.ttf'),
          'ElMessiri': require('../assets/fonts/El_Messiri/ElMessiri-Regular.ttf'),
          'Quicksand': require('../assets/fonts/Quicksand/Quicksand-Medium.ttf')
        });

        this.setState({ fontLoaded: true });
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded 
                    ?<View style={styles.card} >
                        <View style={styles.imgContainer} >
                            <Image style={styles.img} source={ require('../images/triceps-workout.jpg')} />
                            <Text style={styles.day} > Tuesday </Text>
                            <View style={styles.titleBox} >
                                <Text style={styles.title} > Triceps Workout </Text>
                            </View>
                        </View>
                        
                        <View style={styles.todo}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <DietCard name="First Bite" details="Banana" />
                            <WorkOut name="DB Skull Crusher" details="5-5-5" />
                            <WorkOut name="Press Down" details="20-20-20" />
                            <WorkOut name="DB Overhead Extension" details="5-5-5" />
                            <WorkOut name="Reverse Dips" details="15-15-15" />
                        </ScrollView>
                        </View>
                        
                     </View>
                    : null
                }
            </View>       
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3e3947'
    },
    card :{
        padding: 10,
        marginTop: 20,
        width: 360,
        height: 700
    },
    imgContainer: {
      height: '35%'
    },
    day: {
      fontFamily: 'Quicksand',
      color: '#8bffdd',
      fontSize: 20,
      position: 'absolute', 
      top:10, 
      left: 10
    },
    img:{
      width: '100%',
      height: '80%',
      borderRadius: 3,
    },
    titleBox:{
      backgroundColor: '#696372',
      width:'70%',
      position: 'absolute',
      left: 10,
      top: 165,
      borderRadius: 4,
      opacity: 0.9
    },
    title: {
      fontFamily: 'Quicksand',
      color: '#fff',
      fontSize: 22,
      textAlign: 'left',
      opacity: 1.0     
    },
    todo:{
      height: '47%',
      padding: 10
    }

});