<template>
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

        <section class="content-header">
            <h1>
                Atestado de Saúde Ocupacional
                <small>Listagem</small>
            </h1>
            <ol class="breadcrumb">
                <li>
                    <a href="#"><i class="fa fa-home"></i> Início</a>
                </li>
                <li><a href="#">Medicina </a></li>
                <li><a href="#">Aso</a></li>
            </ol>
        </section>

        <b-card class="sig" no-body>
            <b-tabs pills card>
                <b-tab title="Ativos" active>
                    <b-card-text id="tabelaEmpregados">
                        <div class="col-md-12">
                            <div
                                class="box-body box-empregados table-responsive"
                            >
                                <table
                                    id="tabelaListagemEmpregados"
                                    class="table table-hover table-striped table-empregados"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            style="cursor: pointer"
                                            @click="abrir(funcionario, 'ativo')"
                                            v-for="funcionario in funcionarios"
                                        >
                                            <td>
                                                {{
                                                    funcionario.pessoa.idPessoa
                                                }}
                                            </td>
                                            <td>{{ funcionario.matricula }}</td>
                                            <td>
                                                {{
                                                    funcionario.pessoa
                                                        .nomePessoa
                                                }}
                                            </td>
                                            <td>
                                                {{ funcionario.pessoa.cpf }}
                                            </td>
                                            <td>
                                                {{
                                                    funcionario.dataInicial
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    funcionario.dataFuncao
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{ funcionario.funcao.cargo }}
                                            </td>
                                            <td>
                                                {{
                                                    formataEstabelecimento(
                                                        funcionario
                                                            .ambienteTrabalho
                                                            .estabelecimento
                                                    )
                                                }}
                                                -
                                                {{
                                                    funcionario.ambienteTrabalho
                                                        .nomeAmbienteTrabalho
                                                }}
                                            </td>

                                            <td>
                                                {{
                                                    funcionario.pessoa
                                                        .dataNascimento
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    formataSexo(
                                                        funcionario.pessoa.sexo
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ funcionario.ano }}A,
                                                {{ funcionario.mes }}M,
                                                {{ funcionario.dia }}D
                                            </td>
                                            <td>
                                                {{
                                                    funcionario.empresaContrato
                                                        .empresaContratante
                                                        .nomeFantasia
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab title="Temporários" @click="listaTemporarios">
                    <b-card-text>
                        <div class="col-md-12">
                            <div
                                class="box-body box-empregados table-responsive"
                            >
                                <table
                                    id="tabelaListagemEmpregados"
                                    class="table table-hover table-striped table-empregados"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            style="cursor: pointer"
                                            @click="
                                                abrir(temporario, 'temporario')
                                            "
                                            v-for="temporario in temporarios"
                                        >
                                            <td>
                                                {{ temporario.pessoa.idPessoa }}
                                            </td>
                                            <td>{{ temporario.matricula }}</td>
                                            <td>
                                                {{
                                                    temporario.pessoa.nomePessoa
                                                }}
                                            </td>
                                            <td>{{ temporario.pessoa.cpf }}</td>
                                            <td>
                                                {{
                                                    temporario.dataInicial
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    temporario.dataFuncao
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{ temporario.funcao.cargo }}
                                            </td>
                                            <td>
                                                {{
                                                    formataEstabelecimento(
                                                        temporario
                                                            .ambienteTrabalho
                                                            .estabelecimento
                                                    )
                                                }}
                                                -
                                                {{
                                                    temporario.ambienteTrabalho
                                                        .nomeAmbienteTrabalho
                                                }}
                                            </td>

                                            <td>
                                                {{
                                                    temporario.pessoa
                                                        .dataNascimento
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    formataSexo(
                                                        temporario.pessoa.sexo
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ temporario.ano }}A,
                                                {{ temporario.mes }}M,
                                                {{ temporario.dia }}D
                                            </td>
                                            <td>
                                                {{
                                                    temporario.empresaContrato
                                                        .empresaContratante
                                                        .nomeFantasia
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab title="Afastados">
                    <b-card-text>
                        <div class="col-md-12">
                            <div
                                class="box-body box-empregados table-responsive"
                            >
                                <table
                                    id="tabelaListagemEmpregados"
                                    class="table table-hover table-striped table-empregados"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            style="cursor: pointer"
                                            @click="abrir(afastado, 'afastado')"
                                            v-for="afastado in afastados"
                                        >
                                            <td>
                                                {{ afastado.pessoa.idPessoa }}
                                            </td>
                                            <td>{{ afastado.matricula }}</td>
                                            <td>
                                                {{ afastado.pessoa.nomePessoa }}
                                            </td>
                                            <td>{{ afastado.pessoa.cpf }}</td>
                                            <td>
                                                {{
                                                    afastado.dataInicial
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    afastado.dataFuncao
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>{{ afastado.funcao.cargo }}</td>
                                            <td>
                                                {{
                                                    formataEstabelecimento(
                                                        afastado
                                                            .ambienteTrabalho
                                                            .estabelecimento
                                                    )
                                                }}
                                                -
                                                {{
                                                    afastado.ambienteTrabalho
                                                        .nomeAmbienteTrabalho
                                                }}
                                            </td>

                                            <td>
                                                {{
                                                    afastado.pessoa
                                                        .dataNascimento
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    formataSexo(
                                                        afastado.pessoa.sexo
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ afastado.ano }}A,
                                                {{ afastado.mes }}M,
                                                {{ afastado.dia }}D
                                            </td>
                                            <td>
                                                {{
                                                    afastado.empresaContrato
                                                        .empresaContratante
                                                        .nomeFantasia
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab title="Inativos">
                    <b-card-text id="tabelaEmpregados">
                        <div class="col-md-12">
                            <div
                                class="box-body box-empregados table-responsive"
                            >
                                <table
                                    id="tabelaListagemEmpregados"
                                    class="table table-hover table-striped table-empregados"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th> 
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            style="cursor: pointer"
                                            @click="abrir(inativo, 'inativo')"
                                            v-for="inativo in inativos"
                                        >
                                            <td>
                                                {{ inativo.pessoa.idPessoa }}
                                            </td>
                                            <td>{{ inativo.matricula }}</td>
                                            <td>
                                                {{ inativo.pessoa.nomePessoa }}
                                            </td>
                                            <td>{{ inativo.pessoa.cpf }}</td>
                                            <td>
                                                {{
                                                    inativo.dataInicial
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    inativo.dataFuncao
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>{{ inativo.funcao.cargo }}</td>
                                            <td>
                                                {{
                                                    formataEstabelecimento(
                                                        inativo.ambienteTrabalho
                                                            .estabelecimento
                                                    )
                                                }}
                                                -
                                                {{
                                                    inativo.ambienteTrabalho
                                                        .nomeAmbienteTrabalho
                                                }}
                                            </td>

                                            <td>
                                                {{
                                                    inativo.pessoa
                                                        .dataNascimento
                                                        | moment("DD/MM/Y")
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    formataSexo(
                                                        inativo.pessoa.sexo
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ inativo.ano }}A,
                                                {{ inativo.mes }}M,
                                                {{ inativo.dia }}D
                                            </td>
                                            <td>
                                                {{
                                                    inativo.empresaContrato
                                                        .empresaContratante
                                                        .nomeFantasia
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>

        <b-modal
            @ok="salvar"
            ok-title="Salvar"
            cancel-title="Cancelar"
            size="xl"
            title=""
            centered
            ref="modalAdmissional"
            id="modalAdmissional"
        >
            <template slot="modal-header" slot-scope="{ close }">
                <button
                    type="button"
                    class="close"
                    @click="close()"
                    data-dismiss="modal"
                    aria-label="Fechar"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="row d-flex">
                    <div
                        class="col-md-12 justify-content-center align-self-center"
                    >
                        <h5>Atestado de Saúde Ocupacional</h5>
                    </div>
                </div>
            </template>

            <div class="sig-modal">
                <b-tabs content-class="mt-3" fill>
                    <b-tab title="Dados" active>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Tipo</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        value="Admissional"
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Data E. Clinico</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        v-model="aso.data"
                                    />
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">ID Pessoa</label>
                                    <input
                                        disabled
                                        type="text"
                                        class="form-control"
                                        v-model="
                                            aso.empresaFuncionario.pessoa
                                                .idPessoa
                                        "
                                    />
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Nome</label>
                                    <input
                                        type="text"
                                        v-model="
                                            aso.empresaFuncionario.pessoa
                                                .nomePessoa
                                        "
                                        disabled
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">Idade</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        :value="
                                            idade(
                                                aso.empresaFuncionario.pessoa
                                                    .dataNascimento
                                            )
                                        "
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Gênero</label>
                                    <input
                                        type="text"
                                        v-model="
                                            aso.empresaFuncionario.pessoa.sexo
                                        "
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">ID ASO</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="aso.idAsoSolicitacao"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="
                                            aso.empresaFuncionario.pessoa.cpf
                                        "
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Matricula</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="
                                            aso.empresaFuncionario.matricula
                                        "
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Data Adm</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="NA"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-group">
                                    <label class="nowrap">T. Empresa</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="NA"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">T. Cargo</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value="NA"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Válido Até</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Naturalidade</label>
                                    <input
                                        type="text"
                                        disabled
                                        class="form-control"
                                        v-model="
                                            aso.empresaFuncionario.pessoa
                                                .cidadeNatal.nomeCidade +
                                                ' - ' +
                                                aso.empresaFuncionario.pessoa
                                                    .cidadeNatal.uf
                                        "
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Contrato</label>

                                    <input
                                        v-if="
                                            aso.empresaFuncionario
                                                .empresaContrato
                                                .empresaContratante
                                        "
                                        type="text"
                                        v-model="
                                            aso.empresaFuncionario
                                                .empresaContrato
                                                .empresaContratante.nomeFantasia
                                        "
                                        class="form-control"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho</label>

                                    <input
                                        v-if="
                                            aso.empresaFuncionario
                                                .ambienteTrabalho
                                        "
                                        type="text"
                                        v-model="
                                            aso.empresaFuncionario
                                                .ambienteTrabalho.idOrigem +
                                                ' - ' +
                                                aso.empresaFuncionario
                                                    .ambienteTrabalho
                                                    .nomeAmbienteTrabalho
                                        "
                                        class="form-control"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Cargo</label>
                                    <input
                                        v-if="aso.empresaFuncionario.funcao"
                                        type="text"
                                        v-model="
                                            aso.empresaFuncionario.funcao.cargo
                                        "
                                        class="form-control"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-md-6">
                                <label for="">Clínica</label>
                                <select
                                    v-model="aso.clinica"
                                    class="form-control"
                                >
                                    <option
                                        :value="clinica"
                                        v-for="clinica in clinicas"
                                        >{{
                                            clinica.nomeFantasiaClinica
                                        }}</option
                                    >
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="">Medico Examinador</label>
                                <select
                                    v-model="aso.medicoExaminador"
                                    class="form-control"
                                >
                                    <option
                                        :value="examinador"
                                        v-for="examinador in examinadores"
                                    >
                                        {{ examinador.titulo }}
                                        {{
                                            examinador.pessoa.nomePessoa
                                        }}</option
                                    >
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Observação</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-3" style="margin-top: 1.8rem">
                                       
                                <button @click="abrirRecomendacao" class="btn btn-block btn-success">
                                    <i class="fas fa-eye"></i> Recomendação do
                                    PCMSO
                                </button>
                            </div>
                            <div class="col-md-3" style="margin-top: 1.8rem">
                                <button @click="abrirProntuario" class="btn btn-success btn-block">
                                    <i class="fas fa-eye"></i> Anotações no
                                    Prontuário
                                </button>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-12">
                                <div
                                    class="alert alert-dark p-2 text-center w-100"
                                    v-if="aso.medicoCoordenador"
                                >
                                    Médico Responsável pelo PCMSO V
                                    {{ aso.pcmso.versao }} de
                                    {{
                                        aso.pcmso.dataHora
                                            | moment("DD/MM/YYYY")
                                    }}
                                    Dr.
                                    {{
                                        aso.medicoCoordenador.pessoa.nomePessoa
                                    }}
                                    - CRM/{{ aso.medicoCoordenador.uf }}
                                    {{ aso.medicoCoordenador.numeroRegistro }}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label for="">Local</label>
                                <select v-model="aso.cidade" class="form-control">
                                    <option :value="cidade" v-for="cidade in cidades">{{ cidade.nomeCidade}} - {{cidade.uf}}</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="">Data de Emissão</label>
                                <input type="date" class="form-control" v-model="aso.dataEmissao">
                            </div>
                            <div class="col-md-2">
                                <label for="">Resultado</label>
                                <select v-model="aso.resultadoExame" class="form-control">
                                    <option value="APTO">Apto</option>
                                    <option value="INAPTO">Inapto</option>
                                    <option value="APTO_COM_RESTRIÇÃO">Apto com restrição</option>
                                </select>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab
                        title="Fatores de Risco"
                        :disabled="aso.idAsoSolicitacao != 0"
                    >
                        

                    <div class="row">
                        <div class="col-md-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Risco</th>
                                        <th>Fonte Geradora</th>
                                        <th>Exp.</th>
                                        <th>Valor</th>
                                        <th>L. Tol.</th>
                                        <th>N. Ação</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td colspan="6" class="text-left grupo-title" style="border-top-color:rgb(0, 128, 0)"> <div class="square" style="background-color: rgb(0, 128, 0)"></div> Grupo Físico</td>
                                    </tr>
                                    <tr v-for="fator in fatores" v-if="fator.risco.grupoRisco == 'FÍSICO'">
                                        <td>{{fator.risco.nomeRisco}}</td>
                                        <td>{{fator.fonteGeradora.descricao}}</td>
                                        <td>{{fator.exposicao}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
                                            <span :class="{'text-success': fator.medida.medida < fator.unidade.nivelAcao, 'text-warning': fator.medida.medida >= fator.unidade.nivelAcao && fator.medida.medida < fator.unidade.limiteTolerancia, 'text-danger': fator.medida.medida >= fator.unidade.limiteTolerancia}">
                                                <strong>{{fator.medida.medida}} {{fator.unidade.unidadeMedida.unidade}}</strong>
                                            </span>
                                        </td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                                        

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.limiteTolerancia}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.nivelAcao}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>
                                    </tr>
                                    <tr v-if="fatores.filter(e => e.risco.grupoRisco === 'FÍSICO').length == 0">
                                        <td colspan="6"> Sem contato </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="text-left grupo-title" style="border-top-color:rgb(255, 0, 0)"> <div class="square" style="background-color: rgb(255, 0, 0)"></div> Grupo Químico</td>
                                    </tr>
                                    <tr v-for="fator in fatores" v-if="fator.risco.grupoRisco == 'QUÍMICO'">
                                        <td>{{fator.risco.nomeRisco}}</td>
                                        <td>{{fator.fonteGeradora.descricao}}</td>
                                        <td>{{fator.exposicao}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
                                            <span :class="{'text-success': fator.medida.medida < fator.unidade.nivelAcao, 'text-warning': fator.medida.medida >= fator.unidade.nivelAcao && fator.medida.medida < fator.unidade.limiteTolerancia, 'text-danger': fator.medida.medida >= fator.unidade.limiteTolerancia}">
                                                <strong>{{fator.medida.medida}} {{fator.unidade.unidadeMedida.unidade}}</strong>
                                            </span>
                                        </td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                                        

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.limiteTolerancia}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.nivelAcao}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>
                                    </tr>
                                    <tr v-if="fatores.filter(e => e.risco.grupoRisco === 'QUÍMICO').length == 0">
                                        <td colspan="6"> Sem contato </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="text-left grupo-title" style="border-top-color:rgb(148, 90, 30)"> <div class="square" style="background-color: rgb(148, 90, 30)"></div>  Grupo Biológico</td>
                                    </tr>
                                    <tr v-for="fator in fatores" v-if="fator.risco.grupoRisco == 'BIOLÓGICO'">
                                        <td>{{fator.risco.nomeRisco}}</td>
                                        <td>{{fator.fonteGeradora.descricao}}</td>
                                        <td>{{fator.exposicao}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
                                            <span :class="{'text-success': fator.medida.medida < fator.unidade.nivelAcao, 'text-warning': fator.medida.medida >= fator.unidade.nivelAcao && fator.medida.medida < fator.unidade.limiteTolerancia, 'text-danger': fator.medida.medida >= fator.unidade.limiteTolerancia}">
                                                <strong>{{fator.medida.medida}} {{fator.unidade.unidadeMedida.unidade}}</strong>
                                            </span>
                                        </td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                                        

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.limiteTolerancia}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.nivelAcao}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>
                                    </tr>
                                    <tr v-if="fatores.filter(e => e.risco.grupoRisco === 'BIOLÓGICO').length == 0">
                                        <td colspan="6"> Sem contato </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="text-left grupo-title" style="border-top-color:rgb(255, 255, 0); color: black"> <div class="square" style="background-color: rgb(255, 255, 0)"></div> Grupo Ergonômico</td>
                                    </tr>
                                    <tr v-for="fator in fatores" v-if="fator.risco.grupoRisco == 'ERGONÔMICO'">
                                        <td>{{fator.risco.nomeRisco}}</td>
                                        <td>{{fator.fonteGeradora.descricao}}</td>
                                        <td>{{fator.exposicao}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
                                            <span :class="{'text-success': fator.medida.medida < fator.unidade.nivelAcao, 'text-warning': fator.medida.medida >= fator.unidade.nivelAcao && fator.medida.medida < fator.unidade.limiteTolerancia, 'text-danger': fator.medida.medida >= fator.unidade.limiteTolerancia}">
                                                <strong>{{fator.medida.medida}} {{fator.unidade.unidadeMedida.unidade}}</strong>
                                            </span>
                                        </td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                                        

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.limiteTolerancia}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.nivelAcao}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>
                                    </tr>
                                    <tr v-if="fatores.filter(e => e.risco.grupoRisco === 'ERGONÔMICO').length == 0">
                                        <td colspan="6"> Sem contato </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="text-left grupo-title" style="border-top-color:rgb(0, 0, 255)"> <div class="square" style="background-color: rgb(0, 0, 255)"></div>  Grupo Acidente</td>
                                    </tr>
                                    <tr v-for="fator in fatores" v-if="fator.risco.grupoRisco == 'ACIDENTE'">
                                        <td>{{fator.risco.nomeRisco}}</td>
                                        <td>{{fator.fonteGeradora.descricao}}</td>
                                        <td>{{fator.exposicao}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
                                            <span :class="{'text-success': fator.medida.medida < fator.unidade.nivelAcao, 'text-warning': fator.medida.medida >= fator.unidade.nivelAcao && fator.medida.medida < fator.unidade.limiteTolerancia, 'text-danger': fator.medida.medida >= fator.unidade.limiteTolerancia}">
                                                <strong>{{fator.medida.medida}} {{fator.unidade.unidadeMedida.unidade}}</strong>
                                            </span>
                                        </td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                                        

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.limiteTolerancia}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>

                                        <td v-if="fator.risco.enquadramento == 'QUANTITATIVO'">{{fator.unidade.nivelAcao}}{{fator.unidade.unidadeMedida.unidade}}</td>
                                        <td v-if="fator.risco.enquadramento == 'QUALITATIVO'">-</td>
                                    </tr>
                                    <tr v-if="fatores.filter(e => e.risco.grupoRisco === 'ACIDENTE').length == 0">
                                        <td colspan="6"> Sem contato </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                    </b-tab>
                    <b-tab
                        title="Exames Complementares"
                        :disabled="aso.idAsoSolicitacao == 0"
                    >
                        <!-- <p>I'm the tab with the very, very long title</p> -->
                    </b-tab>
                    <b-tab
                        title="Anamnese"
                        :disabled="aso.idAsoSolicitacao == 0"
                    >
                        <!-- <p>I'm a disabled tab!</p> -->
                    </b-tab>
                </b-tabs>
            </div>
        </b-modal>

        <b-modal ok-only ok-title="Fechar" size="lg" title="Recomendação PCMSO" id="modalRecomendacao" ref="modalRecomendacao">
            <div class="row">
                <div class="col-md-3">
                    <label>Demissional</label>
                    <input type="text" class="form-control" disabled v-model="asoPcmso.demissional">
                </div>
                <div class="col-md-3">
                    <label>Periodo</label>
                    <input type="text" class="form-control" disabled v-model="asoPcmso.periodo">
                </div>
                <div class="col-md-6">
                    <label>Recomendação</label>
                    <input type="text" class="form-control" disabled v-model="asoPcmso.recomendacao">
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
export default {
    props: ["empresa"],
    data() {
        return {
            funcionarios: [],
            inativos: [],
            temporarios: [],
            afastados: [],
            carregando: false,
            clinicas: [],
            cidades: [],
            examinadores: [],
            asoPcmso: {},
            mensagem: "Carregando...",
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            aso: {
                idAsoSolicitacao: 0,
                empresaFuncionario: {
                    pessoa: {
                        cidadeNatal: {}
                    },
                    ambienteTrabalho: {},
                    empresaContrato: {
                        empresaContratante: {}
                    },
                    funcao: {}
                },
                clinica: {},
                medicoExaminador: {}
            },
            fatores: [],
            tipo: ""
        };
    },
    computed: {
        hoje() {
            var currentDate = new Date();

            console.log(currentDate);

            var y = currentDate.getFullYear();
            var m = currentDate.getMonth() + 1;
            var d = currentDate.getDate();

            if (m < 10) m = "0" + m;

            if (d < 10) d = "0" + d;

            return y + "-" + m + "-" + d;
        }
    },
    methods: {
        abrirProntuario() {
           var win = window.open("/prontuario-medico?funcionario=" + this.aso.empresaFuncionario.idEmpresaFuncionario, '_blank');
           win.focus();
        },
        abrirRecomendacao() {
            this.$refs.modalRecomendacao.show();
        },
        idade: function(nascimentoPessoa) {
            var nascimento = new Date(nascimentoPessoa);
            var hoje = new Date();

            var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
            if (
                new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
                new Date(
                    hoje.getFullYear(),
                    nascimento.getMonth(),
                    nascimento.getDate()
                )
            )
                diferencaAnos--;

            return diferencaAnos;
        },
        formataEstabelecimento: function(estabelecimento) {
            if (estabelecimento == "PRÓPRIO") {
                return "P";
            } else if (estabelecimento == "TERCEIROS") {
                return "T";
            } else if (estabelecimento == "SERVIÇOS_TERCEIROS") {
                return "ST";
            }
        },
        formataTipo: function(tipo) {
            if (tipo == "ADMISSIONAL") {
                return "Adm";
            } else if (tipo == "DEMISSIONAL") {
                return "Dem";
            } else if (tipo == "MUDANÇA_DE_FUNÇÃO") {
                return "M. Fun";
            } else if (tipo == "MUDANÇA_DE_CONTRATANTE") {
                return "M. Con";
            } else if (tipo == "TRANSFERÊNCIA") {
                return "Trans";
            }
        },
        formataSexo: function(sexo) {
            if (sexo == "MASCULINO") {
                return "M";
            } else if (sexo == "FEMININO") {
                return "F";
            }
        },
        salvar: function(evt) {
            evt.preventDefault();
            
            console.log(this.aso);

            var that = this;
            
            axios.post('/atestado-saude-ocupacional/', {
                solicitacao: that.aso
            }).then(function(response) {
                console.log(response);
            });
        },
        carregar: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },
        abrir: function(funcionario, tipo) {
            this.tipo = tipo;
            if (tipo == "temporario") {
                this.aso.idAsoSolicitacao = 0;
                this.aso.empresaFuncionario = funcionario;
                this.aso.tipoAtestado = "ADMISSIONAL";
                this.aso.tipo = 'PRÉ_ASO';

                this.aso.data = this.hoje;
                
                var that = this;

                this.carregar("Carregando dados...");

                axios
                    .post("/atestado-saude-ocupacional/ultimo", {
                        empresa: this.empresa.idEmpresa,
                        contrato: this.aso.empresaFuncionario.empresaContrato
                            .idEmpresaContrato,
                        data: this.aso.data,
                        idOrigem: this.aso.empresaFuncionario.ambienteTrabalho
                            .idOrigem
                    })
                    .then(function(response) {
                        setTimeout(function() {
                            if (response.data != "") {
                                that.aso.pcmso = response.data.pcmso;
                                console.log("retorno", response.data);

                                that.examinadores = response.data.examinadores;

                                that.asoPcmso = response.data.asoPcmso[0];

                                that.fatores = response.data.riscos;

                                that.aso.cidade = that.aso.pcmso.empresasContrato[0].empresa.cidade;
                                // that.clinicas = response.data.clinicas;
                                axios
                                    .get(
                                        process.env.MIX_APP_API + "ServicoSIGSSO/rest/pcmso-historico-revisoes/listaPorIdPcmso/" +
                                            that.aso.pcmso.idPcmso
                                    )
                                    .then(function(response) {
                                        that.aso.medicoCoordenador =
                                            response.data[0].empresaProfissional;
                                        that.carregando = false;
                                        that.$refs.modalAdmissional.show();
                                    });
                            } else {
                                that.carregando = false;
                                that.$alert(
                                    "Não há PCMSO nesta data e com este contrato.",
                                    "Atenção!",
                                    "error"
                                );
                            }
                        }, 500);
                    });
            }
        },
        listaTemporarios: function() {
            var that = this;
            this.carregar("Listando temporários...");
            axios
                .get(
                    process.env.MIX_APP_API + "ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/" +
                        that.empresa.idEmpresa
                )
                .then(function(response) {
                    that.temporarios = response.data;
                    that.carregando = false;
                });
        }
    },

    mounted() {
        this.carregar("Carregando empregados ativos...");
        var that = this;
        axios
            .get(
                process.env.MIX_APP_API + "ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAtivosPorIdEmpresa/" +
                    that.empresa.idEmpresa
            ) 
            .then(function(response) {
                that.funcionarios = response.data;
                // that.carregando = false;
            });

        // axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/empresaFuncionarios/listaDemitidosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
        //     that.inativos = response.data;
        // });

        // axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
        //     that.afastados = response.data;

        // });

        axios.get('/tabelas/clinica/list').then(function (response) {
            that.clinicas = response.data;
        });

         axios
            .get(
                process.env.MIX_APP_API + "ServicoSIGSSO/rest/cidades"
            ) 
            .then(function(response) {
                that.cidades = response.data;
                that.carregando = false;
            });
    }
};
</script>

<style lang="scss" scoped>
.modal-header .close {
    position: absolute;
    right: 15px;
    z-index: 1000;
}

.selecionar {
    cursor: pointer;
}

.selecionado {
    background-color: #71bb66;
}

.form-group {
    margin-bottom: 0.5rem;
}

.input-warning {
    background-color: #fce3bd;
}

.nowrap {
    white-space: nowrap;
}

.grupo-title {
    font-weight: bold; 
    border-top-style: solid;
    border-top-width: 3px;
    padding-left: 38px;

    div.square {
        height: 32px;
        width: 32px;
        display: inline-block;
        margin-left: -38px;
        margin-top: -4px;
        position: absolute;
    }
}
</style>
