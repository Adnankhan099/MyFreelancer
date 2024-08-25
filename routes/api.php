<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ChatController;
use \App\Http\Controllers\Api\CustomOfferController;
use \App\Http\Controllers\Api\BillBoardController;
Route::prefix('api')->group(function () {
    Route::get('/conversations', [ChatController::class, 'getConversations']);
    Route::get('/conversations/{id}/messages', [ChatController::class, 'getMessages']);
    Route::post('/messages', [ChatController::class, 'sendMessage']);
    Route::post('/files', [ChatController::class, 'attachFileToConversation']);
    Route::get('/user', [ChatController::class, 'getUser']);
    Route::post('/{conversation}/send-custom-offer', [CustomOfferController::class, 'store'])->name('api.custom_offer.store');
    Route::post('/{offer}/accept-custom-offer', [CustomOfferController::class, 'accept'])->name('api.custom_offer.accept');
    Route::post('/{offer}/decline-custom-offer', [CustomOfferController::class, 'decline'])->name('api.custom_offer.decline');
    Route::middleware('auth')->get('/get-user-billboards', [BillBoardController::class, 'getUserBillboards'])->name('api.user.billboards');
});
