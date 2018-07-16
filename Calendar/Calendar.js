import React,{Component} from 'react' ;
import { StyleSheet, Text, View,TouchableOpacity ,SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Font } from 'expo';

export default class MyCalendar extends Component{

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
                    ?<View style= {styles.calendarbox}>
                       <Calendar
                        style={{
                            height: 350,
                            width: '100%'
                        }}
                            
                        theme= {{
                            textSectionTitleColor: '#fff',
                            monthTextColor: '#00adf5',
                            calendarBackground: '#3e3947',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#fff',
                        }}   

                        markedDates={{
                            '2018-07-02': {selected: true, selectedColor: '#ff7961'}
                          }}                        
                        />
                     </View>
                    : null
                }
            </View>       
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#3e3947'
    },
    calendarbox: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      width: '100%'
    },
    text: {
      fontFamily: 'ElMessiri',
      color: '#8bffdd',
      fontSize: 32
    }
});