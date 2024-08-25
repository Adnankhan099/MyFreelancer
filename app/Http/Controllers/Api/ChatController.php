<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use App\Events\MessageSent;

class ChatController extends Controller
{
    public function getConversations()
    {
        $user = auth()->user();
        $conversations = Conversation::where('sender_id', $user->id)
                                     ->orWhere('receiver_id', $user->id)
                                     ->with(['messages', 'sender', 'receiver'])
                                     ->get();
        return response()->json($conversations);
    }

    public function getMessages($id)
    {
        $messages = Message::where('conversation_id', $id)
            ->with([
                'user',
                'custom_offer.by',
                'custom_offer.for',
                'custom_offer.job'
            ])->get();
        return response()->json($messages);
    }

    public function sendMessage(Request $request)
    {
        $messages=Message::where('conversation_id', $request->input('conversation_id'))->get();
        if (!count($messages)) {
            $conversation=Conversation::where('id', $request->input('conversation_id'))->first();

            $conversation->title=substr($request->input('content'), 0, 25);
            $conversation->save();
        }
        $message = new Message();
        $message->conversation_id = $request->input('conversation_id');
        $message->user_id = auth()->id();
        $message->content = $request->input('content');
        $message->save();

         broadcast(new MessageSent($message))->toOthers();

        return response()->json(['status' => 'Message sent!']);
    }

    public function getUser()
    {
        return response()->json(auth()->user());
    }

    public function attachFileToConversation(Request $request){
        $request->validate([
            'conversation_id' => 'required|numeric',
            'file' => 'required'
        ]);
        $conversation = Conversation::findOrFail(intval($request->conversation_id));
        if($request->hasFile('file')){
            $file = $request->file('file');
            $time = time();

            $filename = "attachment_{$time}.{$file->getClientOriginalExtension()}"; // You may adjust the extension according to the mime type
            $path = public_path('uploads/' . $filename);

            move_uploaded_file($file, $path);
            $filepath = 'uploads/' . $filename;
            $message = new Message();
            $message->conversation_id = $conversation->id;
            $message->user_id = auth()->id();
            $message->content = '';
            $message->attachment = $filepath;
            $message->save();
            broadcast(new MessageSent($message));
            return response()->json(['status' => 'Message sent!']);
        }
        return response()->status(400)->json([
            'success' => false,
            'reason' => 'No File Attached'
        ]);
    }
}

