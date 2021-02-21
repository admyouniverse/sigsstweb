<?php

namespace App\Http\Controllers\Medicina;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SolicitacaoExames extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Session::has('empresa')) {
            return view('medicina.solicitacaoexame');
        } else {
            return redirect()->to(route('empresa'));
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        \Log::debug($request->solicitacao);
        $array = $request->solicitacao;

        $array['medicoCoordenador'] = $request->solicitacao['medicoCoordenador']['idEmpresaProfissional'];
        $array['pcmso'] = $request->solicitacao['pcmso']['idPcmso'];
        $array['usuario'] = 1;
    
        if($request->solicitacao['tipoAtestado'] == 'ADMISSIONAL') {
        
        unset($array['empresaFuncionario']);
        $array['matricula'] = substr(hexdec(uniqid()) . 'T', 6);
        
        $array['pessoa'] = $request->solicitacao['empresaFuncionario']['pessoa']['idPessoa'];
        $array['funcao'] = $request->solicitacao['empresaFuncionario']['funcao']['idFuncao'];

        $array['ambienteTrabalho'] = $request->solicitacao['empresaFuncionario']['ambienteTrabalho']['idAmbienteTrabalho'];

        $array['empresaContrato'] = $request->solicitacao['empresaFuncionario']['empresaContrato']['idEmpresaContrato'];

        $array['jornadaTrabalho'] = 1;


        } else {
            // $array['tipoAtestado'] = 'MONITORAÇÃO_PONTUAL';
            $array['empresaFuncionario'] = $request->solicitacao['empresaFuncionario']['idEmpresaFuncionario'];
        }


        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';    

        \Log::debug($array);

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/solicitacoes/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $solicitacao = $this->solicitacao($result['msg']);
            $solicitacao['asoSolicitacaoExames'] = $this->buscarExamesPcmso($result['msg']);
            return $solicitacao;
        } else {
            \Log::debug($result);
            return $result;
        }

    }

    public function buscarExamesPcmso($id)
    {

        $solicitacao = $this->solicitacao($id);

        $idPcmsoAmbienteTrabalho = $solicitacao['empresaFuncionario']['ambienteTrabalho']['idPcmsoAmbienteTrabalho'];

        \Log::debug($solicitacao['tipoAtestado']);

        if($solicitacao['tipoAtestado'] == 'ADMISSIONAL') {
            $tipoSolicitacao = 1; 
        } elseif($solicitacao['tipoAtestado'] == 'PERIÓDICO') {
            $tipoSolicitacao = 2; 
        } elseif($solicitacao['tipoAtestado'] == 'MONITORAÇÃO_PONTUAL') { 
            $tipoSolicitacao = 6; 
        } elseif($solicitacao['tipoAtestado'] == 'MUDANÇA_RISCO') { 
            $tipoSolicitacao = 5; 
        } elseif($solicitacao['tipoAtestado'] == 'DEMISSIONAL') { 
            $tipoSolicitacao = 3; 
        } elseif($solicitacao['tipoAtestado'] == 'RETORNO_TRABALHO') {
            $tipoSolicitacao = 4;
        }

        // $tipoSolicitacao = 1; 

        $dataSolicitacao = $solicitacao['data'];

        $today = date("Y-m-d");
        $diff = date_diff(date_create($solicitacao['empresaFuncionario']['pessoa']['dataNascimento']), date_create($today));
        $idade = $diff->format('%y');

        $idEmpresaFuncionario = $solicitacao['empresaFuncionario']['idEmpresaFuncionario'];

        $sexo = $solicitacao['empresaFuncionario']['pessoa']['sexo'];

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/solicitacoes-exames/listaPcmsoAmbienteExame/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        \Log::debug($dataSolicitacao);

        // return  array(
        //     'idPcmsoAmbienteTrabalho:' . $idPcmsoAmbienteTrabalho,
        //     'tipoSolicitacao:' . $tipoSolicitacao,
        //     'dataSolicitacao:' . $dataSolicitacao,
        //     'idade:' . $idade,
        //     'idEmpresaFuncionario:' . $idEmpresaFuncionario,
        //     'sexo:' . $sexo,
        // );
    
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idPcmsoAmbienteTrabalho:' . $idPcmsoAmbienteTrabalho,
            'tipoSolicitacao:' . $tipoSolicitacao,
            'dataSolicitacao:' . $dataSolicitacao,
            'idade:' . $idade,
            'idEmpresaFuncionario:' . $idEmpresaFuncionario,
            'sexo:' . $sexo,
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

        $exames = curl_exec($ch);

        $exames = \json_decode($exames, true);

        $asoExames = array();

        foreach ($exames as $key => $exame) {

            $detalhes = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/exames/' . $exame['exame']);

            $detalhes = \json_decode($detalhes, true);

            $detalhes = $detalhes;

            \Log::debug($key);
            $ex['idAsoSolicitacaoExame'] = 0;
            $ex['exameComplementarExame'] = $exame['exameComplementarExame'];
            $ex['pcmsoAmbienteExame'] = $exame['pcmsoAmbienteExame'];
            $ex['prontuarioExame'] = 0;
            $ex['usuario'] = 1;
            $ex['asoSolicitacao'] = $solicitacao['idAsoSolicitacao'];
            $ex['detalhes'] = $detalhes;

            array_push($asoExames, $ex);
        }

        \Log::debug($asoExames);
        return $asoExames;
    }

    public function solicitacao($id, $pcmso = null)
    {
        $solicitacao = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/solicitacoes/' . $id);

        $solicitacao = \json_decode($solicitacao, true);

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/pcmsos/pegaUltimoPcmsoPorEmpresaEmpresaContrato/");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . $solicitacao['empresaFuncionario']['empresaContrato']['empresa']['idEmpresa'],
            'empresaContrato: ' . $solicitacao['empresaFuncionario']['empresaContrato']['idEmpresaContrato'],
            'dataPcmso: ' . $solicitacao['data'],
        ));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

        $pcmso = curl_exec($ch);

        $solicitacao['pcmso'] = json_decode($pcmso, true);


        $ah = curl_init(env('APP_API') . "ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/buscaPorIdOrigem/");
        
        curl_setopt($ah, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ah, CURLOPT_HTTPHEADER, array(
            'idPcmso: ' . $solicitacao['pcmso']['idPcmso'],
            'idOrigem: ' . $solicitacao['empresaFuncionario']['ambienteTrabalho']['idOrigem']
        ));
        
        curl_setopt($ah, CURLOPT_CUSTOMREQUEST, 'GET');

        $ambiente = json_decode(curl_exec($ah), true);

        $solicitacao['empresaFuncionario']['ambienteTrabalho']['idPcmsoAmbienteTrabalho'] = $ambiente['idPcmsoAmbienteTrabalho'];

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-funcoes/listaPorIdAmbiente/' . $ambiente['idPcmsoAmbienteTrabalho']);

        $decode = json_decode($json, true);
        
        foreach ($decode as $func) {

            if ($func['idRH'] == $solicitacao['empresaFuncionario']['funcao']['idRH']) {
                $solicitacao['empresaFuncionario']['funcao']['idPcmsoFuncao'] = $func['idPcmsoFuncao'];
            }
        }

         $exames = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/solicitacoes-exames/listaPorIdSolicitacao/' . $id);

         $exames = \json_decode($exames, true);
        $solicitacao['asoSolicitacaoExames'] = $exames;
        
        $avulsos = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/solicitacoes-exames/listaExameAvulsoPorIdSolicitacao/' . $id);
        $avulsos = \json_decode($avulsos, true);
            $solicitacao['asoSolicitacaoExameAvulso'] = $avulsos;
        

        return $solicitacao;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function relatorio($id)
    {
        $solicitacao = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/solicitacoes/reportPorIdSolicitacao/' . $id);

        $ch = curl_init("http://200.98.201.236:8080:8082/report-generate");

        $array = ['nome_template' => "solicitacao", "formato_saida" => "pdf", 'dados_report' => json_decode($solicitacao, true)];

      
        $json = json_encode($array);
        
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';    


        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        return $result; 
    }  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // \Log::debug($request->all());

        $array = $request->solicitacao;

        $array['empresaFuncionario'] = $request->solicitacao['empresaFuncionario']['idEmpresaFuncionario'];
        $array['medicoCoordenador'] = $request->solicitacao['medicoCoordenador']['idEmpresaProfissional'];

        unset($array['pcmso']);

        $exames = array();

        foreach ($array['asoSolicitacaoExames'] as $key => $asose) {
            unset($array['asoSolicitacaoExames'][$key]['detalhes']);
            $array['asoSolicitacaoExames'][$key]['pcmsoAmbienteExame'] = $array['asoSolicitacaoExames'][$key]['idAsoSolicitacaoExame'] == 0 ? $array['asoSolicitacaoExames'][$key]['pcmsoAmbienteExame'] : $array['asoSolicitacaoExames'][$key]['pcmsoAmbienteExame']['idPcmsoExameAmbienteFuncao'];
            $array['asoSolicitacaoExames'][$key]['dataVencimento'] = "";
            $array['asoSolicitacaoExames'][$key]['imprimir'] = "SIM";
            $array['asoSolicitacaoExames'][$key]['prontuarioExame'] = 0;
            $array['asoSolicitacaoExames'][$key]['usuario'] = 1;
            $array['asoSolicitacaoExames'][$key]['exameComplementarExame'] = 0;
            $array['asoSolicitacaoExames'][$key]['asoSolicitacao'] = $request->solicitacao['idAsoSolicitacao'];
            $json = $array['asoSolicitacaoExames'][$key];
            array_push($exames,$json);
            
        }

        $examesAvulso = [];

        foreach ($array['asoSolicitacaoExameAvulso'] as $key => $asoa) {
            $array['asoSolicitacaoExameAvulso'][$key]['exame'] = $array['asoSolicitacaoExameAvulso'][$key]['exame']['idExame'];
            $array['asoSolicitacaoExameAvulso'][$key]['asoSolicitacao'] = $request->solicitacao['idAsoSolicitacao'];
            $json = $array['asoSolicitacaoExameAvulso'][$key];
            array_push($examesAvulso,$json);    
        }

     \Log::debug($exames);
        // return $this->solicitacao($request->solicitacao['idAsoSolicitacao']);

        \Log::debug($exames);

        $array['asoSolicitacaoExames'] = $exames;
        $array['asoSolicitacaoExameAvulso'] = $examesAvulso;
        $array['usuario'] = 1;
        

        $json = json_encode($array, JSON_UNESCAPED_SLASHES);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/solicitacoes/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);
          
        return $this->solicitacao($request->solicitacao['idAsoSolicitacao']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
