
export const validateFields = (txtEmail, txtSenha,setEmailErro, setSenhaErro, setErro) => {
    let validation = true;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (txtSenha.trim() === '') {
      setSenhaErro('Preencha a senha');
      validation = false;
    } else {
      setSenhaErro('');
    }

    if (!(regex.test(txtEmail))) {
        setErro('E-mail e/ou senha inválidos');
        validation = false;
    } else {
      setErro('');
    }

    return validation;
  };
  