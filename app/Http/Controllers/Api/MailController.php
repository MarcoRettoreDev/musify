<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\MailNotify;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

    public function ManageResponse(Request $r): Response
    {
        $data = $r->all();


        try {
            Mail::to('marcorettoremattes@gmail.com')->send(new MailNotify($data));
            return new Response('successfull', 200);
        } catch (Exception $e) {
            return new Response($e->getMessage(), 503);
        }
    }
}
