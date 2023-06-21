<?php

namespace App\Http\Controllers;

use App\Models\Playersession;
use Illuminate\Http\Request;

class PlayersessionController extends Controller
{
    public function addPlayer(request $request)
    {
        // return "lllll " . $request->playerName;
        $players = new Playersession();
        $players->playerName = $request->playerName;
        $players->save();
        // return "ok";
    }
    public function show()
    {
        $data = Playersession::all();
        return response()->json($data);
    }


    public function edit($id)
    {
        $data = Playersession::Where('id',$id)->get();
        return response()->json($data);
    }

    public function update(Request $req,$id)
    {
        $data = Playersession::Where('id',$id)->first();
        $data->playerName = $req->name;

       $data->save();
        return response()->json($data);        
    }


    public function delete($id)
    {
        Playersession::where('id', $id)->delete();
        return response()->json();
        // return 'deleted';
    }
}
