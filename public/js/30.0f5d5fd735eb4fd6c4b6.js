(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      funcionarios: [],
      cpf: '',
      funcionario: {
        idEmpresaFuncionario: 0,
        empresaContrato: {
          empresaContratante: {}
        },
        ambienteTrabalho: {},
        funcao: {},
        jornadaTrabalho: {},
        pessoa: {
          idPessoa: 0,
          nomePessoa: '',
          cpf: '',
          pis: '',
          ctps: '',
          dataNascimento: '',
          sexo: '',
          tipoSangue: '',
          observacao: '',
          pais: {
            idPais: 1,
            nome: "Brasil",
            codigoPais: "1  "
          },
          estrangeiro: '',
          endereco: '',
          bairro: '',
          cep: '',
          telefone: '',
          email: '',
          escolaridade: '',
          status: 'A'
        },
        matricula: '',
        tipoOperacao: '',
        flag: '',
        dataInicial: '',
        dataFuncao: '',
        dataFinal: '',
        observacao: ''
      },
      carregando: true,
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      pessoas: [],
      idPessoa: '',
      funcoes: [],
      demissional: false,
      ambientes: [],
      contratos: [],
      ativo: 'Ativo',
      historicos: [],
      atual: {},
      contratosTransferencia: [],
      filiais: {},
      demitidos: [],
      afastados: [],
      temporarios: [],
      pcds: [],
      min: '',
      max: '',
      ambientesAll: [],
      idTabela: '#tabelaListagemEmpregados',
      erroMatricula: false
    };
  },
  computed: {
    hoje: function hoje() {
      var data = new Date();
      return data.toISOString().slice(0, 10);
    }
  },
  methods: {
    nextItem: function nextItem() {},
    fecharEditarMovimentacao: function fecharEditarMovimentacao() {
      this.$refs.modalEditar.show();
    },
    formataEstabelecimento: function formataEstabelecimento(estabelecimento) {
      if (estabelecimento == 'PRÓPRIO') {
        return 'P';
      } else if (estabelecimento == 'TERCEIROS') {
        return 'T';
      } else if (estabelecimento == 'SERVIÇOS_TERCEIROS') {
        return 'ST';
      }
    },
    formataTipo: function formataTipo(tipo) {
      if (tipo == 'ADMISSIONAL') {
        return 'Adm';
      } else if (tipo == 'DEMISSIONAL') {
        return 'Dem';
      } else if (tipo == 'MUDANÇA_DE_FUNÇÃO') {
        return 'M. Fun';
      } else if (tipo == 'MUDANÇA_DE_CONTRATANTE') {
        return 'M. Con';
      } else if (tipo == 'TRANSFERÊNCIA') {
        return 'Trans';
      }
    },
    formataSexo: function formataSexo(sexo) {
      if (sexo == 'MASCULINO') {
        return 'M';
      } else if (sexo == 'FEMININO') {
        return 'F';
      }
    },
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    sucesso: function sucesso(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 1000);
    },
    alerta: function alerta(msg) {
      this.mensagem = msg;
      this.html = '<i class="fas fa-close fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 2000);
    },
    editar: function editar(funcionario, ativo) {
      this.funcionario = funcionario;
      var that = this;
      this.ativo = ativo;
      axios.get('/empresas/empregados/historico/' + this.funcionario.matricula + "/" + this.empresa.idEmpresa).then(function (response) {
        that.historicos = response.data;
      }); //console.log(this.historicos);

      this.$refs.modalEditar.show();
    },
    abrirModalFuncao: function abrirModalFuncao(func, tipo) {
      this.funcionario = Object.assign(func);
      this.carregar('Carregando informações...');
      this.funcionario.tipoOperacao = 'MUDANÇA_DE_FUNÇÃO';
      this.ativo = 'Mudança de Função';
      this.min = this.funcionario.dataFuncao; // this.max = Vue.moment(this.funcionario.dataFuncao, "YYYY-MM-DD").add(30, 'days').format("YYYY-MM-DD");

      this.atual = this.funcionario.funcao;
      var that = this;
      that.$refs.modalEditar.hide();
      that.carregando = false;
      that.funcionario.dataFuncao = '';
      that.funcionario.funcao = {};
      that.funcionario.observacao = '';
      that.$refs.modalAlteracao.show();
      that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
    },
    getContratos: function getContratos(dataFuncionario) {
      this.contratos = this.contratosAll.filter(function (contrato) {
        var dataInicio = new Date(contrato.dataIni);
        var data = new Date(dataFuncionario);

        if (dataInicio <= data) {
          if (contrato.dataFim) {
            var dataFim = new Date(contrato.dataFim);

            if (dataFim >= data) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        } else {
          return false;
        }
      });
    },
    mudouData: function mudouData() {
      var data = Vue.moment(this.funcionario.dataInicial, "YYYY-MM-DD");
      var hoje = Vue.moment().startOf('day');
      var diff = Vue.moment.duration(data.diff(hoje)).asDays();
      console.log(diff);

      if (diff <= 30) {
        if (this.funcionario.tipoOperacao == 'ADMISSIONAL') {
          this.funcionario.dataFuncao = this.funcionario.dataInicial;
        }

        this.getContratos(this.funcionario.dataInicial);
      } else {
        this.funcionario.dataFuncao = Vue.moment().format("YYYY-MM-DD");
        this.funcionario.dataInicial = Vue.moment().format("YYYY-MM-DD");
        this.$alert("A data deve ser, no máximo, 30 dias maior que hoje.", "Atenção!", 'error');
        this.getContratos(hoje);
      }
    },
    verificarData: function verificarData() {
      var that = this;
      var dataFuncao = new Date(this.funcionario.dataFuncao);
      var data = new Date(this.min);

      if (dataFuncao < data) {
        data.setDate(data.getDate() + 1);
        this.$alert('Data precisa ser maior que ' + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
        that.funcionario.dataFuncao = that.min;
      }
    },
    mudouContrato: function mudouContrato() {
      this.carregar("Buscando último PCMSO...");
      var that = this;
      axios.post('/pcmso/ultimo', {
        'empresa': this.empresa.idEmpresa,
        'contrato': this.funcionario.empresaContrato.idEmpresaContrato,
        'data': this.funcionario.dataFuncao
      }).then(function (response) {
        setTimeout(function () {
          if (response.data != "") {
            that.carregando = false;
            that.$alert('PCMSO encontrado!', 'Sucesso!', 'success');
          } else {
            that.carregando = false;
            that.$alert('Não há nenhum PCMSO para este contrato.', 'Atenção!', 'error');
          }
        }, 1000);
        console.log(response.data);
      });
    },
    // mudouAmbiente(ambiente) {
    //     this.carregar("Buscando funções deste ambiente...");
    //     var that = this;
    //     console.log(ambiente);
    //     axios.get('/pcmso/ambiente/' + ambiente.idPcmsoAmbienteTrabalho + '/funcoes/list').then(function (response) {
    //         console.log(response.data);
    //         that.funcoes = response.data;
    //         setTimeout(function () {
    //             that.carregando = false;
    //             that.$alert('Funções encontradas.', 'Sucesso!', 'success');
    //         }, 1000);
    //     });
    // },
    salvarAlteracao: function salvarAlteracao(evt) {
      evt.preventDefault();
      this.carregar('Alterando a função do empregado...');

      if (!this.funcionario.dataFuncao) {
        this.alerta('Preencha a data de função!');
      } else {
        var dataAntiga = new Date(this.min);
        var data = new Date(this.funcionario.dataFuncao);
        var that = this; //console.log(data < dataAntiga);

        if (data < dataAntiga) {
          this.alerta('Data de função tem que ser maior que a anterior.');
        } else {
          axios.post('/empresas/empregados/alteracao', {
            empresa: that.empresa,
            funcionario: that.funcionario
          }).then(function (response) {
            that.funcionarios = response.data;
            that.sucesso('Sucesso!');
            that.$refs.modalAlteracao.hide();
            that.$refs.modalDemissional.hide();
          });
        }
      }
    },
    salvarDemissional: function salvarDemissional(evt) {
      evt.preventDefault();
      this.carregar('Realizando demissão...');

      if (!this.funcionario.dataFinal) {
        this.alerta('Preencha a data final!');
      } else {
        var that = this;
        axios.post('/empresas/empregados/alteracao/movimentacao', {
          empresa: that.empresa,
          funcionario: that.funcionario
        }).then(function (response) {
          if (response.data.status == 'false') {
            that.carregando = false;
            that.$alert(response.data.msg, "Atenção!", 'error');
          } else {
            that.funcionarios = response.data;
            that.sucesso('Sucesso!');
            that.$refs.modalAlteracao.hide();
            that.$refs.modalDemissional.hide();
          }
        });
      }
    },
    abrirModalEditarAlteracao: function abrirModalEditarAlteracao(funcionario) {
      this.funcionario = Object.assign({}, funcionario);
      this.carregar('Carregando informações...');

      if (this.funcionario.tipoOperacao == 'MUDANÇA_DE_CONTRATANTE') {
        this.ativo = 'Mudança de Contratante';
      }

      if (this.funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO') {
        this.ativo = 'Mudança de Função';
      }

      if (this.funcionario.tipoOperacao == 'ADMISSIONAL') {
        this.ativo = 'Admissional';
      }

      this.getContratos(this.funcionario.dataFuncao);
      var that = this;
      that.funcionario.ambienteTrabalho = that.ambientes.find(function (elemento) {
        return elemento.idAmbienteTrabalho == that.funcionario.ambienteTrabalho.idAmbienteTrabalho;
      });
      console.log('func', this.funcionario);
      that.$refs.modalEditar.hide();
      that.carregando = false;
      that.$refs.modalEditarAlteracao.show();
      that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
    },
    recuperarDados: function recuperarDados(callback) {
      var that = this;
      axios.post('/pcmso/ultimo', {
        'empresa': this.empresa.idEmpresa,
        'contrato': this.funcionario.empresaContrato.idEmpresaContrato,
        'data': this.funcionario.dataFuncao
      }).then(function (response) {
        setTimeout(function () {
          if (response.data != "") {
            that.mensagem = "Pronto. Buscando ambientes...";
            axios.get('/pcmso/ambientes/' + response.data.idPcmso + '/list').then(function (response) {
              that.ambientes = response.data;
              that.funcionario.ambienteTrabalho = that.ambientes.find(function (elemento) {
                return elemento.idAmbienteTrabalho == that.funcionario.ambienteTrabalho.idAmbienteTrabalho;
              });
              setTimeout(function () {
                that.mensagem = "Encontradas. Buscando funções...";
                axios.get('/pcmso/ambiente/' + that.funcionario.ambienteTrabalho.idPcmsoAmbienteTrabalho + '/funcoes/list').then(function (response) {
                  console.log(response.data);
                  that.funcoes = response.data;
                  setTimeout(function () {
                    callback();
                  }, 1000);
                });
              }, 500);
            });
          } else {
            that.carregando = false;
            that.funcionario.empresaContrato = {};
            that.ambientes = [];
            that.funcionario.ambienteTrabalho = {};
            that.funcionario.funcao = {};
            that.$alert('Não há nenhum PCMSO para este contrato.', 'Atenção!', 'error');
          }
        }, 1000);
        console.log(response.data);
      });
    },
    abrirModalTransferencia: function abrirModalTransferencia() {
      this.$refs.modalEditar.hide();
      this.$refs.modalTransferencia.show();
    },
    editarAlteracao: function editarAlteracao(evt) {
      evt.preventDefault();
      var that = this;
      this.carregar('Alterando a movimentação...');
      axios.post('/empresas/empregados/alteracao/movimentacao', {
        empresa: that.empresa,
        funcionario: that.funcionario
      }).then(function (response) {
        that.funcionarios = response.data;
        that.carregando = false;
        that.$refs.modalEditarAlteracao.hide();
        that.$alert('Dados atualizados.', 'Sucesso!', 'success');
        that.editar(that.funcionario, 'Ativo');
      });
    },
    fecharAlteracao: function fecharAlteracao() {
      var that = this;
      that.$refs.modalFuncao.hide();
    },
    abrirModalContratante: function abrirModalContratante() {
      this.$refs.modalEditar.hide();
      this.funcionario.tipoOperacao = 'MUDANÇA_DE_CONTRATANTE';
      this.ativo = 'Mudança de Contratante';
      this.funcionario.dataFuncao = '';
      this.funcionario.observacao = '';
      this.atual = this.funcionario.empresaContrato;
      this.$refs.modalAlteracao.show();
    },
    abrirModalDemissional: function abrirModalDemissional() {
      this.$refs.modalEditar.hide();
      this.demissional = true;
      this.funcionario.tipoOperacao = 'DEMISSIONAL'; //console.log(this.funcionario);

      this.funcionario.observacao = '';
      this.$refs.modalDemissional.show();
    },
    salvarTransferencia: function salvarTransferencia() {},
    admissional: function admissional() {
      this.cpf = '';
      this.funcionario = {
        idEmpresaFuncionario: 0,
        empresaContrato: {
          empresaContratante: {}
        },
        ambienteTrabalho: {},
        funcao: {},
        jornadaTrabalho: {},
        pessoa: {
          idPessoa: 0,
          nomePessoa: '',
          cpf: '',
          pis: '',
          ctps: '',
          dataNascimento: '',
          sexo: '',
          tipoSangue: '',
          observacao: '',
          pais: {
            idPais: 1,
            nome: "Brasil",
            codigoPais: "1  "
          },
          estrangeiro: '',
          endereco: '',
          bairro: '',
          cep: '',
          telefone: '',
          email: '',
          escolaridade: '',
          status: 'A'
        },
        matricula: '',
        tipoOperacao: 'ADMISSIONAL',
        mensagemMatricula: '',
        flag: '',
        dataInicial: this.hoje,
        dataFuncao: this.hoje,
        observacao: ''
      };
      this.getContratos(this.hoje);
      var that = this;
      console.log(this.empresa.tipoEmpresa);

      if (this.empresa.tipoEmpresa == 'NENHUM' || this.empresa.tipoEmpresa == 'CONTRATANTE') {
        var contr = this.contratos.filter(function (cont) {
          return cont.empresaContratante.idEmpresa == that.empresa.idEmpresa;
        });
        this.funcionario.empresaContrato = contr[0];
        this.$refs.modalAdmissional.show();
        this.mudouContrato();
      } else {
        this.$refs.modalAdmissional.show();
      }
    },
    buscaCpf: function buscaCpf() {
      var that = this;
      this.carregar('Buscando pessoa...');

      if (/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(this.cpf)) {
        axios.get('/pessoas/cpf/' + this.cpf).then(function (response) {
          if (response.data != '') {
            if (!that.pessoaEmAdmissional(response.data)) {
              that.funcionario.pessoa = response.data;
              that.idPessoa = response.data.idPessoa;
              that.sucesso('Pessoa encontrada.');
            } else {
              that.alerta(response.data.nomePessoa + ' já está nesta empresa!');
            }
          } else {
            that.alerta('Pessoa não encontrada!');
          }
        });
      } else {
        that.alerta('CPF invalido. Verifique e tente novamente.');
      }
    },
    mudouPessoa: function mudouPessoa() {
      var that = this;
      var filtrado = this.pessoas.filter(function (val) {
        //console.log(val.idPessoa, that.idPessoa, val.idPessoa == that.idPessoa);
        return val.idPessoa == that.idPessoa;
      });
      this.funcionario.pessoa = filtrado[0];
    },
    salvarAdmissional: function salvarAdmissional(evt) {
      evt.preventDefault();
      this.carregar('Salvando novo empregado...');
      this.verificaMatricula();

      if (!this.funcionario.dataInicial) {
        this.alerta('Preencha a data inicial');
      } else if (this.erroMatricula) {
        this.alerta('Corrija a matrícula!');
      } else {
        var that = this;
        axios.post('/empresas/empregados/admissional', {
          empresa: that.empresa,
          funcionario: that.funcionario
        }).then(function (response) {
          that.funcionarios = response.data;
          that.sucesso('Empregado incluído!');
          that.$refs.modalAdmissional.hide();
        });
      }
    },
    verificaMatricula: function verificaMatricula() {
      // console.log('to aqui');
      var that = this;
      that.erroMatricula = false;

      if (!this.funcionario.matricula || this.funcionario.matricula == '') {
        that.erroMatricula = true;
        that.mensagemMatricula = 'Preenchimento obrigatório.';
        $("#matricula").focus();
      } else {
        for (var i = 0; i < this.funcionarios.length; i++) {
          if (this.funcionarios[i].matricula === this.funcionario.matricula) {
            that.erroMatricula = true;
            that.mensagemMatricula = 'Matricula já utilizada.';
            $("#matricula").focus();
          }
        }
      }
    },
    pessoaEmAdmissional: function pessoaEmAdmissional(pessoa) {
      for (var i = 0; i < this.funcionarios.length; i++) {
        if (this.funcionarios[i].pessoa.idPessoa === pessoa.idPessoa) {
          return true;
        }
      }

      return false;
    },
    fecharAdmissional: function fecharAdmissional() {},
    carregaDemitidos: function carregaDemitidos() {
      this.carregar('Carregando demitidos...');
      var that = this;
      axios.get('/empresas/empregados/demitidos/' + that.empresa.idEmpresa).then(function (response) {
        that.demitidos = response.data;
        that.sucesso('Carregado com sucesso!');
      });
    },
    carregaAfastados: function carregaAfastados() {
      this.carregar('Carregando afastados...');
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
        that.afastados = response.data;
        that.sucesso('Carregado com sucesso!');
      });
    },
    carregaPcds: function carregaPcds() {
      this.carregar('Carregando PCD...');
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosPCDPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
        that.pcds = response.data;
        that.sucesso('Carregado com sucesso!');
      });
    },
    carregaTemporarios: function carregaTemporarios() {
      this.carregar('Carregando temporários...');
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
        that.temporarios = response.data;
        that.sucesso('Carregado com sucesso!');
      });
    }
  },
  mounted: function mounted() {
    this.mensagem = 'Carregando empregados...';
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
      that.funcionarios = response.data;
      setTimeout(function () {
        that.$root.$emit('montou', [that.idTabela]);
        that.sucesso('Empregados carregados');
        that.carregando = false;
      }, 200);
    });
    axios.get('/pessoas/list').then(function (response) {
      that.pessoas = response.data;
    });
    axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
      that.contratosAll = response.data; // that.contratos = that.contratosAll;
    });
    axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(function (response) {
      that.ambientes = response.data; //console.log(response.data);
    });
    axios.get('/tabelas/funcoes/list').then(function (response) {
      that.funcoes = response.data;
    });
    axios.get('/empresas/filiais/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(function (response) {
      that.filiais = response.data; //console.log(that.filiais);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=date]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  display: none;\n}\n.title-modal {\n  text-align: center;\n}\n.title-modal h5 {\n  background-color: green;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n}\n.align-self-center h5 {\n  margin-bottom: 0px;\n}\n.box-empregados {\n  padding-bottom: 20px;\n}\n.table-empregados {\n  margin-bottom: 10px;\n}\n.table-empregados tr th {\n  font-weight: bold;\n}\n.table-empregados tr td,\n.table-empregados tr th {\n  white-space: nowrap;\n  border: 1px solid #dee2e6;\n}\n.dropdown-item {\n  cursor: pointer;\n}\n.sig {\n  width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "sig", attrs: { "no-body": "" } },
        [
          _c(
            "b-tabs",
            { attrs: { pills: "", card: "" } },
            [
              _c(
                "b-tab",
                {
                  attrs: { title: "Ativos", active: "" },
                  on: {
                    focus: function($event) {
                      return _vm.alert("FOCOU!")
                    }
                  }
                },
                [
                  _c(
                    "b-card-text",
                    { attrs: { id: "tabelaEmpregados" } },
                    [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "box-body box-empregados table-responsive"
                          },
                          [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-hover table-striped table-empregados",
                                attrs: { id: "tabelaListagemEmpregados" }
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Matrícula")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nome")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("CPF")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Adm")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Cargo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Cargo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Ambiente")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Nasc")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Sexo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Tempo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Contratante")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Ação")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.funcionarios, function(
                                    funcionario
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editar(
                                              funcionario,
                                              "Ativo"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(funcionario.pessoa.idPessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(funcionario.matricula))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              funcionario.pessoa.nomePessoa
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(funcionario.pessoa.cpf))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.dataFuncao,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(funcionario.funcao.cargo)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formataEstabelecimento(
                                                funcionario.ambienteTrabalho
                                                  .estabelecimento
                                              )
                                            ) +
                                              "\n                                            -\n                                            " +
                                              _vm._s(
                                                funcionario.ambienteTrabalho
                                                  .nomeAmbienteTrabalho
                                              )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.pessoa
                                                  .dataNascimento,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formataSexo(
                                                funcionario.pessoa.sexo
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(funcionario.ano) +
                                              "A, " +
                                              _vm._s(funcionario.mes) +
                                              "M,\n                                            " +
                                              _vm._s(funcionario.dia) +
                                              "D"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              funcionario.empresaContrato
                                                .empresaContratante.nomeFantasia
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.editar(
                                                    funcionario,
                                                    "Ativo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-pencil-alt"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            on: {
                              click: function($event) {
                                return _vm.admissional()
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(
                              " Adicionar\n                            Empregado"
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalAdmissional",
                          attrs: {
                            "no-close-on-backdrop": true,
                            "hide-header-close": true,
                            "no-close-on-esc": true,
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "xl",
                            title: "Incluir empregado",
                            centered: "",
                            id: "modalAdmissional"
                          },
                          on: {
                            ok: _vm.salvarAdmissional,
                            cancel: function($event) {
                              return _vm.fecharAdmissional()
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "modal-header",
                              fn: function(ref) {
                                var close = ref.close
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "row d-flex w-100" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-md-2 justify-content-center align-self-center"
                                        },
                                        [
                                          _c("h5", [
                                            _vm._v("Incluir Empregado")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-prepend"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-text"
                                                  },
                                                  [_vm._v("Pesquisar por CPF")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.cpf,
                                                  expression: "cpf"
                                                },
                                                {
                                                  name: "mask",
                                                  rawName: "v-mask",
                                                  value: "###.###.###-##",
                                                  expression: "'###.###.###-##'"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                "aria-describedby":
                                                  "basic-addon2"
                                              },
                                              domProps: { value: _vm.cpf },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.cpf = $event.target.value
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-append"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-outline-secondary",
                                                    attrs: { type: "button" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.buscaCpf()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fa fa-search"
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-prepend"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-text"
                                                  },
                                                  [_vm._v("Tipo")]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "",
                                                  disabled: ""
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      value: "",
                                                      selected: ""
                                                    }
                                                  },
                                                  [_vm._v("Admissional")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.idPessoa,
                                        expression: "idPessoa"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.idPessoa = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        function($event) {
                                          return _vm.mudouPessoa()
                                        }
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.pessoas, function(pessoa) {
                                    return !_vm.pessoaEmAdmissional(pessoa)
                                      ? _c(
                                          "option",
                                          {
                                            domProps: { value: pessoa.idPessoa }
                                          },
                                          [_vm._v(_vm._s(pessoa.nomePessoa))]
                                        )
                                      : _vm._e()
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.erroMatricula },
                                  attrs: { type: "text", id: "matricula" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    blur: _vm.verificaMatricula,
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.erroMatricula
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.mensagemMatricula) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("PIS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.#####.##-#",
                                      expression: "'###.#####.##-#'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.pis,
                                      expression: "funcionario.pessoa.pis"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.pis
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "pis",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CTPS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.ctps,
                                      expression: "funcionario.pessoa.ctps"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.ctps
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "ctps",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data da Adm.")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataInicial,
                                      expression: "funcionario.dataInicial"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataInicial
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.mudouData()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataInicial",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data Função")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataFuncao,
                                      expression: "funcionario.dataFuncao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "", type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataFuncao
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.getContratos(
                                        _vm.funcionario.dataFuncao
                                      )
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataFuncao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Contrato")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.empresaContrato,
                                        expression:
                                          "funcionario.empresaContrato"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.funcionario,
                                            "empresaContrato",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.mudouContrato()
                                        }
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.contratos, function(contrato) {
                                    return _c(
                                      "option",
                                      { domProps: { value: contrato } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              contrato.empresaContratante
                                                .nomeFantasia
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Ambiente de Trabalho")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.ambienteTrabalho,
                                        expression:
                                          "funcionario.ambienteTrabalho"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled: _vm.ambientes.length == 0
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "ambienteTrabalho",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.ambientes.length == 0
                                      ? _c(
                                          "option",
                                          {
                                            attrs: {
                                              disabled: "",
                                              selected: ""
                                            },
                                            domProps: { value: {} }
                                          },
                                          [
                                            _vm._v(
                                              " ---- SELECIONE PRIMEIRO UM CONTRATO ---- "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(_vm.ambientes, function(ambiente) {
                                      return _c(
                                        "option",
                                        { domProps: { value: ambiente } },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(ambiente.idOrigem) +
                                              " -\n                                            " +
                                              _vm._s(
                                                ambiente.nomeAmbienteTrabalho
                                              )
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Função")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.funcao,
                                        expression: "funcionario.funcao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled: _vm.funcoes.length == 0
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "funcao",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.funcoes.length == 0
                                      ? _c(
                                          "option",
                                          {
                                            attrs: {
                                              disabled: "",
                                              selected: ""
                                            },
                                            domProps: { value: {} }
                                          },
                                          [
                                            _vm._v(
                                              " ---- SELECIONE PRIMEIRO UM AMBIENTE ---- "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(_vm.funcoes, function(funcao) {
                                      return _c(
                                        "option",
                                        { domProps: { value: funcao } },
                                        [
                                          _vm._v(
                                            _vm._s(funcao.cargo) +
                                              "\n                                        "
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Observação")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.observacao,
                                      expression: "funcionario.observacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.observacao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "observacao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalEditar",
                          attrs: {
                            size: "xl",
                            "hide-footer": "",
                            title: "Editar empregado | " + _vm.ativo,
                            centered: "",
                            id: "modalEditar"
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.nomePessoa,
                                      expression:
                                        "funcionario.pessoa.nomePessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.nomePessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "nomePessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12 title-modal" },
                              [_c("h5", [_vm._v("Histórico de Movimentações")])]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table  table-hover table-striped"
                                  },
                                  [
                                    _c("thead", [
                                      _c("th", [_vm._v("Ambiente")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Cargo")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Dt. Adm")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Dt. Cargo")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Dt. Final")]),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        { staticStyle: { width: "130px" } },
                                        [_vm._v("Tempo")]
                                      ),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Tipo Op.")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Contratante")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Ações")])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.historicos, function(
                                        historico,
                                        index
                                      ) {
                                        return _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.formataEstabelecimento(
                                                  historico.ambienteTrabalho
                                                    .estabelecimento
                                                )
                                              ) +
                                                "\n                                                    -\n                                                    " +
                                                _vm._s(
                                                  historico.ambienteTrabalho
                                                    .nomeAmbienteTrabalho
                                                )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(historico.funcao.cargo)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("moment")(
                                                  historico.dataInicial,
                                                  "DD/MM/Y"
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          historico.tipoOperacao !=
                                          "DEMISSIONAL"
                                            ? _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("moment")(
                                                      historico.dataFuncao,
                                                      "DD/MM/Y"
                                                    )
                                                  )
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          historico.tipoOperacao ==
                                          "DEMISSIONAL"
                                            ? _c("td", [_vm._v("N/A")])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("moment")(
                                                  historico.dataFinal,
                                                  "DD/MM/Y"
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          historico.tipoOperacao !=
                                          "DEMISSIONAL"
                                            ? _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    width: "130px"
                                                  }
                                                },
                                                [
                                                  index ==
                                                  _vm.historicos.length - 1
                                                    ? _c("span")
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  index !=
                                                  _vm.historicos.length - 1
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            historico.ano
                                                          ) +
                                                            "A, " +
                                                            _vm._s(
                                                              historico.mes
                                                            ) +
                                                            "M,\n                                                        " +
                                                            _vm._s(
                                                              historico.dia
                                                            ) +
                                                            "D"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          historico.tipoOperacao ==
                                          "DEMISSIONAL"
                                            ? _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    width: "250px"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.funcionario.ano
                                                    ) +
                                                      "A, " +
                                                      _vm._s(
                                                        _vm.funcionario.mes
                                                      ) +
                                                      "M,\n                                                    " +
                                                      _vm._s(
                                                        _vm.funcionario.dia
                                                      ) +
                                                      "D"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.formataTipo(
                                                  historico.tipoOperacao
                                                )
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                historico.empresaContrato
                                                  .empresaContratante
                                                  .nomeFantasia
                                              ) +
                                                "\n                                                "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-outline-primary btn-sm",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.abrirModalEditarAlteracao(
                                                      historico
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          this.ativo == "Ativo"
                            ? _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("div", { staticClass: "btn-group" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-success dropdown-toggle",
                                        attrs: {
                                          type: "button",
                                          "data-toggle": "dropdown",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-plus" }),
                                        _vm._v(
                                          " Adicionar Movimentação\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "dropdown-menu" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            on: {
                                              click: function($event) {
                                                return _vm.abrirModalFuncao(
                                                  _vm.funcionario
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Mudança de Função")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            on: {
                                              click: _vm.abrirModalTransferencia
                                            }
                                          },
                                          [_vm._v("Transferência")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            on: {
                                              click: _vm.abrirModalContratante
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "Mudança de\n                                            contratante"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", {
                                          staticClass: "dropdown-divider"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            on: {
                                              click: _vm.abrirModalDemissional
                                            }
                                          },
                                          [_vm._v("Demissional")]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalAlteracao",
                          attrs: {
                            "no-close-on-backdrop": true,
                            "hide-header-close": true,
                            "no-close-on-esc": true,
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "xl",
                            title: _vm.ativo,
                            centered: "",
                            id: "modalAlteracao"
                          },
                          on: {
                            ok: _vm.salvarAlteracao,
                            cancel: function($event) {
                              return _vm.fecharAlteracao()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.nomePessoa,
                                      expression:
                                        "funcionario.pessoa.nomePessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.nomePessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "nomePessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("PIS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.#####.##-#",
                                      expression: "'###.#####.##-#'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.pis,
                                      expression: "funcionario.pessoa.pis"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.pis
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "pis",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CTPS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.ctps,
                                      expression: "funcionario.pessoa.ctps"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.ctps
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "ctps",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                class: {
                                  "col-md-2":
                                    _vm.funcionario.tipoOperacao ==
                                    "MUDANÇA_DE_FUNÇÃO",
                                  "col-md-3":
                                    _vm.funcionario.tipoOperacao !=
                                    "MUDANÇA_DE_FUNÇÃO"
                                }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Data da Adm.")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.dataInicial,
                                        expression: "funcionario.dataInicial"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: "", type: "date" },
                                    domProps: {
                                      value: _vm.funcionario.dataInicial
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.funcionario.dataFuncao =
                                          _vm.funcionario.dataInicial
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.funcionario,
                                          "dataInicial",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm.funcionario.tipoOperacao == "MUDANÇA_DE_FUNÇÃO"
                              ? _c("div", { staticClass: "col-md-2" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("Data no Cargo")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.min,
                                          expression: "min"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "date", disabled: "" },
                                      domProps: { value: _vm.min },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.min = $event.target.value
                                        }
                                      }
                                    })
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                class: {
                                  "col-md-2":
                                    _vm.funcionario.tipoOperacao ==
                                    "MUDANÇA_DE_FUNÇÃO",
                                  "col-md-3":
                                    _vm.funcionario.tipoOperacao !=
                                    "MUDANÇA_DE_FUNÇÃO"
                                }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Data M. Função")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.dataFuncao,
                                        expression: "funcionario.dataFuncao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      min: _vm.min,
                                      max: _vm.max,
                                      type: "date"
                                    },
                                    domProps: {
                                      value: _vm.funcionario.dataFuncao
                                    },
                                    on: {
                                      blur: _vm.verificarData,
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.funcionario,
                                          "dataFuncao",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Contrato")
                                ]),
                                _vm._v(" "),
                                _vm.funcionario.tipoOperacao ==
                                "MUDANÇA_DE_CONTRATANTE"
                                  ? _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.funcionario.empresaContrato,
                                            expression:
                                              "funcionario.empresaContrato"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.funcionario,
                                              "empresaContrato",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      _vm._l(_vm.contratos, function(contrato) {
                                        return contrato.idEmpresaContrato !=
                                          _vm.atual.idEmpresaContrato
                                          ? _c(
                                              "option",
                                              { domProps: { value: contrato } },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      contrato
                                                        .empresaContratante
                                                        .nomeFantasia
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      }),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.funcionario.tipoOperacao !=
                                  "MUDANÇA_DE_CONTRATANTE" &&
                                _vm.funcionario.empresaContrato
                                  .empresaContratante
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.funcionario.empresaContrato
                                              .empresaContratante.nomeFantasia,
                                          expression:
                                            "funcionario.empresaContrato.empresaContratante.nomeFantasia"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text", disabled: "" },
                                      domProps: {
                                        value:
                                          _vm.funcionario.empresaContrato
                                            .empresaContratante.nomeFantasia
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.funcionario.empresaContrato
                                              .empresaContratante,
                                            "nomeFantasia",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Ambiente de Trabalho")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.ambienteTrabalho,
                                        expression:
                                          "funcionario.ambienteTrabalho"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.funcionario,
                                            "ambienteTrabalho",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {}
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.ambientes, function(ambiente) {
                                    return _c(
                                      "option",
                                      { domProps: { value: ambiente } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(ambiente.idOrigem) +
                                            " -\n                                            " +
                                            _vm._s(
                                              ambiente.nomeAmbienteTrabalho
                                            )
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Função")
                                ]),
                                _vm._v(" "),
                                _vm.funcionario.tipoOperacao ==
                                "MUDANÇA_DE_FUNÇÃO"
                                  ? _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.funcionario.funcao,
                                            expression: "funcionario.funcao"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.funcionario,
                                              "funcao",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      _vm._l(_vm.funcoes, function(funcao) {
                                        return _c(
                                          "option",
                                          {
                                            attrs: {
                                              disabled:
                                                funcao.idFuncao ==
                                                _vm.atual.idFuncao
                                            },
                                            domProps: { value: funcao }
                                          },
                                          [_vm._v(_vm._s(funcao.cargo))]
                                        )
                                      }),
                                      0
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.funcionario.tipoOperacao !=
                                "MUDANÇA_DE_FUNÇÃO"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.funcionario.funcao.cargo,
                                          expression: "funcionario.funcao.cargo"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text", disabled: "" },
                                      domProps: {
                                        value: _vm.funcionario.funcao.cargo
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.funcionario.funcao,
                                            "cargo",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.funcionario.tipoOperacao ==
                                "MUDANÇA_DE_FUNÇÃO"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "form-text text-muted",
                                        attrs: { id: "emailHelp" }
                                      },
                                      [
                                        _c("strong", [
                                          _vm._v("Função Atual: ")
                                        ]),
                                        _vm._v(" " + _vm._s(_vm.atual.cargo))
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Observação")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.observacao,
                                      expression: "funcionario.observacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.observacao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "observacao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalDemissional",
                          attrs: {
                            "no-close-on-backdrop": true,
                            "hide-header-close": true,
                            "no-close-on-esc": true,
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "xl",
                            title: "Demitir",
                            centered: "",
                            id: "modalDemissional"
                          },
                          on: {
                            ok: _vm.salvarDemissional,
                            cancel: function($event) {
                              return _vm.fecharAlteracao()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.nomePessoa,
                                      expression:
                                        "funcionario.pessoa.nomePessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.nomePessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "nomePessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Contrato")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.funcionario.empresaContrato
                                          .empresaContratante.nomeFantasia,
                                      expression:
                                        "funcionario.empresaContrato.empresaContratante.nomeFantasia"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value:
                                      _vm.funcionario.empresaContrato
                                        .empresaContratante.nomeFantasia
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.empresaContrato
                                          .empresaContratante,
                                        "nomeFantasia",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("PIS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.#####.##-#",
                                      expression: "'###.#####.##-#'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.pis,
                                      expression: "funcionario.pessoa.pis"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.pis
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "pis",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CTPS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.ctps,
                                      expression: "funcionario.pessoa.ctps"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.ctps
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "ctps",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Função")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.funcao.cargo,
                                      expression: "funcionario.funcao.cargo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.funcao.cargo
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.funcao,
                                        "cargo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Ambiente de Trabalho")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.funcionario.ambienteTrabalho
                                          .idOrigem +
                                        " - " +
                                        _vm.funcionario.ambienteTrabalho
                                          .descricao,
                                      expression:
                                        "funcionario.ambienteTrabalho.idOrigem + ' - ' + funcionario.ambienteTrabalho.descricao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value:
                                      _vm.funcionario.ambienteTrabalho
                                        .idOrigem +
                                      " - " +
                                      _vm.funcionario.ambienteTrabalho.descricao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.ambienteTrabalho
                                          .idOrigem +
                                          " - " +
                                          _vm.funcionario.ambienteTrabalho,
                                        "descricao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data da Adm.")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataInicial,
                                      expression: "funcionario.dataInicial"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "", type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataInicial
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.funcionario.dataFuncao =
                                        _vm.funcionario.dataInicial
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataInicial",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data Função")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataFuncao,
                                      expression: "funcionario.dataFuncao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "", type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataFuncao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataFuncao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data Final")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataFinal,
                                      expression: "funcionario.dataFinal"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataFinal
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataFinal",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Observação")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.observacao,
                                      expression: "funcionario.observacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.observacao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "observacao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalEditarAlteracao",
                          attrs: {
                            "no-close-on-backdrop": true,
                            "hide-header-close": true,
                            "no-close-on-esc": true,
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "xl",
                            title: "Editar movimentação | " + _vm.ativo,
                            centered: "",
                            id: "modalEditarAlteracao"
                          },
                          on: {
                            ok: _vm.editarAlteracao,
                            cancel: function($event) {
                              return _vm.fecharEditarMovimentacao()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.nomePessoa,
                                      expression:
                                        "funcionario.pessoa.nomePessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.nomePessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "nomePessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("PIS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.#####.##-#",
                                      expression: "'###.#####.##-#'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.pis,
                                      expression: "funcionario.pessoa.pis"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.pis
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "pis",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CTPS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.ctps,
                                      expression: "funcionario.pessoa.ctps"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.ctps
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "ctps",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                class: {
                                  "col-md-3":
                                    _vm.funcionario.tipoOperacao !=
                                    "DEMISSIONAL",
                                  "col-md-2":
                                    _vm.funcionario.tipoOperacao ==
                                    "DEMISSIONAL"
                                }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Data da Adm.")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.dataInicial,
                                        expression: "funcionario.dataInicial"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled:
                                        _vm.funcionario.tipoOperacao !=
                                        "ADMISSIONAL",
                                      type: "date"
                                    },
                                    domProps: {
                                      value: _vm.funcionario.dataInicial
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.mudouData()
                                      },
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.funcionario,
                                          "dataInicial",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                class: {
                                  "col-md-3":
                                    _vm.funcionario.tipoOperacao !=
                                    "DEMISSIONAL",
                                  "col-md-2":
                                    _vm.funcionario.tipoOperacao ==
                                    "DEMISSIONAL"
                                }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Data Função")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.dataFuncao,
                                        expression: "funcionario.dataFuncao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "date" },
                                    domProps: {
                                      value: _vm.funcionario.dataFuncao
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.funcionario,
                                          "dataFuncao",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Contrato")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.empresaContrato,
                                        expression:
                                          "funcionario.empresaContrato"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled:
                                        _vm.funcionario.tipoOperacao !=
                                        "ADMISSIONAL"
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.funcionario,
                                            "empresaContrato",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.mudouContrato()
                                        }
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.contratos, function(contrato) {
                                    return _c(
                                      "option",
                                      { domProps: { value: contrato } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              contrato.empresaContratante
                                                .nomeFantasia
                                            )
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Ambiente de Trabalho")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.ambienteTrabalho,
                                        expression:
                                          "funcionario.ambienteTrabalho"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled:
                                        _vm.funcionario.tipoOperacao ==
                                        "MUDANÇA_DE_FUNÇÃO"
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "ambienteTrabalho",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.ambientes, function(ambiente) {
                                    return _c(
                                      "option",
                                      { domProps: { value: ambiente } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(ambiente.idOrigem) +
                                            " -\n                                            " +
                                            _vm._s(
                                              ambiente.nomeAmbienteTrabalho
                                            )
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Função")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.funcao,
                                        expression: "funcionario.funcao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "funcao",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.funcoes, function(funcao) {
                                    return _c(
                                      "option",
                                      { domProps: { value: funcao } },
                                      [
                                        _vm._v(
                                          _vm._s(funcao.cargo) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.funcionario.tipoOperacao == "DEMISSIONAL"
                              ? _c("div", { staticClass: "col-md-2" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("Data Final")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.funcionario.dataFinal,
                                          expression: "funcionario.dataFinal"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "date" },
                                      domProps: {
                                        value: _vm.funcionario.dataFinal
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.funcionario,
                                            "dataFinal",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Observação")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.observacao,
                                      expression: "funcionario.observacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.observacao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "observacao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "modalTransferencia",
                          attrs: {
                            "no-close-on-backdrop": true,
                            "hide-header-close": true,
                            "no-close-on-esc": true,
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "xl",
                            title: "Transferencia entre empresas",
                            centered: "",
                            id: "modalTransferencia"
                          },
                          on: {
                            ok: _vm.salvarTransferencia,
                            cancel: function($event) {
                              return _vm.fecharFuncao()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Pessoa")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.nomePessoa,
                                      expression:
                                        "funcionario.pessoa.nomePessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.nomePessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "nomePessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Matrícula")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.matricula,
                                      expression: "funcionario.matricula"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.matricula
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "matricula",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.idPessoa,
                                      expression: "funcionario.pessoa.idPessoa"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.idPessoa
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "idPessoa",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Contrato")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.empresaContrato,
                                        expression:
                                          "funcionario.empresaContrato"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "empresaContrato",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.contratosTransferencia, function(
                                    contrato
                                  ) {
                                    return contrato.idEmpresaContrato !=
                                      _vm.atual.idEmpresaContrato
                                      ? _c(
                                          "option",
                                          { domProps: { value: contrato } },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  contrato.empresaContratante
                                                    .nomeFantasia
                                                ) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CPF")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.###.###-##",
                                      expression: "'###.###.###-##'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.cpf,
                                      expression: "funcionario.pessoa.cpf"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.cpf
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "cpf",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("PIS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "mask",
                                      rawName: "v-mask",
                                      value: "###.#####.##-#",
                                      expression: "'###.#####.##-#'"
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.pis,
                                      expression: "funcionario.pessoa.pis"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.pis
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "pis",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("CTPS")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.pessoa.ctps,
                                      expression: "funcionario.pessoa.ctps"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value: _vm.funcionario.pessoa.ctps
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario.pessoa,
                                        "ctps",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Função")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.funcao,
                                        expression: "funcionario.funcao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "funcao",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.funcoes, function(funcao) {
                                    return funcao.idFuncao != _vm.atual.idFuncao
                                      ? _c(
                                          "option",
                                          { domProps: { value: funcao } },
                                          [_vm._v(_vm._s(funcao.cargo))]
                                        )
                                      : _vm._e()
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v(
                                    "Ambiente de Trabalho " +
                                      _vm._s(_vm.ambientes.length)
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.funcionario.ambienteTrabalho,
                                        expression:
                                          "funcionario.ambienteTrabalho"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled: !_vm.ambientes.length > 0
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.funcionario,
                                          "ambienteTrabalho",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.ambientes, function(ambiente) {
                                    return _c(
                                      "option",
                                      { domProps: { value: ambiente } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(ambiente.idOrigem) +
                                            " -\n                                            " +
                                            _vm._s(
                                              ambiente.nomeAmbienteTrabalho
                                            )
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data da Adm.")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataInicial,
                                      expression: "funcionario.dataInicial"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataInicial
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.funcionario.dataFuncao =
                                        _vm.funcionario.dataInicial
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataInicial",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Data Função")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.dataFuncao,
                                      expression: "funcionario.dataFuncao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date" },
                                  domProps: {
                                    value: _vm.funcionario.dataFuncao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "dataFuncao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Observação")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.funcionario.observacao,
                                      expression: "funcionario.observacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.funcionario.observacao
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.funcionario,
                                        "observacao",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: { title: "Afastados" },
                  on: {
                    click: function($event) {
                      return _vm.carregaAfastados()
                    }
                  }
                },
                [
                  _c("b-card-text", [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-empregados"
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Matrícula")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nome")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Adm")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. de Dem")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Tempo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Histórico")])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.afastados, function(afastado) {
                                    return _c(
                                      "tr",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editar(
                                              afastado,
                                              "Inativo"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(afastado.pessoa.idPessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(afastado.matricula))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(afastado.pessoa.nomePessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                afastado.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                afastado.dataFinal,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(afastado.ano) +
                                              "A, " +
                                              _vm._s(afastado.mes) +
                                              "M,\n                                            " +
                                              _vm._s(afastado.dia) +
                                              "D"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.editar(
                                                    afastado,
                                                    "Inativo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-pencil-alt"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: { title: "PCD" },
                  on: {
                    click: function($event) {
                      return _vm.carregaPcds()
                    }
                  }
                },
                [
                  _c("b-card-text", [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-empregados"
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Matrícula")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nome")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Adm")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. de Dem")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Tempo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Histórico")])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.pcds, function(pcd) {
                                    return _c(
                                      "tr",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editar(pcd, "Inativo")
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(_vm._s(pcd.pessoa.idPessoa))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(pcd.matricula))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(pcd.pessoa.nomePessoa))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                pcd.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                pcd.dataFinal,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(pcd.ano) +
                                              "A, " +
                                              _vm._s(pcd.mes) +
                                              "M,\n                                            " +
                                              _vm._s(pcd.dia) +
                                              "D"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.editar(
                                                    _vm.afastado,
                                                    "Inativo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-pencil-alt"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: { title: "Inativos" },
                  on: {
                    click: function($event) {
                      return _vm.carregaDemitidos()
                    }
                  }
                },
                [
                  _c("b-card-text", [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-empregados"
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Matrícula")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nome")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Adm")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. de Dem")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Tempo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Histórico")])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.demitidos, function(demitido) {
                                    return _c(
                                      "tr",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editar(
                                              demitido,
                                              "Inativo"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(demitido.pessoa.idPessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(demitido.matricula))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(demitido.pessoa.nomePessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                demitido.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                demitido.dataFinal,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(demitido.ano) +
                                              "A, " +
                                              _vm._s(demitido.mes) +
                                              "M,\n                                            " +
                                              _vm._s(demitido.dia) +
                                              "D"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.editar(
                                                    demitido,
                                                    "Inativo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-pencil-alt"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: { title: "Temporários" },
                  on: {
                    click: function($event) {
                      return _vm.carregaTemporarios()
                    }
                  }
                },
                [
                  _c("b-card-text", [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-empregados"
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _c("tr", [
                                    _c("th", [_vm._v("ID")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Matrícula")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nome")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. Adm")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Dt. de Dem")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Tempo")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Histórico")])
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.temporarios, function(temporario) {
                                    return _c(
                                      "tr",
                                      {
                                        staticStyle: { cursor: "pointer" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editar(
                                              temporario,
                                              "Inativo"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(temporario.pessoa.idPessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(temporario.matricula))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(temporario.pessoa.nomePessoa)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                temporario.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                temporario.dataFinal,
                                                "DD/MM/Y"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(temporario.ano) +
                                              "A, " +
                                              _vm._s(temporario.mes) +
                                              "M,\n                                            " +
                                              _vm._s(temporario.dia) +
                                              "D"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-outline-primary btn-sm",
                                              on: {
                                                click: function($event) {
                                                  return _vm.editar(
                                                    temporario,
                                                    "Inativo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-pencil-alt"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEmpregadosComponente.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403& */ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403&");
/* harmony import */ var _EmpresaEmpregadosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaEmpregadosComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmpresaEmpregadosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaEmpregadosComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEmpregadosComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEmpregadosComponente.vue?vue&type=template&id=12de9403&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEmpregadosComponente_vue_vue_type_template_id_12de9403___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);