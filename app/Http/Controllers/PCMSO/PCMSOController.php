<?php

namespace App\Http\Controllers\PCMSO;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class PCMSOController extends Controller
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
        return view('pcmso.index');
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    function list() {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/listaPorIdEmpresa/' . Session::get('empresa')->idEmpresa);
        
        return $json;
    }
    
    function upload($pcmso, Request $request) {
        \Log::debug($request->all());
    }

    public function listContrato($idContrato)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/listaPorIdEmpresa/' . Session::get('empresa')->idEmpresa);
        
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
        return view('pcmso.create');
    }
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        
        $array = $request->pcmso;
        
        $array['empresasContrato'] = array($request->contrato['idEmpresaContrato']);
        $array['usuario'] = 1;
        $array['ppra'] = $request->pcmso['ppra']['idPpra'];
        // $array['metodos'] = 'teste';
        // $array['caminhoPdf'] = 'teste';
        // $array['atividadeLocal'] = 'teste';
        // $array['tipoPcmso'] = 'REVISÃO_GERAL';
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmsos");
        
        \Log::debug($json);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        
        \Log::debug($request->pcmso['idPcmso']);
        if($request->pcmso['idPcmso'] == 0) {
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
        
        // \Log::debug(array_column($request->pcmso['empresasContrato'], 'idEmpresaContrato'));
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
        $pcmso = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/' . $id);
        
        $pcmso = json_decode($pcmso, true);
        
        $pcmso = (object) $pcmso;
        
        return view('pcmso.edit', compact('pcmso'));
        
    }
    
    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function planoAcao($pcmso)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-plano-acoes/listaPorIdPcmso/' . $pcmso);
        
        return $json;
    }
    
    public function postPlanoAcao($pcmso, Request $request)
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
        $array['pcmso'] = $request->pcmso;
        $array['complemento'] = $request->complemento;
        
        if($request->pessoaSelecionada) {
            $array['pessoa'] = $request->pessoaSelecionada['idPessoa'];
        }
        
        $array['descricaoFuncionario'] = $request->descricaoFuncionario;
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-plano-acoes");
        
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
            
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-plano-acoes/listaPorIdPcmso/' . $pcmso);
            
            return $json;
        } else {
            
        }
    }
    
    public function destroyPlanoAcao($pcmso, $id)
    {
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-plano-acoes/" . $id);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-plano-acoes/listaPorIdPcmso/' . $pcmso);
            
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
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmsos/" . $id);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos');
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
        \Log::debug($request->all());
        
        \Log::debug(($request->tipo == 'EMISSÃO' ? 1 : $request->tipo == 'REVISÃO_PARCIAL') ? 2 : 3);
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmsos/retornaVersaoPcmso/");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . Session::get('empresa')->idEmpresa,
            'empresaContrato: ' . $request->contrato['idEmpresaContrato'],
            'dataPcmso: ' . $request->data,
            'tipoPcmso: ' . (($request->tipo == 'EMISSÃO' ? 1 : $request->tipo == 'REVISÃO_PARCIAL') ? 2 : 3),
        ));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);
        
        return $result;
    }
    
    
    public function ultimo(Request $request) {
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmsos/pegaUltimoPcmsoPorEmpresaEmpresaContrato/");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . $request->empresa,
            'empresaContrato: ' . $request->contrato,
            'dataPcmso: ' . $request->data,
        ));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);
        
        return $result;
    }
    
    public function capa($pcmso){
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-capas/buscaPcmsoCapaPorIdPcmso/" . $pcmso);
        
        return $json;
    }
    
    public function exames($pcmso){
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/exames/listaPorIdPcmso/" . $pcmso);
        
        return $json;
    }
    
    public function listHistoricoExames($pcmso) {
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-exames-historico/listaPorIdPcmso/" . $pcmso);
        
        return $json;
    }
    
    public function historicoExame($pcmso, Request $request) {
        \Log::debug($request->all());
        
        $array = $request->dados;
        $array['usuario'] = 1;
        $array['exame'] = $request->exame;
        $array['pcmso'] = $pcmso;
        $array['idPcmsoExameHistorico'] = 0;
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-exames-historico/");
        
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
        
        return $this->listHistoricoExames($pcmso);
    }
    
    
    public function postCapa($pcmso, Request $request) {
        \Log::debug($request->capa);
        
        $array = $request->capa;
        $array['usuario'] = 1;
        $array['pcmso'] = $pcmso;
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-capas/");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        
        \Log::debug($json);
        
        if($request->capa['idPcmsoCapa'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        
        return $this->capa($pcmso);
    }
    
    
    public function relatorio($id) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/' . $id);
        
        // $json = json_decode($pcmso, true);
        
        $ch = curl_init("http://localhost:8888/gerar");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        
        return response()->download('pdfs/' . $result);
    }
}


