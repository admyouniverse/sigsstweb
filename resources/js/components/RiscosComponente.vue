<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.riscos" name="riscos.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>
    </div>
    <div v-if="montou" class="box box-info">
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="tabelaListagem">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Grupo
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Tabela23
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="risco in riscos">
                        <td style="vertical-align: middle" width="80px"><b>{{ risco.idRisco }}</b></td>
                        <td style="text-align:justify; vertical-align: middle">
                            <div class="cx" v-bind:style="cor(risco.grupoRisco)"></div>
                            {{ grupoDeRisco(risco.grupoRisco) }}
                        </td>
                        <td style="text-align:justify; vertical-align: middle">{{ risco.nomeRisco }}</td>
                        <td style="text-align:justify; vertical-align: middle">{{ risco.tabela23 }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(risco)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(risco)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :no-close-on-esc="true" @cancel="fechar()" @close="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row" style='margin-bottom: 20px'>
            <div class="col-md-12">
                <div class="card card-success">
                    <div class="card-header">
                        Detalhes do Fator de Risco
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div v-bind:class="{'col-md-4': grupo == 'QUÍMICO', 'col-md-5' : grupo != 'QUÍMICO'}">
                                <div class="form-group">
                                    <label class="typo__label">Grupo</label>
                                    <multiselect @input="selecionaGrupo" v-model="value" placeholder="Selecione um grupo" label="title" track-by="title" :options="options" :option-height="104" :custom-label="customLabel" :show-labels="false">
                                        <template slot="singleLabel" slot-scope="props">
                                            <span class="color" :style="props.option.color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <span class="option__desc">
                                                <span class="option__title">{{ props.option.title }}</span>
                                            </span>
                                        </template>
                                        <template slot="option" slot-scope="props">
                                            <span class="color" :style="props.option.color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <span class="value">{{ props.option.title }}</span>
                                        </template>
                                    </multiselect>
                                    <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
                                </div>
                            </div>
                            <div class="col-md-2" v-if="grupo == 'QUÍMICO'">
                                <div class="form-group">
                                    <label for="">CAS</label>
                                    <input type="text" @keyup="testaCas" v-model="cas" class="form-control">
                                </div>
                            </div>
                            <div v-bind:class="{'col-md-3': grupo == 'QUÍMICO', 'col-md-4' : grupo != 'QUÍMICO'}">
                                <div class="form-group">
                                    <label for="">Fatores de Risco</label>
                                    <input class="form-control" v-model="nome"></input>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input class="form-control" v-model="id" disabled></input>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>T23 eSocial</label>
                                    <input class="form-control" type="text" v-model="tabela23">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Complemento</label>
                                    <input type="text" class="form-control" v-model="complemento">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Meio de propagação</label>
                                    <input class="form-control" type="text" v-model="meio">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Meio de absorcação</label>
                                    <input class="form-control" type="text" v-model="descricao">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Possíveis danos para saúde</label>
                                    <input class="form-control" v-model="dano" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Insalubridade</label>
                                    <select v-model="insalubridade" class="form-control">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="SIM">Sim</option>
                                        <option value="NÃO">Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Periculosidade</label>
                                    <select v-model="periculosidade" class="form-control">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="SIM">Sim</option>
                                        <option value="NÃO">Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>LINACH</label>
                                    <select v-model="linac" class="form-control">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="NÃO">Não</option>
                                        <option value="G1">G1</option>
                                        <option value="G2A">G2A</option>
                                        <option value="G2B">G2B</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Apo. Especial</label>
                                    <select v-model="aposentadoria" class="form-control">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="SIM">Sim</option>
                                        <option value="NÃO">Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="">Atividade Especial</label>
                                    <select v-model="atividadeEspecial" class="form-control">
                                        <option value="SELECIONE">-</option>
                                        <option value="SIM">Sim</option>
                                        <option value="NÃO">Não</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Enquadramento</label>
                                    <select class="form-control" v-model="enquadramento">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="QUANTITATIVO">Quantitativo</option>
                                        <option value="QUALITATIVO">Qualitativo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Fundamentação</label>
                                    <input class="form-control" v-model="numero" type="text">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Anexo</label>
                                    <input class="form-control" type="text" v-model="anexo">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- UNIDADE DE MEDIDA -->
        <div class="row" style='margin-bottom: 20px' v-if="enquadramento != 'QUALITATIVO'">
            <div class="col-md-12">
                <div class="card card-success">
                    <div class="card-header">
                        Unidades de Medida
                    </div>
                    <div v-if="!novoUn" class="card-body">
                        <div class="row" v-if="unidades.length == 0">
                            <div class="col-md-12 text-center">
                                <h6 v-if="editar">
                                    Não há unidades de medida ligadas a este risco.
                                </h6>
                                <h6 v-if="!editar">
                                    Ainda não há unidades de medida ligadas a este risco.
                                </h6>
                            </div>
                        </div>
                        <div class="row" v-if="unidades.length > 0">
                            <div class="col-md-12">
                                <table class="table table-sm table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col"><b>Unidade</b></th>
                                            <th scope="col" class="text-center"><b>Lim. Tolerancia</b></th>
                                            <th scope="col" class="text-center"><b>Niv. de Ação</b></th>
                                            <th class="text-center" scope="col"><b>Ações</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(unidade, key) in unidades">
                                            <td v-if="unidade.unidadeMedida">{{ unidade.unidadeMedida.descricao }}
                                            </td>
                                            <td class="text-center">{{ unidade.limiteTolerancia }}
                                                {{ unidade.unidadeMedida.unidade }}</td>
                                            <td class="text-center">{{ unidade.nivelAcao }}
                                                {{ unidade.unidadeMedida.unidade }}</td>
                                            <td class="text-center">
                                                <button class="btn btn-sm btn-danger" @click="excluirUnidade(key)"><i class="fa fa-trash"></i></button>
                                                <button class="btn btn-sm btn-primary" @click="editarUnidade(unidade, key)"><i class="fas fa-pencil-alt"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button @click="novoUn = true" class="btn btn-secondary btn-sm"><i class="fa fa-plus"></i> Adicionar Unidade de Medida</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="novoUn" class="card-body">
                        <input type="hidden" v-model="id_unidade">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Unidade de Medida</label>
                                    <select v-model="unidade" class="form-control">
                                        <option v-for="un in todasUnidades" :value="un"> {{ un.descricao }}
                                            ({{ un.unidade }})</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Limite de tolerância</label>
                                    <input type="text" class="form-control" v-model="limite">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Nivel de Ação</label>
                                    <input type="text" class="form-control" v-model="nivel">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button @click="cancelarUnidade" class="btn btn-secondary btn-sm">Cancelar</button>
                                <button @click="addUnidade" class="btn btn-primary btn-sm">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style='margin-bottom: 20px'>
            <div class="col-md-12">
                <div class="card card-success">
                    <div class="card-header">
                        EPI
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <v-select label="idEpi" v-model="epis" multiple :filterable="false" :options="options" @search="onSearch">
                                    <template slot="no-options">
                                        digite para procurar um EPI...
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.descricao }}
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{ option.descricao }}
                                        </div>
                                    </template>
                                </v-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- EXAMES -->
        <div class="row" style='margin-top: 20px'>
            <div class="col-md-12">
                <div class="card card-success">
                    <div class="card-header">
                        Exames
                    </div>
                    <div v-if="!novo" class="card-body">
                        <div class="row" v-if="exames.length == 0">
                            <div class="col-md-12 text-center">
                                <h6 v-if="editar">
                                    Não há exames ligados a este risco.
                                </h6>
                                <h6 v-if="!editar">
                                    Ainda não há exames ligados a este risco.
                                </h6>
                            </div>
                        </div>
                        <div class="row" v-if="exames.length > 0">
                            <div class="col-md-12">
                                <table class="table table-sm table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col"><b>Exame</b></th>
                                            <th scope="col" class="text-center"><b>Enquadramento</b></th>
                                            <th scope="col" class="text-center"><b>IBE</b></th>
                                            <th scope="col" class="text-center"><b>Interpretação</b></th>
                                            <th class="text-center" scope="col"><b>Ações</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(exame, key) in exames">
                                            <td v-if="exame.exame">{{ exame.exame.nomeExame }}</td>
                                            <td class="text-center">{{ tratarEnquadramento(exame.enquadramento) }}</td>
                                            <td class="text-center">{{ exame.ibpm }}</td>
                                            <td class="text-center"> <span v-if="exame.interpretacao == 'NA'">N/A</span>
                                                <span v-if="exame.interpretacao == 'SELECIONE'">-</span>
                                                <span v-if="exame.interpretacao != 'NA' && exame.interpretacao != 'SELECIONE'">
                                                    {{ exame.interpretacao }}
                                                </span> </td>
                                            <td class="text-center">
                                                <button class="btn btn-sm btn-danger" @click="excluirExame(key)"><i class="fa fa-trash"></i></button>
                                                <button class="btn btn-sm btn-primary" @click="editarExame(exame, key)"><i class="fas fa-pencil-alt"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button @click="novo = true" class="btn btn-secondary btn-sm"><i class="fa fa-plus"></i> Adicionar Exame</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="novo" class="card-body">
                        <input type="hidden" v-model="id_exame">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Exame</label>
                                    <select v-model="exame" class="form-control">
                                        <option v-for="ex in todosExames" :value="ex" v-if="!exameEmRisco(ex.idExame) || ex.idExame == atual">
                                            #{{ ex.idExame }} - {{ ex.nomeExame }} </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Material Organico</label>
                                    <input type="text" class="form-control" disabled v-model="exame.grupoExame">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Enquadramento</label>
                                    <select v-model="enquadramento_exame" @change="mudouEnquadramento" class="form-control">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="AI_Q1">NR 07-A I-Q1</option>
                                        <option value="AI_Q2">NR 07-A I-Q2</option>
                                        <option value="AII">NR 07-A II</option>
                                        <option value="AIII">NR 07-A III</option>
                                        <option value="AIV">NR 07-A IV</option>
                                        <option value="AV">NR 07-A V</option>
                                        <option value="OUTROS">Outros</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">IBE</label>
                                    <input type="text" v-model="ibpm" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Interpretação</label>
                                    <select v-model="interpretacao" class="form-control" :disabled="enquadramento_exame == 'AI_Q2' || enquadramento_exame == 'AI_Q1'">
                                        <option value="SELECIONE">Selecione</option>
                                        <option value="EE">EE</option>
                                        <option value="SC">SC</option>
                                        <option value="NA">N/A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button @click="cancelarExame" class="btn btn-secondary btn-sm">Cancelar</button>
                                <button @click="addExame" class="btn btn-primary btn-sm">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este risco?</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-secondary btn-lg" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
            </div>
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
            </div>
        </div>
    </b-modal>
