import React,{Component} from 'react' ;
import { StyleSheet,Alert, Modal,Text, TouchableHighlight,
        View,TouchableOpacity ,SafeAreaView , TextInput  , Image , ScrollView} from 'react-native';
import { Font } from 'expo';
import { Icon, Button } from 'react-native-elements'

import NewItem from '../Cards/newItem'
import DietCard  from "../Cards/dietCard";
import WorkOut  from "../Cards/workoutCard";

export default class Monday extends Component{

    constructor(){
        super();
        this.state = {fontLoaded: false, modalVisible: false, type:null, cards:[],activeType:true};
        this.togglePrompt = this.togglePrompt.bind(this);
        this.addCard = this.addCard.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
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

    togglePrompt(){
        this.state.modalVisible ? this.setState({modalVisible:false}) : this.setState({modalVisible:true,type:'workout',name:null,details:null});
    }

    addCard(){
        this.state.modalVisible ? this.setState({modalVisible:false}) : this.setState({modalVisible:true});
        if(this.state.name!= null)
            this.state.cards.push(
                <NewItem key={this.state.name} type={this.state.type} name={this.state.name} 
                details={this.state.details} status={false} checkStatus={this.updateStatus} />)
        console.log(this.state.cards);
    }

    updateStatus(name){
        console.log("Change status of "+name);
        metacards=this.state.cards.map(card => card.props);
        console.log(metacards);

        for (var i in metacards){
            if(metacards[i].name==name){
                if(metacards[i].status)
                    metacards[i].status=false;
                else{
                    console.log( metacards[i].status)
                    metacards[i].status= true;
                    console.log( metacards[i].status)
                }
            }                
        }
        console.log(metacards);

    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.fontLoaded 
                    ?<View style={styles.card} >
                        <View style={styles.imgContainer} >
                            <Image style={styles.img} source={ require('../images/chest_workout.webp')} />
                            <Text style={styles.day} > Monday </Text>
                            <View style={styles.titleBox} >
                                <Text style={styles.title} > Chest Workout </Text>
                            </View>
                        </View>
                        
                        <View style={styles.todo}>
                            <View style={styles.additem} > 
                                <Icon
                                    name='md-add-circle'
                                    type='ionicon'
                                    color='#03a87c'
                                    onPress={() =>this.togglePrompt()} />
                            </View>

                            <Modal
                                animationType="fade"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => this.togglePrompt()}
                                > 
                                <View style={{flex:1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'#E9D9F2'}}>
                                    <View style={styles.prompt}>

                                        <View style={{flexDirection: 'row'}} >

                                            <Icon
                                            raised
                                            reverse= {this.state.activeType}
                                            name='md-bicycle'
                                            type='ionicon'
                                            color='#8594D6'
                                            size= {25}
                                            onPress={() =>this.setState({type:'workout',activeType:true})} 
                                            />

                                            <Icon
                                            raised
                                            reverse= {!this.state.activeType}
                                            name='md-restaurant'
                                            type='ionicon'
                                            color='#8594D6'
                                            size = {25}
                                            onPress={() =>this.setState({type:'diet',activeType:false})} 
                                            />

                                        </View>

                                        <TextInput
                                        style={{width: 200, height: 50, padding: 10 , marginTop:10, color:'#fff'}}
                                        onChangeText ={(text)=> this.setState({name:text})}
                                        placeholder="Name"
                                        />
                                        <TextInput
                                        style={{width: 200, height: 50 , padding: 10 , marginTop:10, color:'#fff'}}
                                        onChangeText ={(text)=> this.setState({details:text})}
                                        placeholder="Details"
                                        />
                                        <View style={{flexDirection: 'row'}} >
                                            <Button
                                            buttonStyle={{height:35,
                                                width: 100, 
                                                backgroundColor:"#C3614B",
                                                borderColor: "transparent",
                                                borderWidth: 0,
                                                borderRadius: 5,
                                                marginTop: 10}}
                                            onPress={() => this.togglePrompt()}
                                            title="Cancel"
                                            />

                                            <Button
                                            buttonStyle={{height:35, 
                                                width: 100, 
                                                backgroundColor:"#96D581",
                                                borderColor: "transparent",
                                                borderWidth: 0,
                                                borderRadius: 5,
                                                marginTop: 10}}
                                            onPress={() => this.addCard()}
                                            title="Add"
                                            />
                                        </View>
                                    </View>
                                </View>

                            </Modal>

                            <ScrollView showsVerticalScrollIndicator={false} >
                                <DietCard name="First Bite" details="Banana" />
                                {this.state.cards}
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
    },
    additem:{
      position: 'absolute',
      top: -30,
      right: 20
    },
    prompt:{
        backgroundColor: '#2E0F2B',
        height: 275,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});