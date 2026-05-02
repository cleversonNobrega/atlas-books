import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  console.log(livrosPesquisados);

  return (
    <PesquisaContainer>
      <Titulo>já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input
        placeholder="Escreva sua próximo leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resutaldoPesquisa = livros.filter(
            (livro) => livro.nome.includes(textoDigitado),
            setLivrosPesquisados(resutaldoPesquisa),
          );
        }}
      />
      {livrosPesquisados.map((livro) => (
        <div>
          <p>{livro.name}</p>
          <img src={livro.src} />
        </div>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
