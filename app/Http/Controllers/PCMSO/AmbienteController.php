<?php

namespace App\Http\Controllers\PCMSO;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AmbienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,$id)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/listaPorIdPcmso/' . $id);

        return $json;
    }

    public function ambiente($pcmso, $id)
    {
        $pcmso = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsos/' . $pcmso);

        $pcmso = json_decode($pcmso, true);

        $pcmso = (object) $pcmso;

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/' . $id);

        $ambientePcmso = json_decode($json, true);

        $ambientePcmso = (object) $ambientePcmso;

        $ambiente = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ambientesTrabalho/buscaPorIdOrigem/' . $ambientePcmso->idOrigem);

        $ambiente = json_decode($ambiente, true);

        $ambiente = (object) $ambiente;

        return view('pcmso.ambiente.index', compact('pcmso', 'ambientePcmso', 'ambiente'));
    }
    public function listAmbientes($id)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/listaPorIdPcmso/' . $id);

        
        $array = json_decode($json);

        $final = array();

        foreach ($array as $arr) {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ambientesTrabalho/buscaPorIdOrigem/' . $arr->idOrigem);
            $decode = json_decode($json);
            $decode->idPcmsoAmbienteTrabalho = $arr->idPcmsoAmbienteTrabalho;
            array_push($final, $decode);
        }

        return $final;
    }

    public function listFuncoes($ambiente)
    {

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-funcoes/listaPorIdAmbiente/' . $ambiente);

        $array = json_decode($json);
        

        $final = array();

        foreach ($array as $arr) {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/funcoes/buscaPorIdRH/' . $arr->idRH);
            $decode = json_decode($json);
            $decode->idPcmsoFuncao = $arr->idPcmsoFuncao;
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

        $array['pcmso'] = $request->pcmso['idPcmso'];
        $array['subcodigo'] = $request->ambiente['subCodigo'];
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($array);

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/");

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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/listaPorIdPcmso/' . $request->pcmso['idPcmso']);

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


    public function destroy($id, $ambiente)
    {

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/" . $ambiente);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-ambiente-trabalhos/listaPorIdPcmso/' . $id);
            \Log::debug($json);
            return $json;
        } else {
            return 'erro';
        }

    }

    public function funcoes( $ambiente, $ppra)
    {

        $json = file_get_contents(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdOrigem/" . $ambiente);

        $ambientes = json_decode($json, true);
        
        foreach($ambientes as $amb) {
            if($amb['ppra']['idPpra'] == $ppra  ) {
                $ambiente = $amb;
            }   
        }

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-funcoes/listaPorIdAmbiente/' . $ambiente['idPpraAmbienteTrabalho']);


        return $json;
    }

    public function funcoesAso($funcao)
    {

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmsoAsos/listaPorIdPcmsoFuncao/' . $funcao);

        return $json;

    }


   

    public function listExames(Request $request)
    {
        \Log::debug($request->all());

        $json = file_get_contents(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambientes-exames/listaPorIdPcmsoAmbienteTrabalho/" . $request->ambiente);
        
        return $json;
        
    }

    public function postExames($ambiente, Request $request)
    {
        foreach ($request->exames as $exame) {
            $array = array();
            $array['idPcmsoExameAmbienteFuncao'] = 0;
            $array['pcmsoAmbienteTrabalho'] = $ambiente;
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

            $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambientes-exames/");

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($json))
            );

            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            $result = curl_exec($ch);
        }

            $json = file_get_contents(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambientes-exames/listaPorIdPcmsoAmbienteTrabalho/" . $ambiente);

            return $json;

    }

    public function atualizarExame($ambiente, Request $request)
    {
        \Log::debug($request->all());
        $array = $request->exame;
        $array['exame'] = $request->exame['exame']['idExame'];
        $array['usuario'] = 1;
        $array['pcmsoAmbienteTrabalho'] = $request->ambiente;
        // $array['']

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        //   return $json;
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambientes-exames/");

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
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-ambientes-exames/" . $exame);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);
    }

    public function aso($ambiente){
        $json = file_get_contents(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-asos/listaPorIdPcmsoAmbienteTrabalho/" . $ambiente);
        
        return $json;
    }

    public function postAso($ambiente, Request $request) {
        \Log::debug($request->all());

        $array = $request->aso;
        $array['usuario'] = 1;
        $array['pcmsoAmbienteTrabalho'] = $ambiente;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pcmso-asos/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idPcmsoAso'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        \Log::debug($result);
        return $this->aso($ambiente);
    }

    public function listRiscos($idAmbiente, $idPpra) {
        $json = file_get_contents(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-trabalhos/listaPorIdOrigem/" . $idAmbiente);

        $ambientes = json_decode($json, true);
        
        foreach($ambientes as $amb) {
            if($amb['ppra']['idPpra'] == $idPpra) {
                $ambiente = $amb;
            }   
        }

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-ambiente-riscos/buscaPpraAmbienteRiscoPorIdAmbienteTrabalho/' . $ambiente['idPpraAmbienteTrabalho']);

        $decode = json_decode($json, true);
        $riscos = [];

        foreach ($decode as $risco) {

            $medida = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-ambiente-risco-medidas/PpraAmbienteRisco/' . $risco['idPpraAmbienteRisco']);

            $medida = json_decode($medida, true);

            if (!empty($medida)) {
                $medida[0]['ppraAmbienteRisco'] = [];
                $risco['medida'] = $medida[0];

            } else {
                $risco['medida'] = [];
            }

            if ($risco['risco']['enquadramento'] == 'QUANTITATIVO') {
                $unidades = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-unidades-medida/listaPorIdRisco/' . $risco['risco']['idRisco']);
                $unidades = json_decode($unidades, true);
                $risco['unidade'] = $unidades[0];
            } else {
                $risco['unidade'] = [];
            }

            $nivel = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco-nivel/buscaPorValor/' . $risco['pesoX']['peso'] * $risco['pesoY']['peso'] . '?idMatrizRisco=' . $risco['ppraAmbienteTrabalho']['ppra']['matrizRisco']['idMatrizRisco']);

            $risco['nivel'] = json_decode($nivel, true);

            array_push($riscos, $risco);

        }

        return json_encode($riscos);
    }
}
