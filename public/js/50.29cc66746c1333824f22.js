(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      selecionados: [],
      exames: [],
      carregando: false,
      mensagem: 'Carregando...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      pessoas: [],
      cpf: '',
      funcionarios: [],
      solicitacao: {
        empresaFuncionario: {
          pessoa: {},
          funcao: {},
          ambienteTrabalho: {},
          empresaContrato: {}
        },
        asoSolicitacaoExames: [],
        asoSolicitacaoExameAvulso: []
      },
      solicitacoes: [],
      contratos: [],
      ambientes: [],
      funcoes: [],
      examesPcmso: []
    };
  },
  methods: {
    relatorio: function relatorio(solicitacao) {
      this.carregar("Gerando relatorio...");
      var that = this;
      axios.get('/solicitacao-exames/solicitacao/' + solicitacao.idAsoSolicitacao + '/relatorio').then(function (response) {
        window.open('http://' + response.data.report);
        that.carregando = false;
      });
    },
    adicionar: function adicionar() {
      var that = this;
      axios.get('/tabelas/exames/list/').then(function (response) {
        that.exames = response.data;
        that.$refs.modalExames.show();
      });
    },
    adicionarMonitoramento: function adicionarMonitoramento() {
      var that = this;
      this.carregar("Buscando exames...");
      var that = this;
      axios.post('/solicitacao-exames', {
        solicitacao: this.solicitacao
      }).then(function (response) {
        console.log(response.data);
        that.carregando = false;

        if (response.data.status != 'false') {
          that.solicitacao = response.data;

          if (that.solicitacao.tipoAtestado != 'ADMISSIONAL') {
            that.funcionarios = [];
            that.funcionarios.push(that.solicitacao.empresaFuncionario);
          }

          axios.get('/tabelas/exames/list/').then(function (response) {
            that.exames = response.data;
            that.$refs.modalExames.show();
          });
        } else {
          that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
        }
      });
    },
    fechar: function fechar() {
      this.selecionados = [];
    },
    mudouPessoa: function mudouPessoa() {
      var that = this;
      var verif = this.solicitacoes.filter(function (solicitacao) {
        return solicitacao.empresaFuncionario.pessoa.idPessoa == that.solicitacao.empresaFuncionario.pessoa.idPessoa && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa && solicitacao.tipoAtestado == that.solicitacao.tipoAtestado && that.dataDiff(solicitacao.data, that.solicitacao.data) <= 30;
      });

      if (verif.length > 0) {
        if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
          var msg = "Essa pessoa já tem uma solicitação admissional de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'PERIÓDIOCO') {
          var msg = "Essa pessoa já tem uma solicitação periodica de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL') {
          var msg = "Essa pessoa já tem uma solicitação de monitoração pontual de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'DEMISSIONAL') {
          var msg = "Essa pessoa já tem uma solicitação de exame demissional de menos de 30 dias.";
        }

        var options = {
          title: "Atenção!",
          text: msg,
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Editar",
          cancelButtonText: "Sair",
          animation: false
        };
        this.$fire(options).then(function (r) {
          if (r.value == true) {
            that.editar(verif[0]);
          }
        });
        this.solicitacao = {
          data: new Date().toISOString().slice(0, 10),
          empresaFuncionario: {
            pessoa: {},
            funcao: {
              cargo: ''
            },
            empresaContrato: {
              empresaContratante: {
                nomeFantasia: ""
              }
            },
            ambienteTrabalho: {
              nomeAmbienteTrabalho: '',
              idOrigem: ''
            }
          },
          asoSolicitacaoExames: []
        };
      } else {
        this.buscaPcmso();
      }
    },
    estaSelecionado: function estaSelecionado(exame) {
      return this.selecionados.includes(exame);
    },
    estaAdicionado: function estaAdicionado(exame) {
      if (this.solicitacao.idAsoSolicitacao != 0) {
        var key = this.solicitacao.asoSolicitacaoExames.findIndex(function (x) {
          return x.pcmsoAmbienteExame.exame.idExame == exame.idExame;
        });
        var key2 = this.solicitacao.asoSolicitacaoExameAvulso.findIndex(function (x) {
          return x.exame.idExame == exame.idExame;
        });

        if (key < 0 && key2 < 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
    salvarExames: function salvarExames() {
      var that = this;
      this.selecionados.forEach(function (exame) {
        that.solicitacao.asoSolicitacaoExameAvulso.push({
          exame: exame,
          idAsoSolicitacaoExameAvulso: 0,
          asoSolicitacao: 0,
          usuario: 1
        });
      });
      this.selecionados = [];
    },
    buscarExames: function buscarExames() {
      var that = this;
      this.carregar("Buscando exames...");
      axios.get('/solicitacao-exames/solicitacao/' + this.solicitacao.idAsoSolicitacao + '/exames-pcmso').then(function (response) {
        that.solicitacao.asoSolicitacaoExames = response.data;
        console.log(response.data);
        that.carregando = false; // that.$alert('Exames encontrados!', 'Sucesso!', 'success');
      });
    },
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    modalAdmissional: function modalAdmissional() {
      var that = this;
      this.solicitacao = {
        data: new Date().toISOString().slice(0, 10),
        empresaFuncionario: {
          pessoa: {},
          funcao: {},
          ambienteTrabalho: {},
          empresaContrato: {}
        },
        asoSolicitacaoExames: [],
        asoSolicitacaoExameAvulso: []
      };
      this.cpf = '';
      this.solicitacao.idAsoSolicitacao = 0;
      this.solicitacao.tipo = 'SOLICITAÇÃO';
      this.solicitacao.tipoAtestado = 'ADMISSIONAL';
      this.buscarPessoasContratos(function () {
        that.$refs.modalAdmissional.show();
      });
    },
    modalPeriodico: function modalPeriodico(tipo) {
      var that = this;
      this.carregar("Buscando funcionários...");
      this.solicitacao = {
        data: new Date().toISOString().slice(0, 10),
        empresaFuncionario: {
          pessoa: {},
          funcao: {
            cargo: ''
          },
          empresaContrato: {
            empresaContratante: {
              nomeFantasia: ""
            }
          },
          ambienteTrabalho: {
            nomeAmbienteTrabalho: '',
            idOrigem: ''
          }
        },
        asoSolicitacaoExames: [],
        asoSolicitacaoExameAvulso: []
      };
      console.log(this.solicitacao);
      this.solicitacao.idAsoSolicitacao = 0;
      this.solicitacao.tipo = 'SOLICITAÇÃO';
      this.solicitacao.tipoAtestado = tipo;
      var that = this;

      if (tipo == 'RETORNO_TRABALHO') {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
          that.funcionarios = response.data;
          that.$refs.modalPeriodico.show();
          that.carregando = false; // that.sucesso('Carregado com sucesso!');
        });
      } else {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
          that.funcionarios = response.data;
          that.$refs.modalPeriodico.show();
          that.carregando = false;
        });
      }
    },
    buscarPessoasContratos: function buscarPessoasContratos(callback) {
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
        that.pessoas = response.data;
        axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
          // that.contratosAll = response.data;
          that.contratos = response.data;
          (callback || Function)();
        });
      });
    },
    editar: function editar(solicitacao) {
      this.carregar("Carregando solicitação...");
      var that = this;
      axios.get('/solicitacao-exames/solicitacao/' + solicitacao.idAsoSolicitacao).then(function (response) {
        that.solicitacao = response.data;
        console.log(that.solicitacao);
        that.buscarPessoasContratos(function () {
          if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
            that.buscaPcmso(that.buscaCargos(that.$refs.modalAdmissional.show()));
            that.pessoas.push(that.solicitacao.empresaFuncionario.pessoa);
          } else {
            that.buscaPcmso(that.buscaCargos(that.$refs.modalPeriodico.show()));
            that.funcionarios = [];
            that.funcionarios.push(that.solicitacao.empresaFuncionario);
          }
        });
      });
    },
    dataDiff: function dataDiff(dataSolicitacao, dataNova) {
      var data = Vue.moment(dataSolicitacao, "YYYY-MM-DD");
      var hoje = Vue.moment(dataNova, "YYYY-MM-DD");
      var diff = Vue.moment.duration(hoje.diff(data)).asDays();
      return diff;
    },
    buscaCpfPeriodico: function buscaCpfPeriodico() {
      var that = this;
      this.carregar("Buscando pessoa...");
      var verif = this.solicitacoes.filter(function (solicitacao) {
        return solicitacao.empresaFuncionario.pessoa.cpf == that.cpf.replace(/\D/g, '') && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa && solicitacao.tipoAtestado == that.solicitacao.tipoAtestado;
      });

      if (verif.length > 0 && this.dataDiff(verif[0].data, this.solicitacao.data) <= 30) {
        console.log(this.dataDiff(verif[0].data, this.solicitacao.data));
        that.carregando = false;

        if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
          var msg = "Essa pessoa já tem uma solicitação admissional de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'PERIÓDIOCO') {
          var msg = "Essa pessoa já tem uma solicitação periodica de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL') {
          var msg = "Essa pessoa já tem uma solicitação de monitoração pontual de menos de 30 dias.";
        } else if (that.solicitacao.tipoAtestado == 'DEMISSIONAL') {
          var msg = "Essa pessoa já tem uma solicitação de exame demissional de menos de 30 dias.";
        }

        var options = {
          title: "Atenção!",
          text: msg,
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Editar",
          cancelButtonText: "Sair",
          animation: false
        };
        this.$fire(options).then(function (r) {
          if (r.value == true) {
            that.editar(verif[0]);
          }
        });
      } else {
        var filtrada = this.funcionarios.filter(function (empregado) {
          return empregado.pessoa.cpf == that.cpf.replace(/\D/g, '');
          ;
        });

        if (filtrada.length == 0) {
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
            var empregados = response.data;
            var filtrada = empregados.filter(function (empregado) {
              return empregado.cpf == that.cpf.replace(/\D/g, '');
              ;
            });

            if (filtrada.length == 0) {
              that.carregando = false;
              that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
            } else {
              that.carregando = false;
              that.$alert('Essa pessoa não está contratada.', 'Atenção!', 'error');
            }
          });
        } else {
          that.carregando = false;
          this.solicitacao.empresaFuncionario = filtrada[0];
          this.mudouPessoa();
        }
      }
    },
    buscaCpf: function buscaCpf() {
      var that = this;
      this.carregar("Buscando pessoa..."); // var verif = this.solicitacoes.filter(function (solicitacao) {
      //     return solicitacao.empresaFuncionario.pessoa.cpf == that.cpf.replace(/\D/g, '') && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa;
      // });

      var verif = 0;

      if (verif.length > 0) {
        that.carregando = false;
        var options = {
          title: "Atenção!",
          text: "Essa pessoa já tem uma solicitação admissional de menos de 90 dias.",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Editar",
          cancelButtonText: "Sair",
          animation: false
        };
        this.$fire(options).then(function (r) {
          if (r.value == true) {
            that.editar(verif[0]);
          }
        });
      } else {
        var filtrada = this.pessoas.filter(function (pessoa) {
          return pessoa.cpf == that.cpf.replace(/\D/g, '');
        });
        console.log(filtrada);

        if (filtrada.length == 0) {
          if (this.solicitacao.tipoAtestado == 'ADMISSIONAL') {
            axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/pessoas/comVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
              var empregados = response.data;
              var filtrada = empregados.filter(function (empregado) {
                return empregado.cpf == that.cpf.replace(/\D/g, '');
                ;
              });

              if (filtrada.length == 0) {
                that.carregando = false;
                that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
              } else {
                that.carregando = false;
                that.$alert('Essa pessoa já está contratada.', 'Atenção!', 'error');
              }
            });
          } else {
            axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
              var empregados = response.data;
              var filtrada = empregados.filter(function (empregado) {
                return empregado.cpf == that.cpf.replace(/\D/g, '');
                ;
              });

              if (filtrada.length == 0) {
                that.carregando = false;
                that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
              } else {
                that.carregando = false;
                that.$alert('Essa pessoa não é um funcionário ativo.', 'Atenção!', 'error');
              }
            });
          }
        } else {
          that.carregando = false;
          this.solicitacao.empresaFuncionario.pessoa = filtrada[0];
        }
      }
    },
    buscaPcmso: function buscaPcmso() {
      var that = this;

      if (this.solicitacao.data && this.solicitacao.empresaFuncionario.empresaContrato.idEmpresaContrato) {
        this.carregar("Buscando PCMSO...");
        axios.post('/pcmso/ultimo', {
          'empresa': this.empresa.idEmpresa,
          'contrato': this.solicitacao.empresaFuncionario.empresaContrato.idEmpresaContrato,
          'data': this.solicitacao.data
        }).then(function (response) {
          setTimeout(function () {
            if (response.data != "") {
              that.mensagem = "Pronto. Buscando ambientes...";
              that.solicitacao.pcmso = response.data;
              axios.get('/pcmso/ambientes/' + response.data.idPcmso + '/list?ambientes=true').then(function (response) {
                that.ambientes = response.data;
                console.log(that.ambientes);
                that.mensagem = "Ok. Buscando o médico coordenador...";
                axios.get('/pcmso/' + that.solicitacao.pcmso.idPcmso + '/revisao-historico').then(function (response) {
                  console.log(response);
                  that.solicitacao.medicoCoordenador = response.data[0].empresaProfissional;
                  that.carregando = false; // that.$alert('Dados preenchidos!', 'Sucesso!', 'success');
                });
              });
            } else {
              that.carregando = false;
              that.$alert('Não há PCMSO nesta data e com este contrato.', 'Atenção!', 'error');
            }
          }, 500);
        });
      }
    },
    buscaCargos: function buscaCargos() {
      var that = this;
      this.carregar("Buscando cargos...");
      axios.get('/pcmso/ambiente/' + this.solicitacao.empresaFuncionario.ambienteTrabalho.idPcmsoAmbienteTrabalho + '/funcoes/list').then(function (response) {
        that.funcoes = response.data;
        that.carregando = false; // that.$alert('Cargos listados!', 'Sucesso!', 'success');
      });
    },
    salvarAdmissional: function salvarAdmissional() {
      this.carregar("Buscando exames...");
      var that = this;
      axios.post('/solicitacao-exames', {
        solicitacao: this.solicitacao
      }).then(function (response) {
        console.log(response.data);
        that.carregando = false;

        if (response.data.status != 'false') {
          that.solicitacao = response.data;

          if (that.solicitacao.tipoAtestado != 'ADMISSIONAL') {
            that.funcionarios = [];
            that.funcionarios.push(that.solicitacao.empresaFuncionario);
          } // that.$alert('Exames listados!', 'Sucesso!', 'success');

        } else {
          that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
        }
      });
    },
    selecionar: function selecionar(exame) {
      if (this.estaSelecionado(exame)) {
        var key = this.selecionados.findIndex(function (x) {
          return x.idExame == exame.idExame;
        });
        this.selecionados.splice(key, 1);
      } else {
        this.selecionados.push(exame);
      }
    },
    salvar: function salvar(evt) {
      this.carregar("Salvando..");
      evt.preventDefault();
      var that = this;
      axios.post('/solicitacao-exames/update', {
        solicitacao: this.solicitacao
      }).then(function (response) {
        console.log(response.data);
        that.carregando = false;

        if (response.data.status != 'false') {
          that.solicitacao = response.data; //  that.$alert('Pronto. Dados salvos.!', 'Sucesso!', 'success');
        } else {
          that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
        }
      });
    },
    chunk: function chunk(array, size) {
      var chunked_arr = [];

      for (var i = 0; i < array.length; i++) {
        var last = chunked_arr[chunked_arr.length - 1];

        if (!last || last.length === size) {
          chunked_arr.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }

      return chunked_arr;
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/solicitacoes').then(function (response) {
      that.solicitacoes = response.data;
      console.log(that.solicitacoes);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header .close[data-v-1732eac2] {\n  position: absolute;\n  right: 15px;\n  z-index: 1000;\n}\n.selecionar[data-v-1732eac2] {\n  cursor: pointer;\n}\n.selecionado[data-v-1732eac2] {\n  background-color: #71bb66;\n}\n.form-group[data-v-1732eac2] {\n  margin-bottom: 0.5rem;\n}\n.input-warning[data-v-1732eac2] {\n  background-color: #fce3bd;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "content" },
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 pl-0 mb-3" }, [
        _c("div", { staticClass: "btn-group" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                on: { click: _vm.modalAdmissional }
              },
              [_vm._v("Admissional")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                on: {
                  click: function($event) {
                    return _vm.modalPeriodico("PERIÓDICO")
                  }
                }
              },
              [_vm._v("Periódico")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                on: {
                  click: function($event) {
                    return _vm.modalPeriodico("MONITORAÇÃO_PONTUAL")
                  }
                }
              },
              [_vm._v("Monitoramento Pontual")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                on: {
                  click: function($event) {
                    return _vm.modalPeriodico("MUDANÇA_RISCO")
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
                  click: function($event) {
                    return _vm.modalPeriodico("DEMISSIONAL")
                  }
                }
              },
              [_vm._v("Demissional")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                on: {
                  click: function($event) {
                    return _vm.modalPeriodico("RETORNO_TRABALHO")
                  }
                }
              },
              [_vm._v("Retorno ao Trabalho")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box box-default" }, [
        _c("div", { staticClass: "box-body table-responsive" }, [
          _c("table", { staticClass: "table table-hover table-striped" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.solicitacoes, function(solicitacao) {
                return solicitacao.empresaFuncionario.empresaContrato.empresa
                  .idEmpresa == _vm.empresa.idEmpresa
                  ? _c("tr", [
                      _c("td", [_vm._v(_vm._s(solicitacao.idAsoSolicitacao))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(solicitacao.data, "DD/MM/YYYY")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(solicitacao.tipoAtestado))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(solicitacao.empresaFuncionario.matricula))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitacao.empresaFuncionario.pessoa.nomePessoa
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(solicitacao.empresaFuncionario.funcao.cargo)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            solicitacao.empresaFuncionario.ambienteTrabalho
                              .nomeAmbienteTrabalho
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.relatorio(solicitacao)
                              }
                            }
                          },
                          [_vm._v("Relatório")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-success btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.editar(solicitacao)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-pencil-alt" })]
                        ),
                        _vm._v(" "),
                        _vm._m(2, true)
                      ])
                    ])
                  : _vm._e()
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalAdmissional",
          attrs: {
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            size: "xl",
            title: "Solicitação de Exame",
            centered: "",
            id: "modalAdmissional"
          },
          on: { ok: _vm.salvar },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
                return [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Fechar"
                      },
                      on: {
                        click: function($event) {
                          return close()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row d-flex" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-12 mb-3 justify-content-center align-self-center"
                      },
                      [_c("h5", [_vm._v("Solicitação de Exame Admissional")])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("Data")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitacao.data,
                              expression: "solicitacao.data"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "" },
                          domProps: { value: _vm.solicitacao.data },
                          on: {
                            change: _vm.buscaPcmso,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.solicitacao,
                                "data",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 mt-4" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm._v("Tipo")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "", disabled: "" }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", selected: "" } },
                              [_vm._v("Admissional")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5 mt-4" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm._v("Pesquisar por CPF")
                          ])
                        ]),
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
                            disabled: _vm.solicitacao.idAsoSolicitacao > 0,
                            type: "text",
                            "aria-describedby": "basic-addon2"
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
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.buscaCpf()
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-search" })]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitacao.idAsoSolicitacao,
                              expression: "solicitacao.idAsoSolicitacao"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.solicitacao.idAsoSolicitacao },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.solicitacao,
                                "idAsoSolicitacao",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                var hide = ref.hide
                return [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning mb-0 text-center" },
                    [
                      _c("strong", [_vm._v("Importante!")]),
                      _vm._v(
                        " Os exames em destaque (marcados com esta cor) ainda não estão salvos. Para salvar, clique no botão "
                      ),
                      _c("i", [_vm._v('"Salvar"')]),
                      _vm._v(" ao lado.\n                "),
                      _c("i", { staticClass: "fas fa-arrow-right" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: {
                        disabled: _vm.solicitacao.idAsoSolicitacao == 0,
                        variant: "success"
                      },
                      on: {
                        click: function($event) {
                          return ok()
                        }
                      }
                    },
                    [_vm._v("\n                Salvar\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return cancel()
                        }
                      }
                    },
                    [_vm._v("\n                Fechar\n            ")]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Pessoa")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitacao.empresaFuncionario.pessoa,
                        expression: "solicitacao.empresaFuncionario.pessoa"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.solicitacao.empresaFuncionario,
                          "pessoa",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.pessoas, function(pessoa) {
                    return _c("option", { domProps: { value: pessoa } }, [
                      _vm._v(_vm._s(pessoa.nomePessoa))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.pessoa.cpf,
                      expression: "solicitacao.empresaFuncionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.pessoa.cpf
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario.pessoa,
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Matricula")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.matricula,
                      expression: "solicitacao.empresaFuncionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.matricula
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario,
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
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.pessoa.idPessoa,
                      expression:
                        "solicitacao.empresaFuncionario.pessoa.idPessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.pessoa.idPessoa
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario.pessoa,
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
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Contrato")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value:
                          _vm.solicitacao.empresaFuncionario.empresaContrato,
                        expression:
                          "solicitacao.empresaFuncionario.empresaContrato"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.solicitacao.empresaFuncionario,
                            "empresaContrato",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.buscaPcmso
                      ]
                    }
                  },
                  _vm._l(_vm.contratos, function(contrato) {
                    return _c("option", { domProps: { value: contrato } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(contrato.empresaContratante.nomeFantasia) +
                          "\n                        "
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
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
                        value:
                          _vm.solicitacao.empresaFuncionario.ambienteTrabalho,
                        expression:
                          "solicitacao.empresaFuncionario.ambienteTrabalho"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm.ambientes.length == 0 },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.solicitacao.empresaFuncionario,
                            "ambienteTrabalho",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.buscaCargos
                      ]
                    }
                  },
                  [
                    _vm.ambientes.length == 0
                      ? _c(
                          "option",
                          {
                            attrs: { disabled: "", selected: "" },
                            domProps: { value: {} }
                          },
                          [_vm._v(" ---- SELECIONE PRIMEIRO UM CONTRATO ---- ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.ambientes, function(ambiente) {
                      return _c("option", { domProps: { value: ambiente } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(ambiente.idOrigem) +
                            " -\n                            " +
                            _vm._s(ambiente.nomeAmbienteTrabalho)
                        )
                      ])
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitacao.empresaFuncionario.funcao,
                        expression: "solicitacao.empresaFuncionario.funcao"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm.funcoes.length == 0 },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.solicitacao.empresaFuncionario,
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
                            attrs: { disabled: "", selected: "" },
                            domProps: { value: {} }
                          },
                          [_vm._v(" ---- SELECIONE PRIMEIRO UM AMBIENTE ---- ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.funcoes, function(funcao) {
                      return _c("option", { domProps: { value: funcao } }, [
                        _vm._v(
                          _vm._s(funcao.cargo) + "\n                        "
                        )
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 mt-1 mb-2 text-right" }, [
              _vm.solicitacao.idAsoSolicitacao == 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.salvarAdmissional }
                    },
                    [_vm._v("Buscar Exames")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.solicitacao.asoSolicitacaoExames.length == 0 &&
              _vm.solicitacao.idAsoSolicitacao != 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.buscarExames }
                    },
                    [_vm._v("Buscar Exames")]
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 mt-0 mb-1 text-center" }, [
              _c("h5", { staticClass: "bg-success p-2 text-light" }, [
                _vm._v("Exames")
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.solicitacao.idAsoSolicitacao == 0
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _c("strong", [_vm._v("Espere...")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          " Esta é uma solicitação admissional. Você precisa armazena-la primeiro para poder visualizar os exames. "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v('Clique no botão "Buscar Exames" '),
                        _c("strong", [
                          _vm._v("após preencher todos os dados acima")
                        ]),
                        _vm._v(" para armazenar os dados e buscar os exames")
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.solicitacao.asoSolicitacaoExames.length == 0 &&
          _vm.solicitacao.idAsoSolicitacao != 0
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _c("strong", [_vm._v("Ainda não há exames....")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          'Deseja utilizar o método de busca de exames? Clique no botão "Buscar Exames".'
                        )
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.solicitacao.asoSolicitacaoExames.length > 0
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _vm._l(_vm.solicitacao.asoSolicitacaoExames, function(
                        exame
                      ) {
                        return _c("div", { staticClass: "col-md-4 mt-3" }, [
                          exame.idAsoSolicitacaoExame == 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: exame.detalhes.nomeExame,
                                    expression: "exame.detalhes.nomeExame"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "input-warning":
                                    exame.idAsoSolicitacaoExame == 0
                                },
                                attrs: { type: "text", disabled: "" },
                                domProps: { value: exame.detalhes.nomeExame },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      exame.detalhes,
                                      "nomeExame",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          exame.idAsoSolicitacaoExame != 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      exame.pcmsoAmbienteExame.exame.nomeExame,
                                    expression:
                                      "exame.pcmsoAmbienteExame.exame.nomeExame"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "input-warning":
                                    exame.idAsoSolicitacaoExame == 0
                                },
                                attrs: { type: "text", disabled: "" },
                                domProps: {
                                  value:
                                    exame.pcmsoAmbienteExame.exame.nomeExame
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      exame.pcmsoAmbienteExame.exame,
                                      "nomeExame",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      }),
                      _vm._v(" "),
                      _vm._l(
                        _vm.solicitacao.asoSolicitacaoExameAvulso,
                        function(exame) {
                          return _c("div", { staticClass: "col-md-4 mt-3" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: exame.exame.nomeExame,
                                  expression: "exame.exame.nomeExame"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "input-warning":
                                  exame.idAsoSolicitacaoExameAvulso == 0
                              },
                              attrs: { type: "text", disabled: "" },
                              domProps: { value: exame.exame.nomeExame },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    exame.exame,
                                    "nomeExame",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        }
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12 text-right mt-3 mb-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.adicionar }
                    },
                    [_vm._v("Exames Extras")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              !_vm.solicitacao.medicoCoordenador
                ? _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.solicitacao.medicoCoordenador
                ? _c(
                    "div",
                    { staticClass: "alert alert-dark p-2 text-center w-100" },
                    [
                      _vm._v(
                        " Médico Responsável pelo PCMSO V " +
                          _vm._s(_vm.solicitacao.pcmso.versao) +
                          " de " +
                          _vm._s(
                            _vm._f("moment")(
                              _vm.solicitacao.pcmso.dataHora,
                              "DD/MM/YYYY"
                            )
                          ) +
                          " Dr. " +
                          _vm._s(
                            _vm.solicitacao.medicoCoordenador.pessoa.nomePessoa
                          ) +
                          " - CRM/" +
                          _vm._s(_vm.solicitacao.medicoCoordenador.uf) +
                          " " +
                          _vm._s(
                            _vm.solicitacao.medicoCoordenador.numeroRegistro
                          ) +
                          " "
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalExames",
          attrs: {
            size: "xl",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Selecione os exames",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.salvarExames,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 mb-3 text-left" }, [
              _vm._v(
                "\n                Total de exames selecionados: " +
                  _vm._s(_vm.selecionados.length) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _c("thead", [
                  _c("th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Nome")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Descrição")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Unidade")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Sexo")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Grupo")]),
                  _vm._v(" "),
                  _c("th", { staticStyle: { width: "90px" } }, [
                    _vm._v("Tabela 27")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.exames, function(exame, index) {
                    return !_vm.estaAdicionado(exame)
                      ? _c(
                          "tr",
                          {
                            staticClass: "selecionar",
                            class: { selecionado: _vm.estaSelecionado(exame) },
                            on: {
                              click: function($event) {
                                return _vm.selecionar(exame)
                              }
                            }
                          },
                          [
                            _c("td", [_vm._v(_vm._s(exame.idExame))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.nomeExame))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.descricao))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.unidadeMedida))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.sexo))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.grupoExame))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(exame.tabela27))])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalPeriodico",
          attrs: {
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            size: "xl",
            title: "Solicitação de Exame",
            centered: "",
            id: "modalPeriodico"
          },
          on: { ok: _vm.salvar },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
                return [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Fechar"
                      },
                      on: {
                        click: function($event) {
                          return close()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row d-flex" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-12 mb-3 justify-content-center align-self-center"
                      },
                      [
                        _vm.solicitacao.tipoAtestado == "PERIÓDICO"
                          ? _c("h5", [_vm._v("Solicitação de Exame Periódico")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.solicitacao.tipoAtestado == "MONITORAÇÃO_PONTUAL"
                          ? _c("h5", [
                              _vm._v(
                                "Solicitação de Exame para Monitoramento Pontual"
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.solicitacao.tipoAtestado == "MUDANÇA_RISCO"
                          ? _c("h5", [
                              _vm._v(
                                "Solicitação de Exame para Mudança de Função"
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.solicitacao.tipoAtestado == "DEMISSIONAL"
                          ? _c("h5", [
                              _vm._v("Solicitação de Exame Demissional")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.solicitacao.tipoAtestado == "RETORNO_TRABALHO"
                          ? _c("h5", [
                              _vm._v(
                                "Solicitação de Exame para Retorno ao Trabalho"
                              )
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("Data")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitacao.data,
                              expression: "solicitacao.data"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "" },
                          domProps: { value: _vm.solicitacao.data },
                          on: {
                            change: _vm.buscaPcmso,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.solicitacao,
                                "data",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4 mt-4" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm._v("Tipo")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitacao.tipoAtestado,
                                expression: "solicitacao.tipoAtestado"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: "" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.solicitacao,
                                  "tipoAtestado",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "PERIÓDICO", selected: "" } },
                              [_vm._v("Periódico")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: {
                                  value: "MONITORAÇÃO_PONTUAL",
                                  selected: ""
                                }
                              },
                              [_vm._v("Monitoramento Pontual")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { value: "MUDANÇA_RISCO", selected: "" }
                              },
                              [_vm._v("Mudança de Função")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "DEMISSIONAL", selected: "" } },
                              [_vm._v("Demissional")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: {
                                  value: "RETORNO_TRABALHO",
                                  selected: ""
                                }
                              },
                              [_vm._v("Retorno ao Trabalho")]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5 mt-4" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c("span", { staticClass: "input-group-text" }, [
                            _vm._v("Pesquisar por CPF")
                          ])
                        ]),
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
                            disabled: _vm.solicitacao.idAsoSolicitacao > 0,
                            type: "text",
                            "aria-describedby": "basic-addon2"
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
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.buscaCpfPeriodico()
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-search" })]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitacao.idAsoSolicitacao,
                              expression: "solicitacao.idAsoSolicitacao"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.solicitacao.idAsoSolicitacao },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.solicitacao,
                                "idAsoSolicitacao",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                var hide = ref.hide
                return [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning mb-0 text-center" },
                    [
                      _c("strong", [_vm._v("Importante!")]),
                      _vm._v(
                        " Os exames em destaque (marcados com esta cor) ainda não estão salvos. Para salvar, clique no botão "
                      ),
                      _c("i", [_vm._v('"Salvar"')]),
                      _vm._v(" ao lado.\n                "),
                      _c("i", { staticClass: "fas fa-arrow-right" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: {
                        disabled: _vm.solicitacao.idAsoSolicitacao == 0,
                        variant: "success"
                      },
                      on: {
                        click: function($event) {
                          return ok()
                        }
                      }
                    },
                    [_vm._v("\n                Salvar\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return cancel()
                        }
                      }
                    },
                    [_vm._v("\n                Fechar\n            ")]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Pessoa")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.solicitacao.empresaFuncionario,
                        expression: "solicitacao.empresaFuncionario"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm.solicitacao.idAsoSolicitacao > 0 },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.solicitacao,
                            "empresaFuncionario",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.mudouPessoa
                      ]
                    }
                  },
                  _vm._l(_vm.funcionarios, function(funcionario) {
                    return _c("option", { domProps: { value: funcionario } }, [
                      _vm._v(_vm._s(funcionario.pessoa.nomePessoa))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.pessoa.cpf,
                      expression: "solicitacao.empresaFuncionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.pessoa.cpf
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario.pessoa,
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Matricula")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.matricula,
                      expression: "solicitacao.empresaFuncionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.matricula
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario,
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
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.empresaFuncionario.pessoa.idPessoa,
                      expression:
                        "solicitacao.empresaFuncionario.pessoa.idPessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.solicitacao.empresaFuncionario.pessoa.idPessoa
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao.empresaFuncionario.pessoa,
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
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Contrato")]),
                _vm._v(" "),
                _vm.solicitacao.empresaFuncionario.empresaContrato
                  .empresaContratante
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value:
                            _vm.solicitacao.empresaFuncionario.empresaContrato
                              .empresaContratante.nomeFantasia,
                          expression:
                            "solicitacao.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value:
                          _vm.solicitacao.empresaFuncionario.empresaContrato
                            .empresaContratante.nomeFantasia
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao.empresaFuncionario.empresaContrato
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
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Ambiente de Trabalho")
                ]),
                _vm._v(" "),
                _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value:
                            _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                              .idOrigem +
                            " - " +
                            _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                              .nomeAmbienteTrabalho,
                          expression:
                            "solicitacao.empresaFuncionario.ambienteTrabalho.idOrigem + ' - ' + solicitacao.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value:
                          _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                            .idOrigem +
                          " - " +
                          _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                            .nomeAmbienteTrabalho
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao.empresaFuncionario.ambienteTrabalho
                              .idOrigem +
                              " - " +
                              _vm.solicitacao.empresaFuncionario
                                .ambienteTrabalho,
                            "nomeAmbienteTrabalho",
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
                _vm._v(" "),
                _vm.solicitacao.empresaFuncionario.funcao
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value:
                            _vm.solicitacao.empresaFuncionario.funcao.cargo,
                          expression:
                            "solicitacao.empresaFuncionario.funcao.cargo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value: _vm.solicitacao.empresaFuncionario.funcao.cargo
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao.empresaFuncionario.funcao,
                            "cargo",
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.solicitacao.tipoAtestado != "MONITORAÇÃO_PONTUAL"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12 mt-1 mb-2 text-right" }, [
                  _vm.solicitacao.idAsoSolicitacao == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-warning",
                          on: { click: _vm.salvarAdmissional }
                        },
                        [_vm._v("Buscar Exames")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.solicitacao.asoSolicitacaoExames.length == 0 &&
                  _vm.solicitacao.idAsoSolicitacao != 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-warning",
                          on: { click: _vm.buscarExames }
                        },
                        [_vm._v("Buscar Exames")]
                      )
                    : _vm._e()
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 mt-0 mb-1 text-center" }, [
              _c("h5", { staticClass: "bg-success p-2 text-light" }, [
                _vm._v("Exames")
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.solicitacao.idAsoSolicitacao == 0 &&
          _vm.solicitacao.tipoAtestado != "MONITORAÇÃO_PONTUAL"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _c("strong", [_vm._v("Espere...")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          " Esta é uma solicitação admissional. Você precisa armazena-la primeiro para poder visualizar os exames. "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v('Clique no botão "Buscar Exames" '),
                        _c("strong", [
                          _vm._v("após preencher todos os dados acima")
                        ]),
                        _vm._v(" para armazenar os dados e buscar os exames")
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.solicitacao.asoSolicitacaoExames.length == 0 &&
          _vm.solicitacao.idAsoSolicitacao != 0 &&
          _vm.solicitacao.tipoAtestado != "MONITORAÇÃO_PONTUAL"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _c("strong", [_vm._v("Ainda não há exames....")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          'Deseja utilizar o método de busca de exames? Clique no botão "Buscar Exames".'
                        )
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.solicitacao.asoSolicitacaoExameAvulso.length == 0 &&
          _vm.solicitacao.tipoAtestado == "MONITORAÇÃO_PONTUAL"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "alert alert-warning text-center" },
                    [
                      _c("strong", [_vm._v("Ainda não há exames...")]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-warning",
                          on: { click: _vm.adicionarMonitoramento }
                        },
                        [_vm._v("Exames Extras")]
                      )
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.solicitacao.asoSolicitacaoExames.length > 0 ||
          _vm.solicitacao.asoSolicitacaoExameAvulso.length > 0
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _vm._l(_vm.solicitacao.asoSolicitacaoExames, function(
                        exame
                      ) {
                        return _c("div", { staticClass: "col-md-4" }, [
                          exame.idAsoSolicitacaoExame == 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: exame.detalhes.nomeExame,
                                    expression: "exame.detalhes.nomeExame"
                                  }
                                ],
                                staticClass: "form-control mt-2",
                                class: {
                                  "input-warning":
                                    exame.idAsoSolicitacaoExame == 0
                                },
                                attrs: { disabled: "" },
                                domProps: { value: exame.detalhes.nomeExame },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      exame.detalhes,
                                      "nomeExame",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          exame.idAsoSolicitacaoExame != 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      exame.pcmsoAmbienteExame.exame.nomeExame,
                                    expression:
                                      "exame.pcmsoAmbienteExame.exame.nomeExame"
                                  }
                                ],
                                staticClass: "form-control mt-2",
                                class: {
                                  "input-warning":
                                    exame.idAsoSolicitacaoExame == 0
                                },
                                attrs: { disabled: "" },
                                domProps: {
                                  value:
                                    exame.pcmsoAmbienteExame.exame.nomeExame
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      exame.pcmsoAmbienteExame.exame,
                                      "nomeExame",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      }),
                      _vm._v(" "),
                      _vm._l(
                        _vm.solicitacao.asoSolicitacaoExameAvulso,
                        function(exame) {
                          return _c("div", { staticClass: "col-md-4" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: exame.exame.nomeExame,
                                  expression: "exame.exame.nomeExame"
                                }
                              ],
                              staticClass: "form-control mt-2",
                              class: {
                                "input-warning":
                                  exame.idAsoSolicitacaoExameAvulso == 0
                              },
                              attrs: { type: "text", disabled: "" },
                              domProps: { value: exame.exame.nomeExame },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    exame.exame,
                                    "nomeExame",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        }
                      )
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12 text-right mb-3 mt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.adicionar }
                    },
                    [_vm._v("Exames Extras")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              !_vm.solicitacao.medicoCoordenador
                ? _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.solicitacao.medicoCoordenador
                ? _c(
                    "div",
                    { staticClass: "alert alert-dark p-2 text-center w-100" },
                    [
                      _vm._v(
                        " Médico Responsável pelo PCMSO V " +
                          _vm._s(_vm.solicitacao.pcmso.versao) +
                          " de " +
                          _vm._s(
                            _vm._f("moment")(
                              _vm.solicitacao.pcmso.dataHora,
                              "DD/MM/YYYY"
                            )
                          ) +
                          " Dr. " +
                          _vm._s(
                            _vm.solicitacao.medicoCoordenador.pessoa.nomePessoa
                          ) +
                          " - CRM/" +
                          _vm._s(_vm.solicitacao.medicoCoordenador.uf) +
                          " " +
                          _vm._s(
                            _vm.solicitacao.medicoCoordenador.numeroRegistro
                          ) +
                          " "
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-success dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", { staticClass: "fa fa-plus" }),
        _vm._v(" Adicionar Solicitação\n            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID Soli.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Matrícula")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cargo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ambiente")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v("Ação")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-outline-danger btn-sm" }, [
      _c("i", { staticClass: "fas fa-trash" })
    ])
  }
]
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

/***/ "./resources/js/components/medicina/SolicitacaoExame.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/medicina/SolicitacaoExame.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true& */ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true&");
/* harmony import */ var _SolicitacaoExame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolicitacaoExame.vue?vue&type=script&lang=js& */ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& */ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SolicitacaoExame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1732eac2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/medicina/SolicitacaoExame.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitacaoExame.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=style&index=0&id=1732eac2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_style_index_0_id_1732eac2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/SolicitacaoExame.vue?vue&type=template&id=1732eac2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SolicitacaoExame_vue_vue_type_template_id_1732eac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);