<?php

namespace App\Http\Controllers\Pessoa;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CapacitacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list($id)
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoasCapacitacoes/listaPorIdPessoa/' . $id);
        
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
    public function store(Request $request, $id)
    {
        \Log::debug($request->all());
        $array = $request->capacitacao;
        $array['pessoa'] = $id;
        $array['capacitacao'] = $request->capacitacao['capacitacao']['idCapacitacao'];
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);
   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pessoasCapacitacoes");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoasCapacitacoes/listaPorIdPessoa/' . $id);
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
    public function deletar($id, $pessoa)
    {
        
        \Log::debug($id);
        
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/pessoasCapacitacoes/" . $id);
                
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        
        $result = curl_exec($ch);
        
        $result = json_decode($result, true);
        
        \Log::debug($result);

        if ($result['status'] == 'true') {
            
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoasCapacitacoes/listaPorIdPessoa/' . $pessoa);
            return $json;

        } else {

            return 'erro';

        }

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
