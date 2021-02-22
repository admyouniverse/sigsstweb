<?php

namespace App\Http\Controllers\Empresa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CapacitacaoController extends Controller
{
    public function index() {
        if (\Session::has('empresa')) {
            return view('capacitacao.index');
        } else {
            return redirect()->to(route('empresa'));
        }
    }

    public function matriz() {
        if (\Session::has('empresa')) {
            return view('capacitacao.matriz');
        } else {
            return redirect()->to(route('empresa'));
        }
    }

    public function show($id) {
        $capacitacoes = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresa-capacitacoes/listaPorIdEmpresa/' . $id);
        return $capacitacoes;
    }

    public function store(Request $request, $id) {
        \Log::debug($request->all());

        $array = $request->capacitacao;
        
        $array['usuario'] = 1;
        $array['empresa'] = $id;
        $array['capacitacao'] = $request->capacitacao['capacitacao']['idCapacitacao'];
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/empresa-capacitacoes");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            \Log::debug($result);
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresa-capacitacoes/listaPorIdEmpresa/' . $id);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }


    public function destroy($empresa, $id) {

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/empresa-capacitacoes/" . $id);
                
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            
            $capacitacoes = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresa-capacitacoes/listaPorIdEmpresa/' . $empresa);
            return $capacitacoes;

        } else {
            return 'erro';
        }

    }
}