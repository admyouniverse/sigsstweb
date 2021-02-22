<?php

namespace App\Http\Controllers\Medicina;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class ProntuarioMedico extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        
        if (\Session::has('empresa')) {
            return view('medicina.prontuariomedico');
        } else {
            return redirect()->to(route('empresa'));
        }
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function postPCD(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->prontuarioNecessidade;

        $array['prontuario'] = $array['prontuario']['idProntuario'];
        $array['necessidade'] = $array['necessidade']['idNecessidade'];
        $array['cid'] = $array['cid']['idCid'];
        $array['usuario'] = 1;

        unset($array['handler']);
        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/prontuario-necessidades/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->prontuarioNecessidade['idProntuarioNecessidade'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            \Log::debug('PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        return $result;
    }
    
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function afastamento(Request $request)
    {
        
        $array = $request->afastamento;
        $array['usuario'] = 1;
        $array['motivoAfastamento'] = $request->afastamento['motivoAfastamento']['idMotivoAfastamento'];
        $array['cid'] = $request->afastamento['cid']['idCid'];
        $array['uf'] = $request->afastamento['uf'];
        $array['prontuario'] = $request->prontuario['idProntuario'];

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($array);

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/prontuario-afastamentos/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idProntuarioAfastamento'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        return $result;
    }

    public function grupo(Request $request)
    {
        
        $array = $request->grupo;
        $array['usuario'] = 1;
        $array['grupoControle'] = $request->grupo['grupoControle']['idGrupoControle'];
        $array['prontuario'] = $request->prontuario['idProntuario'];

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($array);

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/prontuario-grupos-controle/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->capa['idProntuarioGrupoControle'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);
        return $result;
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
    public function update(Request $request)
    {
        \Log::debug($request->pessoa);
        $array = $request->pessoa;
        
        $array['cidadeNatal'] = $request->pessoa['cidadeNatal']['idCidade'];
        $array['cpf'] = preg_replace("/[^0-9]/", "" , $request->pessoa['cpf']);
        $array['pais'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['idPais'] : null;
        $array['estrangeiro'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['codigoPais'] == 105 ? 'NÃO' : 'SIM' : null;
        $array['cidadeReside'] = $request->pessoa['cidadeReside']['idCidade'];
        $array['escolaridade'] = null;
        // $array['escolaridade'] = 11;
        $array['pis'] = preg_replace("/[^0-9]/", "" , $request->pessoa['pis']);
        $array['urlImagem'] = $request->pessoa['urlImagem'];
        $array['usuario'] = 1;
        
        $array = array_filter($array);
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        
        \Log::debug($json);
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/pessoas");
        
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        \Log::debug($result);
        
        $array = [];
        
        $array['idProntuario'] = $request->prontuario['idProntuario'];
        $array['anotacoes'] = $request->prontuario['anotacoes'];
        $array['dataIni'] = $request->prontuario['dataIni'];
        $array['dataFim'] = isset($request->prontuario['dataFim']) ? $request->prontuario['dataFim'] : null ;
        $array['usuario'] = 1;
        $array['empresaFuncionario'] = $request->prontuario['empresaFuncionario']['idEmpresaFuncionario'];
        
        $array = array_filter($array);
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        
        \Log::debug($json);
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/prontuarios");
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        \Log::debug($result);
        
    }
    
    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroyPCD($id)
    {
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/prontuario-necessidades/" . $id);


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
   
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
   
        $result = curl_exec($ch);
   
        $result = json_decode($result, true);

        return $result;
    }
}
