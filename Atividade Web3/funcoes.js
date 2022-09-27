
function validarCompra(idNomeCliente, idFoneCliente, idEmailCliente) {
    let nome = document.getElementById(idNomeCliente).value;
    let telefone = document.getElementById(idFoneCliente).value;
    let email = document.getElementById(idEmailCliente).value;

    if (nome == "")
        alert("Nome do Cliente não pode estar em branco. Favor preenchê-lo!");
    else if (telefone == "")
        alert("Telefone do Cliente não pode estar em branco. Favor preenchê-lo!");
    else if (email == "")
    alert("Email do Cliente não pode estar em branco. Favor preenchê-lo!");

    else cadastrarCompra(nome, telefone, email);
}
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
function cadastrarCompra(nom, tel, ema) {
    let novaCompra = {nome:nom, telefone:tel, email:ema};

    if (typeof(Storage) !== "undefined") {
        let compras = localStorage.getItem("compras");
        if (compras == null) compras = []; // Nenhuma compra cadastrada
        else compras = JSON.parse(compras);
        compras.push(novaCompra); // Adiciona uma nova compra
        localStorage.setItem("compras",JSON.stringify(compras))
        //alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ nome+"!");
        alert("Sua Compra foi realizada com sucesso!!!")
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}