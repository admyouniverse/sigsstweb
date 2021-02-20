<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;
use Illuminate\Support\Facades\Session;


class EmpresasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Session::has('empresa')) {
            return redirect()->to(route('empresa.show', Session::get('empresa')->idEmpresa));
        }
        
        return view('empresas.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    function list() {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresas');
        return $json;
    }

    public function create()
    {
        return view('empresas.create');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $array = $request->empresa;
        \Log::debug($array);

        $array['idEmpresa'] = 0;
        $array['cnae'] = array_column($request->empresa['cnaes'], 'idCnae');
        $array['urlImagem'] = $request->imagem;
        $array['inscricao'] = preg_replace("/[^0-9]/", "", $request->empresa['inscricao']);
        $array['cep'] = preg_replace("/[^0-9]/", "", $request->empresa['cep']);
        if ($request->empresa['cidade'] != []) {
            $array['cidade'] = $request->empresa['cidade']['idCidade'];
        }

        $array['usuario'] = 1;
        $array['nomeFan'] = $request->empresa['nomeFantasia'];

        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresas");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            \Log::debug($result);
            return $result['msg'];
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    public function novoContrato($id, Request $request)
    {

        $array['idEmpresaContrato'] = 0;
        $array['empresa'] = $id;
        $array['empresaContratante'] = $request->contratante;
        $array['dataIni'] = $request->dataIni;
        $array['dataFim'] = $request->dataFim;
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            \Log::debug($result);
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresa/' . $id);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    public function atualizarContrato($id, Request $request)
    {

        $array['idEmpresaContrato'] = $request->contrato;
        $array['empresa'] = $id;
        $array['empresaContratante'] = $request->contratante;
        $array['dataIni'] = $request->dataIni;
        $array['dataFim'] = $request->dataFim;
        $array['usuario'] = 1;

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos");

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
            \Log::debug($result);
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresa/' . $id);
            return $json;
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    public function removerContrato($id, $contrato)
    {

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/" . $contrato);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        if ($result['status'] == 'true') {
            $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresa/' . $id);
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
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresas/' . $id);
        $empresa = json_decode($empresa, true);

        $empresa = (object) $empresa;
        
        Session::put('empresa', $empresa);

        return view('empresas.show', compact('empresa'));
    }

    public function historico($id)
    {
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasHistoricos/listaPorIdEmpresa/' . $id);

        return $empresa;
    }
    public function funcionarios($id)
    {
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresaTempoServicoAtivo/' . $id);
        return $empresa;
    }

    public function contratos($id)
    {
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresa/' . $id);
        return $empresa;
    }


    public function contratados($id)
    { 
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasContratos/listaPorIdEmpresaContratante/' . $id);
        return $empresa;
    }


    public function epis($id)
    {
        $empresa = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasEpis/listaPorIdEmpresa/' . $id);
        return $empresa;
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

        $array = $request->empresa;
        \Log::debug($array);

        $array['cnae'] = array_column($request->empresa['cnaes'], 'idCnae');
        $array['urlImagem'] = $request->imagem;
        $array['inscricao'] = preg_replace("/[^0-9]/", "", $request->empresa['inscricao']);
        $array['cep'] = preg_replace("/[^0-9]/", "", $request->empresa['cep']);
        $array['cidade'] = $request->empresa['cidade']['idCidade'];
        $array['usuario'] = 1;
        $array['nomeFan'] = $request->empresa['nomeFantasia'];

        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresas");

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

            return response(200);
        } else {
            \Log::debug($result);
            return 'erro';
        }
    }

    public function alteraHistorico(Request $request)
    {
        if($request->tipo == 'desativar') {
            $array['dataFim'] = $request->dataFinal;
        } else {
            $array['dataFim'] = "";
        }
        $array = $request->empresa;
        \Log::debug($array);

        $array['cnae'] = array_column($request->empresa['cnaes'], 'idCnae');
        $array['urlImagem'] = $request->imagem;
        $array['inscricao'] = preg_replace("/[^0-9]/", "", $request->empresa['inscricao']);
        $array['cep'] = preg_replace("/[^0-9]/", "", $request->empresa['cep']);
        $array['cidade'] = $request->empresa['cidade']['idCidade'];
        $array['usuario'] = 1;
        $array['nomeFan'] = $request->empresa['nomeFantasia'];
        

        \Log::debug($array);

        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
        $json .= '}';

        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresas");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($json))
        );

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);

        $result = json_decode($result, true);

        curl_close($ch);

        if ($result['status'] == 'true') {
            $historico = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasHistoricos/listaPorIdEmpresa/' . $request->empresa['idEmpresa']);
          
            if($request->tipo == 'desativar') {
                $arr = json_decode($historico);
                $ultimo = end($arr);
                \Log::debug($ultimo->idEmpresaHistorico);
                
                $array = [];

                $array['usuario'] = 1;
                $array['empresa'] = $ultimo->empresa->idEmpresa;
                $array['dataIni'] = $ultimo->dataIni;
                $array['dataFim'] = $request->dataFinal;
                $array['idEmpresaHistorico'] = $ultimo->idEmpresaHistorico;

                \Log::debug($array);

                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma.
                $json .= '}';

                $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/empresasHistoricos/");

                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
                curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($json))
                );
        
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
                $result = curl_exec($ch);
                
                \Log::debug($result);

                $result = json_decode($result, true);
                if ($result['status'] == 'true') {
                    $historico = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresasHistoricos/listaPorIdEmpresa/' . $request->empresa['idEmpresa']);
                    return $historico;
                }

            } else {

                return $historico;
            }

            
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
        //
    }

    public function imagem(Request $request)
    {

        $image = $request->get('image'); // image base64 encoded

        $image = preg_replace('/data:image\/(.*?);base64,/', '', $image); // remove the type part
        $image = str_replace(' ', '+', $image);
        $imageName = 'logomarca/image_' . time() . '.' . 'png'; //generating unique file name;
        Storage::disk('public')->put($imageName, base64_decode($image));

        $srcdir = storage_path() . "/app/public/";

        $headers = array('Authorization: Client-ID b6ba4c99b50851b');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.imgur.com/3/upload');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $array = array(
            'type' => 'base64',
            'image' => $image,
        );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $array);

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        return $result['data']['link'];

        // $thumbnail = $request->file('imagem')->hashName('logomarca');
        // Storage::disk('public')->put($thumbnail, (string) Image::make($request->file('imagem'))->fit(250, 250)->encode());

        // $user = Auth::user()->update(['imagem' => $imageName]);
        // $user = Auth::user();

        // return $user;
    }

    public function filiais($cnpj)
    {
        $json = file_get_contents('http://200.98.201.236/ServicoSIGSSO/rest/empresas/listaFilial/' . $cnpj);
        return $json;
    }
}
