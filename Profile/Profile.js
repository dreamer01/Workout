import React,{Component} from 'react' ;
import { StyleSheet, Text, View,TouchableOpacity ,Image, SafeAreaView } from 'react-native';
import { Font } from 'expo';

export default class Profile extends Component{

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
                    ? <View style={styles.profile}>
                        <View style={styles.img} >
                            <Image source={require('../images/user.jpg')} style={{borderRadius: 10,width:'50%', height:'70%'}} /> 
                            <Text style={styles.userName}> James MCcoy </Text>                                                  
                        </View> 
                                                     
                        <View style={styles.content}>
                            <Text style={styles.info} > Weight : 68.1 KGs </Text>
                            <Text style={styles.info} > Height : 169 cm</Text>
                            <Text style={styles.info} > Weight : 68.1 KGs </Text>
                            <Text style={styles.info} > Height : 169 cm</Text>
                            <Text style={styles.info} > Weight : 68.1 KGs </Text>
                            <Text style={styles.info} > Height : 169 cm</Text>
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
    profile:{
        flex:1,
        marginTop: 20,
        width:'100%',
        height: '100%'
    },
    img:{
        alignItems: 'center',
        justifyContent:'center',
        height: '40%'
    },
    content:{
        flex:1,
        width: '100%',
        height: '60%',
        padding: 5,
        borderTopWidth: 1,
        borderColor: '#d6d7da',
        //flexDirection : 'row'
    },
    userName: {
      fontFamily: 'Raleway',
      color: '#8bffdd',
      fontSize: 32
    },
    info:{
        fontFamily: 'Quicksand',
        color: '#96f9ff',
        fontSize: 22
    }
});