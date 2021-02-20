<?php

namespace App\Http\Controllers\Seguranca;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostoEntregaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Session::has('empresa')) {
            return view('seguranca.posto.index');
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
        \Log::debug($request->posto);

        $array = $request->posto;

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/posto-entrega/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->posto['idPostoEntrega'] == 0) {
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $posto = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/posto-entrega/' . $id);
        $posto = json_decode($posto, true);
        $posto = (object) $posto;
        return view('seguranca.posto.show', compact('posto'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function postItem($id, Request $request)
    {
        \Log::debug($request->all());

        $array = $request->item;

        $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/estoques/");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        \Log::debug($json);

        if($request->posto['idEstoque'] == 0) {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        } else {
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
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
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/posto-entrega/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);
        
        return $result;
    }

    public function destroyItem($id)
    {
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/estoques/" . $id);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);
        
        return $result;
    }

    public function postItens($posto, Request $request) {
        \Log::debug($request->all());

        $array = $request->entrada;

        $array['fornecedor'] = $array['fornecedor']['idFornecedor'];

        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrada-epis/");

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
            $idEntrada = $result['msg'];
            foreach($request->itens as $item) {
                \Log::debug($item);

                $array = $item;
                if($array['estoque']['idEstoque'] != 0) {
                    $array['estoque'] = $array['estoque']['idEstoque'];
                } else {
                    $array_estoque = $array['estoque'];

                    $array_estoque['gradeEmpresaEpi'] = $array_estoque['gradeEmpresaEpi']['idGradeEmpresaEpi'];
                    $array_estoque['valorUnitario'] = 0;
                    $array_estoque['postoEntrega'] = $array_estoque['postoEntrega']['idPostoEntrega'];
                    $array_estoque['usuario'] = 1;
            
                    $json = json_encode($array_estoque);
                    $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
                    $json .= '}';
            
                    $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/estoques/");
            
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            
                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                        'Content-Type: application/json',
                        'Content-Length: ' . strlen($json))
                    );
            
                    \Log::debug($json);
            
                  
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                   
            
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
                    $result = curl_exec($ch);
                    
                    \Log::debug('resultado do estoque!');
                    \Log::debug($result);
                     $resultado = \json_decode($result, true);

                     $array['estoque'] = $resultado['msg'];
                }
                
                $array['entradaEpi'] = $idEntrada;

            // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];
    
            $array['usuario'] = 1;
    
            
            $json = json_encode($array);
            $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            $json .= '}';
    
            $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrada-epi-itens/");
    
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

            // return $result;
            }


            // $array = $request->item;

            // // $array['gradeEmpresaEpi'] = $array['gradeEmpresaEpi']['idGradeEmpresaEpi'];
    
            // $array['usuario'] = 1;
    
            // $array['entradaEpi'] = $result['msg'];
            // $json = json_encode($array);
            // $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
            // $json .= '}';
    
            // $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/entrada-epi-itens/");
    
            // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
            // curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            //     'Content-Type: application/json',
            //     'Content-Length: ' . strlen($json))
            // );
    
            // \Log::debug($json);
            
            // if($request->item['idEntradaEpiItens'] == 0) {
            //     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
            // } else {
            //     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            // }
    
            // curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            // $result = curl_exec($ch);

            // \Log::debug($result);

            // return $result;
        }
    }

}
