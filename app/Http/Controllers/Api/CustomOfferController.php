<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\CustomOffer;
use App\Models\Job;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CustomOfferController extends Controller
{
    public function __construct()
    {
    }
    public function store(Request $request, Conversation $conversation)
    {
        $request->validate([
            'amount' => 'required|gt:0|numeric',
            'duration_in_days' => 'required|gt:0|numeric',
            'title' => 'required',
            'description' => 'required',
            'valid_till' => 'required'
        ]);
        if(isset($conversation->id)){
            $message = new Message();
            $message->conversation_id = $conversation->id;
            $message->user_id = auth()->id();
            $message->content = '';
            $message->save();
            $custom_offer = new CustomOffer();
            $custom_offer->created_by = auth()->id();
            $custom_offer->message_id = $message->id;
            if($custom_offer->sender_id === auth()->id()){
                $custom_offer->created_for = $conversation->receiver_id;
            }else{
                $custom_offer->created_for = $conversation->sender_id;
            }
            $custom_offer->duration_in_days = $request->get('duration_in_days');
            $custom_offer->title = $request->get('title');
            $custom_offer->description = $request->get('description');
            $custom_offer->amount = $request->get('amount');
            $custom_offer->valid_till = $request->get('valid_till');
            $custom_offer->billboard_id = $request->get('billboard_id');
            $custom_offer->payment_type = $request->get('payment_type');
            $custom_offer->save();
            broadcast(new MessageSent($message))->toOthers();

            return response()->json([
                'success' => true,
                'reason' => 'Custom Offer Sent',
            ]);
        }
        return response()->status(404)->json([
            'success' => false,
            'reason' => 'Conversation Not Found',
        ]);
    }

    public function accept(Request $request, CustomOffer $offer){
        $offer->valid_till = Carbon::now()->subtract('1d');
        $job = new Job();
        $job->title = $offer->title;
        $job->slug = generateSlug($offer->title);
        $job->user_id = $offer->created_by;
        $job->job_categories_id = $request->job_categories_id;
        $job->description = $offer->description;
        $job->price = $offer->price;
        $job->min_price = 0;
        $job->assigned_to = $offer->created_for;
        $job->max_price = 20000;
        $job->countries = json_encode([]);
        $job->visible_to = 'Invite Only (on MyFreelancer)';
        $job->date_till = Carbon::now()->add($offer->duration_in_days.'d');
        $job->save();
        $offer->job_id = $job->id;
        $offer->save();

        return response()->json([
            'success' => true,
            'message' => 'Offer Accepted Successfully'
        ]);
    }
    public function decline(Request $request, CustomOffer $offer){
        $offer->valid_till = Carbon::now()->subtract('1d');
        $offer->save();
        return response()->json([
            'success' => true,
            'message' => 'Offer Declined Successfully'
        ]);
    }
}
