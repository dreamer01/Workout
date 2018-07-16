import React,{Component} from 'react' ;
import { StyleSheet, Text, View,TouchableOpacity ,SafeAreaView , Image , ScrollView} from 'react-native';
import { Font } from 'expo';
import DietCard  from "../Cards/dietCard";
import WorkOut  from "../Cards/workoutCard";
import Monday from '../Days/Monday'
import Tuesday from '../Days/Tuesday'
import Wednesday from '../Days/Wednesday'
import Thursday from '../Days/Thursday'
import Friday from '../Days/Friday'
import Saturday from '../Days/Saturday'


export default class Planner extends Component{

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
                    ?<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                        <Monday/>
                        <Tuesday/>
                        <Wednesday/>
                        <Thursday/>
                        <Friday/>
                        <Saturday/>
                     </ScrollView>
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
    }
});