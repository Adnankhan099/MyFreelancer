<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BillBoard;
use App\Models\JobCategory;
use Auth;
use Str;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Session;
use Inertia\Inertia;

class BillBoardController extends Controller
{


    public function store(Request $request)
    {
        $billBoard = null;
        if($request->has('billBoardId')){
            $billBoard = BillBoard::find($request->get('billBoardId'));
        }

        if (!isset($billBoard)) {
            $billBoard = new BillBoard();
        }
        if ($request->has('finish')) {
            Session::put(['billBoardId' => null]);
            return redirect('profile')->with('response', $billBoard);
        }
        if($request->has('additional_details')){
            $request->replace(array_merge($request->all(), [
                'additional_details' => json_encode($request->get('additional_details', [])), // Replaces key1 with new_value1
            ]));
        }
        $input = $request->all();
        $input['user_id'] = Auth::id();
        if ($request->has('tags')) {
            $input['tags'] = json_encode($request->tags);

        }
        // Update the user's address
        $billBoard->fill($input)->save();

        Session::put(['billBoardId' => $billBoard->id]);


        return back()->with('response', $billBoard);

    }

    public function edit(BillBoard $billBoard)
    {
        return Inertia::render('BillBoard/Edit', ['billBoard' => $billBoard]);
    }

    public function categoryList()
    {
        $categories = JobCategory::where('status', 'Active')->where('parent_id', null)->get();

        return json_encode($categories);
    }

    public function subCategories($id)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', $id)->get();

        return json_encode($categories);
    }

    public function billBoardAttchs(Request $request, $id)
    {
        if ($request->file('img1') !== null) {
            $file = $request->file('img1');
        }
        if ($request->file('img2') !== null) {
            $file = $request->file('img2');
        }
        if ($request->file('img3') !== null) {
            $file = $request->file('img3');
        }

        if ($request->file('video') !== null) {
            $file = $request->file('video');
        }
        if ($request->file('doc1') !== null) {
            $file = $request->file('doc1');
        }
        if ($request->file('doc2') !== null) {
            $file = $request->file('doc2');
        }
        if (!empty($file)) {
            $originalName = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();

            // Generate a custom name (e.g., using UUID or any custom logic)
            $customName = Str::uuid() . '.' . $extension;

            // Store the file using the custom name
            $path = $file->move(public_path('uploads'), $customName);
            $path = 'uploads/' . $customName;

        }
        $billBoard = BillBoard::findOrFail($id);
        if ($request->file('img1') !== null) {
            $billBoard->img1 = $path;
            $billBoard->save();
        }
        if ($request->file('img2') !== null) {
            $billBoard->img2 = $path;
            $billBoard->save();
        }
        if ($request->file('img3') !== null) {
            $billBoard->img3 = $path;
            $billBoard->save();
        }
        if ($request->file('video') !== null) {
            $billBoard->video = $path;
            $billBoard->save();
        }
        if ($request->file('doc1') !== null) {
            $billBoard->doc1 = $path;
            $billBoard->save();
        }
        if ($request->file('doc2') !== null) {
            $billBoard->doc2 = $path;
            $billBoard->save();
        }
    }
}
