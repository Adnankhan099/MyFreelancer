<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Validator;
use App\Models\Setting\Country;
use App\Models\Verfication;
use Hash;
use App\Models\Profile;
use App\Models\BillBoard;
use Session;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use App\Models\Job;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index(Request $request): Response
    {

        $verfication = Verfication::where('user_id', Auth::id())->first();
        $countries = Country::all();
        $profileFront = Profile::where('user_id', Auth::id())->first();
        $billBoards = BillBoard::where('user_id', Auth::id())->paginate(2);
        $billBoardDraft = BillBoard::where('id', session('billBoardId'))->first();
        $jobs = Job::where('user_id', Auth::id())->get();
        return Inertia::render('Profile/Index', [
            'userDetail' => Auth::user(),
            'countries' => $countries,
            'verfication' => $verfication,
            'jobs' => $jobs,
            'profileFront' => $profileFront,
            'billBoards' => $billBoards,
            'billBoardDraft' => $billBoardDraft,
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'), 'flash' => session('flash'),
        ]);
    }

    public function updatePassword(Request $request)
    {
        if (empty($request->codeInputs)) {
            return back()->with('flash', ['otp_sent' => true]);
        }


        $request->validate([
            'password' => 'required|string',
            'password_confirmation' => 'required|string|same:password|min:6'
        ]);

        $user = User::where('id', Auth::id())->first();

        $user->password = Hash::make($request->password);
        $user->save();

        return back()->with('flash', ['success' => true, 'title' => 'Password Changed', 'message' => 'Password has been updated!']);
    }

    public function update(Request $request)
    {
        $profile = Profile::where('user_id', Auth::id())->first();
        if (empty($profile)) {
            $profile = new Profile();
        }
        $input = $request->all();

        $input['user_id'] = Auth::id();

        // Update the user's address
        $profile->fill($input)->save();
    }

    public function profileImages(Request $request)
    {


        $base64_pattern = '/^data:image\/(\w+);base64,/';
        if ($request->has('headerImage')) {
            $imageData = $request->input('headerImage');

            if (preg_match($base64_pattern, $imageData) === 1) {
                // Handle base64 image
                if (!empty($imageData)) {
                    list($type, $imageData) = explode(';', $imageData);
                    list(, $imageData) = explode(',', $imageData);

                    $decodedImage = base64_decode($imageData);

                    $filename = 'image_' . time() . '.png'; // You may adjust the extension according to the mime type

                    $path = public_path('uploads/' . $filename);

                    file_put_contents($path, $decodedImage);
                    $imagePath = 'uploads/' . $filename;

                    $profile = Profile::where('user_id', Auth::id())->first();
                    if (empty($profile)) {
                        $profile = new Profile();
                    }
                    $profile->header_image = $imagePath;
                    $profile->user_id = Auth::id();
                    $profile->save();
                    return redirect(route('profile.index', [], false));
                }
            } else {
                // Handle image URL
                $imageUrl = $imageData;

                // Get the image content
                $imageContent = Http::get($imageUrl)->body();
                $extension = pathinfo($imageUrl, PATHINFO_EXTENSION);

                if (!$extension) {
                    $extension = 'png'; // Default to png if extension is not found
                }

                $filename = 'image_' . time() . '.' . $extension;
                $path = public_path('uploads/' . $filename);

                // Save the image
                file_put_contents($path, $imageContent);
                $imagePath = 'uploads/' . $filename;

                $profile = Profile::where('user_id', Auth::id())->first();
                if (empty($profile)) {
                    $profile = new Profile();
                }
                $profile->header_image = $imagePath;
                $profile->user_id = Auth::id();
                $profile->save();
                return redirect(route('profile.index', [], false));
            }
        }

        if ($request->has('headerPhoto') && preg_match($base64_pattern, $request->input('headerPhoto')) === 1) {
            $imageData = $request->input('headerPhoto');

            if (!empty($imageData)) {
                list($type, $imageData) = explode(';', $imageData);
                list(, $imageData) = explode(',', $imageData);

                $decodedImage = base64_decode($imageData);

                $filename = 'image_' . time() . '.png'; // You may adjust the extension according to the mime type

                $path = public_path('uploads/' . $filename);

                file_put_contents($path, $decodedImage);
                $imagePath = 'uploads/' . $filename;

                $profile = Profile::where('user_id', Auth::id())->first();
                if (empty($profile)) {
                    $profile = new Profile();
                }
                $profile->header_photo = $imagePath;
                $profile->user_id = Auth::id();
                $profile->save();
                return redirect(route('profile.index', [], false));
            }
        }
    }

    public function updateAddress(Request $request)
    {
        $user = User::find(Auth::id());
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'data' => null,
                'status' => false,
                'response_code' => 404
            ], 404);
        }

        $input = $request->all();

        // Update the user's address
        $user->fill($input)->save();

        // Redirect back to the user's profile using Inertia
        return back();
    }


    public function profilePicUpload(Request $request)
    {
        // Validate the request
        $request->validate([
            'image' => 'required', // Assuming you have custom validation rule for base64 image
        ]);
        $base64_pattern = '/^data:image\/(png|jpeg|jpg|gif);base64,/i';
        if ($request->has('image') && preg_match($base64_pattern, $request->input('image')) === 1) {
            // Get the base64 image data
            $imageData = $request->input('image');

            // Check if image data is not empty
            if (!empty($imageData)) {
                // Extract the mime type and image data
                list($type, $imageData) = explode(';', $imageData);
                list(, $imageData) = explode(',', $imageData);

                // Decode the base64 image data
                $decodedImage = base64_decode($imageData);

                $filename = 'image_' . time() . '.png'; // You may adjust the extension according to the mime type

                $path = public_path('uploads/' . $filename);

                // Save the image
                file_put_contents($path, $decodedImage);
                $imagePath = 'uploads/' . $filename;

                $user = Auth::user();
                $user->image = $imagePath;
                $user->name = $request->screenName;
                $user->save();

                // Redirect to profile index
                return back()->with('flash', ['success' => true, 'title' => 'Profile Changed', 'message' => 'Profile details has been updated!']);
            }

        } else {
            $user = Auth::user();
            $user->name = $request->screenName;
            $user->save();
            return back()->with('flash', ['success' => true, 'title' => 'Profile Changed', 'message' => 'Profile details has been updated!']);
        }

    }

    public function public_profile(Request $request, $id)
    {
        $user = User::with(['profile_detail'])->findOrFail($id);
        return Inertia::render('Profile/details', ['user' => $user]);
    }
}
