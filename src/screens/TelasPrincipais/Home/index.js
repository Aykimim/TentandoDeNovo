import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import Svg, { Circle, Path, Line } from "react-native-svg";
import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";

import {
  ButtonTextTitulo,
  ButtonTextSubTitulo,
  ButtonCursoEsquerda,
  ButtonCursoDireita,
  Container,
  ButtonText,
  IconImage,
  ContainerSeta,
  ScrollViewLista,
  ContainerPrimeiro,
  ButtonCursoFim,
  ButtonCursoComeco,
  Retangulo,
  ButtonCursoMeio,
  Esquerdacima,
  Esquerdabaixo,
  Direitacima,
  Direitabaixo,
  ContainerTudo,
  ContainerFilho,
  Meiocubo,
  CheckIcon,
  LineWrapper,
  ScrollViewTudo,
  ButtoInvisivel,
  ButtonCurso,
  ButtonTextTopo,
  ButtonModal
} from "./styles";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
//components
import ScreenNameHeader from "../../../Components/ScreenNameHeader";

export default function App() {
  const navigation = useNavigation();

  function Material() {
    navigation.navigate("CursoDetalhado");
  }

  const Stack = createStackNavigator();
  const [modalVisible, setModalVisible] = useState(false);


  const botaoteste = () => {
    alert("Teste");
  };

  const StyledSvg = styled(Svg)``;

  // Adicione funções específicas para cada botão

  const [pathVisible, setPathVisible] = useState(false);

  function MyCustomLeftComponent() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="heart" size={20} color={colors.textoBranco} />
        <ButtonText style={{ marginLeft: 5 }}>5</ButtonText>
      </View>
    );
  }

  function MyCustomCenterComponent() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="dollar" size={20} color={colors.textoBranco} />
        <ButtonText style={{ marginLeft: 5 }}>100</ButtonText>
      </View>
    );
  }

  function MyCustomRightComponent() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="calendar" size={20} color={colors.textoBranco} />
        <ButtonText style={{ marginLeft: 5 }}>7 dias</ButtonText>
      </View>
    );
  }

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const AnimatedText = Animated.createAnimatedComponent(TextInput);

  const radius = 34;
  const circumference = radius * Math.PI * 1;
  const duration = 3000;

  const SvgCircle = () => {
    const strokeOffset = useSharedValue(circumference);

    const percentage = useDerivedValue(() => {
      const number =
        ((circumference - strokeOffset.value) / circumference) * 75;

      return withTiming(number, { duration: duration });
    });

    // const strokeColor = useDerivedValue(() => {
    //   return interpolateColor(
    //     percentage.value,
    //     [0, 50, 100],
    //     ["rgb(246, 79, 89)", "rgb(246, 246, 89)", "rgb(79, 246, 89)"]
    //   );
    // });

    const animatedCircleProps = useAnimatedProps(() => {
      return {
        strokeDashoffset: withTiming(strokeOffset.value, {
          duration: duration
        })
      };
    });

    const animatedTextProps = useAnimatedProps(() => {
      return {
        text: `${Math.round(percentage.value)}%`
      };
    });

    useEffect(() => {
      strokeOffset.value = 0;
    }, []);

    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <AnimatedText
          style={{
            color: colors.barraDeProgressoRedondaTexto,
            fontSize: 20,
            fontWeight: "bold",
            position: "absolute"
          }}
          animatedProps={animatedTextProps}
        />
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <AnimatedCircle
            animatedProps={animatedCircleProps}
            cx="50"
            cy="50"
            r="45"
            stroke={colors.barraDeProgressoRedonda}
            strokeWidth="10"
            fill="rgba(255,255,255,0.0)"
            strokeDasharray={`${radius * Math.PI * 2}`}
          />
        </Svg>
      </View>
    );
  };

  return (
    <ContainerTudo>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ButtonTextTitulo>Empreendedorismo</ButtonTextTitulo>
              <ButtonTextSubTitulo>
                Estratégias Inovadoras para Empreendedorismo Sustentável
              </ButtonTextSubTitulo>
              <ButtonModal
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Material(); // Chama a função Material
                  setModalVisible(!modalVisible); // Fecha o modal
                }}
              >
                <Text style={styles.textStyle}>COMEÇAR A APRENDER</Text>
              </ButtonModal>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <ContainerFilho>
        <ScrollViewTudo>
          <ButtonCursoComeco underlayColor={colors.primaria}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ButtonTextTopo>Empreendedorismo</ButtonTextTopo>

              <SvgCircle />
            </View>
          </ButtonCursoComeco>

          <Meiocubo>
            <ButtonCursoMeio
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              // onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>
                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoMeio>
          </Meiocubo>

          <Esquerdacima>
            <Svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <Path
                d="M0 2H70C75.5228 2 80 6.47715 80 12V15.8967V82"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Esquerdacima>

          <Meiocubo>
            <ButtonCursoDireita
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>
                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoDireita>
          </Meiocubo>

          <Esquerdabaixo>
            <Svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <Path
                d="M80 0V70C80 75.5228 75.5228 80 70 80H66.1033H-2.74181e-06"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Esquerdabaixo>

          <Meiocubo>
            <ButtonCursoMeio
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoMeio>
          </Meiocubo>

          <Direitacima>
            <Svg width="82" height="81" viewBox="0 0 82 81" fill="none">
              <Path
                d="M1.34466 80.9996L1.57462 10.9999C1.59277 5.47713 6.0846 1.01471 11.6074 1.03285L15.5041 1.04565L81.6071 1.26282"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Direitacima>

          <Meiocubo>
            <ButtonCursoEsquerda
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>
                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoEsquerda>
          </Meiocubo>
          <Direitabaixo>
            <Svg width="81" height="81" viewBox="0 0 81 81" fill="none">
              <Path
                d="M80.7529 80.2614L10.7533 80.0314C5.23044 80.0133 0.76802 75.5215 0.786164 69.9987L0.798966 66.102L1.01613 -0.000978579"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Direitabaixo>

          <Meiocubo>
            <ButtonCursoMeio
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoMeio>
          </Meiocubo>

          <Esquerdacima>
            <Svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <Path
                d="M0 2H70C75.5228 2 80 6.47715 80 12V15.8967V82"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Esquerdacima>

          <Meiocubo>
            <ButtonCursoDireita
              style={{ backgroundColor: colors.tarefaFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21.0001 4.89999L9.00012 16.9L3.00012 10.9L4.40012 9.5L9.00012 13.1L19.6001 2.49999L21.0001 4.89999Z"
                    fill={colors.icone}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoDireita>
          </Meiocubo>

          <Esquerdabaixo>
            <Svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <Path
                d="M80 0V70C80 75.5228 75.5228 80 70 80H66.1033H-2.74181e-06"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Esquerdabaixo>
          <Meiocubo>
            <ButtonCursoMeio
              style={{ backgroundColor: colors.tarefaNaoFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setModalVisible(true)}
              // onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width="31" height="34" viewBox="0 0 21 24" fill="none">
                  <Path
                    d="M20.0037 10.2688C21.3373 11.0382 21.3378 12.9627 20.0047 13.7329L3.50738 23.2638C2.17427 24.034 0.507329 23.0722 0.506897 21.5326L0.50154 2.48004C0.501107 0.940443 2.1675 -0.022274 3.50105 0.747152L20.0037 10.2688Z"
                    fill="black"
                  />
                </Svg>

                {/* {pathVisible && ( */}
                <CheckIcon
                  width="115"
                  height="114"
                  viewBox="0 0 114 114"
                  fill="none"
                >
                  <Path
                    d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                    stroke={colors.primaria}
                    strokeWidth={5}
                  />
                </CheckIcon>
                {/* )} */}
              </View>
            </ButtonCursoMeio>
          </Meiocubo>
          <Direitacima>
            <Svg width="82" height="81" viewBox="0 0 82 81" fill="none">
              <Path
                d="M1.34466 80.9996L1.57462 10.9999C1.59277 5.47713 6.0846 1.01471 11.6074 1.03285L15.5041 1.04565L81.6071 1.26282"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Direitacima>

          <Meiocubo>
            <ButtonCursoEsquerda
              style={{ backgroundColor: colors.tarefaNaoFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={82} height={82} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 2C8.68629 2 6 4.68629 6 8V12H5V20H19V12H18V8C18 4.68629 15.3137 2 12 2ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V12H8V8ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8V10H10V8Z"
                    fill={colors.trilha}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoEsquerda>
          </Meiocubo>
          <Direitabaixo>
            <Svg width="81" height="81" viewBox="0 0 81 81" fill="none">
              <Path
                d="M80.7529 80.2614L10.7533 80.0314C5.23044 80.0133 0.76802 75.5215 0.786164 69.9987L0.798966 66.102L1.01613 -0.000978579"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Direitabaixo>

          <Meiocubo>
            <ButtonCursoMeio
              style={{ backgroundColor: colors.tarefaNaoFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={82} height={82} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 2C8.68629 2 6 4.68629 6 8V12H5V20H19V12H18V8C18 4.68629 15.3137 2 12 2ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V12H8V8ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8V10H10V8Z"
                    fill={colors.trilha}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoMeio>
          </Meiocubo>
          <Esquerdacima>
            <Svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <Path
                d="M0 2H70C75.5228 2 80 6.47715 80 12V15.8967V82"
                stroke={colors.trilha}
                strokeWidth={5}
              />
            </Svg>
          </Esquerdacima>

          <Meiocubo>
            <ButtonCursoDireita
              style={{ backgroundColor: colors.tarefaNaoFeita }}
              underlayColor={colors.tarefaFeita}
              onPress={() => setPathVisible(!pathVisible)}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Svg width={82} height={82} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 2C8.68629 2 6 4.68629 6 8V12H5V20H19V12H18V8C18 4.68629 15.3137 2 12 2ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V12H8V8ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8V10H10V8Z"
                    fill={colors.trilha}
                  />
                </Svg>

                {/* {pathVisible && (
                  <CheckIcon
                    width="115"
                    height="114"
                    viewBox="0 0 114 114"
                    fill="none"
                  >
                    <Path
                      d="M87 2H27C13.1929 2 2 13.1929 2 27V87C2 100.807 13.1929 112 27 112H87C100.807 112 112 100.807 112 87V27C112 13.1929 100.807 2 87 2Z"
                      stroke={colors.secundaria}
                      strokeWidth={5}
                    />
                  </CheckIcon>
                )} */}
              </View>
            </ButtonCursoDireita>
          </Meiocubo>

          <ButtonCursoFim underlayColor={colors.primaria}>
            <View
              style={{ alignItems: "center", justifyContent: "center" }}
            ></View>
          </ButtonCursoFim>
          <ButtonCursoFim underlayColor={colors.primaria}>
            <View
              style={{ alignItems: "center", justifyContent: "center" }}
            ></View>
          </ButtonCursoFim>
        </ScrollViewTudo>
      </ContainerFilho>
    </ContainerTudo>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.fundo,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonClose: {
    backgroundColor: colors.primaria
  },
  textStyle: {
    color: colors.textoBranco,
    fontWeight: "bold",
    textAlign: "center"
  }
});
