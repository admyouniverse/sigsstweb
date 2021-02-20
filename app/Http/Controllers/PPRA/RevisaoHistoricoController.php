<?php

namespace App\Http\Controllers\PPRA;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class RevisaoHistoricoController extends Controller
{
    public function medicos(Request $request) {
        
        $json = file_get_contents("http://200.98.201.236/ServicoSIGSSO/rest/empresa-profissionais/listaPorIdEmpresa/" . Session::get('empresa')->idEmpresa);

        return $json;
    }

    public function list($ppra) {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-historico-revisoes/listaPorIdPpra/' . $ppra);

        return $json;
    }

    public function post($ppra, Request $request) {

        $array = array();

        \Log::debug($request->all());

        $array['idPpraHistoricoRevisao'] = $request->idPpraHistoricoRevisao;
        $array['usuario'] = 1;
        $array['ppra'] = $ppra;
        $array['empresaProfissional'] = $request->empresaProfissional['idEmpresaProfissional'];
        $array['empresaProfissional02'] = $request->empresaProfissional02['idEmpresaProfissional'];
        $array['responsavel'] = $request->responsavel;
        $array['complemento'] = $request->complemento;
        $array['representante'] = $request->nome;
        $array['cargo'] = $request->cargo;
        $array['cpf'] = preg_replace("/[^0-9]/", "" , $request->cpf);


        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ppra-historico-revisoes/");

        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        if($array['idPpraHistoricoRevisao'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            \Log::debug('POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        if ($result['status'] == 'true') {

            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ppra-historico-revisoes/listaPorIdPpra/' . $ppra);

            return $json;
        } else {

        }

    }
}