<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RiscoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tabelas.riscos.risco');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos');
        // $json = json_decode($json, true);
        // $last = end($json);

        // return $last['idRisco'];

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

        // $verifica = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos/listaPorCodigo/'.$request->codigo);


        // if($verifica != '[]') {
        //     \Log::debug($verifica);
        //     return 'existente';
        // }



        $array = [];
        $array['idRisco'] = 0;
        $array['descricaoRisco'] = $request->descricao;
        $array['nomeRisco'] = $request->nome;
        $array['epis'] = array_column($request->epis, 'idEpi');
        $array['exames'] = array_column($request->epis, 'idExame');;
        $array['grupoRisco'] = $request->grupo;
        $array['meioPropagacao'] = $request->meio;
        $array['danoSaude'] = $request->dano;
        $array['observacao'] = $request->observacao;
        $array['enquadramento'] = $request->enquadramento;
        $array['numero'] = $request->numero;
        $array['anexo'] = $request->anexo;
        $array['limiteTolerancia'] = $request->limite;
        $array['nivelAcao'] = $request->nivel;
        $array['unidadeMedida'] = $request->unidade['idUnidadeMedida'];
        $array['insalubridade'] = $request->insalubridade;
        $array['periculosidade'] = $request->periculosidade;
        $array['complemento'] = $request->complemento;
        $array['atividadeEspecial'] = $request->atividadeEspecial;
        $array['linac'] = $request->linac;
        $array['cas'] = $request->cas;
        $array['aposentadoriaEspecial'] = $request->aposentadoria;
        $array['tabela23'] = $request->tabela23;
        $array['usuario'] = 1;
        $json = json_encode($array);
        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
        $json .= '}';

   //   return $json;
        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos");

        \Log::debug($request->all());
        \Log::debug($json);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($json))                                                                       
    );

        curl_setopt($ch, CURLOPT_POSTFIELDS, $json ); 

        curl_setopt($ch, CURLOPT_POSTFIELDS,$json);

        $result = curl_exec($ch);

        $result = json_decode($result, true);

        curl_close($ch);
        // \Log::debug($json);
        if ($result['status'] == 'true') {
            \Log::debug($result);

            $riscos = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos');

            $this->insereExames($request->exames, $result['msg']);

            return $riscos;
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

    public function insereExames($exames, $id) {
        foreach($exames as $exame) {

                $array = [];
                $array['idRiscoExame'] = 0;
                $array['exame'] = $exame['exame']['idExame'];
                $array['risco'] = $id;
                $array['enquadramento'] = $exame['enquadramento'] != '' ? $exame['enquadramento'] : 'SELECIONE';
                $array['interpretacao'] = $exame['interpretacao'];
                $array['ibpm'] = $exame['ibpm'];
                $array['usuario'] = 1;

                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
                $json .= '}';

                \Log::debug($json);

                $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos-exames");

                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

                curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                    'Content-Type: application/json',                                                                                
                    'Content-Length: ' . strlen($json))                                                                       
            );

                curl_setopt($ch, CURLOPT_POSTFIELDS, $json); 

                curl_setopt($ch, CURLOPT_POSTFIELDS,$json);

                $result = curl_exec($ch);

                $result = json_decode($result, true);
            }
    }

        public function insereUnidades($unidades, $id) {
        foreach($unidades as $unidade) {

                $array = [];
                $array['idRiscoUnidadeMedida'] = 0;
                $array['unidadeMedida'] = $unidade['unidadeMedida']['idUnidadeMedida'];
                $array['risco'] = $id;
                $array['nivelAcao'] = $unidade['nivelAcao'];
                $array['limiteTolerancia'] = $unidade['limiteTolerancia'];
                $array['usuario'] = 1;

                $json = json_encode($array);
                $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 
                $json .= '}';

                \Log::debug($json);

                $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos-unidades-medida");

                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

                curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
                    'Content-Type: application/json',                                                                                
                    'Content-Length: ' . strlen($json))                                                                       
            );

                curl_setopt($ch, CURLOPT_POSTFIELDS, $json); 

                curl_setopt($ch, CURLOPT_POSTFIELDS,$json);

                $result = curl_exec($ch);

                $result = json_decode($result, true);
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
        $array['idRisco'] = $id;
        $array['descricaoRisco'] = $request->descricao;
        $array['nomeRisco'] = $request->nome;
        $array['grupoRisco'] = $request->grupo;
        $array['epis'] = [];
        $array['exames'] = [];
        $array['meioPropagacao'] = $request->meio;
        $array['danoSaude'] = $request->dano;
        $array['observacao'] = $request->observacao;
        $array['enquadramento'] = $request->enquadramento;
        $array['numero'] = $request->numero;
        $array['anexo'] = $request->anexo;
        $array['insalubridade'] = $request->insalubridade;
        $array['periculosidade'] = $request->periculosidade;
        $array['linac'] = $request->linac;
        $array['aposentadoriaEspecial'] = $request->aposentadoria;
        $array['cas'] = $request->cas;
        $array['tabela23'] = $request->tabela23;
        $array['atividadeEspecial'] = $request->atividadeEspecial;
        $array['complemento'] = $request->complemento;
        $array['epis'] = array_column($request->epis, 'idEpi');
        $array['usuario'] = 1;

        $json = json_encode($array);

        $json = substr($json, 0, -1); // Substring -1 character from the end of the json variable, this will be the trailing comma. 

        $json .= '}';


        \Log::debug($json);

        $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos");

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

            $exames = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-exames/listaPorIdRisco/' . $id);

            $unidades = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-unidades-medida/listaPorIdRisco/' . $id);

            foreach(json_decode($unidades, true) as $unidade) {
                $this->destroyUnidade($unidade['idRiscoUnidadeMedida']);  
            }

              foreach(json_decode($exames, true) as $exame) {
                $this->destroyExame($exame['idRiscoExame']);  
            }


            $this->insereExames($request->exames, $id); 
            $this->insereUnidades($request->unidades, $id); 
           
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos');
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

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

       if ($result['status'] == 'true') {
           $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos');
           return $json;
       } else {
        return 'erro';
    }
}


public function destroyExame($id)
    {

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos-exames/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

    //    if ($result['status'] == 'true') {
    //        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest-exames/riscos');
    //        return $json;
    //    } else {
    //     return 'erro';
    // }
}

public function destroyUnidade($id)
    {

       $ch = curl_init("http://200.98.201.236/ServicoSIGSSO/rest/riscos-unidades-medida/" . $id);


       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

       curl_setopt($ch, CURLOPT_HTTPHEADER, array('usuario: 1'));

       curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');

       $result = curl_exec($ch);

       $result = json_decode($result, true);

    //    if ($result['status'] == 'true') {
    //        $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest-exames/riscos');
    //        return $json;
    //    } else {
    //     return 'erro';
    // }
}

public function buscar($selecionado, $termo) {

    if($selecionado == 'codigo') {
       $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos/listaPorId/' . $termo);
       return $json;
   } else {
     $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos/listaPorAnyNome/' . urlencode($termo));
     return $json;
 }

}


public function exames($id) {
 $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-exames/listaPorIdRisco/' . $id);
 return $json;
}

public function unidades($id) {
 $json = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/riscos-unidades-medida/listaPorIdRisco/' . $id);
 return $json;
}
}
