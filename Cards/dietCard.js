import React, {Component} from 'react'
import { View, Text , Image, StyleSheet, CheckBox} from 'react-native'
import { Font } from 'expo';

export default class DietCard extends Component {
    constructor(props) {
        super(props)
		this.state= {fontLoaded: false,name: this.props.name, details: this.props.details, status:false, bgColor:'#6c93d1'}
		this.updateStatus = this.updateStatus.bind(this)
		}
		
		async componentDidMount() {
			await Font.loadAsync({
				'Eczar': require('../assets/fonts/Eczar/Eczar-Medium.ttf'),
				'Fredericka the Great' : require('../assets/fonts/Fredericka_the_Great/FrederickatheGreat-Regular.ttf'),
				'Raleway': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
				'Lora': require('../assets/fonts/Lora/Lora-Regular.ttf'),
				'ElMessiri': require('../assets/fonts/El_Messiri/ElMessiri-Regular.ttf'),
				'Quicksand': require('../assets/fonts/Quicksand/Quicksand-Medium.ttf'),
				'Kreon': require('../assets/fonts/Kreon/Kreon-Regular.ttf'),
				'JosefinSlab': require('../assets/fonts/Josefin_Slab/JosefinSlab-Regular.ttf')
			});

			this.setState({ fontLoaded: true });
		}

		updateStatus(){
			if( this.state.status){
				this.setState({status: false});
				this.setState({bgColor: '#6c93d1'});
			}else{
				this.setState({status: true});
				this.setState({bgColor: '#bfffb3'});
			}

		}

    render(){
        return(
			<View>
			{ this.state.fontLoaded
            ?<View style={[styles.container, {backgroundColor : this.state.bgColor }]} > 
                <View style={styles.icon} >
					<Image style={{width:40, height:40}} source={require('../images/fruits.png')} /> 
				</View>
                <View style={styles.content} >
                    <Text style={styles.name}> {this.state.name} </Text>
                    <Text style={styles.details}> {this.state.details} </Text>
                </View>
				<View style={styles.status} >
					<CheckBox 
						value={this.state.status}
						onValueChange = {this.updateStatus} />
                </View>				
            </View>
			:null
			}
			</View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
			//flex:1,
			flexDirection: 'row',
			height: 50,
			marginBottom : 10,
			borderRadius: 4
		},
		icon:{
			flex: 2,
			alignItems: 'center',
			justifyContent: 'center',
			borderRightWidth: 2,
			borderColor: '#435984'
		},
		content:{
			flex: 8,
			padding: 3

		},
		name:{
			fontFamily: 'Kreon',
			fontSize: 14
		},
		details:{
			fontFamily: 'Kreon',
			fontSize: 12
		},
		status:{
			justifyContent: 'center',
			marginRight: 20
		}
})