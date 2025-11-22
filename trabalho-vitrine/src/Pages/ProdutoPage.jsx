import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import produtos from '../data/produtos';
import '../Components/ProdutoPage.css';  

function ProdutoPage() {
  const { id } = useParams();
  const produto = produtos.find(p => p.id === Number(id));

  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState("");

  if (!produto) return;
  async function buscarCEP() {
    if (cep.length < 8) {
      setErro("Digite um CEP válido com 8 dígitos.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
        setCidade("");
        setEstado("");
        return;
      }

      setErro("");
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      setErro("Erro ao buscar o CEP. Tente novamente.");
    }
  }

  return (
    <div className="detalhes-bg">
      <div className="container my-5">

        <div className="row g-4">

          <div className="col-12 col-md-6">
            <img
              src={produto.imagemUrl}
              alt={produto.nome}
              className="produto-imagem"
            />
          </div>

          <div className="col-12 col-md-6">

            <div className="info-container rounded shadow">
              <h2>{produto.nome}</h2>
              <p className="text-muted">{produto.descricao}</p>

              <h3 className="preco-produto">
                R$ {produto.preco.toFixed(2).replace('.', ',')}
              </h3>

              <h4 className="mt-4"><strong>Fabricante:</strong></h4>
              <p>{produto.fabricante}</p>

              <h4 className="mt-4"><strong>Especificações:</strong></h4>
              <ul>
                {produto.especificacao.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <button className="btn-add-carrinho">Adicionar ao Carrinho</button>
            </div>

            <div className="cep-container mt-4 p-3 rounded shadow">
              <h4><strong>Consultar Entrega</strong></h4>
              <div className="d-flex gap-2 flex-wrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o CEP"
                  maxLength="8"
                  value={cep}
                  onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}/>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={buscarCEP}>Buscar</button>
              </div>

              {erro && <p className="text-danger mt-2">{erro}</p>}

              {cidade && (
                <div className="mt-3 p-2 border rounded bg-light">
                  <strong>Entrega para:</strong>
                  <p className="mb-0">{cidade} - {estado}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoPage;
