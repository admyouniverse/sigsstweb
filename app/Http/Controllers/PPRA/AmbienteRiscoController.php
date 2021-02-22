<?php

namespace App\Http\Controllers\PPRA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AmbienteRiscoController extends Controller
{

    function list($ambiente) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-ambiente-riscos/buscaPpraAmbienteRiscoPorIdAmbienteTrabalho/' . $ambiente);

        $decode = json_decode($json, true);
        $riscos = [];

        foreach ($decode as $risco) {

            $medida = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/ppra-ambiente-risco-medidas/PpraAmbienteRisco/' . $risco['idPpraAmbienteRisco']);

            $medida = json_decode($medida, true);
            // dd($risco);
        
            if (!empty($medida)) {
                $medida[0]['ppraAmbienteRisco'] = [];
                $risco['medida'] = $medida[0];

            } else {
                $risco['medida'] = [];
            }

            if ($risco['risco']['enquadramento'] == 'QUANTITATIVO') {
                $unidades = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-unidades-medida/listaPorIdRisco/' . $risco['risco']['idRisco']);
                $unidades = json_decode($unidades, true);
                if($unidades) {
                    $risco['unidade'] = $unidades[0];
                }
            } else {
                $risco['unidade'] = [];
            }

            if(isset($risco['pesoX']['peso']) && isset($risco['pesoY']['peso'])) {
                $nivel = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco-nivel/buscaPorValor/' . $risco['pesoX']['peso'] * $risco['pesoY']['peso'] . '?idMatrizRisco=' . $risco['ppraAmbienteTrabalho']['ppra']['matrizRisco']['idMatrizRisco']);

                $risco['nivel'] = json_decode($nivel, true);
            }

            if(isset($risco['pesoXAtenuado']['peso']) && isset($risco['pesoYAtenuado']['peso'])) {
                $nivel = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco-nivel/buscaPorValor/' . $risco['pesoXAtenuado']['peso'] * $risco['pesoYAtenuado']['peso'] . '?idMatrizRisco=' . $risco['ppraAmbienteTrabalho']['ppra']['matrizRisco']['idMatrizRisco']);

                $risco['nivelAtenuado'] = json_decode($nivel, true);
            }
            

            array_push($riscos, $risco);

        }

        return json_encode($riscos);

        // return $json;
    }

    public function post(Request $request)
    {
        
        
        $array = $request->fator;

        $array['ambienteTrabalho'] = $request->fator['ambienteTrabalho']['idPpraAmbienteTrabalho'];
        $array['fonteGeradora'] = $request->fator['fonteGeradora']['idFonteGeradora'];
        $array['risco'] = $request->fator['risco']['idRisco'];

        $array['pesoX'] = $request->fator['pesoX']['idPesoX'];
        $array['pesoY'] = $request->fator['pesoY']['idPesoY'];

        $array['pesoXAtenuado'] = $request->fator['pesoXAtenuado']['idPesoX'];
        $array['pesoYAtenuado'] = $request->fator['pesoYAtenuado']['idPesoY'];

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-riscos/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if ($array['idPpraAmbienteRisco'] != 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);
        if ($result['status'] == 'true') {
            $array = $request->medidas;
            $array['usuario'] = 1;
            $array['dataMedida'] = isset($request->medidas['data']) ? $request->medidas['data'] : null;
            $array['idPpraAmbienteRiscoMedida'] = isset($array['idPpraAmbienteRiscoMedida']) ? $array['idPpraAmbienteRiscoMedida'] : 0;
            
            \Log::debug($request->medidas);
            \Log::debug($request->medida);

            if(isset($array['riscoUnidadeMedida'])) {
                \Log::debug('entrou!!');
                $array['riscoUnidadeMedida'] = $request->medidas['riscoUnidadeMedida']['idRiscoUnidadeMedida'];
            }

            $array['ppraAmbienteRisco'] = $result['msg'];

            $json = json_encode($array);
            $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            $json .= '}';

            \Log::debug($json);

            $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-risco-medidas/");

            // \Log::debug($json);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($json))
            );

            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);


            if (isset($array['idPpraAmbienteRiscoMedida']) && $array['idPpraAmbienteRiscoMedida'] != 0) {
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                \Log::debug('PUTTTT');
            } else {
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            }

            $result = curl_exec($ch);

            $result = json_decode($result, true);

            \Log::debug($result);

            return $this->list($request->fator['ambienteTrabalho']['idPpraAmbienteTrabalho']);

        } else {
            return 'erro';
        }


    }

    public function destroy(Request $request)
    {
        \Log::debug($request->all());

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-risco-medidas/" . $request->idAmbienteRiscoMedida);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-riscos/" . $request->idAmbienteRisco);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);
        

        \Log::debug($result);

        if ($result['status'] == 'true') {
            return $this->list($request->ambiente);
        } else {
            return 'erro';
        }

    }

    public function historico(Request $request) {

        \Log::debug($request->all());
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/ppra-ambiente-risco-medidas/listaPorEmpresaContratoRisco/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresaContrato: ' . $request->idEmpresaContrato,
            'idOrigem: ' . $request->idOrigem,
            'idRisco: ' . $request->idRisco
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);

        return $result;

    }

}
