<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BillBoard;
use Illuminate\Http\Request;

class BillBoardController extends Controller
{
    public function getUserBillboards(){
        $billboards = BillBoard::where('user_id', auth()->id())->get();

        return response()->json($billboards);
    }
}
