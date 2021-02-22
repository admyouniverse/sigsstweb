<?php

namespace App\Http\Controllers\Empresa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmpresasEpiController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index($id)
    {
        $epis = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epis');
        return $epis;
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function create(Request $request, $id)
    {         
        $array = $request->dados;
        
        $array['idCadastroEpi'] = 0;
        $array['usuario'] = 1;
        // $array['empresa'] = $id;
        $array['epi'] = $request->dados['epi']['idEpi'];
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epis");
        
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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epis');
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }
    
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        //
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
        $array = $request->dados;
        $array['usuario'] = 1;
        $array['epi'] = $request->dados['epi']['idEpi'];
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epis");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            \Log::debug($result);
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epis');
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id, $epi)
    {   
        \Log::debug($epi);
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epis/" . $epi);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epis/');
            return $json;
        } else {
            return 'erro';
        }
    }

    public function ca($id) {
        $cas = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epi-cas/listaPorIdEmpresaEpi/' . $id);
        return $cas;
    }

    public function novoCa($id, Request $request) {
        $array = $request->dados;
        
        $array['idCadastroEpiCa'] = 0;
        $array['usuario'] = 1;
        $array['cadastroEpi'] = $id;
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epi-cas");
        
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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' . $id);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }


    public function atualizarCa($id, Request $request) {
        $array = $request->dados;
        $array['usuario'] = 1;
        $array['cadastroEpi'] = intVal($request->cadastroEpi);
        unset($array['handler']);
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epi-cas");
        
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            \Log::debug($result);
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' . intVal($request->cadastroEpi));
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }


    public function removerCa($id, $ca)
    {   
        \Log::debug($ca);
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/cadastro-epi-cas/" . $ca);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' . $id);
            return $json;
        } else {
            return 'erro';
        }
    }
}
