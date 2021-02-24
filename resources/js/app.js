/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vuex from 'vuex';
import BlockUI from 'vue-blockui';
import { VueMaskDirective } from 'v-mask'
import JsonExcel from 'vue-json-excel'
import BootstrapVue from 'bootstrap-vue'
import vSelect from 'vue-select'
import Multiselect from 'vue-multiselect'
import VueSimpleAlert from "vue-simple-alert"



Vue.directive('mask', VueMaskDirective);
Vue.use(BlockUI);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(require('vue-moment'));
Vue.use(VueSimpleAlert);


// register globally
Vue.component('multiselect', Multiselect)

// import VueCropper from 'vue-cropper' 

// Vue.use(VueCropper)
 
// //  
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);

const files = require.context('./', true, /\.vue$/i, 'lazy').keys();

files.forEach(file => {
    Vue.component(file.split('/').pop().split('.')[0], () => import(`${file}`));
});

// console.log(files.keys());
// files.keys().map(key => {console.log("'" + key.split('/').pop().split('.')[0] + "':() => import(\n/* webpackChunkName: \"js/" + key.split('/').pop().split('.')[0] + "\" */ " 
//  + "\n'" + key + "'")});
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('downloadExcel', JsonExcel);
Vue.component('v-select', vSelect); 


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const store = new Vuex.Store({
    state: {
        imagem: '',
        showModal: false,
        avatar: null,
        postos: null
    }
});

