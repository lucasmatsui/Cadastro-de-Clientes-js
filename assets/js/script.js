const ClientesAdicionados = [];


adicionar = (e) => {
  e.preventDefault();
  const nome = formCliente.nome.value;
  const fone = formCliente.fone.value;
  const idade = formCliente.idade.value;
  const email = formCliente.email.value;

  if (!nome) return false;
  if (!fone) return false;
  if (!idade) return false;
  if (!email) return false;
  
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

}

listar = (e) => {
  e.preventDefault();
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if(ClientesAdicionados.length === 0) {
    tbody.innerHTML +=
    `
      <tr>
        <td colspan="4" class="td">Não tem nenhum cadastro no momento!</td>
      </tr>
    `;
    return false;
  }
  
  ClientesAdicionados.map(item => {
    tbody.innerHTML +=
    `
      <tr>
        <td class="td">${item.nome}</td>
        <td class="td">${item.fone}</td>
        <td class="td">${item.idade}</td>
        <td class="td">${item.email}</td>
      </tr>
    `;
  });  
}

buscar = () =>{
  let tbody = document.getElementById("tbody");
  let busca = document.getElementById("campoBusca").value;
  tbody.innerHTML = "";
  
  let acharCliente = ClientesAdicionados.filter(cliente => cliente.nome === busca)
  
  if(acharCliente.length !== 0) {
    
    acharCliente.map(item => {      
      tbody.innerHTML +=
      `
        <tr>
          <td>${item.nome}</td>
          <td>${item.fone}</td>
          <td>${item.idade}</td>
          <td>${item.email}</td>
        </tr>
      `;
    });
    
  } else {

    tbody.innerHTML =
    `
      <tr>
        <td colspan="4" class="td">Não foi encontrado ninguem com esse nome!</td>
      </tr>
    `;
   
  }   
}

font = (caracteristica) => {
  const listar = document.querySelector(".listar");
  const adicionar = document.querySelector(".adicionar");
  const th = document.querySelectorAll(".th");
  const td = document.querySelectorAll(".td");
  const h1 = document.querySelector("#cadastroClienteText");
  const input = document.querySelectorAll(".input");

  

  let tamanhoFontButton = parseInt(window.getComputedStyle(listar).fontSize);
  let tamanhoFontTable = parseInt(window.getComputedStyle(th[0]).fontSize);
  let tamanhoFontH1 = parseInt(window.getComputedStyle(h1).fontSize);
  let tamanhoFontInput = parseInt(window.getComputedStyle(input[0]).fontSize);

  console.log(tamanhoFontInput);
  

  //console.log(tamanhoFontTable);
  
  if(caracteristica === 'aumentar' && tamanhoFontButton<= 20) {
    listar.style.fontSize = (tamanhoFontButton + 2) + "px";
    adicionar.style.fontSize = (tamanhoFontButton + 2) + "px";
    h1.style.fontSize = (tamanhoFontH1 + 2) + "px";
    
    th.forEach(th => {
      th.style.fontSize = (tamanhoFontTable + 2) + "px";
    })
    td.forEach(td => {
      td.style.fontSize = (tamanhoFontTable + 2) + "px";
    })
    input.forEach(input => {
      input.style.fontSize = (tamanhoFontInput + 2) + "px";
    })


  }

  if(caracteristica === 'diminuir' && tamanhoFontButton > 13) {  
    listar.style.fontSize = (tamanhoFontButton - 2) + "px";
    adicionar.style.fontSize = (tamanhoFontButton - 2) + "px";
    h1.style.fontSize = (tamanhoFontH1 - 2) + "px";

    th.forEach(th => {
      th.style.fontSize = (tamanhoFontTable - 2) + "px";
    })
    td.forEach(td => {
      td.style.fontSize = (tamanhoFontTable - 2) + "px";
    })
    input.forEach(input => {
      input.style.fontSize = (tamanhoFontInput - 2) + "px";
    })

  }

  if(caracteristica === 'normal') {
    listar.style.fontSize = 13 + "px";  
    adicionar.style.fontSize = 13 + "px";  
    h1.style.fontSize = 25 + "px";

    th.forEach(th => {
      th.style.fontSize = 16 + "px";
    })
    td.forEach(td => {
      td.style.fontSize = 16 + "px";
    })
    input.forEach(input => {
      input.style.fontSize = 13 + "px";
    })

  } 

}





