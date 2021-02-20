<?php

namespace App\Http\Controllers\Empresa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class JornadaController extends Controller
{

 public function list()
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho');

        return $json;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('empresas.jornadas-de-trabalho.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {

        $array = $request->jornada;
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);
   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho");


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
           $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho');
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
        $array = $request->jornada;
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);
   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho");


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
    );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json ); 

        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');


        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
           $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho');
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

     $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho/" . $id);


     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

     curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

     $result = curl_exec($ch);

     $result = json_decode($result, true);

     if ($result['status'] == 'true') {
         $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho');
         return $json;
     } else {
        return 'erro';
    }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'codigo') {
     $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho/listaPorId/' . $termo);
     return $json;
 } else {
    $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/jornadasTrabalho/listaPorAnyDescricao/' . urlencode($termo));
   return $json;
}

}
}
