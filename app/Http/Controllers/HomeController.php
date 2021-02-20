<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('index');

      
    }


    public function logout() {
        Session::forget('usuario');

	    return redirect()->to(url('/login'));
    }

    public function sessao($id, $rota = null) {

        $empresa = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/empresas/' . $id);
        $empresa = json_decode($empresa, true);

        $postos = file_get_contents(env('APP_API') . 'ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/' . $id);

        $postos = json_decode($postos, true);

        $postos = (object) $postos;
        $empresa = (object) $empresa;

        Session::put('empresa', $empresa);
        Session::put('postos', $postos);

        if($rota == 'empresa.show' || $rota == 'empresa') {
            return redirect()->to(route('empresa.show', $id));
        } else if($rota == 'pcmso.editar' || $rota == 'pcmso.ambiente') {
            return redirect()->to(route('pcmso.index'));
        }
        return back();
    }

    public function limparSessao() {
        Session::forget('empresa');
        Session::forget('postos');

        return redirect()->to(url('/empresas'));
    }
}
