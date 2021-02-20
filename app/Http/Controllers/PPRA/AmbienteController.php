<?php

namespace App\Http\Controllers\PPRA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AmbienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdPpra/' . $id);

        return $json;
    }

    public function ambiente($ppra, $id)
    {
        $ppra = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppras/' . $ppra);

        $ppra = json_decode($ppra, true);

        $ppra = (object) $ppra;

        $ppra->pcmsos = [];

        $pcmsos = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/pcmsos/listaPorIdEmpresa/'. $ppra->empresasContrato[0]['empresa']['idEmpresa']);

        $pcmsos = json_decode($pcmsos, true);

        foreach($pcmsos as $pcmso) { 
            if($pcmso['ppra']['idPpra'] == $ppra->idPpra) {
                array_push($ppra->pcmsos, $pcmso);
            }
        }
        
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/' . $id);

        $ambientePpra = json_decode($json, true);

        $ambientePpra = (object) $ambientePpra;

        $ambiente = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/buscaPorIdOrigem/' . $ambientePpra->idOrigem);

        $ambiente = json_decode($ambiente, true);

        $ambiente = (object) $ambiente;

        return view('ppra.ambiente.index', compact('ppra', 'ambientePpra', 'ambiente'));
    }

    public function listAmbientes($id)
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdPpra/' . $id);

        $array = json_decode($json);

        $final = array();

        foreach ($array as $arr) {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/buscaPorIdOrigem/' . $arr->idOrigem);
            $decode = json_decode($json);
            $decode->idPpraAmbienteTrabalho = $arr->idPpraAmbienteTrabalho;
            array_push($final, $decode);
        }

        return $final;
    }

    public function listFuncoes($ambiente)
    {

        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-funcoes/listaPorIdAmbiente/' . $ambiente);

        $array = json_decode($json);

        $final = array();

        foreach ($array as $arr) {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/funcoes/buscaPorIdRH/' . $arr->idRH);
            $decode = json_decode($json);
            // $decode->idPpraAmbienteTrabalho = $arr->idPpraAmbienteTrabalho;
            array_push($final, $decode);
        }

        return $final;

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

        $array = $request->ambiente;

        $array['ppra'] = $request->ppra['idPpra'];
        $array['subcodigo'] = $request->ambiente['subCodigo'];
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($array);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if ($request->editar) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdPpra/' . $request->ppra['idPpra']);

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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id, $ambiente)
    {

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/" . $ambiente);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdPpra/' . $id);
            \Log::debug($json);
            return $json;
        } else {
            return 'erro';
        }

    }

    public function funcoes($ambiente)
    {

        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-funcoes/listaPorIdAmbiente/' . $ambiente);

        return $json;

    }

    public function funcoesAso($funcao)
    {

        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppraAsos/listaPorIdPpraFuncao/' . $funcao);

        return $json;

    }


   

    public function listExames(Request $request)
    {
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/listaPorIdOrigem/" . $request->ambiente);

        $ambiente = json_decode($json, true);

        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/pcmso-ambientes-exames/listaPorIdPcmsoAmbienteTrabalho/" . $ambiente[0]['idPcmsoAmbienteTrabalho']);

        return $json;
    }

    public function postExames($ambiente, Request $request)
    {
        foreach ($request->exames as $exame) {
            $array = array();
            $array['idPpraExameAmbienteFuncao'] = 0;
            $array['ppraAmbienteTrabalho'] = $ambiente;
            $array['exame'] = $exame['idExame'];
            $array['admissional'] = 'A';
            $array['demissional'] = 'A';
            $array['ocupacional'] = 'A';
            $array['periodico'] = 'A';
            $array['periodo'] = 0;
            $array['idadeMinima'] = 0;
            $array['idadeMaxima'] = 0;
            $array['dataLancamento'] = \Carbon\Carbon::now()->format('Y-m-d');
            $array['usuario'] = 1;
            $json = json_encode($array);
            $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            $json .= '}';

            $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambientes-exames/");

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($json))
            );

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            $result = curl_exec($ch);
        }


            $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambientes-exames/listaExamesPorIdPpraAmbienteTrabalhoFuncao/");

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'idPpra: ' . $request->ppra,
                'idPpraAmbienteTrabalho: ' . $ambiente,
            ));

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            $json = curl_exec($ch);

            return $json;


    }

    public function atualizarExame($ambiente, Request $request)
    {
        \Log::debug($request->all());
        $array = $request->exame;
        $array['exame'] = $request->exame['exame']['idExame'];
        $array['usuario'] = 1;
        $array['ppraAmbienteTrabalho'] = $request->ambiente;
        // $array['']

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambientes-exames/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        \Log::debug($json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);
    }

    public function destroyExame($ambiente, $exame) {
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-ambientes-exames/" . $exame);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);
    }

    public function aso($ambiente){
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/ppra-asos/listaPorIdPpraAmbienteTrabalho/" . $ambiente);
        
        return $json;
    }

    public function postAso($ambiente, Request $request) {
        \Log::debug($request->all());

        $array = $request->aso;
        $array['usuario'] = 1;
        $array['ppraAmbienteTrabalho'] = $ambiente;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-asos/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idPpraAso'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        \Log::debug($result);
        return $this->aso($ambiente);
    }


    public function postFuncoes(Request $request, $ambiente) {
        \Log::debug($request->all());

        $array = $request->funcao;
        $array['idRH'] = $request->funcao['funcao']['idRH'];
        $array['descricaoRH'] = isset($request->funcao['funcao']['descricaoRH']) ? $request->funcao['funcao']['descricaoRH'] : '';
        $array['cargo'] = $request->funcao['funcao']['cargo'];
        $array['cbo'] = $request->funcao['funcao']['cbo']['idCbo'];
        $array['usuario'] = 1;
        $array['ppraAmbienteTrabalho'] = $ambiente;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-funcoes/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idPpraFuncao'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        \Log::debug($result);

        return $this->funcoes($ambiente);
    }

    public function destroyFuncao( $ambiente, $funcao) {
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-funcoes/" . $funcao);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            return $this->funcoes($ambiente);
        } else {
            return 'erro';
        }
    }
}
