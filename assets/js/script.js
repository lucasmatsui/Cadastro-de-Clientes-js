const ClientesAdicionados = [];

const Pessoa = {
  nome:'',
  fone:0,
  idade:0,
  email:'',
  adicionar(e){
    e.preventDefault();
    const nome = formCliente.nome.value;
    const fone = formCliente.fone.value;
    const idade = formCliente.idade.value;
    const email = formCliente.email.value;

    if (!nome) return false;
    if (!fone) return false;
    if (!idade) return false;
    if (!email) return false;

    this.nome = nome;
    this.fone = fone;
    this.idade = idade;
    this.email = email;
    
    ClientesAdicionados.push({nome:nome, fone:fone, idade:idade, email:email});

    document.getElementById("msg").innerHTML = "Adicionado com sucesso!";
    document.getElementById("msg").classList.add("success");
    document.getElementById("msg").style.display = "block";
    formCliente.nome.value = '';
    formCliente.fone.value = '';
    formCliente.idade.value = '';
    formCliente.email.value = '';

    setTimeout(() => {
      document.getElementById("msg").style.display = "none";
      document.getElementById("msg").classList.remove("success");
    }, 1000);

  },

  listar(e) {
    e.preventDefault();
    let tbody = document.getElementById("tbody");

    let list = "";

    if(ClientesAdicionados.length === 0) {
      list +=
      `
        <tr>
          <td colspan="4">Não tem nenhum cadastro no momento!</td>
        </tr>
      `
      tbody.innerHTML = list;
      return false;
    }
    
    ClientesAdicionados.map(item => {
      list +=
      `
        <tr>
          <td>${item.nome}</td>
          <td>${item.fone}</td>
          <td>${item.idade}</td>
          <td>${item.email}</td>
        </tr>
      `
    });
  
    tbody.innerHTML = list;
    
  }

}




