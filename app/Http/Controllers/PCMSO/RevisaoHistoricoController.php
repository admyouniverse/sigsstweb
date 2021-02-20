<?php

namespace App\Http\Controllers\PCMSO;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class RevisaoHistoricoController extends Controller
{
    public function medicos(Request $request) {
        \Log::debug($request->all());
        
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/empresa-profissionais/listaMedicoCoordenadorPcmso");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idEmpresa: ' . Session::get('empresa')->idEmpresa,
            'dataPcmso: ' . $request->data
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);

        return $result;
    }

    public function list($pcmso) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-historico-revisoes/listaPorIdPcmso/' . $pcmso);

        return $json;
    }

    public function post($pcmso, Request $request) {

        $array = array();

        \Log::debug($request->all());

        $array['idPcmsoHistoricoRevisao'] = $request->idPcmsoHistoricoRevisao;
        $array['usuario'] = 1;
        $array['pcmso'] = $request->pcmso;
        $array['empresaProfissional'] = $request->medico['idEmpresaProfissional'];
        $array['responsavel'] = $request->responsavel;
        $array['complemento'] = $request->complemento;
        $array['representante'] = $request->nome;
        $array['cargo'] = $request->cargo;
        $array['cpf'] = preg_replace("/[^0-9]/", "" , $request->cpf); 


        if($request->representante) {
            $array['empresaFuncionario'] = $request->representanteSelecionado['idEmpresaFuncionario'];
        }

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/pcmso-historico-revisoes/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if($array['idPcmsoHistoricoRevisao'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            \Log::debug('POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        if ($result['status'] == 'true') {

            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pcmso-historico-revisoes/listaPorIdPcmso/' . $pcmso);

            return $json;
        } else {

        }

    }
}