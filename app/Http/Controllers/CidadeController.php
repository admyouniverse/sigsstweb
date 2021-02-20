<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.cidades');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades');
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

        $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades/listaPorCodigo/'.$request->ibge);


        if($verifica != '[]') {
            \Log::debug($verifica);
            return 'existente';
        }

        $array = [];
        $array['idCidade'] = 0;
        $array['nomeCidade'] = $request->nome;
        $array['codigoCidade'] = $request->ibge;
        $array['uf'] = $request->uf;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/cidades");


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
         $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades');
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

       $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades/listaPorCodigo/'.$request->ibge);
 // && $verifica['idCidade'] != $id


       if($verifica != '[]' && json_decode($verifica)['0']->idCidade != $id) {

        return 'existente';
    }

    $array = [];
    $array['idCidade'] = $id;
    $array['nomeCidade'] = $request->nome;
    $array['codigoCidade'] = $request->ibge;
    $array['uf'] = $request->uf;
    $array['usuario'] = 1;
    $json = json_encode($array);
     $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
     $json .= '}';

   //   return $json;
     $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/cidades");


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
         $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades');
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

     $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/cidades/" . $id);


     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

     curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

     $result = curl_exec($ch);

     $result = json_decode($result, true);

     if ($result['status'] == 'true') {
         $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades');
         return $json;
     } else {
        return 'erro';
    }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'codigo') {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades/listaPorCodigo/' . $termo);
     return $json;
 } else if ($selecionado == 'nome') {
   $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades/listaPorAnyNome/' . urlencode($termo));
   return json_decode($json);
} else if ($selecionado == 'estado') {
    $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/cidades/listaPorUF/' . urlencode($termo));
   return $json;
}

}
}
