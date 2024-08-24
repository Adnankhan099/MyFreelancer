<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\CitiesController;
use App\Http\Controllers\UserVerficationController;
use App\Http\Controllers\BillBoardController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\JobCategoryController;
use App\Http\Controllers\WebFreelancerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\Admin\VerificationController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProxyController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProposalController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'categories' => []
    ]);
})->name('/');
Route::get('/categories', [CategoriesController::class, 'Categories'])->name('categories');
Route::get('/category/{slug}', [CategoriesController::class, 'SubCategories'])->name('category');

Route::get('/chat', [ChatController::class, 'index'])->name('chat');

Route::get('/front-view', [WebFreelancerController::class, 'FrontView'])->name('front-view');

Route::get('/billboard/{slug}', [WebFreelancerController::class, 'banners'])->name('banners');
Route::get('/bill-boards', [WebFreelancerController::class, 'allBanners'])->name('all-banners');
Route::get('/bill-board/{id}', [WebFreelancerController::class, 'billBoardDetail'])->name('bill-board');
Route::get('/find-work', [WebFreelancerController::class, 'findWork'])->name('find-work');
Route::get('job-detail/{slug}', [WebFreelancerController::class, 'jobDetail'])->name('job-detail');
Route::get('admin-login', [AuthenticatedSessionController::class, 'adminLogin'])->name('admin-login');

Route::get('proposal/{slug}', [WebFreelancerController::class, 'jobProposal'])->name('proposal');
Route::post('proposal', [ProposalController::class, 'store'])->name('proposal.store');

Route::get('admin-dashboard', [DashboardController::class, 'index'])->name('admin-dashboard');
Route::get('/{id}/public_profile', [ProfileController::class, 'public_profile'])->name('user.public.profile');
Route::middleware(['auth', 'verifiedUser'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/profile-images', [ProfileController::class, 'profileImages'])->name('profile-images');

    Route::post('updatePassword', [ProfileController::class, 'updatePassword'])->name('updatePassword');
    Route::resource('job', JobController::class);
    Route::get('job/proposal/{slug}', [JobController::class, 'jobProposal'])->name('job.proposal');
    Route::get('/category-list', [BillBoardController::class, 'categoryList'])->name('category-list');
    Route::get('/sub-category-list/{id}', [BillBoardController::class, 'subCategories'])->name('sub-category-list');
    Route::post('/update-profile-pic', [ProfileController::class, 'profilePicUpload'])->name('update-profile-pic');
    Route::post('/update-address', [ProfileController::class, 'updateAddress'])->name('update-address');
    Route::post('/verfication', [UserVerficationController::class, 'store'])->name('verfication');
    Route::post('/current-photo', [UserVerficationController::class, 'currentPhoto'])->name('current-photo');
    Route::post('/govt-id', [UserVerficationController::class, 'govId'])->name('govt-id');
    Route::resource('/bill-board', BillBoardController::class);

    Route::post('/{id}/billboard-attach', [BillBoardController::class, 'billBoardAttchs'])->name('billboard-attach');

});

Route::get('/proxy', [ProxyController::class, 'proxy']);


Route::post('/broadcasting/auth', function () {
    return 1;
});


require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/api.php';
require __DIR__ . '/channels.php';
