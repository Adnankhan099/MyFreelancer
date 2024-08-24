<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\VerifyMobileController;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});
Route::middleware(['auth'])->group(function () {
    Route::get('step2', [RegisteredUserController::class, 'step2'])
        ->name('step2');

    Route::post('step2', [RegisteredUserController::class, 'storeStep2']);

});


Route::middleware(['auth', 'RoleVerify'])->group(function () {


    Route::get('verify-mobile', [VerifyMobileController::class, 'create'])
        ->name('verify-mobile');

    Route::post('verify-mobile', [VerifyMobileController::class, 'verifyMobile']);


    Route::post('change-email', [RegisteredUserController::class, 'changeEmail'])->name('change-email');
    Route::post('resend-email-otp', [RegisteredUserController::class, 'resendEmailOtp'])->name('resend-email-otp');

    Route::post('send-code', [VerifyMobileController::class, 'sencCode'])
        ->name('send-code');

    Route::post('verify-email-code', [RegisteredUserController::class, 'VerfiyEmailCode'])
        ->name('verify-email-code');
    Route::post('email-code', [RegisteredUserController::class, 'emailCode'])
        ->name('email-code');
    Route::get('verify-email', [RegisteredUserController::class, 'step3'])
        ->name('verification.notice');

    Route::post('step3', [RegisteredUserController::class, 'storeStep3'])->name('step3');


    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
