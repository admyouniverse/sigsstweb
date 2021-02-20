<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html">
    </BlockUI>
    <div class="row">
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-fatores table-hover table-striped">
                    <tbody>
                        <tr>
                            <td colspan="7"></td>
                            <td colspan="4" class="text-center"><strong>Classificação Inicial dos Riscos</strong></td>
                            <td colspan="3" class="text-center"><strong>Classificação dos Riscos Atenuados</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong> Grupo </strong></td>
                            <td style="width: 170px"><strong> Risco </strong></td>
                            <td style="width: 130px"><strong> Fonte Geradora </strong></td>
                            <td><strong> Exp. </strong></td>
                            <td><strong> Valor </strong></td>
                            <td style="width: 70px"><strong> L. Tol.</strong></td>
                            <td style="width: 80px"><strong> N. Ação </strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixox[0]"><strong> {{ eixox[0].descricao }} </strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixoy[0]"><strong> {{ eixoy[0].descricao }} </strong></td>
                            <td style="width: 150px"><strong>Nivel</strong></td>
                            <td><strong>Medidas Existentes</strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixox[0]"><strong> {{ eixox[0].descricao }} </strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixoy[0]"><strong> {{ eixoy[0].descricao }} </strong></td>
                            <td style="width: 150px"><strong>Nivel</strong></td>
                            <td></td>
                        </tr>
                        <tr v-for="(fat, key) in fatores">
                            <td @click="editar(fat)" style="text-align:justify; vertical-align: middle">
                                <div class="cx" v-bind:style="cor(fat.risco.grupoRisco)"></div>
                                {{ grupoDeRisco(fat.risco.grupoRisco) }}
                            </td>
                            <td @click="editar(fat)">{{fat.risco.nomeRisco}}</td>
                            <td @click="editar(fat)">{{fat.fonteGeradora.descricao}} <span v-if="fat.complemento"> - {{fat.complemento}}</span></td>
                            <td>{{fat.exposicao}}</td>

                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUANTITATIVO' && fat.medida.riscoUnidadeMedida">
                                <span :class="{'text-success': fat.medida.medida < fat.medida.riscoUnidadeMedida.nivelAcao, 'text-warning': fat.medida.medida >= fat.medida.riscoUnidadeMedida.nivelAcao && fat.medida.medida < fat.medida.riscoUnidadeMedida.limiteTolerancia, 'text-danger': fat.medida.medida >= fat.medida.riscoUnidadeMedida.limiteTolerancia}">
                                    <strong>{{fat.medida.medida}} {{fat.medida.riscoUnidadeMedida.unidadeMedida.unidade}}</strong>
                                </span>
                            </td>

                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUANTITATIVO' && !fat.medida.riscoUnidadeMedida">Quantitativo</td>

                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUANTITATIVO' && fat.medida.riscoUnidadeMedida">{{fat.medida.riscoUnidadeMedida.limiteTolerancia}}{{fat.medida.riscoUnidadeMedida.unidadeMedida.unidade}}</td>
                            <!-- <td>{{fat.medida}}</td> -->
                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUALITATIVO' || !fat.medida.riscoUnidadeMedida">{{fat.medida.riscoUnidadeMedida}}</td>

                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUANTITATIVO' && fat.medida.riscoUnidadeMedida">{{fat.medida.riscoUnidadeMedida.nivelAcao}}{{fat.medida.riscoUnidadeMedida.unidadeMedida.unidade}}</td>
                            <td @click="editar(fat)" v-if="fat.risco.enquadramento == 'QUALITATIVO' || !fat.medida.riscoUnidadeMedida">{{fat.medida.riscoUnidadeMedida}}</td>

                            <td>
                                <select style="width: 120px;" v-model="fat.pesoX" @change="recalcular(fat, key)" class="form-control form-sem-fundo">
                                    <option :value="pesox" v-if="pesox.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco" v-for="pesox in pesosx">[{{pesox.peso}}] {{pesox.descricao}}</option>
                                </select>
                            </td>
                            <td>
                                <select style="width: 120px;" v-model="fat.pesoY" @change="recalcular(fat, key)" class="form-control form-sem-fundo">
                                    <option v-if="pesoy.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco" :value="pesoy" v-for="pesoy in pesosy">[{{pesoy.peso}}] {{pesoy.descricao}}</option>
                                </select>
                            </td>
                            <td @click="editar(fat)" v-if="fat.nivel" :style="'background-color:' + fat.nivel.cor">
                                {{ fat.pesoX.peso * fat.pesoY.peso }} - {{ fat.nivel.descricao }}
                            </td>
                            <td @click="editar(fat)" v-if="!fat.nivel"> </td>
                            <td @click="editar(fat)">{{fat.medidasExistentes}}</td>

                            <td>
                                <select style="width: 120px;" v-model="fat.pesoXAtenuado" @change="recalcularAtenuado(fat, key)" class="form-control form-sem-fundo">
                                    <option :value="pesox" v-if="pesox.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco" v-for="pesox in pesosx">[{{pesox.peso}}] {{pesox.descricao}}</option>
                                </select>
                            </td>
                            <td>
                                <select style="width: 120px;" v-model="fat.pesoYAtenuado" @change="recalcularAtenuado(fat, key)" class="form-control form-sem-fundo">
                                    <option v-if="pesoy.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco" :value="pesoy" v-for="pesoy in pesosy">[{{pesoy.peso}}] {{pesoy.descricao}}</option>
                                </select>
                            </td>

                            <td @click="editar(fat)" v-if="fat.nivelAtenuado" :style="'background-color:' + fat.nivelAtenuado.cor">
                                {{ fat.pesoXAtenuado.peso * fat.pesoYAtenuado.peso }} - {{ fat.nivelAtenuado.descricao }}
                            </td>

                            <td @click="editar(fat)" v-if="!fat.nivelAtenuado"> </td>
                            <!-- {{ fat.medida }} -->
                            <td>
                                <button class="btn btn-success btn-sm" @click="editar(fat)"><i class="fas fa-pencil-alt"></i></button>
                                <button class="btn btn-danger btn-sm" @click.stop="excluir(fat)"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <button @click="abrir" class="btn btn-success">Adicionar</button>
        </div>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Detalhes do Fator de Risco" @ok="salvar" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">

            <div class="col-md-4">
                <div class="form-group">
                    <label>Fator de Risco</label>

                    <select @change="getUnidades" v-model="fator.risco" class="form-control">
                        <option :value="risco" v-for="risco in riscos" value="risco" v-if="(!riscoEmRisco(risco)) || risco.idRisco == atual"> [{{ risco.idRisco }}] {{ risco.nomeRisco }}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>Fonte Geradora</label>
                    <select v-model="fator.fonteGeradora" class="form-control">
                        <option :value="fonte" v-for="fonte in fontes">[{{fonte.idFonteGeradora}}] {{ fonte.descricao }}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">

                <div class="form-group">
                    <label>Complemento</label>
                    <input type="text" v-model="fator.complemento" class="form-control">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label>Insalubridade</label>
                    <input type="text" class="form-control" disabled v-model="fator.risco.insalubridade">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Periculosidade</label>
                    <input type="text" class="form-control" disabled v-model="fator.risco.periculosidade">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>LINACH</label>
                    <input type="text" class="form-control" disabled v-model="fator.risco.linac">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Ap. Especial</label>
                    <input type="text" class="form-control" disabled v-model="fator.risco.aposentadoriaEspecial">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Ativ. Especial</label>
                    <input type="text" class="form-control" disabled v-model="fator.risco.atividadeEspecial">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>eSocial</label>
                    <input type="text" v-model="fator.risco.tabela23" disabled class="form-control">
                </div>
            </div>
        </div>

        <div class="row" v-if="fator.risco.enquadramento == 'QUANTITATIVO'">
            <div class="col-md-2">
                <div class="form-group">
                    <label>Dt. Medição</label>
                    <input type="date" :max="ambiente.ppra.dataHora" v-on:blur="calculaData" v-model="medidas.dataMedida" class="form-control">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Un. Medida</label>
                    <select @change="mudouUnidadeMedida" v-model="medidas.riscoUnidadeMedida" class="form-control" :disabled="unidades.length == 1">
                        <option :value="unidade" v-for="unidade in unidades"> {{ unidade.unidadeMedida.descricao }} </option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Resultado</label>
                    <div class="input-group" v-if="medidas.riscoUnidadeMedida">
                        <input v-model="medidas.medida" type="text" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{{medidas.riscoUnidadeMedida.unidadeMedida.unidade}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>Limite Tole.</label>
                    <div class="input-group" v-if="medidas.riscoUnidadeMedida">
                        <input type="text" disabled v-model="medidas.riscoUnidadeMedida.limiteTolerancia" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{{medidas.riscoUnidadeMedida.unidadeMedida.unidade}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label>N. de Ação</label>
                    <div class="input-group" v-if="medidas.riscoUnidadeMedida">
                        <input type="text" disabled class="form-control" v-model="medidas.riscoUnidadeMedida.nivelAcao">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{{medidas.riscoUnidadeMedida.unidadeMedida.unidade}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>Téc. Utilizada</label>
                    <input type="text" v-model="medidas.tecnicaUtilizada" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <h6>Classificação Inicial do Fator de Risco</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label>Exposição</label>
                    <select v-model="fator.exposicao" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="HP">HP</option>
                        <option value="HI">HI</option>
                        <option value="EV">EV</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Peso X - Probabilidade</label>
                    <select class="form-control" @change="calculaNivel" v-model="fator.pesoX">
                        <option :value="pesox" v-for="pesox in pesosx" v-if="pesox.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco">[{{pesox.peso}}] {{pesox.descricao}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Peso Y - Severidade</label>
                    <select class="form-control" @change="calculaNivel" v-model="fator.pesoY">
                        <option :value="pesoy" v-for="pesoy in pesosy" v-if="pesoy.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco">[{{pesoy.peso}}] {{pesoy.descricao}}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Nivel</label>
                    <div class="div-nivel" v-if="Object.keys(nivel).length > 0" :style="'background-color:' + nivel.cor">
                        {{ resultado }} - {{ nivel.descricao }}
                    </div>
                    <div class="div-nivel" v-if="!Object.keys(nivel).length"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    <label>Medidas Existentes</label>
                    <input type="text" v-model="fator.medidasExistentes" class="form-control">
                </div>
            </div>

            <div v-if="fator.risco.enquadramento == 'QUANTITATIVO'" class="col-md-4">
                Anexar o Resultado da Medição
                <button class="btn pull-right btn-block btn-success" v-if="medidas.idPpraAmbienteRiscoMedida && !fator.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Inserir PDF</button>
                <button class="btn  btn-success btn-50" v-if="medidas.idPpraAmbienteRiscoMedida && fator.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Atualizar PDF</button>
                <a class="btn  btn-secondary  btn-50" target="_blank" v-if="medidas.idPpraAmbienteRiscoMedida && fator.caminhoPdf" :href="'http://200.98.201.236:8081/' + fator.caminhoPdf"><i class="fas fa-eye"></i> Visualizar PDF</a>
                <input type="file" v-on:change="handleFileUpload()" id="file" ref="file" style="display:none">
            </div>
        </div>

        <div class="row">
            <div class="col-md-10">
                <div class="form-group">
                    <label>EPC</label>
                    <input type="text" v-model="fator.epc" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label>Eficaz</label>
                    <select v-model="fator.eficaz" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="SIM">Sim</option>
                        <option value="NAO">Não</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <h6>Classificação do Fator de Risco Atenuado</h6>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Peso X - Probabilidade</label>
                    <select class="form-control" @change="calculaNivelAtenuado" v-model="fator.pesoXAtenuado">
                        <option :value="pesox" v-for="pesox in pesosx" v-if="pesox.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco">[{{pesox.peso}}] {{pesox.descricao}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Peso Y - Severidade</label>
                    <select class="form-control" @change="calculaNivelAtenuado" v-model="fator.pesoYAtenuado">
                        <option :value="pesoy" v-for="pesoy in pesosy" v-if="pesoy.matrizRisco.idMatrizRisco == ambiente.ppra.matrizRisco.idMatrizRisco">[{{pesoy.peso}}] {{pesoy.descricao}}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Nivel</label>
                    <div class="div-nivel" v-if="Object.keys(nivelAtenuado).length > 0" :style="'background-color:' + nivelAtenuado.cor">
                        {{ resultadoAtenuado }} - {{ nivelAtenuado.descricao }}
                    </div>
                    <div class="div-nivel" v-if="!Object.keys(nivelAtenuado).length"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Observação</label>
                    <textarea rows="2" v-model="fator.observacao" class="form-control"></textarea>
                </div>
            </div>
        </div>

        <div class="row" v-if="historicos.length > 0 && fator.risco.enquadramento == 'QUANTITATIVO'">
            <div class="col-md-12">
                <table class="table table-fatores table-hover table-striped">
                    <tbody>
                        <tr>
                            <td>
                                GRO
                            </td>
                            <td>
                                Dt de Medição
                            </td>
                            <td>
                                Resultado
                            </td>

                            <td>
                                Téc Utilizada
                            </td>
                            <td>
                                PDF
                            </td>
                        </tr>
                        <tr v-for="historico in historicos" v-if="ambiente.idOrigem == historico.ppraAmbienteRisco.ppraAmbienteTrabalho.idOrigem">
                            <td class="text-center">
                                V {{ historico.ppraAmbienteRisco.ppraAmbienteTrabalho.ppra.versao }} de {{ historico.ppraAmbienteRisco.ppraAmbienteTrabalho.ppra.dataHora | moment('DD/MM/YYYY') }}
                            </td>
                            <td class="text-center">
                                {{ historico.dataMedida | moment("DD/MM/YYYY") }}
                            </td>
                            <td class="text-center">
                                <span v-if="historico.riscoUnidadeMedida" :class="{'text-success': historico.medida < historico.riscoUnidadeMedida.nivelAcao, 'text-warning': historico.medida >= historico.riscoUnidadeMedida.nivelAcao && historico.medida < historico.riscoUnidadeMedida.limiteTolerancia, 'text-danger': historico.medida >= historico.riscoUnidadeMedida.limiteTolerancia}">
                                    <strong>{{historico.medida}} {{historico.riscoUnidadeMedida.unidadeMedida.unidade}}</strong>
                                </span>
                            </td>
                            <td class="text-center">
                                {{ historico.tecnicaUtilizada }}
                            </td>
                            <td class="text-center">
                            
                                    <a class="btn  btn- secondary btn-sm" target="_blank" v-if="historico.ppraAmbienteRisco.caminhoPdf" :href="'http://200.98.201.236:8081/' + historico.ppraAmbienteRisco.caminhoPdf"><i class="fas fa-eye"></i> Visualizar PDF</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['ambiente', 'ppra'],
    data() {
        return {
            fator: {
                "idPpraAmbienteRisco": 0,
                "ambienteTrabalho": "",
                "fonteGeradora": "",
                "complemento": "",
                "epc": "",
                "eficaz": "",
                "exposicao": "",
                "criterio": "",
                "pesoX": "",
                "medidasExistentes": "",
                "pesoY": "",
                "pesoYAtenuado": {},
                "pesoXAtenuado": {},
                "dataLancamento": "",
                "observacao": "",
                "risco": "",
                "unidade": {
                    "unidadeMedida": {}
                }
            },
            medidas: {
                "idPpraAmbienteRiscoMedida": 0,
                "ppraAmbienteRisco": 0,
                "medida": 0,
                "operadorRelacional": "",
                "dataMedida": "",
                "tecnicaUtilizada": "",
                "unidadeMedida": {
                    "unidadeMedida": {
                        "unidade": {}
                    }
                }
            },
            riscos: [],
            fontes: [],
            unidades: [],
            pesosx: [],
            pesosy: [],
            resultado: 0,
            resultadoAtenuado: 0,
            eixox: {},
            eixoy: {},
            criterios: [],
            fatores: [],
            nivel: {},
            nivelAtenuado: {},
            atual: '',
            carregando: true,
            historicos: [],
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            file: ''
        }
    },

    methods: {

        abrirUpload() {
            $("#file").click();
        },

        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.submitFile();
        },

        submitFile() {
            /*
                    Initialize the form data
                */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

            /*
              Make the request to the POST /single-file URL
            */
            var that = this;
            axios.post('http://200.98.201.236:8081/upload-file',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (response) {
                    console.log('SUCCESS!!');
                    that.fator.caminhoPdf = response.data.data.new_file_name;
                    that.$forceUpdate();
                })
                .catch(function () {
                    console.log('FAILURE!!');
                });
        },

        validar(callback) {

            var that = this;

            if (this.fator.risco.enquadramento == 'QUANTITATIVO') {

                if (this.medidas.riscoUnidadeMedida != undefined && Object.keys(this.medidas.riscoUnidadeMedida).length > 0 && Object.keys(this.medidas.riscoUnidadeMedida.unidadeMedida).length) {
                    callback();
                } else {
                    that.$alert('Preencha a unidade de medida!', 'Ops.', 'warning');
                }
            } else {
                callback();
            }

        },

        mudouUnidadeMedida: function () {
            console.log(this.medidas.riscoUnidadeMedida);
        },

        salvar(evt) {

            evt.preventDefault();
            var that = this;

            this.validar(function () {

                that.carregar('Salvando...');
                that.fator.ambienteTrabalho = that.ambiente;
                console.log('MEDIDAS', that.medidas);
                that.fator.medidas = that.medidas;
                axios.post('/gro/ambiente-risco', {
                    fator: that.fator,
                    medidas: {
                        data: that.medidas.dataMedida,
                        riscoUnidadeMedida: that.medidas.riscoUnidadeMedida,
                        medida: that.medidas.medida,
                        tecnicaUtilizada: that.medidas.tecnicaUtilizada,
                        idPpraAmbienteRiscoMedida: that.medidas.idPpraAmbienteRiscoMedida
                    }
                }).then(function (response) {
                    that.carregando = false;
                    if (response.data != 'erro') {
                        that.fatores = response.data;
                        that.$alert('Salvo.', 'Sucesso!', 'success');
                        that.fechar();
                    } else {
                        that.$alert('Verifique os dados.', 'Erro ao salvar!', 'warning');
                    }

                });
            });
        },

        excluir(fat) {

            var that = this;

            this.carregar('Excluindo...');
            axios.post('/gro/ambiente-risco/remover', {
                idAmbienteRiscoMedida: fat.medida.idPpraAmbienteRiscoMedida,
                idAmbienteRisco: fat.idPpraAmbienteRisco,
                ambiente: that.ambiente.idPpraAmbienteTrabalho
            }).then(function (response) {
                if (response.data != 'erro') {
                    that.carregando = false;
                    that.$alert('Excluido.', 'Sucesso!', 'success');
                    that.fatores = response.data;
                } else {
                    that.carregando = false;
                    that.$alert('Verifique os dados.', 'Erro!', 'warning');
                }

            });
        },

        riscoEmRisco(risc) {

            for (var i = 0; i < this.fatores.length; i++) {
                if (this.fatores[i].risco.idRisco === risc.idRisco) {
                    return true;
                }
            }

            return false;
        },

        calculaData() {

            var that = this;

            var dataInclusao = new Date(this.medidas.dataMedida);
            var data = new Date(this.ambiente.ppra.dataHora);

            if (dataInclusao > data) {

                data.setDate(data.getDate() + 1);

                this.$alert('Data precisa ser menor que ' + (data.getDate()) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
                that.medidas.dataMedida = that.ambiente.ppra.dataHora;
            }

        },

        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        recalcular(fat, key) {
            this.fator = fat;
            this.medidas = fat.medida;
            var that = this;
            this.fator.ambienteTrabalho = that.ambiente;
            axios.post('/gro/ambiente-risco', {
                fator: that.fator,
                medidas: that.medidas
            }).then(function (response) {
                that.carregando = false;
                that.fatores = response.data;
            });
        },

        recalcularAtenuado(fat, key) {
            this.fator = fat;
            this.medidas = fat.medida;
            var that = this;
            this.fator.ambienteTrabalho = that.ambiente;
            axios.post('/gro/ambiente-risco', {
                fator: that.fator,
                medidas: that.medidas
            }).then(function (response) {
                that.carregando = false;
                that.fatores = response.data;
            });
        },

        calculaNivel() {
            if (this.fator.pesoX && this.fator.pesoY) {
                if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
                    this.resultado = parseInt(this.fator.pesoX.peso) * parseInt(this.fator.pesoY.peso);
                } else {
                    this.resultado = parseInt(this.fator.pesoX.peso) + parseInt(this.fator.pesoY.peso);
                }

                var that = this;

                axios.get('/nivel-matriz/peso/' + this.resultado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
                    that.nivel = response.data;
                });
            }
        },

        calculaNivelAtenuado() {
            if (this.fator.pesoXAtenuado && this.fator.pesoYAtenuado) {
                if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
                    this.resultadoAtenuado = parseInt(this.fator.pesoXAtenuado.peso) * parseInt(this.fator.pesoYAtenuado.peso);
                } else {
                    this.resultadoAtenuado = parseInt(this.fator.pesoXAtenuado.peso) + parseInt(this.fator.pesoYAtenuado.peso);
                }

                var that = this;

                axios.get('/nivel-matriz/peso/' + this.resultadoAtenuado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
                    that.nivelAtenuado = response.data;
                });
            }
        },

        editar(fat) {

            this.fator = Object.assign({}, fat);

            this.carregar("Buscando dados...");

            if (fat.medida) {
                this.medidas = fat.medida;
            } else {
                this.medidas = {
                    "idPpraAmbienteRiscoMedida": 0,
                    "ppraAmbienteRisco": 0,
                    "medida": 0,
                    "operadorRelacional": "",
                    "dataMedida": "",
                    "tecnicaUtilizada": "",
                    "unidadeMedida": {
                        "unidadeMedida": {
                            "unidade": {}
                        }
                    }
                }
            }
            console.log(this.fator);

            var that = this;

            axios.post('/gro/ambiente-risco/historico', {
                idEmpresaContrato: that.ppra.empresasContrato[0].idEmpresaContrato,
                idOrigem: that.ambiente.idOrigem,
                idRisco: that.fator.risco.idRisco
            }).then(function (response) {
                that.historicos = response.data;
                console.log('historicos', that.historicos);
            });

            this.atual = this.fator.risco.idRisco;

            this.calculaNivel();
            this.calculaNivelAtenuado();

            this.getUnidades(function () {
                that.$refs.myModal.show();
                that.carregando = false;
            });

        },

        fechar() {
            this.$refs.myModal.hide();
        },

        abrir() {
            this.fator = {
                "idPpraAmbienteRisco": 0,
                "ambienteTrabalho": "",
                "fonteGeradora": "",
                "complemento": "",
                "epc": "",
                "eficaz": "",
                "exposicao": "",
                "criterio": "",
                "pesoX": "",
                "pesoY": "",
                "dataLancamento": "",
                "medidasExistentes": "",
                "observacao": "",
                "risco": "",
                "unidade": {
                    "unidadeMedida": {}
                }
            };
            this.medidas = {
                "idPpraAmbienteRiscoMedida": 0,
                "ppraAmbienteRisco": 0,
                "medida": 0,
                "operadorRelacional": "",
                "dataMedida": "",
                "tecnicaUtilizada": "",
                "unidadeMedida": {}
            };

            this.historicos = [];

            this.nivel = {};

            this.atual = 0;
            this.$refs.myModal.show();
        },

        getUnidades(callback) {
            var that = this;

            axios.get('/tabelas/riscos/' + this.fator.risco.idRisco + '/unidades').then(function (response) {
                that.unidades = response.data;

                if (!that.medidas.riscoUnidadeMedida) {
                    if (that.unidades.length == 1 || that.medidas.idAmbienteRiscoMedida != 0) {
                        that.medidas.riscoUnidadeMedida = that.unidades[0];
                    } else {
                        that.medidas.riscoUnidadeMedida = {
                            "unidadeMedida": {
                                "unidadeMedida": {
                                    "unidade": {}
                                }
                            }
                        }
                    }
                }

                if (callback) callback();

            });

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
                return "B";
            } else if (risco == 'ERGONÔMICO') {
                return "E";
            } else if (risco == 'ACIDENTE') {
                return "A";
            } else if (risco == 'FÍSICO') {
                return "F";
            } else if (risco == 'QUÍMICO') {
                return "Q";
            } else if (risco == 'PERICULOSOS') {
                return "P";
            } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
                return "AFR";
            } else if (risco == 'PENOSOS') {
                return "Pen";
            } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
                return "Aus FR";
            }

        },

    },

    mounted() {
        var that = this;

        axios.get('/tabelas/riscos/list').then(function (response) {
            that.riscos = response.data;
        });

        axios.get('/tabelas/riscos/fontes-geradoras/list').then(function (response) {
            that.fontes = response.data;
        });

        axios.get('/peso-x/list').then(function (response) {
            that.pesosx = response.data;
        });

        axios.get('/peso-y/list').then(function (response) {
            that.pesosy = response.data;
        });

        axios.get('/eixo-y/list').then(function (response) {
            that.eixoy = response.data;

        });

        axios.get('/eixo-x/list').then(function (response) {
            that.eixox = response.data;
        });

        axios.get('/gro/ambiente-risco/' + this.ambiente.idPpraAmbienteTrabalho + '/list').then(function (response) {

            that.fatores = response.data;

            console.log(that.fatores);
            that.carregando = false;
            that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');

        });

    }
}
</script>

<style lang="scss">
.form-sem-fundo {
    background-color: transparent;
    border: none;

}

.div-nivel {
    width: 100%;
    height: calc(1.6em + 0.75rem + 2px);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: 900;
    padding: 6px;
}

.btn-50 {
    width: 48%;
}

.table-fatores {
    margin-bottom: 10px;

    tr {
        th {
            font-weight: bold;
        }

        td {
            cursor: pointer;
        }

        td,
        th {
            white-space: nowrap;
            border: 1px solid #dee2e6;
        }
    }
}
</style>
