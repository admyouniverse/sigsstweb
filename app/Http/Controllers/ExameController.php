<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.exames');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    function list() {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames');
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

        // $verifica = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames/listaPorCodigo/'.$request->codigo);

        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }

        $array = [];
        $array['idExame'] = 0;
        $array['nomeExame'] = $request->nome;
        $array['descrica'] = $request->descrica;
        $array['sexo'] = $request->sexo;
        $array['observacao'] = $request->observacao;
        $array['grupoExame'] = $request->grupo;
        $array['tabela27'] = $request->tabela27;
        $array['unidadeMedida'] = $request->unidadeMedida;
        $array['usuario'] = 1;

        $array['referenciaMaxMasculino'] = $request->homemMax;
        $array['referenciaMinMasculino'] = $request->homemMin;
        $array['referenciaMaxFeminino'] = $request->mulherMax;
        $array['referenciaMinFeminino'] = $request->mulherMin;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/exames");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        $result = curl_exec($ch);

        $result = json_decode($result, true);
        \Log::debug($json);
        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames');
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
        $array = [];
        $array['idExame'] = $id;
        $array['nomeExame'] = $request->nome;
        $array['descricao'] = $request->descricao;
        $array['sexo'] = $request->sexo;
        $array['observacao'] = $request->observacao;
        $array['grupoExame'] = $request->grupo;
        $array['tabela27'] = $request->tabela27;
        $array['unidadeMedida'] = $request->unidadeMedida;
        $array['usuario'] = 1;
        $array['referenciaMaxMasculino'] = $request->homemMax;
        $array['referenciaMinMasculino'] = $request->homemMin;
        $array['referenciaMaxFeminino'] = $request->mulherMax;
        $array['referenciaMinFeminino'] = $request->mulherMin;
        
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/exames");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames');
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

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/exames/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames');
            return $json;
        } else {
            return 'erro';
        }
    }

    public function buscar($selecionado, $termo)
    {

        if ($selecionado == 'id') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames/listaPorId/' . $termo);
            return $json;
        } else {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/exames/listaPorAnyNome/' . urlencode($termo));
            return $json;
        }

    }
}
