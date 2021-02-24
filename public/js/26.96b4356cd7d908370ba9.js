(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return _defineProperty({
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
      atividadeEspecial: 'NÃO'
    }, "options", [{
      title: 'Biológico',
      valor: 'BIOLÓGICO',
      color: "background-color:rgb(148, 90, 30)"
    }, {
      title: 'Ergonômico',
      valor: 'ERGONÔMICO',
      color: "background-color:rgb(255, 255, 0)"
    }, {
      title: 'Acidente',
      valor: 'ACIDENTE',
      color: "background-color:rgb(0, 0, 255)"
    }, {
      title: 'Físico',
      valor: 'FÍSICO',
      color: "background-color:rgb(0, 128, 0)"
    }, {
      title: 'Químico',
      valor: 'QUÍMICO',
      color: "background-color:rgb(255, 0, 0)"
    }, {
      title: 'Periculosos',
      valor: 'PERICULOSOS',
      color: "background-color:rgb(255, 255, 0)"
    }, {
      title: 'Associação de fatores de risco',
      valor: 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO',
      color: "background-color:rgb(0, 0, 0)"
    }, {
      title: 'Ausência de fatores de risco',
      valor: 'AUSÊNCIA_DE_FATORES_DE_RISCO',
      color: "background-color:rgb(128, 128, 128)"
    }, {
      title: 'Penosos',
      valor: 'PENOSOS',
      color: "background-color:rgb(254, 218, 71)"
    }]);
  },
  methods: {
    tratarEnquadramento: function tratarEnquadramento(e) {
      if (e == "SELECIONE") {
        return "Selecione";
      } else if (e == "AI_Q1") {
        return "NR 07-A I-Q1";
      } else if (e == "AI_Q2") {
        return "NR 07-A I-Q2";
      } else if (e == "AII") {
        return "NR 07-A II";
      } else if (e == "AIII") {
        return "NR 07-A III";
      } else if (e == "AIV") {
        return "NR 07-A IV<";
      } else if (e == "AV") {
        return "NR 07-A V";
      } else if (e == "OUTROS") {
        return "Outros";
      }
    },
    customLabel: function customLabel(_ref2) {
      var title = _ref2.title,
          desc = _ref2.desc;
      return "".concat(title, " \u2013 ").concat(desc);
    },
    cor: function cor(risco) {
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
    grupoDeRisco: function grupoDeRisco(risco) {
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
    mudouEnquadramento: function mudouEnquadramento() {
      if (this.enquadramento_exame == 'AI_Q1') {
        this.interpretacao = "EE";
      }

      if (this.enquadramento_exame == 'AI_Q2') {
        this.interpretacao = "SC";
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
      }, 800);
    },
    testaCas: function testaCas() {
      // console.log(isNaN(this.cas));
      if (isNaN(this.cas)) {
        // console.log(this.cas);
        // console.log(this.cas != 'N' && this.cas != 'NA');
        if (this.cas != 'N' && this.cas != 'NA') {
          this.cas = '';
        }
      }
    },
    alerta: function alerta(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 1000);
    },
    ok: function ok(evt) {
      evt.preventDefault();

      if (this.editar) {
        this.atualizar();
      } else {
        this.salvar();
      }
    },
    cancelarExame: function cancelarExame() {
      this.exame = '';
      this.id_exame = null;
      this.enquadramento_exame = '';
      this.interpretacao = '';
      this.ibpm = '';
      this.novo = false;
    },
    cancelarUnidade: function cancelarUnidade() {
      this.unidade = '';
      this.id_unidade = null;
      this.limite = '';
      this.nivel = '';
      this.novoUn = false;
    },
    editarExame: function editarExame(exame, key) {
      var that = this;
      this.exame = exame.exame;
      this.id_exame = key;
      this.enquadramento_exame = exame.enquadramento;
      this.interpretacao = exame.interpretacao;
      this.ibpm = exame.ibpm;
      this.atual = exame.exame.idExame;
      this.novo = true;
    },
    editarUnidade: function editarUnidade(unidade, key) {
      var that = this;
      this.unidade = unidade.unidadeMedida;
      this.id_unidade = key;
      this.nivel = unidade.nivelAcao;
      this.limite = unidade.limiteTolerancia;
      this.novoUn = true;
    },
    addExame: function addExame() {
      var that = this; // console.log(this.exames);
      // console.log(this.exames[this.id_exame]);

      if ((this.enquadramento_exame == 'AI_Q1' || this.enquadramento_exame == 'AI_Q2') && this.ibpm != '' || this.enquadramento_exame != 'AI_Q1' && this.enquadramento_exame != 'AI_Q2') {
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
    addUnidade: function addUnidade() {
      var that = this; // console.log(this.exames);
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
    excluirUnidade: function excluirUnidade(key) {
      this.unidades.splice(key, 1);
    },
    excluirExame: function excluirExame(key) {
      this.exames.splice(key, 1);
    },
    salvar: function salvar() {
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
          atividadeEspecial: that.atividadeEspecial
        }).then(function (response) {
          console.log(response.data);

          if (response.data == 'existente') {
            that.codigo = '';
            that.erro = true;
            that.alerta('Código já existente, verifique!');
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
            that.$nextTick(function () {
              that.fechar();
              that.sucesso('Salvo com sucesso!');
            });
          }
        });
      } else {
        that.alerta('Preencha todos os campos');
      }
    },
    atualizar: function atualizar() {
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
          atividadeEspecial: that.atividadeEspecial
        }).then(function (response) {
          console.log(response.data);

          if (response.data == 'existente') {
            that.codigo = '';
            that.erro = true;
            that.alerta('Código já existente, verifique!');
          } else {
            that.riscos = response.data; // that.descricao = '';
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

            that.$nextTick(function () {
              that.fechar();
              that.sucesso('Atualizado com sucesso!');
            });
          }
        });
      } else {
        that.alerta('Preencha todos os campos');
      }
    },
    preencher: function preencher(dados) {
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
      };
    },
    abrir: function abrir() {
      console.log(this.unidades);
      var that = this;
      this.$refs.myModal.show();
    },
    fechar: function fechar() {
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
    fecharCerteza: function fecharCerteza() {
      this.$refs.modalCerteza.hide();
    },
    remover: function remover(dados) {
      // var that = this;
      this.deletar = dados.idRisco;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy(); // axios.get('/tabelas/riscos/remover/' + dados.idrisco).then(function(response){
      //     that.riscos = response.data;
      // });
    },
    certeza: function certeza() {
      this.carregar('Removendo risco...');
      var that = this;
      axios.get('/tabelas/riscos/remover/' + this.deletar).then(function (response) {
        if (response.data != 'erro') {
          that.riscos = response.data;
          that.$nextTick(function () {
            that.fecharCerteza();
            that.sucesso('Excluido com sucesso!');
          });
        } else {
          that.$nextTick(function () {
            that.fecharCerteza();
            that.alerta('Erro ao excluir!');
          });
        }
      });
    },
    selecionaGrupo: function selecionaGrupo() {
      if (this.value != null) {
        this.grupo = this.value.valor;
      }
    },
    ordenar: function ordenar() {
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
    pesquisar: function pesquisar() {
      if (this.termo != '' && this.termo != ' ') {
        this.carregar('Realizando a busca...');
        console.log(this.termo);
        console.log(this.selecionado);
        var that = this;
        axios.get('/tabelas/riscos/buscar/' + that.selecionado + "/" + that.termo).then(function (response) {
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
    voltar: function voltar() {
      var that = this;
      this.carregar('Recuperando todos os riscos...');
      axios.get('/tabelas/riscos/list').then(function (response) {
        that.riscos = response.data;
        that.sucesso('Todos os itens recuperados com sucesso!');
        that.busca = false;
        that.termo = '';
      });
    },
    foco: function foco(id) {
      scrollPageTo('#risco' + id);
      this.destaque = id;
      var that = this;
      setTimeout(function () {
        that.destaque = '';
        console.log('foi');
      }, 2000);
    },
    exameEmRisco: function exameEmRisco(id) {
      /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */
      for (var i = 0; i < this.exames.length; i++) {
        if (this.exames[i].exame.idExame === id) {
          return true;
        }
      }

      return false;
    },
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce(function (loading, search, vm) {
      fetch("".concat(window.location.origin, "/tabelas/epi/buscar/descricao/").concat(escape(search))).then(function (data) {
        console.log(data);
        data.json().then(function (json) {
          vm.options = json;
        });
        loading(false);
      });
    }, 350)
  },
  mounted: function mounted() {
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
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cx {\n  float: left;\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n  border: 1px solid black;\n}\ndiv.btn {\n  cursor: pointer;\n}\n.btn-editar {\n  color: #008d4c;\n}\n.btn-remover {\n  color: red;\n}\n.row-flex {\n  flex-wrap: wrap;\n  display: flex;\n}\n.row-flex .col-box {\n  margin-bottom: 20px;\n}\n.row-flex .col-box .box-default,\n.row-flex .col-box .box-successr {\n  height: 100%;\n}\n.detalhes {\n  padding-left: 20px;\n}\nth {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}\n.input-group select {\n  -webkit-appearance: none;\n}\n.input-group input {\n  -webkit-appearance: none;\n}\n.input-group.unidade-medida input {\n  width: 100% !important;\n  -webkit-appearance: none;\n}\n@-webkit-keyframes highlight {\n0% {\n    background: rgba(0, 141, 76, 0.6);\n    /* lovely yellow colour */\n}\n100% {\n    background: #ffffff;\n}\n}\n@keyframes highlight {\n0% {\n    background: rgba(0, 141, 76, 0.6);\n    /* lovely yellow colour */\n}\n100% {\n    background: #ffffff;\n}\n}\n.highlight {\n  -webkit-animation: highlight 2s;\n          animation: highlight 2s;\n}\n.multiselect__tags {\n  padding-top: 8px;\n}\n.multiselect__single {\n  margin-bottom: 8px;\n}\n\n/* If using colors */\nspan.color {\n  border: 1px solid silver;\n  vertical-align: middle;\n  margin-right: 5px;\n  min-width: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RiscosComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: { "margin-bottom": "15px", "margin-top": "10px" }
        },
        [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { id: "modal", type: "button" },
                  on: { click: _vm.abrir }
                },
                [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Incluir")]
              ),
              _vm._v(" "),
              _vm.montou
                ? _c(
                    "download-excel",
                    {
                      staticClass: "btn btn-sm btn-secondary",
                      attrs: { data: this.riscos, name: "riscos.xls" }
                    },
                    [
                      _c("i", { staticClass: "far fa-save" }),
                      _vm._v(" Exportar\n            ")
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.montou
        ? _c("div", { staticClass: "box box-info" }, [
            _c("div", { staticClass: "box-body table-responsive" }, [
              _c(
                "table",
                {
                  staticClass: "table table-hover table-striped",
                  attrs: { id: "tabelaListagem" }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.riscos, function(risco) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "80px" }
                          },
                          [_c("b", [_vm._v(_vm._s(risco.idRisco))])]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "justify",
                              "vertical-align": "middle"
                            }
                          },
                          [
                            _c("div", {
                              staticClass: "cx",
                              style: _vm.cor(risco.grupoRisco)
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.grupoDeRisco(risco.grupoRisco)) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "justify",
                              "vertical-align": "middle"
                            }
                          },
                          [_vm._v(_vm._s(risco.nomeRisco))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "justify",
                              "vertical-align": "middle"
                            }
                          },
                          [_vm._v(_vm._s(risco.tabela23))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "100px" }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.remover(risco)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-trash" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-primary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.preencher(risco)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-pencil-alt" })]
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "myModal",
          attrs: {
            size: "xl",
            centered: "",
            "no-close-on-backdrop": true,
            "no-close-on-esc": true,
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.ok,
            cancel: function($event) {
              return _vm.fechar()
            },
            close: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-bottom": "20px" } },
            [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card card-success" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                        Detalhes do Fator de Risco\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          class: {
                            "col-md-4": _vm.grupo == "QUÍMICO",
                            "col-md-5": _vm.grupo != "QUÍMICO"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { staticClass: "typo__label" }, [
                                _vm._v("Grupo")
                              ]),
                              _vm._v(" "),
                              _c("multiselect", {
                                attrs: {
                                  placeholder: "Selecione um grupo",
                                  label: "title",
                                  "track-by": "title",
                                  options: _vm.options,
                                  "option-height": 104,
                                  "custom-label": _vm.customLabel,
                                  "show-labels": false
                                },
                                on: { input: _vm.selecionaGrupo },
                                scopedSlots: _vm._u([
                                  {
                                    key: "singleLabel",
                                    fn: function(props) {
                                      return [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "color",
                                            style: props.option.color
                                          },
                                          [_vm._v("     ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "option__desc" },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "option__title" },
                                              [
                                                _vm._v(
                                                  _vm._s(props.option.title)
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "option",
                                    fn: function(props) {
                                      return [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "color",
                                            style: props.option.color
                                          },
                                          [_vm._v("     ")]
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "value" }, [
                                          _vm._v(_vm._s(props.option.title))
                                        ])
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.value,
                                  callback: function($$v) {
                                    _vm.value = $$v
                                  },
                                  expression: "value"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.grupo == "QUÍMICO"
                        ? _c("div", { staticClass: "col-md-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("CAS")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cas,
                                    expression: "cas"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.cas },
                                on: {
                                  keyup: _vm.testaCas,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.cas = $event.target.value
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
                            "col-md-3": _vm.grupo == "QUÍMICO",
                            "col-md-4": _vm.grupo != "QUÍMICO"
                          }
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fatores de Risco")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.nome,
                                  expression: "nome"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: _vm.nome },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.nome = $event.target.value
                                }
                              }
                            })
                          ])
                        ]
                      ),
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
                                value: _vm.id,
                                expression: "id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: "" },
                            domProps: { value: _vm.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.id = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("T23 eSocial")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.tabela23,
                                expression: "tabela23"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.tabela23 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.tabela23 = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Complemento")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.complemento,
                                expression: "complemento"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.complemento },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.complemento = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Meio de propagação")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.meio,
                                expression: "meio"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.meio },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.meio = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Meio de absorcação")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.descricao,
                                expression: "descricao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.descricao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.descricao = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Possíveis danos para saúde")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dano,
                                expression: "dano"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.dano },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.dano = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Insalubridade")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.insalubridade,
                                  expression: "insalubridade"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.insalubridade = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("Selecione")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SIM" } }, [
                                _vm._v("Sim")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "NÃO" } }, [
                                _vm._v("Não")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Periculosidade")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.periculosidade,
                                  expression: "periculosidade"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.periculosidade = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("Selecione")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SIM" } }, [
                                _vm._v("Sim")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "NÃO" } }, [
                                _vm._v("Não")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("LINACH")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.linac,
                                  expression: "linac"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.linac = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("Selecione")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "NÃO" } }, [
                                _vm._v("Não")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "G1" } }, [
                                _vm._v("G1")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "G2A" } }, [
                                _vm._v("G2A")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "G2B" } }, [
                                _vm._v("G2B")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Apo. Especial")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.aposentadoria,
                                  expression: "aposentadoria"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.aposentadoria = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("Selecione")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SIM" } }, [
                                _vm._v("Sim")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "NÃO" } }, [
                                _vm._v("Não")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Atividade Especial")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.atividadeEspecial,
                                  expression: "atividadeEspecial"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.atividadeEspecial = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("-")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "SIM" } }, [
                                _vm._v("Sim")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "NÃO" } }, [
                                _vm._v("Não")
                              ])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Enquadramento")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.enquadramento,
                                  expression: "enquadramento"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.enquadramento = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "SELECIONE" } }, [
                                _vm._v("Selecione")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "QUANTITATIVO" } },
                                [_vm._v("Quantitativo")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "QUALITATIVO" } },
                                [_vm._v("Qualitativo")]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Fundamentação")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.numero,
                                expression: "numero"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.numero },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.numero = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Anexo")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.anexo,
                                expression: "anexo"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.anexo },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.anexo = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.enquadramento != "QUALITATIVO"
            ? _c(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "margin-bottom": "20px" }
                },
                [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "card card-success" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _vm._v(
                          "\n                        Unidades de Medida\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.novoUn
                        ? _c("div", { staticClass: "card-body" }, [
                            _vm.unidades.length == 0
                              ? _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-md-12 text-center" },
                                    [
                                      _vm.editar
                                        ? _c("h6", [
                                            _vm._v(
                                              "\n                                    Não há unidades de medida ligadas a este risco.\n                                "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.editar
                                        ? _c("h6", [
                                            _vm._v(
                                              "\n                                    Ainda não há unidades de medida ligadas a este risco.\n                                "
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.unidades.length > 0
                              ? _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "table",
                                      {
                                        staticClass:
                                          "table table-sm table-bordered"
                                      },
                                      [
                                        _c("thead", [
                                          _c("tr", [
                                            _c(
                                              "th",
                                              { attrs: { scope: "col" } },
                                              [_c("b", [_vm._v("Unidade")])]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              {
                                                staticClass: "text-center",
                                                attrs: { scope: "col" }
                                              },
                                              [
                                                _c("b", [
                                                  _vm._v("Lim. Tolerancia")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              {
                                                staticClass: "text-center",
                                                attrs: { scope: "col" }
                                              },
                                              [
                                                _c("b", [
                                                  _vm._v("Niv. de Ação")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              {
                                                staticClass: "text-center",
                                                attrs: { scope: "col" }
                                              },
                                              [_c("b", [_vm._v("Ações")])]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(_vm.unidades, function(
                                            unidade,
                                            key
                                          ) {
                                            return _c("tr", [
                                              unidade.unidadeMedida
                                                ? _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        unidade.unidadeMedida
                                                          .descricao
                                                      ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      unidade.limiteTolerancia
                                                    ) +
                                                      "\n                                                " +
                                                      _vm._s(
                                                        unidade.unidadeMedida
                                                          .unidade
                                                      )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    _vm._s(unidade.nivelAcao) +
                                                      "\n                                                " +
                                                      _vm._s(
                                                        unidade.unidadeMedida
                                                          .unidade
                                                      )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-danger",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.excluirUnidade(
                                                            key
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-trash"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.editarUnidade(
                                                            unidade,
                                                            key
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
                                                ]
                                              )
                                            ])
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12 text-center" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      on: {
                                        click: function($event) {
                                          _vm.novoUn = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-plus" }),
                                      _vm._v(" Adicionar Unidade de Medida")
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.novoUn
                        ? _c("div", { staticClass: "card-body" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.id_unidade,
                                  expression: "id_unidade"
                                }
                              ],
                              attrs: { type: "hidden" },
                              domProps: { value: _vm.id_unidade },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.id_unidade = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Unidade de Medida")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.unidade,
                                          expression: "unidade"
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
                                          _vm.unidade = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        }
                                      }
                                    },
                                    _vm._l(_vm.todasUnidades, function(un) {
                                      return _c(
                                        "option",
                                        { domProps: { value: un } },
                                        [
                                          _vm._v(
                                            " " +
                                              _vm._s(un.descricao) +
                                              "\n                                            (" +
                                              _vm._s(un.unidade) +
                                              ")"
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
                                    _vm._v("Limite de tolerância")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.limite,
                                        expression: "limite"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.limite },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.limite = $event.target.value
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Nivel de Ação")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.nivel,
                                        expression: "nivel"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.nivel },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.nivel = $event.target.value
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
                                { staticClass: "col-md-12 text-right" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      on: { click: _vm.cancelarUnidade }
                                    },
                                    [_vm._v("Cancelar")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary btn-sm",
                                      on: { click: _vm.addUnidade }
                                    },
                                    [_vm._v("Adicionar")]
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-bottom": "20px" } },
            [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card card-success" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                        EPI\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c(
                            "v-select",
                            {
                              attrs: {
                                label: "idEpi",
                                multiple: "",
                                filterable: false,
                                options: _vm.options
                              },
                              on: { search: _vm.onSearch },
                              scopedSlots: _vm._u([
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _c("div", { staticClass: "d-center" }, [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(option.descricao) +
                                            "\n                                        "
                                        )
                                      ])
                                    ]
                                  }
                                },
                                {
                                  key: "selected-option",
                                  fn: function(option) {
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "selected d-center" },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(option.descricao) +
                                              "\n                                        "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.epis,
                                callback: function($$v) {
                                  _vm.epis = $$v
                                },
                                expression: "epis"
                              }
                            },
                            [
                              _c("template", { slot: "no-options" }, [
                                _vm._v(
                                  "\n                                        digite para procurar um EPI...\n                                    "
                                )
                              ])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-top": "20px" } },
            [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card card-success" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                        Exames\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  !_vm.novo
                    ? _c("div", { staticClass: "card-body" }, [
                        _vm.exames.length == 0
                          ? _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12 text-center" },
                                [
                                  _vm.editar
                                    ? _c("h6", [
                                        _vm._v(
                                          "\n                                    Não há exames ligados a este risco.\n                                "
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.editar
                                    ? _c("h6", [
                                        _vm._v(
                                          "\n                                    Ainda não há exames ligados a este risco.\n                                "
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.exames.length > 0
                          ? _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table table-sm table-bordered"
                                  },
                                  [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { attrs: { scope: "col" } }, [
                                          _c("b", [_vm._v("Exame")])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-center",
                                            attrs: { scope: "col" }
                                          },
                                          [_c("b", [_vm._v("Enquadramento")])]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-center",
                                            attrs: { scope: "col" }
                                          },
                                          [_c("b", [_vm._v("IBE")])]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-center",
                                            attrs: { scope: "col" }
                                          },
                                          [_c("b", [_vm._v("Interpretação")])]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-center",
                                            attrs: { scope: "col" }
                                          },
                                          [_c("b", [_vm._v("Ações")])]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.exames, function(exame, key) {
                                        return _c("tr", [
                                          exame.exame
                                            ? _c("td", [
                                                _vm._v(
                                                  _vm._s(exame.exame.nomeExame)
                                                )
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.tratarEnquadramento(
                                                    exame.enquadramento
                                                  )
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [_vm._v(_vm._s(exame.ibpm))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              exame.interpretacao == "NA"
                                                ? _c("span", [_vm._v("N/A")])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              exame.interpretacao == "SELECIONE"
                                                ? _c("span", [_vm._v("-")])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              exame.interpretacao != "NA" &&
                                              exame.interpretacao != "SELECIONE"
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          exame.interpretacao
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-danger",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.excluirExame(
                                                        key
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-trash"
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-primary",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.editarExame(
                                                        exame,
                                                        key
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
                                            ]
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12 text-center" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary btn-sm",
                                on: {
                                  click: function($event) {
                                    _vm.novo = true
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-plus" }),
                                _vm._v(" Adicionar Exame")
                              ]
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.novo
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.id_exame,
                              expression: "id_exame"
                            }
                          ],
                          attrs: { type: "hidden" },
                          domProps: { value: _vm.id_exame },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.id_exame = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Exame")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.exame,
                                      expression: "exame"
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
                                      _vm.exame = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                _vm._l(_vm.todosExames, function(ex) {
                                  return !_vm.exameEmRisco(ex.idExame) ||
                                    ex.idExame == _vm.atual
                                    ? _c(
                                        "option",
                                        { domProps: { value: ex } },
                                        [
                                          _vm._v(
                                            "\n                                            #" +
                                              _vm._s(ex.idExame) +
                                              " - " +
                                              _vm._s(ex.nomeExame) +
                                              " "
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
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Material Organico")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.exame.grupoExame,
                                    expression: "exame.grupoExame"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", disabled: "" },
                                domProps: { value: _vm.exame.grupoExame },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.exame,
                                      "grupoExame",
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
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Enquadramento")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.enquadramento_exame,
                                      expression: "enquadramento_exame"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: [
                                      function($event) {
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
                                        _vm.enquadramento_exame = $event.target
                                          .multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                      _vm.mudouEnquadramento
                                    ]
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "SELECIONE" } },
                                    [_vm._v("Selecione")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AI_Q1" } }, [
                                    _vm._v("NR 07-A I-Q1")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AI_Q2" } }, [
                                    _vm._v("NR 07-A I-Q2")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AII" } }, [
                                    _vm._v("NR 07-A II")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AIII" } }, [
                                    _vm._v("NR 07-A III")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AIV" } }, [
                                    _vm._v("NR 07-A IV")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "AV" } }, [
                                    _vm._v("NR 07-A V")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "OUTROS" } }, [
                                    _vm._v("Outros")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("IBE")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.ibpm,
                                    expression: "ibpm"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.ibpm },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.ibpm = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Interpretação")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.interpretacao,
                                      expression: "interpretacao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled:
                                      _vm.enquadramento_exame == "AI_Q2" ||
                                      _vm.enquadramento_exame == "AI_Q1"
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
                                      _vm.interpretacao = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { value: "SELECIONE" } },
                                    [_vm._v("Selecione")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "EE" } }, [
                                    _vm._v("EE")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "SC" } }, [
                                    _vm._v("SC")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "NA" } }, [
                                    _vm._v("N/A")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12 text-right" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary btn-sm",
                                on: { click: _vm.cancelarExame }
                              },
                              [_vm._v("Cancelar")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-sm",
                                on: { click: _vm.addExame }
                              },
                              [_vm._v("Adicionar")]
                            )
                          ])
                        ])
                      ])
                    : _vm._e()
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalCerteza",
          attrs: {
            size: "sm",
            "no-close-on-backdrop": true,
            centered: "",
            "hide-header": true,
            "hide-footer": true,
            "no-close-on-esc": true,
            id: "modalCerteza"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("h3", [_vm._v("Tem certeza que deseja excluir este risco?")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-top": "20px" } },
            [
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-secondary btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.fecharCerteza }
                  },
                  [_c("i", { staticClass: "fa fa-close" }), _vm._v(" Não")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-danger btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.certeza }
                  },
                  [_c("i", { staticClass: "fa fa-check" }), _vm._v(" Sim")]
                )
              ])
            ]
          )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v("\n                            ID\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Grupo\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\n                            Nome\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Tabela23\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center no-sort" }, [_vm._v("Ações")])
      ])
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

/***/ "./resources/js/components/RiscosComponente.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/RiscosComponente.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RiscosComponente.vue?vue&type=template&id=f967ed84& */ "./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84&");
/* harmony import */ var _RiscosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RiscosComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RiscosComponente.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RiscosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RiscosComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RiscosComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RiscosComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RiscosComponente.vue?vue&type=template&id=f967ed84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RiscosComponente.vue?vue&type=template&id=f967ed84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RiscosComponente_vue_vue_type_template_id_f967ed84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);