const app = new Vue({
    el: '#app',
    store,
//     components: {
//         'AgenteCausadorComponente':() => import(
// /* webpackChunkName: "js/AgenteCausadorComponente" */ 
// './components/AgenteCausadorComponente.vue'
// ),
// 'AgenteCausadorDeDoencaProfissionalComponente':() => import(
// /* webpackChunkName: "js/AgenteCausadorDeDoencaProfissionalComponente" */ 
// './components/AgenteCausadorDeDoencaProfissionalComponente.vue'
// ),
// 'AtividadePericulosaComponente':() => import(
// /* webpackChunkName: "js/AtividadePericulosaComponente" */ 
// './components/AtividadePericulosaComponente.vue'
// ),
// 'AtividadesComponente':() => import(
// /* webpackChunkName: "js/AtividadesComponente" */ 
// './components/AtividadesComponente.vue'
// ),
// 'CapacitacaoComponente':() => import(
// /* webpackChunkName: "js/CapacitacaoComponente" */ 
// './components/CapacitacaoComponente.vue'
// ),
// 'CategoriasEpiComponente':() => import(
// /* webpackChunkName: "js/CategoriasEpiComponente" */ 
// './components/CategoriasEpiComponente.vue'
// ),
// 'CboComponente':() => import(
// /* webpackChunkName: "js/CboComponente" */ 
// './components/CboComponente.vue'
// ),
// 'CidComponente':() => import(
// /* webpackChunkName: "js/CidComponente" */ 
// './components/CidComponente.vue'
// ),
// 'CidadesComponente':() => import(
// /* webpackChunkName: "js/CidadesComponente" */ 
// './components/CidadesComponente.vue'
// ),
// 'ClinicasComponente':() => import(
// /* webpackChunkName: "js/ClinicasComponente" */ 
// './components/ClinicasComponente.vue'
// ),
// 'CnaeComponente':() => import(
// /* webpackChunkName: "js/CnaeComponente" */ 
// './components/CnaeComponente.vue'
// ),
// 'CodificacaoAcidenteDeTrabalhoComponente':() => import(
// /* webpackChunkName: "js/CodificacaoAcidenteDeTrabalhoComponente" */ 
// './components/CodificacaoAcidenteDeTrabalhoComponente.vue'
// ),
// 'EmpresaSessao':() => import(
// /* webpackChunkName: "js/EmpresaSessao" */ 
// './components/EmpresaSessao.vue'
// ),
// 'EpiComponente':() => import(
// /* webpackChunkName: "js/EpiComponente" */ 
// './components/EpiComponente.vue'
// ),
// 'ExamesComponente':() => import(
// /* webpackChunkName: "js/ExamesComponente" */ 
// './components/ExamesComponente.vue'
// ),
// 'ExampleComponent':() => import(
// /* webpackChunkName: "js/ExampleComponent" */ 
// './components/ExampleComponent.vue'
// ),
// 'FontesGeradorasComponente':() => import(
// /* webpackChunkName: "js/FontesGeradorasComponente" */ 
// './components/FontesGeradorasComponente.vue'
// ),
// 'GfipComponente':() => import(
// /* webpackChunkName: "js/GfipComponente" */ 
// './components/GfipComponente.vue'
// ),
// 'GruposControleComponente':() => import(
// /* webpackChunkName: "js/GruposControleComponente" */ 
// './components/GruposControleComponente.vue'
// ),
// 'GruposEpiComponente':() => import(
// /* webpackChunkName: "js/GruposEpiComponente" */ 
// './components/GruposEpiComponente.vue'
// ),
// 'ImagemComponente':() => import(
// /* webpackChunkName: "js/ImagemComponente" */ 
// './components/ImagemComponente.vue'
// ),
// 'LesoesComponente':() => import(
// /* webpackChunkName: "js/LesoesComponente" */ 
// './components/LesoesComponente.vue'
// ),
// 'LoginComponent':() => import(
// /* webpackChunkName: "js/LoginComponent" */ 
// './components/LoginComponent.vue'
// ),
// 'MembrosComponente':() => import(
// /* webpackChunkName: "js/MembrosComponente" */ 
// './components/MembrosComponente.vue'
// ),
// 'ModalCrop':() => import(
// /* webpackChunkName: "js/ModalCrop" */ 
// './components/ModalCrop.vue'
// ),
// 'MotivoDeAfastamentoComponente':() => import(
// /* webpackChunkName: "js/MotivoDeAfastamentoComponente" */ 
// './components/MotivoDeAfastamentoComponente.vue'
// ),
// 'NecessidadesComponente':() => import(
// /* webpackChunkName: "js/NecessidadesComponente" */ 
// './components/NecessidadesComponente.vue'
// ),
// 'PaisesComponente':() => import(
// /* webpackChunkName: "js/PaisesComponente" */ 
// './components/PaisesComponente.vue'
// ),
// 'RiscosComponente':() => import(
// /* webpackChunkName: "js/RiscosComponente" */ 
// './components/RiscosComponente.vue'
// ),
// 'TiposDeLogradouroComponente':() => import(
// /* webpackChunkName: "js/TiposDeLogradouroComponente" */ 
// './components/TiposDeLogradouroComponente.vue'
// ),
// 'UnidadeComponente':() => import(
// /* webpackChunkName: "js/UnidadeComponente" */ 
// './components/UnidadeComponente.vue'
// ),
// 'AmbienteDeTrabalhoComponente':() => import(
// /* webpackChunkName: "js/AmbienteDeTrabalhoComponente" */ 
// './components/empresa/AmbienteDeTrabalhoComponente.vue'
// ),
// 'EmpresaAmbienteCapacitacao':() => import(
// /* webpackChunkName: "js/EmpresaAmbienteCapacitacao" */ 
// './components/empresa/EmpresaAmbienteCapacitacao.vue'
// ),
// 'EmpresaAmbienteEpi':() => import(
// /* webpackChunkName: "js/EmpresaAmbienteEpi" */ 
// './components/empresa/EmpresaAmbienteEpi.vue'
// ),
// 'EmpresaAmbientes':() => import(
// /* webpackChunkName: "js/EmpresaAmbientes" */ 
// './components/empresa/EmpresaAmbientes.vue'
// ),
// 'EmpresaCapacitacaoComponente':() => import(
// /* webpackChunkName: "js/EmpresaCapacitacaoComponente" */ 
// './components/empresa/EmpresaCapacitacaoComponente.vue'
// ),
// 'EmpresaContratosComponente':() => import(
// /* webpackChunkName: "js/EmpresaContratosComponente" */ 
// './components/empresa/EmpresaContratosComponente.vue'
// ),
// 'EmpresaDetalhesComponente':() => import(
// /* webpackChunkName: "js/EmpresaDetalhesComponente" */ 
// './components/empresa/EmpresaDetalhesComponente.vue'
// ),
// 'EmpresaEmpregadosComponente':() => import(
// /* webpackChunkName: "js/EmpresaEmpregadosComponente" */ 
// './components/empresa/EmpresaEmpregadosComponente.vue'
// ),
// 'EmpresaEpiComponente':() => import(
// /* webpackChunkName: "js/EmpresaEpiComponente" */ 
// './components/empresa/EmpresaEpiComponente.vue'
// ),
// 'EmpresaEventosComponente':() => import(
// /* webpackChunkName: "js/EmpresaEventosComponente" */ 
// './components/empresa/EmpresaEventosComponente.vue'
// ),
// 'EmpresaHistoricoComponente':() => import(
// /* webpackChunkName: "js/EmpresaHistoricoComponente" */ 
// './components/empresa/EmpresaHistoricoComponente.vue'
// ),
// 'EmpresaListarComponente':() => import(
// /* webpackChunkName: "js/EmpresaListarComponente" */ 
// './components/empresa/EmpresaListarComponente.vue'
// ),
// 'EmpresasAmbientesComponente':() => import(
// /* webpackChunkName: "js/EmpresasAmbientesComponente" */ 
// './components/empresa/EmpresasAmbientesComponente.vue'
// ),
// 'EventosComponente':() => import(
// /* webpackChunkName: "js/EventosComponente" */ 
// './components/empresa/EventosComponente.vue'
// ),
// 'FuncaoComponente':() => import(
// /* webpackChunkName: "js/FuncaoComponente" */ 
// './components/empresa/FuncaoComponente.vue'
// ),
// 'JornadasComponente':() => import(
// /* webpackChunkName: "js/JornadasComponente" */ 
// './components/empresa/JornadasComponente.vue'
// ),
// 'ProfissionalComponente':() => import(
// /* webpackChunkName: "js/ProfissionalComponente" */ 
// './components/empresa/ProfissionalComponente.vue'
// ),
// 'CoresEpiComponente':() => import(
// /* webpackChunkName: "js/CoresEpiComponente" */ 
// './components/epi/CoresEpiComponente.vue'
// ),
// 'FornecedoresComponente':() => import(
// /* webpackChunkName: "js/FornecedoresComponente" */ 
// './components/epi/FornecedoresComponente.vue'
// ),
// 'TamanhosEpiComponente':() => import(
// /* webpackChunkName: "js/TamanhosEpiComponente" */ 
// './components/epi/TamanhosEpiComponente.vue'
// ),
// 'CriterioComponente':() => import(
// /* webpackChunkName: "js/CriterioComponente" */ 
// './components/matriz/CriterioComponente.vue'
// ),
// 'EixoXComponente':() => import(
// /* webpackChunkName: "js/EixoXComponente" */ 
// './components/matriz/EixoXComponente.vue'
// ),
// 'EixoYComponente':() => import(
// /* webpackChunkName: "js/EixoYComponente" */ 
// './components/matriz/EixoYComponente.vue'
// ),
// 'MatrizComponente':() => import(
// /* webpackChunkName: "js/MatrizComponente" */ 
// './components/matriz/MatrizComponente.vue'
// ),
// 'MatrizDetalhes':() => import(
// /* webpackChunkName: "js/MatrizDetalhes" */ 
// './components/matriz/MatrizDetalhes.vue'
// ),
// 'NivelComponente':() => import(
// /* webpackChunkName: "js/NivelComponente" */ 
// './components/matriz/NivelComponente.vue'
// ),
// 'PesoXComponente':() => import(
// /* webpackChunkName: "js/PesoXComponente" */ 
// './components/matriz/PesoXComponente.vue'
// ),
// 'PesoYComponente':() => import(
// /* webpackChunkName: "js/PesoYComponente" */ 
// './components/matriz/PesoYComponente.vue'
// ),
// 'AsoComponente':() => import(
// /* webpackChunkName: "js/AsoComponente" */ 
// './components/medicina/AsoComponente.vue'
// ),
// 'ExamesComplementaresComponente':() => import(
// /* webpackChunkName: "js/ExamesComplementaresComponente" */ 
// './components/medicina/ExamesComplementaresComponente.vue'
// ),
// 'ProntuarioAfastamento':() => import(
// /* webpackChunkName: "js/ProntuarioAfastamento" */ 
// './components/medicina/ProntuarioAfastamento.vue'
// ),
// 'ProntuarioGrupoControle':() => import(
// /* webpackChunkName: "js/ProntuarioGrupoControle" */ 
// './components/medicina/ProntuarioGrupoControle.vue'
// ),
// 'ProntuarioMedico':() => import(
// /* webpackChunkName: "js/ProntuarioMedico" */ 
// './components/medicina/ProntuarioMedico.vue'
// ),
// 'ProntuarioPcd':() => import(
// /* webpackChunkName: "js/ProntuarioPcd" */ 
// './components/medicina/ProntuarioPcd.vue'
// ),
// 'SolicitacaoExame':() => import(
// /* webpackChunkName: "js/SolicitacaoExame" */ 
// './components/medicina/SolicitacaoExame.vue'
// ),
// 'PcmsoAmbiente':() => import(
// /* webpackChunkName: "js/PcmsoAmbiente" */ 
// './components/pcmso/PcmsoAmbiente.vue'
// ),
// 'PcmsoCapa':() => import(
// /* webpackChunkName: "js/PcmsoCapa" */ 
// './components/pcmso/PcmsoCapa.vue'
// ),
// 'PcmsoComponente':() => import(
// /* webpackChunkName: "js/PcmsoComponente" */ 
// './components/pcmso/PcmsoComponente.vue'
// ),
// 'PcmsoDetalhes':() => import(
// /* webpackChunkName: "js/PcmsoDetalhes" */ 
// './components/pcmso/PcmsoDetalhes.vue'
// ),
// 'PcmsoFuncoes':() => import(
// /* webpackChunkName: "js/PcmsoFuncoes" */ 
// './components/pcmso/PcmsoFuncoes.vue'
// ),
// 'PcmsoHistoricoExames':() => import(
// /* webpackChunkName: "js/PcmsoHistoricoExames" */ 
// './components/pcmso/PcmsoHistoricoExames.vue'
// ),
// 'PcmsoHistoricoRevisao':() => import(
// /* webpackChunkName: "js/PcmsoHistoricoRevisao" */ 
// './components/pcmso/PcmsoHistoricoRevisao.vue'
// ),
// 'PcmsoPlanoAcao':() => import(
// /* webpackChunkName: "js/PcmsoPlanoAcao" */ 
// './components/pcmso/PcmsoPlanoAcao.vue'
// ),
// 'PcmsoAmbienteDetalhes':() => import(
// /* webpackChunkName: "js/PcmsoAmbienteDetalhes" */ 
// './components/pcmso/ambiente/PcmsoAmbienteDetalhes.vue'
// ),
// 'PcmsoAmbienteExames':() => import(
// /* webpackChunkName: "js/PcmsoAmbienteExames" */ 
// './components/pcmso/ambiente/PcmsoAmbienteExames.vue'
// ),
// 'PcmsoAmbienteRiscos':() => import(
// /* webpackChunkName: "js/PcmsoAmbienteRiscos" */ 
// './components/pcmso/ambiente/PcmsoAmbienteRiscos.vue'
// ),
// 'PcmsoAso':() => import(
// /* webpackChunkName: "js/PcmsoAso" */ 
// './components/pcmso/ambiente/PcmsoAso.vue'
// ),
// 'PessoaCapacitacaoComponente':() => import(
// /* webpackChunkName: "js/PessoaCapacitacaoComponente" */ 
// './components/pessoa/PessoaCapacitacaoComponente.vue'
// ),
// 'PessoaDetalhesComponente':() => import(
// /* webpackChunkName: "js/PessoaDetalhesComponente" */ 
// './components/pessoa/PessoaDetalhesComponente.vue'
// ),
// 'PessoaFuncaoComponente':() => import(
// /* webpackChunkName: "js/PessoaFuncaoComponente" */ 
// './components/pessoa/PessoaFuncaoComponente.vue'
// ),
// 'PessoaListarComponente':() => import(
// /* webpackChunkName: "js/PessoaListarComponente" */ 
// './components/pessoa/PessoaListarComponente.vue'
// ),
// 'PpraAmbiente':() => import(
// /* webpackChunkName: "js/PpraAmbiente" */ 
// './components/ppra/PpraAmbiente.vue'
// ),
// 'PpraCapa':() => import(
// /* webpackChunkName: "js/PpraCapa" */ 
// './components/ppra/PpraCapa.vue'
// ),
// 'PpraComponente':() => import(
// /* webpackChunkName: "js/PpraComponente" */ 
// './components/ppra/PpraComponente.vue'
// ),
// 'PpraDetalhes':() => import(
// /* webpackChunkName: "js/PpraDetalhes" */ 
// './components/ppra/PpraDetalhes.vue'
// ),
// 'PpraHistoricoExames':() => import(
// /* webpackChunkName: "js/PpraHistoricoExames" */ 
// './components/ppra/PpraHistoricoExames.vue'
// ),
// 'PpraHistoricoRevisao':() => import(
// /* webpackChunkName: "js/PpraHistoricoRevisao" */ 
// './components/ppra/PpraHistoricoRevisao.vue'
// ),
// 'PpraPlanoAcao':() => import(
// /* webpackChunkName: "js/PpraPlanoAcao" */ 
// './components/ppra/PpraPlanoAcao.vue'
// ),
// 'PpraAmbienteDetalhes':() => import(
// /* webpackChunkName: "js/PpraAmbienteDetalhes" */ 
// './components/ppra/ambiente/PpraAmbienteDetalhes.vue'
// ),
// 'PpraAmbienteExames':() => import(
// /* webpackChunkName: "js/PpraAmbienteExames" */ 
// './components/ppra/ambiente/PpraAmbienteExames.vue'
// ),
// 'PpraAso':() => import(
// /* webpackChunkName: "js/PpraAso" */ 
// './components/ppra/ambiente/PpraAso.vue'
// ),
// 'PpraFatores':() => import(
// /* webpackChunkName: "js/PpraFatores" */ 
// './components/ppra/ambiente/PpraFatores.vue'
// ),
// 'PpraFuncoes':() => import(
// /* webpackChunkName: "js/PpraFuncoes" */ 
// './components/ppra/ambiente/PpraFuncoes.vue'
// ),
// 'EntradaEpi':() => import(
// /* webpackChunkName: "js/EntradaEpi" */ 
// './components/seguranca/EntradaEpi.vue'
// ),
// 'EntradaEpiMultipla':() => import(
// /* webpackChunkName: "js/EntradaEpiMultipla" */ 
// './components/seguranca/EntradaEpiMultipla.vue'
// ),
// 'EntregaEpi':() => import(
// /* webpackChunkName: "js/EntregaEpi" */ 
// './components/seguranca/EntregaEpi.vue'
// ),
// 'EntregaEpiEditar':() => import(
// /* webpackChunkName: "js/EntregaEpiEditar" */ 
// './components/seguranca/EntregaEpiEditar.vue'
// ),
// 'EpiEmpresaComponente':() => import(
// /* webpackChunkName: "js/EpiEmpresaComponente" */ 
// './components/seguranca/EpiEmpresaComponente.vue'
// ),
// 'FichaEntrega':() => import(
// /* webpackChunkName: "js/FichaEntrega" */ 
// './components/seguranca/FichaEntrega.vue'
// ),
// 'PostoEntrega':() => import(
// /* webpackChunkName: "js/PostoEntrega" */ 
// './components/seguranca/PostoEntrega.vue'
// ),
// 'PostoEntregaItens':() => import(
// /* webpackChunkName: "js/PostoEntregaItens" */ 
// './components/seguranca/PostoEntregaItens.vue'),
//     },
    mounted() {
        this.$root.$on('montou', function($id) {
            console.log($id);

            $.fn.dataTable.moment('DD/MM/YYYY'); //Formatação sem Hora


            $($id[0]).DataTable({
                "lengthMenu": [
                    [50, -1],
                    [50, "Todos"]
                ],
                "columnDefs": [{
                    "targets": 'no-sort',
                    "orderable": false,
                }],
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                }
            });
        });


        this.$root.$on('atualizou', function($id) {

            $($id[0]).DataTable().destroy();
            setTimeout(function() {
                $($id[0]).DataTable({
                    "lengthMenu": [
                        [50, -1],
                        [50, "Todos"]
                    ],
                    "columnDefs": [{
                        "targets": 'no-sort',
                        "orderable": false,
                    }],
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                    }
                });
            }, 200);
        });

    }
});