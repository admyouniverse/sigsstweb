<?php

namespace App\Http\Controllers\Empresa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AmbienteTrabalhoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('empresas.ambiente-de-trabalho.index');
    }


    public function origem($id) {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/buscaPorIdOrigem/' . $id);
        
        return $json;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    function list() {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho');

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

        // $verifica = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/listaPorCodigo/'.$request->origem);

        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }

        $array = [];
        $array['idAmbienteTrabalho'] = 0;
        $array['nomeAmbienteTrabalho'] = $request->nome;
        $array['idOrigem'] = $request->origem;
        $array['usuario'] = 1;
        $array['observacao'] = $request->observacao;
        $array['subCodigo'] = $request->subcodigo;
        $array['estabelecimento'] = $request->estabelecimento;
        $array['inscricaoTerceiro'] = $request->terceiro;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);
        //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho');
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
        $array = [];
        $array['idAmbienteTrabalho'] = intval($id);
        $array['nomeAmbienteTrabalho'] = $request->nome;
        $array['idOrigem'] = $request->origem;
        $array['usuario'] = 1;
        
        $array['subCodigo'] = $request->subcodigo;
        $array['observacao'] = $request->observacao;
        $array['estabelecimento'] = $request->estabelecimento;
        $array['inscricaoTerceiro'] = $request->terceiro;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        \Log::debug($json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);
        \Log::debug($result);
        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho');
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

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho');
            return $json;
        } else {
            return 'erro';
        }
    }

    public function destroyEpi($id)
    {

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambiente-cadastro-epis/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho');
            return $json;
        } else {
            return 'erro';
        }
    }

    public function buscar($selecionado, $termo)
    {

        if ($selecionado == 'codigo') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/listaPorId/' . $termo);
            return $json;
        } else {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/listaPorAnyNome/' . urlencode($termo));
            return $json;
        }

    }

    public function subcodigo($cnpj)
    {

        $ambientes = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambientesTrabalho/listaPorSubCodigo/' . $cnpj );

        $ambientes = json_decode($ambientes, true);

        // $ambientes = (object) $ambientes;
        
        //  return $ambientes[0];

        $ambs = array();

        if(Session::has('empresa')) {
            foreach($ambientes as $ambiente) {
                $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/funcoes/listaPorIdAmbienteIdEmpresa/");

                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'idEmpresa: ' . Session::get('empresa')->idEmpresa,
                    'idAmbienteTrabalho: ' . $ambiente['idAmbienteTrabalho']
                ));
        
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
                $result = curl_exec($ch);
                
                $ambiente = (object) $ambiente;

                $ambiente->funcoes = [];

                $ambiente->funcoes = json_decode($result);

                array_push($ambs, $ambiente);
            }

            $ambientes = $ambs;
        }

        return $ambientes;
    }

    public function epis($id)
    {

        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdAmbienteTrabalho/' . $id);

        return $json;

    }

    public function novoEpi($id, Request $request)
    {

        $array = $request->epi;
        $array['ambienteTrabalho'] = $request->epi['ambienteTrabalho']['idAmbienteTrabalho'];
        $array['cadastroEpi'] = $request->epi['cadastroEpi']['idCadastroEpi'];
        $array['empresa'] = $id;
        $array['usuario'] = 1;
        $array['dataAtualizacao'] = \Carbon\Carbon::now()->format('Y-m-d');
        $json = json_encode($array);

        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

//   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambiente-cadastro-epis");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        \Log::debug($json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);
        \Log::debug($result);
        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdAmbienteTrabalho/' . $request->epi['ambienteTrabalho']['idAmbienteTrabalho']);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }

    }

    public function novaCapacitacao($id, Request $request)
    {

        \Log::debug($request->all());
        $array = $request->capacitacao;
        $array['ambienteTrabalho'] = $request->capacitacao['ambienteTrabalho']['idAmbienteTrabalho'];
        $array['empresaCapacitacao'] = $request->capacitacao['empresaCapacitacao']['idEmpresaCapacitacao'];
        $array['usuario'] = 1;
        $json = json_encode($array);

        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

//   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambiente-empresa-capacitacoes");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );
        \Log::debug($json);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);
        \Log::debug($result);
        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambiente-empresa-capacitacoes/listaPorIdAmbienteTrabalho/' . $request->capacitacao['ambienteTrabalho']['idAmbienteTrabalho']);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }

    }

    public function capacitacoes($id)
    {

        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/ambiente-empresa-capacitacoes/listaPorIdAmbienteTrabalho/' . $id);

        return $json;

    }
}
