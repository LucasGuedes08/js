
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  SafeAreaProvider,
} from "react-native-safe-area-context";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  ResponsiveProvider,
} from "./utils/responsive";

import { auth } from "./firebase";

// TELAS DO APLICATIVO
import TelaSplash from "./Telas/TelaSplash";
import Onboarding from "./Telas/Onboarding";
import TelaCadastro from "./Telas/TelaCadastro";
import TelaLogin from "./Telas/TelaLogin";
import TelaHome from "./Telas/TelaHome";
import TelaCadastrarDoacao from "./Telas/TelaCadastrarDoacao";

// CORES DO ALIMENTA+
const COLORS = {
  primary: "#006838",
  secondary: "#378B20",
  background: "#FFFCF6",
  orange: "#FF8A25",
  white: "#FFFFFF",
};

const Stack = createNativeStackNavigator();

// TEMA GLOBAL
const tema = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.background,
    card: COLORS.background,
    text: COLORS.primary,
    border: "transparent",
    notification: COLORS.orange,
  },
};

export default function App() {
  // CARREGAMENTO DAS FONTES
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // ESTADO DE AUTENTICAÇÃO
  const [usuario, setUsuario] =
    useState(undefined);

  // CONTROLE DO LOGOUT
  const [loginDireto, setLoginDireto] =
    useState(false);

  const jaAutenticou = useRef(false);

  // OBSERVAR SESSÃO DO FIREBASE
  useEffect(() => {
    const cancelar = onAuthStateChanged(
      auth,

      (usuarioAtual) => {
        if (usuarioAtual) {
          jaAutenticou.current = true;
        } else if (jaAutenticou.current) {
          // APÓS SAIR, IR DIRETAMENTE AO LOGIN
          jaAutenticou.current = false;
          setLoginDireto(true);
        }

        setUsuario(usuarioAtual);
      },

      (erro) => {
        console.error(
          "Erro na autenticação:",
          erro
        );

        setUsuario(null);
      }
    );

    return () => cancelar();
  }, []);

  // TELA DE CARREGAMENTO
  if (
    !fontsLoaded ||
    usuario === undefined
  ) {
    return (
      <SafeAreaProvider>
        <View style={styles.carregando}>
          <StatusBar
            style="dark"
            backgroundColor={COLORS.background}
          />

          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        </View>
      </SafeAreaProvider>
    );
  }

  const autenticado = Boolean(usuario);

  // DEFINIR ROTA INICIAL
  const rotaInicial = autenticado
    ? "Home"
    : loginDireto
    ? "TelaLogin"
    : "Splash";

  return (
    <SafeAreaProvider>
      <ResponsiveProvider>
        <StatusBar
          style="dark"
          backgroundColor={COLORS.background}
        />

        <NavigationContainer theme={tema}>
          <Stack.Navigator
            key={
              autenticado
                ? "autenticado"
                : loginDireto
                ? "login"
                : "entrada"
            }
            initialRouteName={rotaInicial}
            screenOptions={{
              headerShown: false,
              animation: "fade",
              gestureEnabled: true,

              contentStyle: {
                backgroundColor:
                  COLORS.background,
              },
            }}
          >
            {autenticado ? (
              <>
                {/* HOME */}
                <Stack.Screen
                  name="Home"
                  component={TelaHome}
                  options={{
                    gestureEnabled: false,
                  }}
                />

                {/* CADASTRAR ALIMENTOS */}
                <Stack.Screen
                  name="TelaCadastrarDoacao"
                  component={TelaCadastrarDoacao}
                />
              </>
            ) : (
              <>
                {/* SPLASH */}
                <Stack.Screen
                  name="Splash"
                  component={TelaSplash}
                  options={{
                    gestureEnabled: false,
                  }}
                />

                {/* ONBOARDING */}
                <Stack.Screen
                  name="Onboarding"
                  component={Onboarding}
                />

                {/* CADASTRO */}
                <Stack.Screen
                  name="TelaCadastro"
                  component={TelaCadastro}
                />

                {/* LOGIN */}
                <Stack.Screen
                  name="TelaLogin"
                  component={TelaLogin}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ResponsiveProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  carregando: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
