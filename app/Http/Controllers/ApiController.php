<?php

namespace App\Http\Controllers;

use App\Products;
use App\RecycleBins;
use App\User;
use App\UserPoints;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    /**
     * Get the user points
     * @param Request $req
     * @return \Illuminate\Http\JsonResponse
     */
    function GetUserPoints () {
        $points = UserPoints::where('user_id', Auth::id())
            ->first();

        return response()->json($points);
    }

    function scanBarcode(Request $req)
    {
        $machine_id = $req->machine_id;
        $barcode = $req->barcode;
        $quantity = $req->quantity;
        $owner = $req->owner;

        try {
            $exists = Products::where('barcode_hash', $req->barcode)
                ->firstOrDefault();

            $machine_exists = RecycleBins::where('trash_uuid', $machine_id)
                ->firstOrDefault();

            $owner = User::where('id', $owner)
                ->firstOrDefault();

            $exists->owner_id = $owner;
            $exists->trash_id = $machine_exists->id;
            $exists->save();

            return response()->json(['success' => true], 200);

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'errors' => $e->getMessage()], 400);
        }
    }
}