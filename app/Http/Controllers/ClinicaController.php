<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClinicaController extends Controller
{
    public function index()
    {
        return view('tabelas.clinicas');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas');
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

        // $verifica = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas/listaPorCodigo/'.$request->codigo);


        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }

        $array = $request->clinica;
       $array['usuario'] = 1;
       $array['idClinica'] = 0;
        $array['cnpj'] = preg_replace("/[^0-9]/", "" , $request->clinica['cnpj']);
        $array['cep'] = preg_replace("/[^0-9]/", "" , $request->clinica['cep']);
       $array['cidadeClinica'] = isset($request->clinica['cidadeClinica']) ? $request->clinica['cidadeClinica']['idCidade'] : null;

       \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/clinicas");


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
         $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas');
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
       $array = $request->clinica;
       $array['usuario'] = 1;
        $array['cnpj'] = preg_replace("/[^0-9]/", "" , $request->clinica['cnpj']);
        $array['cep'] = preg_replace("/[^0-9]/", "" , $request->clinica['cep']);
       $array['cidadeClinica'] = isset($request->clinica['cidadeClinica']) ? $request->clinica['cidadeClinica']['idCidade'] : null;

       \Log::debug($array);

        $json = json_encode($array);
     $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
     $json .= '}';

   //   return $json;
     $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/clinicas");


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

     \Log::debug($result);

     if ($result['status'] == 'true') {
         $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas');
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

     $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/clinicas/" . $id);


     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

     curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

     $result = curl_exec($ch);

     $result = json_decode($result, true);

     if ($result['status'] == 'true') {
         $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas');
         return $json;
     } else {
        return 'erro';
    }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'codigo') {
     $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas/listaPorCodigo/' . $termo);
     return $json;
 } else {
   $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/clinicas/listaPorAnyDescricao/' . urlencode($termo));
   return $json;
}

}
}
