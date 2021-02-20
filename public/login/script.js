/**
 * Created by LPillon on 23/11/2014
 */

$(function(){
    tamImgFundo();

    /*$("div.content").show();
    $("nav.navgerl").show();*/
    $(document).tooltip();
    $("#tabs").tabs();
    
    /** login **/
        $('#user').focus();
        
        $("img.btn_acesso").click(function(){
            validaAcesso();
        });
        
        $("#pass").keypress(function(){
            bindOK(event);
        });
    /** fim login **/

    /** menu geral **/
        $("a.a1, a.aa1").on("mouseover", function(){
            id = this.id;
            $("ul.a2").slideUp(1);
            $("ul.a3").slideUp(1);
            $("ul.a4").slideUp(1);
            $("#ul"+id).slideDown(1);
        });
        
        $("ul.a1").on("mouseleave", function(){
            $("ul.a2").hide();
        });
        
        $("a.a2").on("click", function(){
            id = this.id;
            $("ul.a3").slideUp(1);
            $("ul.a4").slideUp(1);
            $("#ul"+id).slideDown(1);
        });
        
        $("a.a3").on("click", function(){
            id = this.id;
            $("ul.a4").slideUp(1);
            $("#ul"+id).slideDown(1);
        });
        
        $("img.search_btn").click(function(){
           $("div.search").slideToggle(100);
           $(".txtSearch").focus();
        });
        
        $(".txtSearch").on("keyup", function(){
            val = this.value;
            if(val){
                $.ajax({
                    url: "CONTENT/buscaMenuSearch.php",
                    method: "POST",
                    data: {
                        valor: val
                    }
                })
                .done(function(html){
                    $("div.resultadosPesquisa").html(html);
                    $("div.resultadosPesquisa").show();
                });
            }else{
                $("div.resultadosPesquisa").hide();
            }
        });
        
        /*$(".txtSearch").on("blur", function(){
           $("div.search").slideToggle(200);
        });*/
    /** fim menu geral **/  
    
    $("input[type='text'], input[type='password'], textarea").keypress(function(event){
        valid = event.keyCode;
        if((valid == 39)||(valid == 34)||(valid == 59)){
            return false;
        }
    });
        
    $(".imgclose").click(function(){
        hideAlert();
    });

    $(".imgclose2").click(function(){
        $(".search").hide();
    });
    
    /*$(".pesquisarGeral").on("blur", function(){
        $("div.result_pesquisa_dinamica").hide();
        $("#pesquisar").val("");
    });*/

    /** abas menu **/
        $(".empresa_sel").text($("#empsel").val());
        menuaba = $("#func").val();
        funcaba = $("#action").val();
        validAbas(menuaba,funcaba);
    /** fim abas menu **/
    

    /** riscos **/

        $('#pesq_risco').on('change', function(){
            if($('#pesq_risco').val() == 2){
                $('#lim_toler_risco').attr('disabled','true');
                $('#n_acao_risco').attr('disabled','true');
                $('#medidas').attr('disabled','true');
            }else{
                $('#lim_toler_risco').removeAttr('disabled');
                $('#n_acao_risco').removeAttr('disabled');
                $('#medidas').removeAttr('disabled');
            }
        });

        $('#lim_toler_risco').mask('999,99');
        $('#n_acao_risco').mask('999,99');
    /** fim riscos **/

    /** empresa **/
        $('#emp_cnpj').mask('99.999.999/9999-99');
    	$('#emp_cei').mask('99.999.99999/99');
    	$('#emp_tel1').mask('(99)9999-9999');
    	$('#emp_tel2').mask('(99)99999-9999');
    	$('#emp_cep').mask('99999-999');
    	$('#emp_inscr_est').mask('999.999.999');
        $('.dates').mask('99/99/9999');   
        //$('#emp_dt_fim').mask('99/99/9999');
    /** fim empresa **/
    
    /** padr dates **/
        $('.dates').datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy'
        });
    /** fim padr dates **/
    
    /** setor **/
    $('#t_man_in_setor').mask('99:99');
	$('#t_man_fm_setor').mask('99:99');
	$('#t_trd_in_setor').mask('99:99');
	$('#t_trd_fm_setor').mask('99:99');
	$('#t_noi_in_setor').mask('99:99');
	$('#t_noi_fm_setor').mask('99:99');
    /** fim setor **/
    
    /** funcao setor **/
    $('#t_man_in_funsetor').mask('99:99');
	$('#t_man_fm_funsetor').mask('99:99');
	$('#t_trd_in_funsetor').mask('99:99');
	$('#t_trd_fm_funsetor').mask('99:99');
	$('#t_noi_in_funsetor').mask('99:99');
	$('#t_noi_fm_funsetor').mask('99:99');
	$('#jt_funsetor').mask('9999');
    /** fim funcao setor **/
    
    /** pessoa **/
    $('#cod_rg_pess').mask('99.999.999-9');
    $('#cpf_pess').mask('999.999.999-99');
    $('#cpts_pess').mask('9999999');
    $('#pis_pess').mask('99999999999');
    $('#nit_pess').mask('99999999999');
    $('#cod_cep_pess').mask('99999-999');
    $('#num_end_pess').mask('99999');
    $('#cod_fon1_pess').mask('(99)9999-9999');
    $('#cod_fon2_pess').mask('(99)9999-99999');
    /** fim pessoa **/
    
    /*nivel*/
    $('input[type=\'checkbox\']').click(function(){
        alert();
       valida = document.getElementById(this.id).checked;
       if(valida)
       {
            $('[name = '+this.id+']').val(this.value);
       }else{
            $('[name =  '+this.id+']').val('');
       }        
    });
}); 
    
    $("div.content").show();
    $("nav.navgerl").show();
    // validarNivel();
    
    function validadt(){
        val = $('#dt_bloq').val();
        if(val != ''){
            $('#just').removeAttr('disabled');
            $('#just').focus();
        }else{
            $('#just').attr('disabled', 'true');
        }
    }
    
    
    
    function showAlert(val){
        $("div.loading").hide();
        $("div.alert div.block div.cont").text(val);
        $("div.alert").show();
    }
    
    function showAlertHtml(val){
        $("div.loading").hide();
        $("div.alert div.block div.cont").html(val);
        $("div.alert").show();
    }
    
    closeLogin = "";
    function validaAcesso(){

        user = $('#user').val();
        pass = $('#pass').val();
    
        if(!user){
            showAlert("Digite o seu usuário!");
            closeLogin = "user";
            return;
        }else if(!pass){
            showAlert("Digite a sua senha!");
            closeLogin = "pass";
            return;
        }else{
           document.getElementById("form").submit();
        }
        
    }
    

    function hideAlert(){

        $("div.alert").hide();

        if(closeLogin != ""){

            if(closeLogin == "user"){
                $("#user").focus();    
            }else{
                $("#pass").focus();    
            }
            
        }
        
    }


    function bindOK(event){
        if(event.keyCode == 13){
            validaAcesso();
        }
    }

    function tamImgFundo(){
        _screenwidthres = $(window).width();
        _screenheightres = $(window).height(); 
             
        if(_screenwidthres<1168){
            $("li.a1").css("display","none");
        }else{
            $("li.a1").css("display","block");
        }
    	
        $("div.loading").css({
            'width':_screenwidthres,
            'height':_screenheightres
        });
        
        $("div.alert").css({
            'width':_screenwidthres,
            'height':_screenheightres
        });
        
        $("div.content_menu1").css({
            'height':_screenheightres - 154
        });
        
        $("div.content").css({
            'height':_screenheightres - 123
        });
    }
    
    function showmenumin(){
        $("li.a1").slideToggle(5);
    }
    
    $(window).resize(function(){
        tamImgFundo();
    });

    function logOut(){
        $.ajax({
            url: "DATABASE/logout.php"          
        })
        .done(function(ret){
            window.location = window.location.href; 
        })
        .fail(function(ret){        
            showAlert("Erro ao desconectar!");
        });
    } 
    
    function loadContentFinal(val1, val2, val3, val4, val5, val6, val7){
        $("#menu").val(val1);
        $("#func").val(val2);
        $("#action").val(val3);
        $("#id").val(val4);
        $("#col").val(val5);
        $("#emp").val(val6);
        $("#setor").val(val7);
        $("div.result_pesquisa_dinamica").hide();
        $("#submitform").submit();     
    }
    
    function loadContent(val, val2, val3, val4, val5){
        $("ul.a2").hide();
        //$("div.loading").show();

    	if(val4){

            if(val3 == "21"){
                $("#empsel").val('EMPRESA: '+val5);
            }else if(val3 == "22"){
                $("#empsel").val('PESSOA: '+val5);
            }else if(val3 == "27"){
                $("#empsel").val('PROFISSIONAL: '+val5);
            }else if(val3 == "372"){
                $("#empsel").val('PCMSO DA EMPRESA: '+val5);
            }else if(val3 == "422"){
                $("#empsel").val('LTCAT DA EMPRESA: '+val5);
            }else if(val3 == "432"){
                $("#empsel").val('PPRA DA EMPRESA: '+val5);
            }
            
            if( (val3 == "372") || (val3 == "422") || (val3 == "432") ){
                loadContentFinal(val2, val3, "1", "", "", val4, "");
            }else{
                loadContentFinal(val2, val3, "3", val4, "", val4, "");    
            }
            
    	}else{

  		    $("#empsel").val('');
            loadContentFinal(val2, val3, "1", "", "", "", "");    		
	   
       }
    }
    
    function validAbas(menu, func){
        $('li.listar').css('backgroundColor', 'lightgrey');
        $('li.listar').css('color', 'black');
        menu1 = null;
        switch(menu1){
            case "1":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                    $('li.inclui').hide();
                }else{
                    
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                    

                    if(func == 3){
                        $('li.inclui a').text("Alterar");
                    }else{
                        $('li.inclui a').text("Incluir");
                    }

                    
                    $('li.inclui').show();

                }
                break;
        }

        switch(menu){
            case "21":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }                     
                break;
            case "213":
                $('li.contratantes').css('backgroundColor', '#0B6121');
                $('li.contratantes a').css('color', 'white');
                break;
            case "214":
                $('li.sso').css('backgroundColor', '#0B6121');
                $('li.sso a').css('color', 'white');
                break;
            case "215":
                $('li.funcao').css('backgroundColor', '#0B6121');
                $('li.funcao a').css('color', 'white');
                break;
            case "216":
            case "2167":
                $('li.funcao_setor').css('backgroundColor', '#0B6121');
                $('li.funcao_setor a').css('color', 'white');
                break;
            case "217":
                $('li.exames').css('backgroundColor', '#0B6121');
                $('li.exames a').css('color', 'white');
                break;
            case "218":
                $('li.eventos').css('backgroundColor', '#0B6121');
                $('li.eventos a').css('color', 'white');
                break;
            case "219":
                $('li.prof').css('backgroundColor', '#0B6121');
                $('li.prof a').css('color', 'white');
                break;
            case "2110":
                $('li.epis').css('backgroundColor', '#0B6121');
                $('li.epis a').css('color', 'white');
                break;
            case "2111":
                $('li.empgds').css('backgroundColor', '#0B6121');
                $('li.empgds a').css('color', 'white');
                break;
            case "2112":
                $('li.os').css('backgroundColor', '#0B6121');
                $('li.os a').css('color', 'white');
                break;
            case "2113":
                $('li.dir').css('backgroundColor', '#0B6121');
                $('li.dir a').css('color', 'white');
                break;
            case "2114":
                $('li.hist').css('backgroundColor', '#0B6121');
                $('li.hist a').css('color', 'white');
                break;
            case "22":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }                     
                break;
            case "221":
                $('li.histemp').css('backgroundColor', '#0B6121');
                $('li.histemp a').css('color', 'white');
                break;
            case "222":
                $('li.histfunc').css('backgroundColor', '#0B6121');
                $('li.histfunc a').css('color', 'white');
                break;
            case "223":
                $('li.histcapac').css('backgroundColor', '#0B6121');
                $('li.histcapac a').css('color', 'white');
                break;
            case "23":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }                     
                break;
            case "27":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }                     
                break;
            case "271":
                $('li.vinc').css('backgroundColor', '#0B6121');
                $('li.vinc a').css('color', 'white');
                break;
            case "37":
            case "42":
            case "43":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }
                break;
            case "4321":
                if(func == "1"){
                    $('li.lista').css('backgroundColor', '#0B6121');
                    $('li.lista a').css('color', 'white');
                }else{
                    $('li.inclui').show();
                    $('li.lista a').text('Incluir');
                    $('li.inclui').css('backgroundColor', '#0B6121');
                    $('li.inclui a').css('color', 'white');
                }
                break;
            case "372":
            case "422":
            case "432":
                $('li.validppra').css('backgroundColor', '#0B6121');
                $('li.validppra a').css('color', 'white');
                break;
            case "373":
            case "423":
            case "433":
                $('li.setfunc').css('backgroundColor', '#0B6121');
                $('li.setfunc a').css('color', 'white');
                break;
            case "374":
            case "424":
            case "434":
                $('li.intobj').css('backgroundColor', '#0B6121');
                $('li.intobj a').css('color', 'white');
                break;
            case "375":
            case "425":
            case "435":
                $('li.ativorie').css('backgroundColor', '#0B6121');
                $('li.ativorie a').css('color', 'white');
                break;
            case "376":
            case "426":
            case "436":
                $('li.planact').css('backgroundColor', '#0B6121');
                $('li.planact a').css('color', 'white');
                break;
            case "377":
            case "427":
            case "437":
                $('li.func').css('backgroundColor', '#0B6121');
                $('li.func a').css('color', 'white');
                break;
            case "378":
            case "429":
            case "438":
                $('li.ghe').css('backgroundColor', '#0B6121');
                $('li.ghe a').css('color', 'white');
                break;
            case "43110":
                $('li.mtrz').css('backgroundColor', '#0B6121');
                $('li.mtrz a').css('color', 'white');
                break;
        }
    }
    
    function buscaDinamica(val){
        val2 = $("#tabela").val();
        val3 = $("#cod1").val();
        val4 = $("#cod2").val();
        val5 = $("#menu").val();
        val6 = $("#func").val();
        val7 = $("#tabela2").val();
        val8 = $("#join").val();
        val9 = $("#emp").val();
        
        if(val==""){
            $("div.result_pesquisa_dinamica").hide();
            return;
        }
        
        $.ajax({
            url: "DATABASE/pesquisaDinamica.php",
            method: "POST",
            data:{
                tabela: val2,
                cod_1: val3,
                cod_2: val4,
                valor: val,
                menu: val5,
                func: val6,
                tabela2: val7,
                join: val8,
                emp: val9
            }
        })
        .done(function(ret){
            $("div.content div.result_pesquisa_dinamica").html(ret);
            $("div.result_pesquisa_dinamica").show();
        })
        .fail(function(ret){
            showAlert(ret);
        });
    }
    
    function insertUpdate(tp){
	
    	if(tp == 1){
    		$("div.loading div").html("<div>Estamos processando a inclusão<br>Aguarde..<div>");
    	}else{
    		$("div.loading div").html("<div>Estamos processando a alteração<br>Aguarde..<div>");
    	}
    	
    	$("div.loading").show();
    	
    	$.ajax({
    		type: "POST",
    		url: "DATABASE/incluirAlterar.php",
    		data: $("form.envio").serialize()
    	}).done(function(html){
    	    $("div.loading").hide();
            $("div.loading div").html("<div>Carregando..<div>");
    		
            if(html.indexOf("Cannot insert duplicate key")>=0){
                showAlert("Código já inserido!");
            }else if(html.indexOf("Erro")>=0){
                showAlert(html);
            }else{
                retorno = html.split('-');
                $("div.alert img#imgclose2").show();
                $("div.alert img#imgclose").hide();
                showAlert(retorno[0]);
                loadContentFinal(retorno[1],retorno[2],retorno[3],retorno[4],retorno[5],retorno[6],retorno[7]);
                // loadContentFinal(val2, val3, "1", "", "", "", "");  
            }
    	}).fail(function(e){
    	    $("div.loading").hide();
            $("div.loading div").html("<div>Carregando..<div>");
            showAlert("Desculpe, erro geral 9.\nFavor contactar o ADM do Sistema.");
        });
    }
    
    
    function deletar(val, val2){
        showAlertHtml("Confirma a inativação?<br><input type='button' value='ok' onclick='deleta("+"\""+val+"\""+","+"\""+val2+"\""+");'>&nbsp;<input type='button' onclick='hideAlert();' value='cancela'>");
    }
    
    function deleta(val, val2){
        hideAlert();
        $("div.loading div").html("Processando a inativação..");
        $("div.loading").show();
        $.ajax({
            type: "POST",
            url: "DATABASE/delete.php",
            data: {
                menu: val,
                id: val2
            }
        }).done(function(ret){
            $("div.loading").hide();
            $("div.loading div").html("<div>Carregando..<div>");
            retorno = ret.split('-');
            showAlert(retorno[0]);
            loadContentFinal(retorno[1],retorno[2],retorno[3],retorno[4],retorno[5],retorno[6],retorno[7]);
        }).fail(function(ret){
            $("div.loading").hide();
            $("div.loading div").html("<div>Carregando..<div>");
            showAlert("Erro: "+ret);
        });
    }
    
    function validaUser(val){
        valor = val.value;
        $.ajax({
            type: "POST",
            url: "DATABASE/validaDado.php",
            data:{
                usr: valor
            }
        }).done(function(ret){
            if(ret.indexOf("cadastrado")>0){
                showAlert(ret);
                $("#"+val.id).val('');     
            }
        }).fail(function(ret){        
            showAlert("Erro: "+ret);
        });
    }
    
    
    
    function validaSenhaExist(val){
        $.ajax({
            type: "POST",
            url: "DATABASE/validaDado.php",
            data:{
                senha: val
            }
        }).done(function(ret){
            if(ret.indexOf("errada")>0){
                showAlert(ret);
                $("#cod_old_senha").val('');     
            }
        }).fail(function(ret){        
            showAlert("Erro: "+ret);
        });
    }
    
    
    function lixeiraCheia(id){
        $("#"+id).attr("src","UI_UX/img/lixeira_cheia_final.png");
    }
    
    function lixeiraVazia(id){
        $("#"+id).attr("src","UI_UX/img/lixeira_vazia.png");
    }
    
    
    function number(event){
    	if (event.keyCode < 48 || event.keyCode > 57){
    		return false;
    	}else{
    		return true;
    	}
    }
    
    function number2(event){
    	if (event.keyCode < 48 || event.keyCode > 57){
    		if (event.keyCode != 45){
    			return false;
    		}else{return true;}
    	}else{
    		return true;
    	}
    }
    
    function number3(event){
    	if (event.keyCode < 48 || event.keyCode > 57){
    		if (event.keyCode != 46){
    			return false;
    		}else{return true;}
    	}else{
    		return true;
    	}
    }
    
    function habiltaHabilitAux(){
    	tpRadio = jQuery("input[name=tp_capacitacao]:checked").val();
    	if(tpRadio==3){
    		$("div.openPeriodicit").css("display","block");
    	}else{
    		$("div.openPeriodicit").css("display","none");
            $('#periodici').val('');
    	}
    }
    
    
    /**** menu 1 ****/
    function incluirDado_11(tpAcao){
		cod = $("#cod_cbo").val();
		nom = $("#dsc_cbo").val();
		
		if((cod=="")||(nom=="")){
			showAlert("Preencha todos os campos!");
			return;
		}else{
			insertUpdate(tpAcao);
		}
    }
    
    function incluirDado_13(tpAcao){
    		cod = $("#cod").val();
    		nom = $("#nom").val();
    		
    		if((cod=="")||(nom=="")){
    			showAlert("Preencha todos os campos!");
    			return;
    		}else{
    			insertUpdate(tpAcao);
    		}
    }
    
    function incluirDado_14(tpAcao){
    		cod = $("#cod").val();
    		desc = $("#dsc_gfip").val();
    		obs = $("#obs_gfip").val();
    		
    		if((cod=="")||(desc=="")){
    			showAlert("Preencha todos os campos com * !");
    			return;
    		}else{
    			insertUpdate(tpAcao);
    		}
    }
    
    function incluirDado_15(tpAcao){
    		cod = $("#cod_cnae").val();
    		desc = $("#dsc_cnae").val();
    		risco = $("#grau_risco_cnae").val();
            ntep = $("#cid_ntep").val();
            rat = $("#grau_risco_rat").val();
    		
    		if((cod=="")||(desc=="")||(risco=="")||(ntep=="")||(rat=="")){
    			showAlert("Preencha todos os campos!");
    			return;
    		}else{
    			insertUpdate(tpAcao);
    		}
    }
    
    function incluirDado_16(tpAcao){
    	nome = $("#nom_grp_capacitacao").val();
    	
    	if((nome=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_17(tpAcao){
    	nome = $("#nom_capacitacao").val();
    	tpo = jQuery("input[name=tp_capacitacao]:checked").val();
    	codgrpcap = $("#cod_grpcapacitacao").val();
    	tpcap = $("#tp_cpc").val();
    	crghr = $("#crg_hr").val();
    	
    	if(tpo==3){
    		periodicid = $("#periodici").val();
            periodicid_ind = jQuery("input[name=ind_periodo]:checked").val();
    	}else{
    		periodicid = "";
    	}
    	
    	if((nome=="")||(!tpo)||(codgrpcap=="")||(tpcap=="")||(crghr=="")){
    		showAlert("Preencha todos os campos com *!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_18(tpAcao){
    	nome = $("#nom_grp_epi").val();
    	
    	if((nome=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_19(tpAcao){
    	nom = $("#nom_epi").val();
    	codgrp = $("#cod_grp_epi").val();
    	
    	if((nom=="")||(codgrp=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_110(tpAcao){
    	nom = $("#nom_exposicao").val();
    	sigl = $("#sigla_exposicao").val();
    	
    	if((nom=="")||(sigl=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_111(tpAcao){
    	porce = $("#porc_insalubridade").val();
        desc = $("#desc").val();
    	
        if(desc != ""){
            if(desc != "4"){
                if((desc=="")||(porce=="")){
            		showAlert("Preencha todos os campos!");
            		return;
            	}else{
            		insertUpdate(tpAcao);
            	}
            }else{
                insertUpdate(tpAcao);
            }
        }else{
            showAlert("Preencha a descrição!");
      		return;
        }
    }
    
    function incluirDado_113(tpAcao){
    	nom = $("#nom_grp_fontegeradora").val();
    	
    	if((nom=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_114(tpAcao){
    	nom = $("#nom_fontegeradora").val();
    	grpfonte = $("#cod_grp_fontegeradora").val();
    	
    	if((nom=="")||(grpfonte=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_115(tpAcao){
    	nome = $("#nom_uni_medida").val();
    	unid = $("#uni_medida").val();
    	
    	if((cod=="")||(nome=="")||(unid=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_116(tpAcao){
    	nom = $("#nom_grp_risco").val();
    	orde = $("#ordenacao_grp_risco").val();
    	corsel = $("#cor_grp_risco").val();
    	
    	if((nom=="")||(orde=="")||(corsel=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_117(tpAcao){
        codgrprisco = $("#cod_grp_risco").val();
        nomrisco = $("#nom_risco").val();
        dansaude = $("#danos_risco").val();
        meiprop = $("#meio_propagacao").val();
        classific = $("#pesq_risco").val();
        enquad = $("#enquad_risco").val();
        insalub = $("#insalub").val();
        pericul = $("#periculo").val();

        if((codgrprisco=="")||(nomrisco=="")||(dansaude=="")||(meiprop=="")||(classific=="")||(enquad=="")||(insalub=="")||(pericul=="")){
            showAlert("Preencha todos os campos com * !");
            return;
        }else{
            if(classific == "1"){
                limtol = $("#lim_toler_risco").val();
                nacao = $("#n_acao_risco").val();
                medid = $("#medidas").val();

                if((limtol=="")||(nacao=="")||(medid=="")){
                    showAlert("Quando quantitativo, preencha os campos Limit de Toler, N. de ação e Medidas!");
                    return;
                }else{
                    insertUpdate(tpAcao);
                }
            }else{
                insertUpdate(tpAcao);
            }
        }
    }
    
    function incluirDado_118(tpAcao){
    	nome = $("#nom_grp_exame").val();
    	
    	if((nome=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_119(tpAcao){
    	nom = $("#nom_exame").val();
    	sex = $("#sexo_exame").val();
    	grpex = $("#cod_grp_exame").val();
    	
    	if((nom=="")||(sex=="")||(grpex=="")){
    		showAlert("Preencha todos os campos com * !");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_120(tpAcao){
    	nom = $("#nom_titulo").val();
    	
    	if((nom=="")){
    		showAlert("Preencha todos os campos com * !");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_121(tpAcao){
    	nom = $("#nom_conselho").val();
    	sig = $("#sigla_conselho").val();
    	
    	if((nom=="")||(sig=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_122(tpAcao){
    	nom = $("#nom_grp_profissional").val();
    	cdtit = $("#cod_tit_grp_profissional").val();
    	cdcons = $("#cod_cons_tit_grp_profissional").val();
    	
    	if((nom=="")||(cdtit=="")||(cdcons=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_123(tpAcao){
    	nom = $("#nom_atividade").val();
    	ind = $("#indesp").val();

    	if((ind=="")||(nom=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
            if(ind=='S'){
                enq = $("#enquad_ativ").val();
                epi = $("#epi_ativ").val();
                cap = $("#cap_ativ").val();
                exam = $("#exam_ativ").val();
                if((enq=="")||(epi=="")||(cap=="")||(exam=="")){
                    showAlert("Quando for especial, preencha os campos enquadramento, epi, capacitação e exame!");
                    return;
                }else{
                    insertUpdate(tpAcao);
                }
            }else{
                insertUpdate(tpAcao);    
            }
    		
    	}
    }
    
    function incluirDado_124(tpAcao){
    	nom = $("#nom_objeto").val();
    	cdnbr = $("#cod_nbr").val();
    	
    	if((nom=="")||(cdnbr=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_125(tpAcao){
    	nom = $("#nom_lesao").val();
    	cdnbr = $("#cod_nbr").val();
    	
    	if((nom=="")||(cdnbr=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_126(tpAcao){
    	nom = $("#nom_membro").val();
    	cdnbr = $("#cod_nbr").val();
    	
    	if((nom=="")||(cdnbr=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_127(tpAcao){
    	nom = $("#nom_grp_nec_especiais").val();
    	sig = $("#sigla_grp_nec_especiais").val();
    	
    	if((nom=="")||(sig=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_128(tpAcao){
    	cid = $("#cod_cid").val();
    	nom = $("#nom_nec_especial").val();
    	grp = $("#cod_grp_nec_especial").val();
    	
    	if((cid=="")||(nom=="")||(grp=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_129(tpAcao){
    	nom = $("#nome_grp_ctrl").val();
    	
    	if(nom==""){
    		showAlert("Preencha o nome!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    /**** fim menu 1 ****/
    
    /**** menu 2 ****/
    
    /**** empresa ****/
    function validaCNPJ() {
		if($('#emp_cnpj').val() == '') {
			return false;
		}
		
		if(validarCNPJ($('#emp_cnpj').val())) {		
			return true; 
		} else {		
			showAlert('CNPJ inválido!');
			//$('#emp_cnpj').focus();
			return false;	   
		}
	};
	
	function validarCNPJ(cnpj) {
		cnpj = cnpj.replace(/[^\d]+/g,'');

		if(cnpj == '') return false;

		// Elimina CNPJs invalidos conhecidos
		if (cnpj.length != 14 || cnpj == '00000000000000' || cnpj == '11111111111111' || cnpj == '22222222222222' || cnpj == '33333333333333' || cnpj == '44444444444444' || cnpj == '55555555555555' || cnpj == '66666666666666' || cnpj == '77777777777777' || cnpj == '88888888888888' || cnpj == '99999999999999')
			return false;
			
		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			return false;
			
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			  return false;
			  
		return true;	
	}
	
	function validaDataEmpresa(val, val2){
        dtSele = val.split("/");
        dtCorr = val2.split("/");
        
        if(dtSele == ""){
            document.getElementById('c100').checked = false;
            document.getElementById('emp_status').checked = true;
            $('#atInativ').val('1');
            return;
        }

        dtSeleAno = dtSele[2];
        dtCorrAno = dtCorr[2];

        dtSeleMes = dtSele[1];
        dtCorrMes = dtCorr[1];

        dtSeleDia = dtSele[0];
        dtCorrDia = dtCorr[0];

        /*Valida Ano*/
        if(dtSeleAno > dtCorrAno){
            document.getElementById('c100').checked = false;
            document.getElementById('emp_status').checked = true;
            $('#atInativ').val('1');
            return;
        }else if(dtSeleAno == dtCorrAno){
            /*Valida Mes*/
            if(dtSeleMes > dtCorrMes){
                document.getElementById('c100').checked = false;
                document.getElementById('emp_status').checked = true;
                $('#atInativ').val('1');
                return;
            }else if(dtSeleMes == dtCorrMes){
                /*Valida Dia*/
                if(dtSeleDia >= dtCorrDia){
                    document.getElementById('c100').checked = false;
                    document.getElementById('emp_status').checked = true;
                    $('#atInativ').val('1');
                    return;
                }else{
                    document.getElementById('emp_status').checked = false;
                    document.getElementById('c100').checked = true;
                    $('#atInativ').val('2');
                }
            }else{
                document.getElementById('emp_status').checked = false;
                document.getElementById('c100').checked = true;
                $('#atInativ').val('2');
            }
        }else{
            document.getElementById('emp_status').checked = false;
            document.getElementById('c100').checked = true;
            $('#atInativ').val('2');
        }
	}
    
    function loadCidade(val){
        $.ajax({
            type: 'POST',
            url: 'DATABASE/loadCidade.php',
            data:{
                cod: val
            }
        }).done(function(ret){
            $('#emp_cid').html(ret);
        }).fail(function(ret){        
            showAlert('Erro: '+ret);
        });
    }
    
    /****/
    
    /**** contratantes ****/  
    
	function showContratantes(){
        $('div.back').show();
		$('div#contrats').css('display', 'block');
	}

	function closeContratantes(){
        $('div.back').hide();
		$('div#contrats').css('display', 'none');
	}

	function validaContratante(val, val2){
		$('#codemp').val(val + ' - ' + val2);
		$('#cod_emp').val(val);
		closeContratantes();
	}

	function salvaContratoEmpresa(){
		empresa = $('#cod_emp').val();
		dt1 =  $('#dat_ini_emp').val();
		dt2 =  $('#dat_fim_emp').val();
		empSelc = $('#empresaCorrente').val();
        
		if(!empresa){
			showAlert('Selecione uma empresa!');
			return;
		}else if(!dt1){
			showAlert('Selecione a data inicial do Contrato!');
			$('#dat_ini_emp').focus();
			return;
		}/*else if(!dt2){
			showAlert('Selecione a data final do Contrato!');
			$('#dat_fim_emp').focus();
			return;
		}*/
        
		contrato = $('#cod_ctr_emp').val();
		
		if(contrato){
			$('div.loading div').html('<div>Atualizando Contrato<br>Aguarde..<div>');
			$('div.loading').show();
			
			$.ajax({
			type: 'POST',
			url: 'DATABASE/salvaContrato.php',
			data: {
				emp: empresa,
				dti: dt1,
				dtf: dt2,
				ctr: contrato,
                empcont: empSelc, 
			}
			}).done(function(html){
				$('div.loading').hide();
                $('div.loading div').html('<div>Carregando...<div>');
				showAlert(html);
				loadContentFinal('2','213','1','','',''+empSelc+'','');
			}).fail(function(e){
			   $('div.loading').hide();
			   showAlert('Erro!');
			});
		}else{
		    
			$('div.loading div').html('<div>Gerando Contrato<br>Aguarde..<div>');
			$('div.loading').show();
			
			$.ajax({
			type: 'POST',
			url: 'DATABASE/salvaContrato.php',
			data: {
				emp: empresa,
				dti: dt1,
				dtf: dt2,
                empcont: empSelc
			}
			}).done(function(html){
			    $('div.loading').hide();
                $('div.loading div').html('<div>Carregando...<div>');
				showAlert(html);
				loadContentFinal('2','213','1','','',''+empSelc+'','');
			}).fail(function(e){
				showAlert(e);
				$('div.loading').css('display', 'none');
			});
		}
		
		
	}
	
	function alteraContrato(v1, v2, v3, v4, v5){
		$('#cod_emp').val(v4);
		$('#dat_ini_emp').val(v2);
		$('#dat_fim_emp').val(v3);
		$('#codemp').val(v1);
		$('#cod_ctr_emp').val(v5);
		$('#dat_ini_emp').focus();
		document.getElementById('codemp').disabled = true;
	}
    /****/
    
    function incluirDado_21(tpAcao){
    	c2 = $("#c2").val();
    	c3 = $("#c3").val();
        
        if((c2 == "")&&(c3 == "")){
            showAlert("Digite o CNPJ ou o CEI!");
			return;
        }
        
    	c4 = $("#c4").val();
    	c5 = $("#c5").val();
    	c6 = $("#c6").val();
    	c7 = $("#c7").val();
    	c8 = $("#c8").val();
    	c9 = $("#c9").val();
    	c10 = $("#c10").val();
    	c11 = $("#c11").val();
    	c12 = $("#c12").val();
    	c13 = $("#c13").val();
    	c14 = $("#c14").val();
    	c15 = $("#c15").val();
    	c16 = $("#c16").val();
    	c17 = $("#c17").val();
    	c18 = $("#c18").val();
    	c19 = $("#c19").val();
    	c21 = $("#c21").val();
    	c22 = $("#c22").val();
    	c23 = $("#c23").val();
    	c24 = $("#c24").val();
    	c26 = $("#c26").val();
    	c27 = $("#c27").val();
    	
    	if((c4=="")||(c5=="")||(c6=="")||(c7=="")||(c8=="")||(c9=="")||(c10=="")||(c11=="")||(c13=="")||(c16=="")||(c17=="")||(c18=="")||(c19=="")||(c21=="")||(c22=="")||(c23=="")||(c24=="")||(c26=="")||(c27=="")){
    		showAlert("Preencha todos os campos marcados!");
			
            if(c4){ null }else{ $(".c4").css("color","red");}
            if(c5){ null }else{ $(".c4").css("color","red");}
            if(c6){ null }else{ $(".c4").css("color","red");}
            if(c7){ null }else{ $(".c4").css("color","red");}
            if(c8){ null }else{ $(".c4").css("color","red");}
            if(c9){ null }else{ $(".c4").css("color","red");}
            if(c10){ null }else{ $(".c4").css("color","red");}
            if(c11){ null }else{ $(".c4").css("color","red");}
            if(c12){ null }else{ $(".c4").css("color","red");}
            if(c13){ null }else{ $(".c4").css("color","red");}
            if(c14){ null }else{ $(".c4").css("color","red");}
            if(c15){ null }else{ $(".c4").css("color","red");}
            if(c16){ null }else{ $(".c4").css("color","red");}
            if(c17){ null }else{ $(".c4").css("color","red");}
            if(c18){ null }else{ $(".c4").css("color","red");}
            if(c19){ null }else{ $(".c4").css("color","red");}
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
	
	function incluirDado_215(tpAcao){
		insertUpdate(tpAcao);
	}
    
    function validaNacionalidade(val){
        if(val == 2){
            $('div.brasileiro').css('display', 'none');
            $('div.estrangeiro').css('display', 'block');
        }else{
            $('div.brasileiro').css('display', 'block');
            $('div.estrangeiro').css('display', 'none');
        }
    }
    
    /**** fim menu 2 ****/
    
    
    /**** menu 7 ****/
    function incluirDado_64(tpAcao){
    	nom = $("#login").val();
    	sen1 = $("#cod_senha").val();
    	sen2 = $("#cod_senha2").val();
        email = $("#email").val();
    	
    	if((nom=="")||(sen1=="")||(sen2=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    function incluirDado_65(tpAcao){
    	nom = $("#cod_old_senha").val();
    	sen1 = $("#cod_senha").val();
    	sen2 = $("#cod_senha2").val();
    	
    	if((nom=="")||(sen1=="")||(sen2=="")){
    		showAlert("Preencha todos os campos!");
    		return;
    	}else{
    		insertUpdate(tpAcao);
    	}
    }
    
    /**** fim menu 7 ****/