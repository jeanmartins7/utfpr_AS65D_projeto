export const validateFields = (txtEmail, txtSenha, txtRepetirSenha, setEmailErro, setSenhaErro, setRepetirSenhaErro) => {
    let validation = true;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!(regex.test(txtEmail))) {
      setEmailErro('E-mail inválido');
      validation = false;
    } else {
      setEmailErro('');
    }

    if (txtSenha.trim() === '') {
      setSenhaErro('Preencha a senha');
      validation = false;
    } else {
      setSenhaErro('');
    }

    if (txtRepetirSenha != txtSenha) {
      setRepetirSenhaErro('O campo repetir senha difere da senha');
      validation = false;
    } else {
      setRepetirSenhaErro('');
    }
  
    return validation;
  };
  