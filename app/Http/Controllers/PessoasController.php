<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PessoasController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('pessoas.index');
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas');
        return $json;
    }
    
    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(Request $request)
    {
        \Log::debug($request->all());
        
        $array = $request->pessoa;
        
        $array['cidadeNatal'] = $request->cidade ? $request->cidade['idCidade'] : null;
        $array['cpf'] = preg_replace("/[^0-9]/", "" , $request->pessoa['cpf']);
        $array['pis'] = preg_replace("/[^0-9]/", "" , $request->pessoa['pis']);
        $array['pais'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['idPais'] : null;
        $array['estrangeiro'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['codigoPais'] == 105 ? 'NÃO' : 'SIM' : null;
        $array['escolaridade'] = 11;
        $array['urlImagem'] = $request->imagem;
        $array['usuario'] = 1;
        // $array['observacao'] = 'N/A';
        
        \Log::debug($array);  
        
        $array = array_filter($array);
        
        $array['idPessoa'] = 0;
        
        \Log::debug($array);
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pessoas");
        
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        \Log::debug($result['status']);
        if ($result['status'] == 'true') {
            \Log::debug('entrou!!');
            \Log::debug($result['status']);
            return $result['msg'];
        } else {
            \Log::debug($result);
            \Log::debug('erro!');
            return 'erro';
        }
        
        
    }
    
    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function show($id)
    {
        $pessoa = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas/' . $id);
        $pessoa = json_decode($pessoa, true);
        
        $pessoa = (object) $pessoa;
        
        
        return view('pessoas.show', compact('pessoa'));
    }
    
    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function create()
    {
        return view('pessoas.create');
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
    
        $array = $request->pessoa;
        
        $array['cidadeNatal'] = $request->cidade ? $request->cidade['idCidade'] : null;
        $array['cpf'] = preg_replace("/[^0-9]/", "" , $request->pessoa['cpf']);
        $array['pais'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['idPais'] : null;
        $array['estrangeiro'] = isset($request->pessoa['pais']) ? $request->pessoa['pais']['codigoPais'] == 105 ? 'NÃO' : 'SIM' : null;
        $array['cidadeReside'] = $request->cidade ? $request->cidade['idCidade'] : null;
        $array['escolaridade'] = null;
        // $array['escolaridade'] = 11;
        $array['pis'] = preg_replace("/[^0-9]/", "" , $request->pessoa['pis']);
        $array['urlImagem'] = $request->imagem;
        $array['usuario'] = 1;
        
        \Log::debug($array);        
        
        $array = array_filter($array);
        
        \Log::debug($array);
        
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/pessoas");
        
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
        );
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
        $result = curl_exec($ch);
        
        
        $result = json_decode($result, true);
        \Log::debug($result['status']);
        if ($result['status'] == 'true') {
            \Log::debug('entrou!!');
            \Log::debug($result['status']);
            return $result['msg'];
        } else {
            \Log::debug($result);
            \Log::debug('erro!');
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
        //
    }
    
    
    public function cpf($cpf) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas/buscaPorCpf/' . preg_replace("/[^0-9]/", "" , $cpf));
        return $json;
    }
    
    
    public function listAutonomo($id) {
        
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' . $id);
        \Log::debug($json);
        return $json;
    }
    
    public function listEmpregado($id) {
        
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas/comVinculoEmpregaticioPorIdEmpresa/' . $id);
        \Log::debug($json);
        return $json;
    }

    public function funcoes($id) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaHistoricoFuncaoPorIdPessoa/' . $id);
        
        return $json;
    }
}
