import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const Custumizavel = () => {
    alert("Voltar");
  };

function MyCustomLeftComponent() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={Custumizavel}>
          <Icon name="arrow-left" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }

  function MyCustomCenterComponent({headerName}) {
    return (
      // Personalize o componente de acordo com suas necessidades
      <Text style = {styles.screenTitle}
      >{headerName}</Text>
    );
  }
  
  function MyCustomRightComponent() {
    return (
      // Personalize o componente de acordo com suas necessidades
      <Text></Text>
    );
    }

    const ScreenNameHeader = ({headerName}) => {
      return (
        <View>
            <Header backgroundColor="#E16539" 
                leftComponent={<MyCustomLeftComponent />}
                centerComponent={<MyCustomCenterComponent headerName={headerName} />}
                rightComponent={<MyCustomRightComponent />}
                />
        </View>
      );
    }

    const styles = StyleSheet.create({
        screenTitle:{
            fontSize: 24,
            fontFamily:'Roboto',
            fontWeight: 'bold',
            color: '#dff' 
        }            
    })

    export default ScreenNameHeader;
    //fim



    //lógica antiga
    // import { Header } from "react-native-elements";
    // import Icon from "react-native-vector-icons/FontAwesome";

    // const Custumizavel = () => {
    //   alert("Acho que nao Presisa desse botao");
    // };

    // function MyCustomLeftComponent() {
    //   return (
    //     <View style={{ flexDirection: "row", alignItems: "center" }}>
    //       <TouchableOpacity onPress={Custumizavel}>
    //         <Icon name="star" size={40} color="#000" />
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
    
    
    // function MyCustomCenterComponent() {
    //   return (
    //     // Personalize o componente de acordo com suas necessidades
    //     <ButtonText>Cursos</ButtonText>
    //   );
    // }
    
    // function MyCustomRightComponent() {
    //   return (
    //     // Personalize o componente de acordo com suas necessidades
    //     <ButtonText></ButtonText>
    //   );
    // }

    // return (
    //   <View>
    //     <Header backgroundColor="#E16539" 
    //     leftComponent={<MyCustomLeftComponent />}
    //     centerComponent={<MyCustomCenterComponent />}
    //     rightComponent={<MyCustomRightComponent />}
    //     />
    //   <View/>
    //   );