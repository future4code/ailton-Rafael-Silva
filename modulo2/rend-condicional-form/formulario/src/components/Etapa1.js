import React from "react";

class Etapa1 extends React.Component {
  render () {
    return(
    <ContainerPgE1>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual é o seu nome?</p>
        <Input
        value={this.props.valorNome}
        onChange={this.props.onChangeNome}
        />
        <AvisoErro>{this.props.aviso1}</AvisoErro>
        <p>2. Qual sua idade?</p>
        <Input
        value={this.props.valorIdade}
        onChange={this.props.onChangeIdade}
        />
        <AvisoErro>{this.props.aviso2}</AvisoErro>
        <p>3. Qual seu email?</p>
        <Input
        value={this.props.valorEmail}
        onChange={this.props.onChangeEmail}
        />
        <AvisoErro>{this.props.aviso3}</AvisoErro>
        <p>4/ Qual a sua escolaridade?</p>
        <Select onChange={this.props.onChangeSelect}>
            <option value={" "} />
            <option value={"Ensino médio incompleto"}>
                Ensino médio incompleto
            </option>
            <option value={"Ensino médio completo"}>Ensino médio completo</option>
            <option value={"Ensino superior incompleto"}>
                Ensino superior incompleto
            </option>
            <option value={"Ensino superior completo"}>
                Ensino superior completo
            </option>
        </Select>
        <AvisoErro>{this.props.aviso4}</AvisoErro>
        <Button onClick={this.props.onClickNext}>Próxima etapa</Button>
    </ContainerPgE1>
    );
  }
}
export default Etapa1;