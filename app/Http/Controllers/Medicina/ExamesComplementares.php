<?php

namespace App\Http\Controllers\Medicina;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class ExamesComplementares extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        if(Session::has('empresa')) {
            return view('medicina.examescomplementares');    
        } else {
            return redirect()->to(URL('empresas'));
        }
        
    }
    

    public function ultimo ($funcionario) {
        
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/solicitacoes-exames/listaUltimaSolicitacaoPorEmpresaFuncionario/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'data:' . \Carbon\Carbon::now()->format('Y-m-d'),
            'idEmpresaFuncionario:' . $funcionario
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

        $exames = curl_exec($ch);

        return $exames;
    }
    /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function list(Request $request)
    {
        \Log::debug($request->all());

        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaIdEmpresaFuncionarioDataExameIniFim/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'idExame:' . $request->idExame,
            'idEmpresaFuncionario:' . $request->idEmpresaFuncionario,
            'idEmpresa:' . 5,
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

        $exames = curl_exec($ch);

        \Log::debug($exames);
    }
    
    
    public function pessoas()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/pessoas/comVinculoEmpregaticioPorIdEmpresa/' . Session::get('empresa')->idEmpresa);
        
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
        \Log::debug($request->complementar);
        
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/exames-complementares/listaPorIdEmpresaFuncionario/' . $request->funcionario['idEmpresaFuncionario']);
        
        $json = json_decode($json, true);
        
        if(empty($json)) {
            
            $array['usuario'] = 1;
            $array['idExameComplementar'] = 0;
            $array['empresaFuncionario'] = $request->funcionario['idEmpresaFuncionario'];
            
            $json = json_encode($array);
            $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            $json .= '}';
            
            \Log::debug($array);
            
            $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/exames-complementares/");
            
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($json))
            );
            
            \Log::debug($json);
            
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            $result = curl_exec($ch);
            
            \Log::debug($result);
            
            $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/exames-complementares/listaPorIdEmpresaFuncionario/' . $request->funcionario['idEmpresaFuncionario']);
            
            $json = json_decode($json, true);
        }
        
        \Log::debug($json[0]['idExameComplementar']);
        
        $array['idExameComplementarExame'] = isset($request->complementar['idExameComplementarExame']) ? $request->complementar['idExameComplementarExame'] : 0;
        $array['exameComplementar'] = $json[0]['idExameComplementar'];
        $array['exame'] = $request->complementar['exame']['idExame'];
        $array['situacao'] = $request->complementar['grau'];
        $array['observacao'] = isset($request->complementar['observacao']) ? $request->complementar['observacao'] : '' ;
        $array['ordemExame'] = $request->complementar['ordemExame'];
        $array['indicacaoResultado'] = $request->complementar['indicacaoResultado'];
        $array['dataExame'] = $request->complementar['data'];
        $array['caminhoPdf'] = isset($request->complementar['caminhoPdf']) ? $request->complementar['caminhoPdf'] : '';
        $array['usuario'] = 1;
        
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';
        
        $ch = curl_init(env('APP_API') . 'ServicoSIGSSO/rest/exames-complementares-exames/');
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        
        \Log::debug($json);
        
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        
        \Log::debug($result);
        
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
        $ch = curl_init(env('APP_API') . "ServicoSIGSSO/rest/exames-complementares-exames/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);
    }
}
