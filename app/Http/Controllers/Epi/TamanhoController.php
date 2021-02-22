<?php

namespace App\Http\Controllers\Epi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TamanhoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("tabelas.epi.tamanho");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function post(Request $request)
    {
        $array = $request->tamanho;

        $array['usuario'] = 1;

        unset($array['handler']);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/tamanhos/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        if($request->prontuarioNecessidade['idProntuarioNecessidade'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/tamanhos/');

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
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/tamanhos/" . $id);


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
   
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
   
        $result = curl_exec($ch);
   
        $result = json_decode($result, true);
   
        if ($result['status'] == 'true') {
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/tamanhos');
            return $json;
        } else {
           return 'erro';
       }
    }
}
