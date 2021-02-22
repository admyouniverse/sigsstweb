<?php

namespace App\Http\Controllers\PPRA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class PPRAController extends Controller
{

    public function __construct()
    {
    
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('ppra.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    function list() {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppras/listaPorIdEmpresa/' . Session::get('empresa')->idEmpresa);

        return $json;
    }

    public function listContrato($idContrato)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppras/listaPorIdEmpresa/' . Session::get('empresa')->idEmpresa);

        $array = json_decode($json, true);

        $especifico = null;

        foreach ($array as $item) {
            if ($item['empresasContrato'][0]['idEmpresaContrato'] == $idContrato) {
                $especifico = $item;
            }
        }

        \Log::debug($especifico);

        return $especifico;
    }

    public function create()
    {
        return view('ppra.create');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $array = $request->ppra;

        $array['empresasContrato'] = array($request->contrato['idEmpresaContrato']);
        $array['usuario'] = 1;
        $array['matrizRisco'] = $request->ppra['matrizRisco']['idMatrizRisco'];
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppras");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if($request->ppra['idPpra'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }


        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        if ($result['status'] == 'true') {
            $json = $result['msg'];
            return $json;
        } else {
            return 'erro';
        }

        // \Log::debug(array_column($request->ppra['empresasContrato'], 'idEmpresaContrato'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ppra = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppras/' . $id);

        $ppra = json_decode($ppra, true);

        $ppra = (object) $ppra;
        
        $ppra->pcmsos = [];

        $pcmsos = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/listaPorIdEmpresa/'. $ppra->empresasContrato[0]['empresa']['idEmpresa']);

        $pcmsos = json_decode($pcmsos, true);

        foreach($pcmsos as $pcmso) { 
            if($pcmso['ppra']['idPpra'] == $ppra->idPpra) {
                array_push($ppra->pcmsos, $pcmso);
            }
        }

        return view('ppra.edit', compact('ppra'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function planoAcao($ppra)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-plano-acoes/listaPorIdPpra/' . $ppra);

        return $json;
    }

    public function postPlanoAcao($ppra, Request $request)
    {
        $array = array();

        \Log::debug($request->all());

        $array['idPlanoAcao'] = $request->idPlanoAcao;
        $array['evento'] = $request->evento;
        $array['usuario'] = 1;
        $array['data'] = $request->data;
        $array['efetivada'] = $request->efetivada;
        $array['dataEfetivacao'] = $request->dataEfetivo;
        $array['obs'] = $request->observacoes;
        $array['ppra'] = $ppra;
        $array['complemento'] = $request->complemento; 

        if($request->pessoaSelecionada) {
            $array['pessoa'] = $request->pessoaSelecionada['idPessoa'];
        }

        $array['descricaoFuncionario'] = $request->descricaoFuncionario;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppra-plano-acoes");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if($request->idPlanoAcao == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }


        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        if ($result['status'] == 'true') {

            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-plano-acoes/listaPorIdPpra/' . $ppra);

            return $json;
        } else {

        }
    }

    public function destroyPlanoAcao($ppra, $id)
    {
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppra-plano-acoes/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-plano-acoes/listaPorIdPpra/' . $ppra);

            return $json;
        } else {
            return 'erro';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppras/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppras');
            return $json;
        } else {
            return $result;
        }
    }

    public function contratos($id)
    {

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresa/' . $id);

        return $json;

    }

    public function versao(Request $request)
    {
        \Log::debug($request->contrato['idEmpresaContrato']);

        \Log::debug(($request->tipo == 'EMISSÃO' ? 1 : $request->tipo == 'REVISÃO_PARCIAL') ? 2 : 3);
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppras/retornaVersaoPpra/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . Session::get('empresa')->idEmpresa,
            'empresaContrato: ' . $request->contrato['idEmpresaContrato'],
            'dataPpra: ' . $request->data,
            'tipoPpra: ' . (($request->tipo == 'EMISSÃO' ? 1 : $request->tipo == 'REVISÃO_PARCIAL') ? 2 : 3),
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);

        return $result;
    }


    public function ultimo(Request $request) {
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppras/pegaUltimoPpraPorEmpresaEmpresaContrato/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . $request->empresa,
            'empresaContrato: ' . $request->contrato ? $request->contrato : 0,
            'dataPpra: ' . $request->data,
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);
        
        return $result;
    }

    public function capa($ppra){
        $json = file_get_contents(env('APP_API') . "ServicoSIGSSO/rest/ppra-capas/buscaPpraCapaPorIdPpra/" . $ppra);
        
        return $json;
    }

    public function exames($ppra){
        $json = file_get_contents(env('APP_API') . "ServicoSIGSSO/rest/exames/listaPorIdPpra/" . $ppra);
        
        return $json;
    }

    public function listHistoricoExames($ppra) {
        $json = file_get_contents(env('APP_API') . "ServicoSIGSSO/rest/ppra-exames-historico/listaPorIdPpra/" . $ppra);
    
        return $json;
    }

    public function historicoExame($ppra, Request $request) {
        \Log::debug($request->all());

        $array = $request->dados;
        $array['usuario'] = 1;
        $array['exame'] = $request->exame;
        $array['ppra'] = $ppra;
        $array['idPpraExameHistorico'] = 0;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppra-exames-historico/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        return $this->listHistoricoExames($ppra);
    }


    public function postCapa($ppra, Request $request) {
        \Log::debug($request->capa);

        $array = $request->capa;
        $array['usuario'] = 1;
        $array['ppra'] = $ppra;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppra-capas/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idPpraCapa'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        return $this->capa($ppra);
    }

    public function contratoPeriodo(Request $request) {
        
        if(!$request->empresaContrato) {
            \Log::debug('vazio');
            return null;
        }
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/ppras/listaPpraPorEmpresaEmpresaContratoPeriodoCongelado/");
        
        \Log::debug($request->all());

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $array = array(
            'idEmpresa: ' . Session::get('empresa')->idEmpresa,
            'empresasContrato: ' . $request->empresaContrato,
            'data: ' . $request->dataPpra,
        );

        \Log::debug($array);

        curl_setopt($ch, CURLOPT_HTTPHEADER, $array);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        
        $result = curl_exec($ch);

        \Log::debug($result);
 
        return $result;

    }

}


