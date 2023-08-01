import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    function sendLogin(email, password) {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({email: email, password: password}),
        redirect: 'follow',
      };

      fetch(defineVariable.ENDPOINT + `lieur.php`, requestOptions)
        .then(response => response.json())
        .then(result => {
          Alert.alert(
            'Message Login',
            result.message,
            [
              {
                text: 'Cancel',
                // onPress: () => Alert.alert('Cancel Pressed'),
                style: 'cancel',
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  'This alert was dismissed by tapping outside of the alert dialog.',
                ),
            },
          );
        })
        .catch(error => {
          console.error(error);
        });
    }

    const onPressLogin = () => {
      sendLogin(email, password);
    };
    const onPressForgotPassword = () => {
      // Do something about forgot password operation
    };
    const onPressSignUp = () => {
      // Do something about signup operation
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
      },
      inputView: {
        width: '80%',
        backgroundColor: '#3AB4BA',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      inputText: {
        height: 50,
        color: 'white',
      },
      forgotAndSignUpText: {
        color: 'white',
        fontSize: 11,
      },
      loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Login Screen</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={onPressForgotPassword}>
          <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUp}>
          <Text style={styles.forgotAndSignUpText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
