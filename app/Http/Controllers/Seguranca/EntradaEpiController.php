<?php

namespace App\Http\Controllers\Seguranca;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EntradaEpiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($idposto, $id)
    {
        $posto = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/posto-entrega/' . $idposto);
        $posto = json_decode($posto, true);
        $posto = (object) $posto;

        $item = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/estoques/' . $id);
        $item = json_decode($item, true);
        $item = (object) $item;

        
        return view('seguranca.posto.item.index', compact('posto', 'item'));
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
    public function store($idposto, $id, Request $request)
    {
        \Log::debug($request->all());


        $array = $request->entrada;

        // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/entrada-epis/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->entrada['idEntradaEpi'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        \Log::debug($result);

        $result = \json_decode($result, true);

        if($result['status'] == 'true') {
            $array = $request->item;

            // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];
    
            $array['usuario'] = 1;
    
            $array['entradaEpi'] = $result['msg'];
            $json = json_encode($array);
            $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            $json .= '}';
    
            $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/entrada-epi-itens/");
    
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($json))
            );
    
            \Log::debug($json);
            
            if($request->item['idEntradaEpiItens'] == 0) {
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            } else {
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            }
    
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            $result = curl_exec($ch);

            \Log::debug($result);

            return $result;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function estoque($posto, $entrada)
    {
        \Log::debug($entrada);
        $ch = curl_init(env('APP_API') . "/ServicoSIGSSO/rest/entrada-epis/atualizarEstoque");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'usuario: ' . 1,
            'idEntradaEpi: ' . $entrada
        ));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        $result = curl_exec($ch);

        \Log::debug($result);

        return $result;

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
