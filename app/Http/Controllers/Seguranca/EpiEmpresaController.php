<?php

namespace App\Http\Controllers\Seguranca;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EpiEmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Session::has('empresa')) {
            return view('seguranca.epiempresa');
        } else {
            return redirect()->to(route('empresa'));
        }
    }


    public function matriz()
    {
        if (\Session::has('empresa')) {
            return view('seguranca.matrizepi');
        } else {
            return redirect()->to(route('empresa'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function postGrade(Request $request)
    {
      
        $array = $request->grade;

        $array['cadastroEpiCa'] = $array['cadastroEpiCa']['idCadastroEpiCa'];

        $array['cor'] = $array['cor']['idCor'];
        $array['tamanho'] = $array['tamanho']['idTamanho'];
        $array['cadastroEpi'] = $request->cadastroEpi['idCadastroEpi'];

        $array['usuario'] = 1;

        \Log::debug($array);

        unset($array['handler']);
        unset($array['fabricante']);
        unset($array['empresaEpi']);

        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/grade-empresa-epis/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->prontuarioNecessidade['idGradeEmpresaEpi'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            \Log::debug('PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        return $result;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroyGrade($id)
    {
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/grade-empresa-epis/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        return $result;

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
        //
    }
}
