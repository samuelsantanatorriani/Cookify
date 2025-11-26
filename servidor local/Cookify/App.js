import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


// -----------------------------------------------------
// LOGIN
// -----------------------------------------------------
function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [erro, setErro] = useState("");

  function login() {
    if (!user || !pass) {
      setErro("Preencha todos os campos!");
      return;
    }
    if (user === "cook" && pass === "123") {
      setErro("");
      navigation.replace("Home");
    } else {
      setErro("Usuário ou senha incorretos!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🍳 Cookify</Text>
      <Text style={styles.subtitle}>Gerencie e descubra receitas!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        placeholderTextColor="#999"
      />

      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


// -----------------------------------------------------
// HOME (LISTA)
// -----------------------------------------------------
function HomeScreen({ navigation }) {
  const receitas = [
    { id: "1", nome: "Bolo de Cenoura", tempo: "45 min" },
    { id: "2", nome: "Lasanha Caseira", tempo: "1h 10 min" },
    { id: "3", nome: "Coxinha Crocante", tempo: "50 min" },
    { id: "4", nome: "Brigadeiro Gourmet", tempo: "20 min" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📔 Receitas</Text>

      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes", { receita: item })}
          >
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemTime}>⏱ {item.tempo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


// -----------------------------------------------------
// DETALHES
// -----------------------------------------------------
function DetalhesScreen({ route, navigation }) {
  const { receita } = route.params;
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🍽 Detalhes</Text>

      <Text style={styles.detailTitle}>{receita.nome}</Text>
      <Text style={styles.detailText}>Tempo de preparo: {receita.tempo}</Text>

      <Text style={styles.likeText}>Likes: {likes}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => setLikes(likes + 1)}>
        <Text style={styles.btnText}>Curtir ❤️</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, styles.btnSecondary]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


// -----------------------------------------------------
// NAVEGAÇÃO + APP
// -----------------------------------------------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// -----------------------------------------------------
// ESTILOS
// -----------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8ED",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E67328",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  errorText: {
    color: "#d32f2f",
    marginTop: 10,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#E67328",
    padding: 12,
    marginTop: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  btnSecondary: {
    backgroundColor: "#999",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f0a470",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemTime: {
    marginTop: 5,
    color: "#555",
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  likeText: {
    fontSize: 20,
    marginBottom: 15,
  },
});