<?php

namespace App\Http\Controllers\Seguranca;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;


class EntregaEpiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Session::has('empresa')) {

            $postos = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/' . \Session::get('empresa')->idEmpresa);

            $postos = json_decode($postos, true);
            if (count($postos) == 1) {
                return redirect()->to(url('posto-entrega/' . $postos[0]['idPostoEntrega']) . '?acao=entrega');
            } else if (count($postos) > 1) {
                return redirect()->to(route('posto-entrega', ['acao' => 'entrega']));
            } else {
                return redirect()->to(route('posto-entrega'));
            }
        } else {
            return redirect()->to(route('empresa'));
        }
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

        $array = $request->entrega;

        // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];

        $array['usuario'] = 1;

        $array['empresaFuncionario'] = $array['empresaFuncionario']['idEmpresaFuncionario'];

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epis/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        // \Log::debug($json);

        if ($request->entrada['idEntregaEpi'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        $result = \json_decode($result, true);

        if ($result['status'] == 'true') {
            // if(1==1){

            $idEntrega = $result['msg'];
            // $idEntrega = 2057;
            foreach ($request->entregaitens as $item) {
                \Log::debug($item);

                $array = $item;
                $array['estoque'] = $array['estoque']['idEstoque'];

                $array['entregaEpi'] = $idEntrega;

                // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];

                $array['usuario'] = 1;

                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
                $json .= '}';

                $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epi-itens/");

                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

                curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($json))
                );

                \Log::debug($json);

                if ($request->item['idEntregaEpiItens'] == 0) {
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                } else {
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                }

                curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
                $result = curl_exec($ch);

                \Log::debug($result);

            }

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function assinar(Request $request)
    {
        \Log::debug(Carbon::now()->format('Y-m-d'));

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epis/assinarEntrega");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array( 
            'usuario: ' . 1,
            'idEntregaEpi: ' . $request->entrega['idEntregaEpi'],
            'dataAssinatura: ' . Carbon::now()->format('Y-m-d')
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        $result = curl_exec($ch);

        \Log::debug($result);

        return Carbon::now()->format('Y-m-d');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function removerItem($id)
    {

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epi-itens/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);

        return $result;
    }


    public function remover($id)
    {

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epis/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        \Log::debug($result);
        
        return $result;
    }

    public function validade(Request $request) {
        \Log::debug($request->all());



        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/ambiente-cadastro-epis/buscaAmbienteCadastroEpi");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array( 
            'idAmbienteTrabalho: ' . $request->idAmbienteTrabalho,
            'idEmpresa: ' . $request->idEmpresa,
            'idCadastroEpi: ' . $request->idCadastroEpi
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $result = curl_exec($ch);

        return $result;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function historico(Request $request)
    {
        \Log::debug($request->all());

        $array = $request->dados;
        
        $array['idEntregaEpiItensHistorico'] = 0;
        $array['entregaEpiItens'] = $array['entregaEpiItens']['idEntregaEpiItens'];

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrega-epi-itens-historico/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->prontuarioNecessidade['idEntregaEpiItensHistorico'] == 0) {
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
