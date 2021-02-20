<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EpiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.epi.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis');
        
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

        // $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis/listaPorCodigo/'.$request->codigo);


        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }
        \Log::debug($request->epis);
        $array = [];
        $array['idEpi'] = 0;
        $array['descricao'] = $request->descricao;
        $array['codigoNr6'] = $request->codigo;
        $array['saldo'] = $request->saldo;
        $array['observacao'] = $request->observacao;
        $array['categoriaEpi'] = $request->categoria;
        $array['classe'] = $request->classe;
        $array['unidade'] = $request->unidade;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/epis");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis');
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
    public function categoriasList()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi');
        return $json;
    }


    public function categoriasPost(Request $request)
    {

        $array = [];
        $array['idCategoriaEpi'] = 0;
        $array['nome'] = $request->nome;
        $array['codigoCategoria'] = $request->codigo;
        $array['grupoEpi'] = $request->grupo;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/categorias-epi");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi');
           return $json;
       } else {
        return 'erro';
    }
}

public function categoriasUpdate(Request $request, $id)
{

    $array = [];
    $array['idCategoriaEpi'] = $id;
    $array['nome'] = $request->nome;
    $array['codigoCategoria'] = $request->codigo;
    $array['grupoEpi'] = $request->grupo;
    $array['usuario'] = 1;
    $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/categorias-epi");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi');
           return $json;
       } else {
        return 'erro';
    }
}

public function categoriasDestroy($id)
    {

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/categorias-epi/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

       if ($result['status'] == 'true') {
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi');
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
    public function categorias()
    {
        return view('tabelas.epi.categoria');
    }

     public function grupos()
    {
        return view('tabelas.epi.grupo');
    }


    public function gruposList()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/grupos-epi');
        return $json;
    }


       public function gruposPost(Request $request)
    {

        $array = [];
        $array['idGrupoEpi'] = 0;
        $array['nome'] = $request->nome;
        $array['codigoGrupoEpi'] = $request->codigo;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/grupos-epi");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/grupos-epi');
           return $json;
       } else {
        return 'erro';
    }
}

public function gruposUpdate(Request $request, $id)
{

    $array = [];
    $array['idGrupoEpi'] = $id;
    $array['nome'] = $request->nome;
    $array['codigoGrupoEpi'] = $request->codigo;
    $array['usuario'] = 1;
    $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

        \Log::debug($json);

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/grupos-epi");


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
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/grupos-epi');
           return $json;
       } else {
        return 'erro';
    }
}

public function gruposDestroy($id)
    {

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/grupos-epi/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

       if ($result['status'] == 'true') {
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/grupos-epi');
           return $json;
       } else {
        return 'erro';
    }
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
        $array['idEpi'] = $id;
        $array['descricao'] = $request->descricao;
        $array['codigoNr6'] = $request->codigo;
        $array['saldo'] = $request->saldo;
        $array['observacao'] = $request->observacao;
        $array['categoriaEpi'] = $request->categoria;
        $array['classe'] = $request->classe;
        $array['unidade'] = $request->unidade;
        $array['usuario'] = 1;
        $json = json_encode($array);
     $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
     $json .= '}';

   //   return $json;
     $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/epis");


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
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis');
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

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/epis/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

       if ($result['status'] == 'true') {
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis');
           return $json;
       } else {
        return 'erro';
    }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'id') {
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis/listaPorId/' . $termo);
       return $json;
   } else {
     $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/epis/listaPorAnyDescricao/' . urlencode($termo));
     return json_decode($json);
 }

}

public function buscarCategorias($selecionado, $termo) {

    if($selecionado == 'codigo') {
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi/listaPorId/' . $termo);
       return $json;
   } else {
     $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/categorias-epi/listaPorAnyDescricao/' . urlencode($termo));
     return $json;
 }

}
}
