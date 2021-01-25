    function consultaCep(){
        
        var cep = document.getElementById("cep").value;
        var url = "https://viacep.com.br/ws/" + cep + "/json/"; // Concatenando o valor do input digitado com a URL.
        
        $.ajax({
            url: url,
            type: "GET",
            success: function(response){
                console.log(response); // Exibe no console a resposta completa da requisição.
                $("#tituloCep").html("CEP: " + response.cep); // Recebe o CEP digitado e exibe nos resultados abaixo do form.
                $("#logradouro").html(response.logradouro); // Recebe o ID Logradouro e adiciona na página o valor recebido na table.
                $("#bairro").html(response.bairro); // Recebe o ID bairro e adiciona na página o valor recebido na table.
                $("#localidade").html(response.localidade); // Recebe o ID localidade e adiciona na página o valor recebido na table.
                $("#uf").html(response.uf); // Recebe o ID uf e adiciona na página o valor recebido na table.
                $(".principal").show(); // Exibe a DIV principal após retornar uma consulta de CEP.
            }
        })
    }

    $(function(){
        $(".principal").hide(); // Esconde a DIV principal até que seja efetuada uma consulta de CEP.
    });