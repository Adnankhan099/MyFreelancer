<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Verfication;
use Auth;
use Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

class UserVerificationController extends Controller
{
     public function store(Request $request)
   {

    $verfication=Verfication::where('user_id',Auth::id())->first();
    if(empty($verfication)){
    $verfication= new Verfication();
}
        $input = $request->all();

        $input['user_id']=Auth::id();

    // Update the user's address
    $verfication->fill($input)->save();
   }

   public function currentPhoto(Request $request){
     $verfication=Verfication::where('user_id',Auth::id())->first();
    if(empty($verfication)){
    $verfication= new Verfication();
}

 $request->validate([
            'image' => 'required', // Assuming you have custom validation rule for base64 image
        ]);
 $base64_pattern = '/^data:image\/(png|jpeg|jpg|gif);base64,/i';
 if ($request->has('image') &&  preg_match($base64_pattern, $request->input('image')) === 1) {
    // Get the base64 image data
    $imageData = $request->input('image');

    // Check if image data is not empty
    if (!empty($imageData)) {
        // Extract the mime type and image data
        list($type, $imageData) = explode(';', $imageData);
        list(, $imageData) = explode(',', $imageData);

        // Decode the base64 image data
        $decodedImage = base64_decode($imageData);

        // Generate a unique filename
        $filename = 'gov_image_' . time() . '.png'; // You may adjust the extension according to the mime type

        // Specify the path where you want to save the image
        $path = public_path('uploads/' . $filename);

        // Save the image
        file_put_contents($path, $decodedImage);
        $imagePath = 'uploads/' . $filename;

        // Update user's image path
        $verfication->current_photo = $imagePath;
        $verfication->save();

        // Redirect to profile inde
    }
   }
}

public function govId(Request $request) {

 if ($request->hasFile('govIdFront')) {
            $file = $request->file('govIdFront');
            $originalName = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();

            // Generate a custom name (e.g., using UUID or any custom logic)
            $customName = Str::uuid() . '.' . $extension;

            // Store the file using the custom name
            $path = $file->move(public_path('uploads'), $customName);
$path = 'uploads/' . $customName;
              $verfication=Verfication::where('user_id',Auth::id())->first();
    if(empty($verfication)){
    $verfication= new Verfication();
}
        $verfication->gov_id_front=$path;
        $verfication->gov_id_type=$request->govIdType;
        $verfication->save();

        }


 if ($request->hasFile('govIdBack')) {
            $file = $request->file('govIdBack');
            $originalName = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();

            // Generate a custom name (e.g., using UUID or any custom logic)
            $customName = Str::uuid() . '.' . $extension;

            // Store the file using the custom name
            $path = $file->move(public_path('uploads'), $customName);
$path = 'uploads/' . $customName;
              $verfication=Verfication::where('user_id',Auth::id())->first();
    if(empty($verfication)){
    $verfication= new Verfication();
}
        $verfication->gov_id_back=$path;
         $verfication->gov_id_type=$request->govIdType;

        $verfication->save();

        }


 if ($request->hasFile('addressProof')) {
            $file = $request->file('addressProof');
            $originalName = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();

            // Generate a custom name (e.g., using UUID or any custom logic)
            $customName = Str::uuid() . '.' . $extension;

            // Store the file using the custom name
            $path = $file->move(public_path('uploads'), $customName);
               $path = 'uploads/' . $customName;
              $verfication=Verfication::where('user_id',Auth::id())->first();
    if(empty($verfication)){
    $verfication= new Verfication();
}
        $verfication->address_proof=$path;
         $verfication->adreess_proof_type=$request->addressProofType;

        $verfication->save();

        }


        return Redirect::route('profile.index');
}
}
