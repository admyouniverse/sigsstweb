<?php

namespace App\Http\Controllers\Empresa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmpregadoController extends Controller
{
    /**
     * 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function demitidos($id) {
        $empresa = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresaTempoServicoInativo/' . $id);
        return $empresa;
    }

    public function admissional(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->funcionario;
        $array['idEmpresaFuncionario'] = 0;
        $array['empresaContrato'] = $request->funcionario['empresaContrato']['idEmpresaContrato'];
        $array['ambienteTrabalho'] = $request->funcionario['ambienteTrabalho']['idAmbienteTrabalho'];
        $array['funcao'] = $request->funcionario['funcao']['idFuncao'];
        $array['jornadaTrabalho'] = 1;
        $array['pessoa'] = $request->funcionario['pessoa']['idPessoa'];
        $array['tipoOperacao'] = 'ADMISSIONAL';
        $array['flag'] = 'N';
        $array['usuario'] = 1;
        
        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresaFuncionarios");
        
        
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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresa/' . $request->empresa['idEmpresa']);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function historico($idPessoa, $empresa)
    {

        $ch = curl_init(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaHistoricoFuncao/');


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1', 'idEmpresa:' . $empresa, 'matricula:' . $idPessoa));
   
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
   
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        \Log::debug($result);
        
        return $result;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function alteracao(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->funcionario;

        if(isset($request->funcionario['dataFinal'])) {
            $array['idEmpresaFuncionario'] = $request->funcionario['idEmpresaFuncionario'];    
        } else {
            $array['idEmpresaFuncionario'] = 0;
        }

        $array['empresaContrato'] = $request->funcionario['empresaContrato']['idEmpresaContrato'];
        $array['ambienteTrabalho'] = $request->funcionario['ambienteTrabalho']['idAmbienteTrabalho'];
        $array['funcao'] = $request->funcionario['funcao']['idFuncao'];
        $array['jornadaTrabalho'] = 1;
        $array['pessoa'] = $request->funcionario['pessoa']['idPessoa'];
        $array['flag'] = 'N';
        $array['usuario'] = 1;
        
        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresaFuncionarios");
        
        
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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresa/' . $request->empresa['idEmpresa']);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    public function movimentacao(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->funcionario;
        
        if($request->funcionario['tipoOperacao'] == 'DEMISSIONAL') {
            $array['idEmpresaFuncionario'] = 0;
        }
        
    
        $array['empresaContrato'] = $request->funcionario['empresaContrato']['idEmpresaContrato'];
        $array['ambienteTrabalho'] = $request->funcionario['ambienteTrabalho']['idAmbienteTrabalho'];
        $array['funcao'] = $request->funcionario['funcao']['idFuncao'];
        $array['jornadaTrabalho'] = 1;
        $array['pessoa'] = $request->funcionario['pessoa']['idPessoa'];
        $array['flag'] = $request->funcionario['tipoOperacao'] == 'DEMISSIONAL' ? 'D' : 'N';
        $array['usuario'] = 1;
        
        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';
        
        \Log::debug($json);
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresaFuncionarios");
        
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
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresa/' . $request->empresa['idEmpresa']);
            return $json;
        } else {
            return $result;
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
