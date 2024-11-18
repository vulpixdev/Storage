function abrirModal(){
    const modal = document.getElementById("cadastro")

    modal.style.display = "block"
}

function enviarFormulario() {
    const form = document.getElementById('formCadastro');

    const dados = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        cpf: form.cpf.value,
        senha: form.senha.value
    };

    localStorage.setItem('dadosFormulario', JSON.stringify(dados))

    alert('Seu cadastro foi realizado!')
    return true;
}

window.onload = function() {
    const dados = JSON.parse(localStorage.getItem('dadosFormulario'));

    if (dados) {
        document.getElementById('exibeNome').textContent = dados.nome
        document.getElementById('exibeEmail').textContent = dados.nome
        document.getElementById('exibeCpf').textContent = dados.cpf
        document.getElementById('exibeTelefone').textContent = dados.telefone
        document.getElementById('exibeSenha').textContent = dados.senha
    }
}

function mascaraCpf() {
    var cpf_formatado = document.getElementById("cpf").value;
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3]
        }
    }
    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7]
        }
    }
    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }
}

function mascaraTelefone() {
    var tel_formatado = document.getElementById("telefone").value;
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0]
        }
    }
    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }
    if (tel_formatado[4] != " ") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4]
        }
    }
    if (tel_formatado[6] != " ") {
        if (tel_formatado[6] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 6) + " " + tel_formatado[6]
        }
    }
    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
}