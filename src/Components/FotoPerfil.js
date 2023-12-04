import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
 import * as Progress from 'react-native-progress';

const HeaderPerfil = ({ username, source, onSettingsPress }) => {
  const navigation = useNavigation(); // Mova useNavigation para dentro do componente

  // placeholder
  const playerLevel = 60;
  const progressionLevel = "30%";

function navigateConfig() {
  navigation.navigate("Configpage");
}

    return (
      <View style={styles.container}>
        <View style={styles.row1}>
           <Image source={source} style={styles.perfil}/>
        </View>
        <View style={styles.row2}>
           <Text style={styles.userName}>{'Fulano'}</Text>
           <Text style={styles.userName}>{'Nível: ' + playerLevel}</Text>
           <Progress.Bar progress={0.3} width={100} color={'white'} />
           <Text style={styles.userName}>{progressionLevel}</Text>
        </View>
        <View style={styles.row3}>
            <TouchableOpacity onPress={navigateConfig}>
                <Icon name="cog" size={35} color="white"></Icon>
            </TouchableOpacity>
        </View>
        <View style = {styles.separate}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        padding: 10,
        borderBottomWidth: 3,
        borderColor: 'orange',
        height: 150,
        backgroundColor: '#303030',
      },
      row1:{
        alignItems: 'left',
        margin: 10,
        marginTop: 10,
      },
      row2:{
        flexDirection: 'column',
        alignItems: 'left',
        textAlign: 'left',
        padding: 10,
        paddingLeft: 15
      },
      perfil: {
          width: 100, 
          height: 100, 
          borderRadius: 50, 
          borderWidth: 2, 
          borderColor: 'white'
      },
      userName: {
        fontSize: 18,
        justifyContent: 'space-evenly',
        color: 'white',
      },
      row3:{
        position: 'absolute',
        top: 10, // Ajuste essa altura conforme necessário
        right: 9
      },
      
  });

 
  export default HeaderPerfil; 
