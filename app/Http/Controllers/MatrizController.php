<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MatrizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco');

        return $json;
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->matriz;
        $array['eixoX'] = $request->matriz['eixoX']['idEixoX'];
        $array['eixoY'] = $request->matriz['eixoY']['idEixoY'];
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/matriz-risco");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);
      
        if($request->eixo['idMatrizRisco'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        return $this->list();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('matriz.matriz');
    }


    public function show($matriz) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco/' . $matriz);
        
        return view('matriz.show', compact('json'));
    }


    public function niveis() {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco-nivel');

        return $json;
    }

    public function postNivel(Request $request) {

        $array = $request->nivel;

        $array['matrizRisco'] = $request->matriz['idMatrizRisco'];
        
        $array['usuario'] = 1;

        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        \Log::debug($json);
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/matriz-risco-nivel");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
      
        if($request->nivel['idMatrizRiscoNivel'] == 0) {
            
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        return $this->niveis();
    }

    public function getNivel($peso, $matriz) {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/matriz-risco-nivel/buscaPorValor/' . $peso . '?idMatrizRisco=' . $matriz );

        return $json;
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
    public function removerNivel($matriz)
    {

       $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/matriz-risco-nivel/" . $matriz);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

       if ($result['status'] == 'true') {
           return $this->niveis();
       } else {
        return 'erro';
    }
}
}
