import React, { Component } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'
import { Icon, Button } from 'react-native-elements'

export default class AddPrompt extends Component {
    constructor(props){
        super(props)
        this.state={activeType:true ,type:'workout' }
        this.returnItem= this.returnItem.bind(this);
    }

    returnItem(){
        let itemObj = {
            type: this.state.type,
            name: this.state.name,
            details: this.state.details,
            status: false
        }
        this.props.add(itemObj);
    }



  render() {
    return (
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
                onPress={() => this.props.close()}
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
                onPress={() => this.returnItem()}
                title="Add"
                />
            </View>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    prompt:{
        backgroundColor: '#2E0F2B',
        height: 275,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})