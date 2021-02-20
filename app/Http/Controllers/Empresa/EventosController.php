<?php

namespace App\Http\Controllers\Empresa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventosController extends Controller
{
    
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('empresas.eventos.index');
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos');
        
        return $json;
    }
    
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function listEmpresa($id)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresasEventos/listaPorIdEmpresa/' . $id);
        
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
        
        // $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/funcoes/listaPorCodigo/'.$request->origem);
            
            
            // if($verifica != '[]') {
                //     \Log::debug($verifica);
                //     return 'existente';
                // }
                
                $array = [];
                $array['idEvento'] = 0;
                $array['descricao'] = $request->descricao;
                $array['usuario'] = 1;
                
                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
                $json .= '}';
                
                \Log::debug($json);
                //   return $json;
                $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/eventos");
                
                
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
                
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                    'Content-Type: application/json',                                                                                
                    'Content-Length: ' . strlen($json))                                                                       
                );
                
                curl_setopt($ch, CURLOPT_POSTFIELDS, $json ); 
                
                curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
                
                $result = curl_exec($ch);
                
                $result = json_decode($result, true);
                
                if ($result['status'] == 'true') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos');
                    return $json;
                } else {
                    return 'erro';
                }
            }

            public function storeEmpresa(Request $request) {
                $array = $request->evento;
                $array['evento'] = $request->evento['evento']['idEvento'];
                $array['empresa'] = $request->evento['empresa']['idEmpresa'];

                \Log::debug($array);

                $array['usuario'] = 1;
                
                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
                $json .= '}';
                
                \Log::debug($json);
                //   return $json;
                $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/empresasEventos");
                
                
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
                
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                    'Content-Type: application/json',                                                                                
                    'Content-Length: ' . strlen($json))                                                                       
                );
                
                curl_setopt($ch, CURLOPT_POSTFIELDS, $json ); 
                
                curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
                
                $result = curl_exec($ch);
                
                $result = json_decode($result, true);
                
                \Log::debug($result);
                if ($result['status'] == 'true') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresasEventos/listaPorIdEmpresa/' . $request->evento['empresa']['idEmpresa']);
                    
                    return $json;
                } else {
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
                $array = [];
                $array['idEvento'] = intval($id);
                $array['descricao'] = $request->descricao;
                $array['usuario'] = 1;
                
                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
                $json .= '}';
                
                //   return $json;
                $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/eventos");
                
                
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                    'Content-Type: application/json',                                                                                
                    'Content-Length: ' . strlen($json))                                                                       
                );
                \Log::debug($json);
                
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                curl_setopt($ch, CURLOPT_POSTFIELDS,$json);
                $result = curl_exec($ch);
                
                $result = json_decode($result, true);
                
                if ($result['status'] == 'true') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos');
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
            public function destroy($id)
            {
                
                $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/eventos/" . $id);
                
                
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
                
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                
                $result = curl_exec($ch);
                
                $result = json_decode($result, true);
                
                if ($result['status'] == 'true') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos');
                    return $json;
                } else {
                    return 'erro';
                }
            }

            public function destroyEmpresa($id)
            {
                
                $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/empresasEventos/" . $id);
                
                
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
                
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                
                $result = curl_exec($ch);
                
                $result = json_decode($result, true);
                
                if ($result['status'] == 'true') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresasEventos');
                    return $json;
                } else {
                    return 'erro';
                }
            }
            
            public function buscar($selecionado, $termo) {
                
                if($selecionado == 'codigo') {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos/listaPorId/' . $termo);
                    return $json;
                } else {
                    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/eventos/listaPorAnyDescricao/' . urlencode($termo));
                    return $json;
                }
                
            }
        }
        