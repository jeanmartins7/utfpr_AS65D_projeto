export const validateFields = (txtEmail, setEmailErro) => {
    let validation = true;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (!(regex.test(txtEmail))) {
        setEmailErro('E-mail parece ser inválido');
        validation = false;
    } else {
      setEmailErro('');
    }

    return validation;
  };
  