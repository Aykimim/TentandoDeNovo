import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity, View, Image } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";
import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso,
  SendButtontext,
  IconImage,
  ButtonCursoPressed,
  ButtonTextPressed,
  ButtonTextSubTitulo,
  ButtonTextTitulo,
  ButtonTextParagrafo,
  ContainerTexto,
  IconTopo
} from "./styles";

function MyCustomLeftComponent() {
  const navigation = useNavigation();

  function navigateToVoltar() {
    // navigation.navigate("Cursos");
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }] //,screen
    });
  }

  return (
    <ButtonText onPress={navigateToVoltar}>
      <Icon name="arrow-left" size={20} color={colors.icone} />
    </ButtonText>
  );
}

function MyCustomCenterComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ButtonText>Material</ButtonText>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();

  function navigateToTelaVideo() {
    navigation.navigate("TelaVideo");
  }

  function navigateToPerguntasUm() {
    navigation.navigate("PerguntaUm");
  }
  function navigateToPerguntasDois() {
    navigation.navigate("PerguntaDois");
  }
  function navigateToPerguntasTres() {
    navigation.navigate("PerguntaTres");
  }

  return (
    <Container>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <ScrollView>
        <IconTopo>
          <Icon
            style={{ width: "100px", height: "100px" }}
            name="briefcase"
            size={100}
            color={colors.icone}
          />
        </IconTopo>
        <ContainerTexto>
          <ButtonTextTitulo>
            Estratégias Inovadoras para Empreendedorismo Sustentável
          </ButtonTextTitulo>
          <ButtonTextSubTitulo>
            O empreendedorismo sustentável é uma abordagem que visa não apenas o
            sucesso financeiro a curto prazo, mas também a criação de valor a
            longo prazo para a sociedade e o meio ambiente. Implementar
            estratégias inovadoras é essencial para empreendedores que buscam
            alinhar seus negócios com práticas sustentáveis. Aqui estão algumas
            estratégias inovadoras que podem impulsionar o empreendedorismo
            sustentável: {"\n"}
            <ButtonTextParagrafo>Economia Circular:</ButtonTextParagrafo> A
            transição de um modelo linear para uma economia circular é uma
            estratégia inovadora. Os empreendedores podem projetar produtos com
            ciclos de vida mais longos, promover a reutilização e reciclagem,
            reduzindo assim o desperdício e minimizando o impacto ambiental.{" "}
            {"\n"}
            <ButtonTextParagrafo>Tecnologias Verdes:</ButtonTextParagrafo>{" "}
            Incorporar tecnologias verdes e ecoeficientes nos processos de
            produção é crucial. Empreendedores podem adotar fontes de energia
            renovável, otimizar o consumo de recursos naturais e investir em
            inovações tecnológicas que reduzam a pegada de carbono. {"\n"}
            <ButtonTextParagrafo>
              Modelos de Negócios Sustentáveis:
            </ButtonTextParagrafo>{" "}
            {"\n"}
            Desenvolver modelos de negócios que integrem a sustentabilidade como
            um componente-chave é uma abordagem inovadora. Isso pode incluir
            parcerias estratégicas com organizações ambientais, compensação de
            emissões de carbono e a oferta de produtos/serviços que promovam
            práticas sustentáveis. {"\n"}
            <ButtonTextParagrafo>Inovação Social:</ButtonTextParagrafo> A
            inovação social é fundamental para o empreendedorismo sustentável.
            Criar soluções que abordem desafios sociais e ambientais pode não
            apenas impactar positivamente as comunidades, mas também agregar
            valor à marca e atrair consumidores comprometidos com a
            responsabilidade social.{"\n"}
            <ButtonTextParagrafo>
              Educação e Conscientização:
            </ButtonTextParagrafo>{" "}
            Empreendedores podem adotar estratégias inovadoras para educar seus
            clientes sobre práticas sustentáveis. Isso inclui campanhas de
            conscientização, programas educacionais e a comunicação transparente
            sobre as práticas sustentáveis adotadas pela empresa.
          </ButtonTextSubTitulo>
        </ContainerTexto>
        <ButtonCurso
          key="1"
          onPress={() => navigateToTelaVideo()}
          underlayColor={colors.secundaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Video Aula</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso
          key="2"
          onPress={() => navigateToPerguntasUm()}
          underlayColor={colors.secundaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Perguntas</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso
          key="3"
          onPress={() => navigateToVoltar()}
          underlayColor={colors.secundaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Avançado - pago</ButtonText>
          </View>
        </ButtonCurso>
      </ScrollView>
    </Container>
  );
}