</section>
</template>

<script>
export default {
    data() {
        return {
            riscos: '',
            exames: [],
            exame: '',
            todosExames: [],
            descricao: '',
            unidade: '',
            unidades: [],
            nome: '',
            grupo: '',
            meio: '',
            dano: '',
            epis: [],
            id_unidade: '',
            todosEpis: '',
            todasUnidades: [],
            novo: false,
            novoUn: false,
            enquadramento: '',
            enquadramento_exame: '',
            interpretacao: 'SELECIONE',
            ibpm: '',
            id_exame: '',
            numero: '',
            anexo: '',
            limite: '',
            nivel: '',
            insalubridade: '',
            periculosidade: '',
            complemento: '',
            linac: '',
            aposentadoria: '',
            tabela23: '',
            observacao: '',
            options: [],
            classe: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando itens cadastros...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            destaque: '',
            coluna: 'id',
            ordem: 'az',
            termo: '',
            cas: '',
            atual: '',
            selecionado: 'id',
            idTabela: '#tabelaListagem',
            value: '',
            atividadeEspecial: 'NÃO',
            options: [{
                    title: 'Biológico',
                    valor: 'BIOLÓGICO',
                    color: "background-color:rgb(148, 90, 30)"
                },
                {
                    title: 'Ergonômico',
                    valor: 'ERGONÔMICO',
                    color: "background-color:rgb(255, 255, 0)"
                },
                {
                    title: 'Acidente',
                    valor: 'ACIDENTE',
                    color: "background-color:rgb(0, 0, 255)"
                },
                {
                    title: 'Físico',
                    valor: 'FÍSICO',
                    color: "background-color:rgb(0, 128, 0)"
                },
                {
                    title: 'Químico',
                    valor: 'QUÍMICO',
                    color: "background-color:rgb(255, 0, 0)"
                },
                {
                    title: 'Periculosos',
                    valor: 'PERICULOSOS',
                    color: "background-color:rgb(255, 255, 0)"
                },
                {
                    title: 'Associação de fatores de risco',
                    valor: 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO',
                    color: "background-color:rgb(0, 0, 0)"
                },
                {
                    title: 'Ausência de fatores de risco',
                    valor: 'AUSÊNCIA_DE_FATORES_DE_RISCO',
                    color: "background-color:rgb(128, 128, 128)"
                },
                {
                    title: 'Penosos',
                    valor: 'PENOSOS',
                    color: "background-color:rgb(254, 218, 71)"
                },

            ]
        }
    },
    methods: {
        tratarEnquadramento(e) {
            if (e == "SELECIONE") {
                return "Selecione"
            } else if (e == "AI_Q1") {
                return "NR 07-A I-Q1"
            } else if (e == "AI_Q2") {
                return "NR 07-A I-Q2"
            } else if (e == "AII") {
                return "NR 07-A II"
            } else if (e == "AIII") {
                return "NR 07-A III"
            } else if (e == "AIV") {
                return "NR 07-A IV<"
            } else if (e == "AV") {
                return "NR 07-A V"
            } else if (e == "OUTROS") {
                return "Outros"
            }
        },
        customLabel({
            title,
            desc
        }) {
            return `${title} – ${desc}`
        },
        cor: function (risco) {
            if (risco == 'BIOLÓGICO') {
                return "background-color:rgb(148, 90, 30)";
            } else if (risco == 'ERGONÔMICO') {
                return "background-color:rgb(255, 255, 0)";
            } else if (risco == 'ACIDENTE') {
                return "background-color:rgb(0, 0, 255)";
            } else if (risco == 'FÍSICO') {
                return "background-color:rgb(0, 128, 0)";
            } else if (risco == 'QUÍMICO') {
                return "background-color:rgb(255, 0, 0)";
            } else if (risco == 'PERICULOSOS') {
                return "background-color:rgb(255, 255, 0)";
            } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
                return "background-color:rgb(0, 0, 0)";
            } else if (risco == 'PENOSOS') {
                return "background-color:rgb(254, 218, 71)";
            } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
                return "background-color:rgb(128, 128, 128)";
            }
        },

        grupoDeRisco: function (risco) {
            if (risco == 'BIOLÓGICO') {
                return "Biológico";
            } else if (risco == 'ERGONÔMICO') {
                return "Ergonômico";
            } else if (risco == 'ACIDENTE') {
                return "Acidente";
            } else if (risco == 'FÍSICO') {
                return "Físico";
            } else if (risco == 'QUÍMICO') {
                return "Químico";
            } else if (risco == 'PERICULOSOS') {
                return "Periculosos";
            } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
                return "Associação de fatores de risco";
            } else if (risco == 'PENOSOS') {
                return "Penosos";
            } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
                return "Ausência de fatores de risco";
            }

        },

        mudouEnquadramento: function () {
            if (this.enquadramento_exame == 'AI_Q1') {
                this.interpretacao = "EE";
            }

            if (this.enquadramento_exame == 'AI_Q2') {
                this.interpretacao = "SC";
            }
        },

        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 800);
        },

        testaCas: function () {
            // console.log(isNaN(this.cas));
            if (isNaN(this.cas)) {
                // console.log(this.cas);
                // console.log(this.cas != 'N' && this.cas != 'NA');
                if (this.cas != 'N' && this.cas != 'NA') {
                    this.cas = '';
                }
            }
        },

        alerta: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 1000);
        },
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },
        cancelarExame: function () {
            this.exame = '';
            this.id_exame = null;
            this.enquadramento_exame = '';
            this.interpretacao = '';
            this.ibpm = '';

            this.novo = false;
        },

        cancelarUnidade: function () {
            this.unidade = '';
            this.id_unidade = null;
            this.limite = '';
            this.nivel = '';

            this.novoUn = false;
        },

        editarExame: function (exame, key) {
            var that = this;
            this.exame = exame.exame;
            this.id_exame = key;
            this.enquadramento_exame = exame.enquadramento;
            this.interpretacao = exame.interpretacao;
            this.ibpm = exame.ibpm;
            this.atual = exame.exame.idExame;

            this.novo = true;

        },

        editarUnidade: function (unidade, key) {
            var that = this;
            this.unidade = unidade.unidadeMedida;
            this.id_unidade = key;
            this.nivel = unidade.nivelAcao;
            this.limite = unidade.limiteTolerancia;

            this.novoUn = true;

        },

        addExame: function () {
            var that = this;

            // console.log(this.exames);
            // console.log(this.exames[this.id_exame]);

            if (((this.enquadramento_exame == 'AI_Q1' || this.enquadramento_exame == 'AI_Q2') && this.ibpm != '') || this.enquadramento_exame != 'AI_Q1' && this.enquadramento_exame != 'AI_Q2') {
                if (this.exames[this.id_exame] != undefined) {
                    this.exames[this.id_exame].exame = that.exame;
                    this.exames[this.id_exame].enquadramento = that.enquadramento_exame;
                    this.exames[this.id_exame].interpretacao = that.interpretacao;
                    this.exames[this.id_exame].ibpm = that.ibpm;
                } else {
                    if (that.interpretacao == '' || that.interpretacao == null || that.interpretacao == undefined) {
                        that.interpretacao = 'SELECIONE';
                    }
                    this.exames.push({
                        exame: that.exame,
                        enquadramento: that.enquadramento_exame,
                        interpretacao: that.interpretacao,
                        ibpm: that.ibpm
                    });

                }
                this.cancelarExame();
            } else {
                alert('Preencha IBE obrigatoriamente!');
            }

        },

        addUnidade: function () {
            var that = this;

            // console.log(this.exames);
            // console.log(this.exames[this.id_exame]);

            if (this.unidades[this.id_unidade] != undefined) {
                this.unidades[this.id_unidade].unidadeMedida = that.unidade;
                this.unidades[this.id_unidade].nivelAcao = that.nivel;
                this.unidades[this.id_unidade].limiteTolerancia = that.limite;
            } else {
                this.unidades.push({
                    unidadeMedida: that.unidade,
                    nivelAcao: that.nivel,
                    limiteTolerancia: that.limite
                });
            }

            this.cancelarUnidade();

        },

        excluirUnidade: function (key) {
            this.unidades.splice(key, 1);
        },

        excluirExame: function (key) {
            this.exames.splice(key, 1);
        },

        salvar: function () {

            this.carregar('Salvando novo risco..');

            var that = this;
            if (this.descricao != '' || this.codigo != '') {

                if (that.enquadramento == 'QUALITATIVO') {
                    that.nivel = that.limite = 'N/A';
                }

                axios.post('/tabelas/riscos', {
                    descricao: that.descricao,
                    nome: that.nome,
                    grupo: that.grupo,
                    meio: that.meio,
                    dano: that.dano,
                    enquadramento: that.enquadramento,
                    numero: that.numero,
                    anexo: that.anexo,
                    limite: that.limite,
                    nivel: that.nivel,
                    insalubridade: that.insalubridade,
                    periculosidade: that.periculosidade,
                    linac: that.linac,
                    cas: that.cas,
                    aposentadoria: that.aposentadoria,
                    tabela23: that.tabela23,
                    unidade: that.unidade,
                    observacao: that.observacao,
                    exames: that.exames,
                    epis: that.epis,
                    complemento: that.complemento,
                    atividadeEspecial: that.atividadeEspecial,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        // that.riscos = response.data;
                        // that.descricao = '';
                        // that.nome = '';
                        // that.grupo = '';
                        // that.meio = '';
                        // that.dano = '';
                        // that.enquadramento = '';
                        // that.numero = '';
                        // that.anexo = '';
                        // that.limite = '';
                        // that.nivel = '';
                        // that.insalubridade = '';
                        // that.periculosidade = '';
                        // that.linac = '';
                        // that.aposentadoria = '';
                        // that.tabela23 = '';
                        // that.unidade = '';
                        // that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });

                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Atualizando risco...');
            if (this.descricao != '') {
                axios.post('/tabelas/riscos/update/' + this.id, {
                    descricao: that.descricao,
                    nome: that.nome,
                    grupo: that.grupo,
                    meio: that.meio,
                    dano: that.dano,
                    enquadramento: that.enquadramento,
                    numero: that.numero,
                    anexo: that.anexo,
                    limite: that.limite,
                    nivel: that.nivel,
                    insalubridade: that.insalubridade,
                    periculosidade: that.periculosidade,
                    linac: that.linac,
                    aposentadoria: that.aposentadoria,
                    tabela23: that.tabela23,
                    unidade: that.unidade,
                    observacao: that.observacao,
                    exames: that.exames,
                    epis: that.epis,
                    cas: that.cas,
                    unidades: that.unidades,
                    complemento: that.complemento,
                    atividadeEspecial: that.atividadeEspecial,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.riscos = response.data;
                        // that.descricao = '';
                        // that.nome = '';
                        // that.grupo = '';
                        // that.meio = '';
                        // that.dano = '';
                        // that.enquadramento = '';
                        // that.numero = '';
                        // that.anexo = '';
                        // that.limite = '';
                        // that.nivel = '';
                        // that.insalubridade = '';
                        // that.periculosidade = '';
                        // that.linac = '';
                        // that.aposentadoria = '';
                        // that.tabela23 = '';
                        // that.unidade = '';
                        // that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Atualizado com sucesso!');
                        });

                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.descricao = dados.descricaoRisco;
            this.nome = dados.nomeRisco;
            this.grupo = dados.grupoRisco;
            this.meio = dados.meioPropagacao;
            this.dano = dados.danoSaude;
            this.enquadramento = dados.enquadramento;
            this.numero = dados.numero;
            this.anexo = dados.anexo;
            this.limite = dados.limiteTolerancia;
            this.nivel = dados.nivelAcao;
            this.insalubridade = dados.insalubridade;
            this.periculosidade = dados.periculosidade;
            this.linac = dados.linac;
            this.aposentadoria = dados.aposentadoriaEspecial;
            this.tabela23 = dados.tabela23;
            this.observacao = dados.observacao;
            this.epis = dados.epis;
            this.cas = dados.cas;
            this.complemento = dados.complemento;
            this.atividadeEspecial = dados.atividadeEspecial;

            this.id = dados.idRisco;

            var that = this;
            axios.get('/tabelas/riscos/' + this.id + '/exames/').then(function (response) {
                that.exames = response.data;

                axios.get('/tabelas/riscos/' + that.id + '/unidades/').then(function (response) {
                    that.unidades = response.data;
                    console.log(that.unidades);
                    that.abrir();
                    that.sucesso('Dados carregados!');

                });

            });

            this.editar = true;

            this.value = {
                title: this.grupoDeRisco(this.grupo),
                valor: this.grupo,
                color: this.cor(this.grupo)
            }
        },

        abrir: function () {
            console.log(this.unidades);
            var that = this;

            this.$refs.myModal.show();

        },

        fechar: function () {

            this.editar = false;
            this.descricao = '';
            this.nome = '';
            this.grupo = '';
            this.meio = '';
            this.dano = '';
            this.enquadramento = '';
            this.numero = '';
            this.anexo = '';
            this.limite = '';
            this.novo = false;
            this.nivel = '';
            this.insalubridade = '';
            this.periculosidade = '';
            this.linac = '';
            this.aposentadoria = '';
            this.tabela23 = '';
            this.unidade = '';
            this.id = '';
            this.exames = [];
            this.cas = '';
            this.complemento = '';
            this.atividadeEspecial = 'NÃO';

            this.$refs.myModal.hide();
        },
        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },
        remover: function (dados) {
            // var that = this;

            this.deletar = dados.idRisco;

            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();

            // axios.get('/tabelas/riscos/remover/' + dados.idrisco).then(function(response){
            //     that.riscos = response.data;
            // });
        },

        certeza: function () {
            this.carregar('Removendo risco...');
            var that = this;
            axios.get('/tabelas/riscos/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {

                    that.riscos = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }
            });
        },

        selecionaGrupo: function () {
            if (this.value != null) {
                this.grupo = this.value.valor;
            }
        },

        ordenar: function () {

            if (this.coluna == 'id') {

                if (this.ordem == 'az') {

                    this.riscos.sort(function (a, b) {

                        if (a.idRisco > b.idRisco) {
                            return 1;
                        }

                        if (a.idRisco < b.idRisco) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.riscos.sort(function (a, b) {

                        if (a.idRisco > b.idRisco) {
                            return -1;
                        }

                        if (a.idRisco < b.idRisco) {
                            return 1;
                        }

                        return 0;

                    });
                }

            } else if (this.coluna == 'descricao') {
                if (this.ordem == 'az') {

                    this.riscos.sort(function (a, b) {

                        if (a.descricaoRisco > b.descricaoRisco) {
                            return 1;
                        }

                        if (a.descricaoRisco < b.descricaoRisco) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.riscos.sort(function (a, b) {

                        if (a.descricaoRisco > b.descricaoRisco) {
                            return -1;
                        }

                        if (a.descricaoRisco < b.descricaoRisco) {
                            return 1;
                        }

                        return 0;

                    });
                }
            } else if (this.coluna == 'nome') {
                if (this.ordem == 'az') {

                    this.riscos.sort(function (a, b) {

                        if (a.nomeRisco > b.nomeRisco) {
                            return 1;
                        }

                        if (a.nomeRisco < b.nomeRisco) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.riscos.sort(function (a, b) {

                        if (a.nomeRisco > b.nomeRisco) {
                            return -1;
                        }

                        if (a.nomeRisco < b.nomeRisco) {
                            return 1;
                        }

                        return 0;

                    });
                }
            } else if (this.coluna == 'classe') {
                if (this.ordem == 'az') {

                    this.riscos.sort(function (a, b) {

                        if (a.classe > b.classe) {
                            return 1;
                        }

                        if (a.classe < b.classe) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.riscos.sort(function (a, b) {

                        if (a.classe > b.classe) {
                            return -1;
                        }

                        if (a.classe < b.classe) {
                            return 1;
                        }

                        return 0;

                    });
                }
            }

        },

        pesquisar: function () {
            if (this.termo != '' && this.termo != ' ') {
                this.carregar('Realizando a busca...');
                console.log(this.termo);
                console.log(this.selecionado);

                var that = this;

                axios.get('/tabelas/riscos/buscar/' + that.selecionado + "/" + that.termo).then(function (
                    response) {

                    if (response.data.length > 0) {

                        that.riscos = response.data;
                        that.sucesso('Encontramos ' + response.data.length + ' resultado(s).');
                        that.busca = true;

                    } else {

                        that.alerta('Nenhum resultado nesta busca');
                        that.busca = false;

                    }

                });
            }

        },

        voltar: function () {
            var that = this;
            this.carregar('Recuperando todos os riscos...');
            axios.get('/tabelas/riscos/list').then(function (response) {
                that.riscos = response.data;
                that.sucesso('Todos os itens recuperados com sucesso!');
                that.busca = false;
                that.termo = '';
            });
        },
        foco: function (id) {
            scrollPageTo('#risco' + id);
            this.destaque = id;
            var that = this;
            setTimeout(function () {
                that.destaque = '';
                console.log('foi');
            }, 2000);
        },

        exameEmRisco: function (id) {

            /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */

            for (var i = 0; i < this.exames.length; i++) {
                if (this.exames[i].exame.idExame === id) {
                    return true;
                }
            }

            return false;
        },
        onSearch(search, loading) {
            loading(true);
            this.search(loading, search, this);
        },
        search: _.debounce((loading, search, vm) => {
            fetch(
                `${window.location.origin}/tabelas/epi/buscar/descricao/${escape(search)}`
            ).then(data => {
                console.log(data);
                data.json().then(json => {
                    vm.options = json
                });
                loading(false);
            });
        }, 350)
    },
    mounted() {
        var that = this;
        axios.get('/tabelas/riscos/list').then(function (response) {
            that.riscos = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        axios.get('/tabelas/riscos/unidades-de-medida/list').then(function (response) {
            that.todasUnidades = response.data;
        });

        axios.get('/tabelas/exames/list').then(function (response) {
            that.todosExames = response.data;
        });

        axios.get('/tabelas/epi/list').then(function (response) {
            that.todosEpis = response.data;
        });

    }
}
</script>

<style lang="scss">
.cx {
    float: left;
    height: 20px;
    width: 20px;
    margin-right: 5px;
    border: 1px solid black;
}

div.btn {
    cursor: pointer;
}

.btn-editar {
    color: rgba(0, 141, 76, );
}

.btn-remover {
    color: red;
}

.row-flex {
    flex-wrap: wrap;
    display: flex;

    .col-box {
        margin-bottom: 20px;

        .box-default,
        .box-successr {
            height: 100%;
        }
    }
}

.detalhes {
    padding-left: 20px;
}

th {
    font-weight: 400;
    cursor: pointer;

    &.selecionado {
        font-weight: 800;
    }
}

.input-group {
    select {

        -webkit-appearance: none;
    }

    input {

        -webkit-appearance: none;
    }

    &.unidade-medida {
        input {
            width: 100% !important;
            -webkit-appearance: none;
        }
    }
}

@keyframes highlight {
    0% {
        background: rgba(0, 141, 76, .6);
        /* lovely yellow colour */
    }

    100% {
        background: #ffffff;
    }
}

.highlight {
    animation: highlight 2s;
}

.multiselect__tags {
    padding-top: 8px;
}

.multiselect__single {
    margin-bottom: 8px;
}

/* If using colors */
span.color {
    border: 1px solid silver;
    vertical-align: middle;
    margin-right: 5px;
    min-width: 20px;
}
</style>
