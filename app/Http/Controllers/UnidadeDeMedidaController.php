<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UnidadeDeMedidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.riscos.unidade');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida');
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

        // $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/fontesGeradoras/listaPorCodigo/'.$request->codigo);


        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }

        $array = [];
        $array['idUnidadeMedida'] = 0;
        $array['descricao'] = $request->descricao;
        $array['unidade'] = $request->unidade;
        $array['codigoUnidade'] = $request->codigo;
        $array['observacao'] = $request->observacao;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);
   //   return $json;
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/unidades-medida");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida');
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
        $array['idUnidadeMedida'] = $id;
        $array['descricao'] = $request->descricao;
        $array['unidade'] = $request->unidade;
        $array['codigoUnidade'] = $request->codigo;
        $array['observacao'] = $request->observacao;
        $array['usuario'] = 1;
        $json = json_encode($array);
    

     $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
     $json .= '}';
     \Log::debug($json);
   //   return $json;
     $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/unidades-medida");


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
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida');
       return $json;
   } else {

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
        \Log::debug($id);

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/unidades-medida/" . $id);


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida');
           return $json;
       } else {
        return 'erro';
    }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'id') {
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida/listaPorId/' . $termo);
       return $json;
   } else {
     $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/unidades-medida/listaPorAnyDescricao/' . urlencode($termo));
     return $json;
 }

}
}
