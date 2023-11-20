import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
 import * as Progress from 'react-native-progress';

const HeaderPerfil = ({ username, source, onSettingsPress }) => {
  const navigation = useNavigation(); // Mova useNavigation para dentro do componente


function navigateConfig() {
  navigation.navigate("Configpage");
}

  
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
           <Image source={source} style={styles.perfil}/>
        </View>
        <View style={styles.row2}>
           <Text style={styles.userName}>{'Player'}</Text>
           <Text style={styles.userName}>{'Nível 60'}</Text>
           <Progress.Bar progress={0.3} width={200} />
     
          
          
           {/* <ProgressBarAndroid
              styleAttr="Horizontal" // Estilo da barra de progresso (Horizontal é o padrão)
              indeterminate={false}  // Define se é indeterminada ou não (false para determinada)
              progress={0.6}        // Progresso atual (0.6 = 60%)
              style={{ width: 100, height: 25}}
          /> */}
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
        padding: 16,
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
        margin: 10,
      },
      perfil: {
          width: 100, 
          height: 100, 
          borderRadius: 50, 
          borderWidth: 4, 
          borderColor: 'white'
      },
      userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
      },
      row3:{
        position: 'absolute',
        top: 40, // Ajuste essa altura conforme necessário
        right: 20,
      },
      
  });

 
  export default HeaderPerfil; 
