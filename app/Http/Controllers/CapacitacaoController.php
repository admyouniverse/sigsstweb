<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CapacitacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.capacitacao');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes');
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

        // $verifica = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes/listaPorCodigo/'.$request->codigo);


        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }

        $array = [];
        $array['idCapacitacao'] = 0;
        $array['descricao'] = $request->descricao;
        $array['grupoCapacitacao'] = $request->grupo;
        $array['periodo'] = $request->periodo;
        $array['periodicidade'] = $request->periodicidade;
        $array['observacao'] = $request->observacao;
        $array['descricaoCompleta'] = $request->completa;
        $array['tipo'] = $request->tipo;
        $array['tipoHabilitacao'] = $request->habilitacao;
        $array['tabela29'] = $request->tabela29;
        $array['complemento'] = $request->complemento;
        $array['tipo'] = $request->tipo;
        if($request->pai) {
            $array['capacitacaoPai'] = $request->pai;    
        }
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes");


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
           $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes');
           return $json;
       } else {
        \Log::debug($result);
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
        \Log::debug($request->all());
        $array = [];
        $array['idCapacitacao'] = $id;
        $array['descricao'] = $request->descricao;
        $array['grupoCapacitacao'] = $request->grupo;
        $array['periodo'] = $request->periodo;
        $array['periodicidade'] = $request->periodicidade;
        $array['descricaoCompleta'] = $request->completa;
        $array['complemento'] = $request->complemento;
        $array['observacao'] = $request->observacao;
        $array['tipo'] = $request->tipo;
        $array['tipoHabilitacao'] = $request->habilitacao;
        $array['tabela29'] = $request->tabela29;
        $array['tipo'] = $request->tipo;
        if($request->pai) {
            $array['capacitacaoPai'] = $request->pai;    
        }
        $array['usuario'] = 1;
        $json = json_encode($array);
     $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
     $json .= '}';

   //   return $json;
     $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes");


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
       $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes');
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

           $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes/" . $id);


           curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

           curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

           curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

           $result = curl_exec($ch);

           $result = json_decode($result, true);

           if ($result['status'] == 'true') {
               $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes');
               return $json;
           } else {
            return 'erro';
        }
    }

    public function buscar($selecionado, $termo) {

        if($selecionado == 'id') {
               $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes/listaPorId/' . $termo);
                return $json;
        } else {
             $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/capacitacoes/listaPorAnyDescricao/' . urlencode($termo));
                return $json;
        }

    }
}
