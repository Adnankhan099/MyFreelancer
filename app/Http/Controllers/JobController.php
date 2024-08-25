<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Validator;
use App\Models\Job;
use App\Models\Setting\Country;
use Auth;
use App\Models\Proposal;

class JobController extends Controller
{

    public function create()
    {
        $countries = Country::all();
        return Inertia::render('Job/Create', ['countries' => $countries]);
    }

    public function edit($id)
    {
        $countries = Country::all();
        $job = Job::where('id', $id)->first();
        return Inertia::render('Job/Edit', ['countries' => $countries, 'job' => $job]);
    }

    public function store(Request $request)
    {


        $pArray = explode('-', $request->price);

        //   return json_encode($pArray);

        $job = new Job();
        $job->title = $request->title;
        $job->slug = generateSlug($request->title);
        $job->user_id = Auth::id();
        $job->job_categories_id = $request->job_categories_id;
        $job->description = $request->description;
        $job->price = $request->price;
        $job->min_price = isset($pArray[0]) ? (float)$pArray[0] : 0;
        $job->max_price = isset($pArray[1]) ? (float)$pArray[1] : 0;
        $job->countries = json_encode($request->countries);
        $job->visible_to = $request->visible_to;
        $job->date_till = date('Y-m-d', strtotime($request->date_till));
        $job->save();

        return redirect(route('profile.index', [], false))->with('flash', ['success' => true, 'type' => 'error', 'title' => 'Added', 'message' => 'Requested job has been added!']);
    }

    public function destroy($id)
    {

        $job = Job::where('id', $id)->first();
        $job->delete();
        return back()->with('flash', ['success' => true, 'type' => 'error', 'title' => 'Deleted', 'message' => 'Requested job has been deleted!']);
    }

    public function update(Request $request, $id)
    {


        $pArray = explode('-', $request->price);

        //   return json_encode($pArray);

        $job = Job::where('id', $id)->first();
        $job->title = $request->title;
        $job->slug = generateSlug($request->title);
        $job->user_id = Auth::id();
        $job->job_categories_id = $request->job_categories_id;
        $job->description = $request->description;
        $job->price = $request->price;
        $job->min_price = isset($pArray[0]) ? (float)$pArray[0] : 0;
        $job->max_price = isset($pArray[1]) ? (float)$pArray[1] : 0;
        $job->countries = json_encode($request->countries);
        $job->visible_to = $request->visible_to;
        $job->date_till = date('Y-m-d', strtotime($request->date_till));
        $job->save();

        return redirect(route('profile.index', [], false))->with('flash', ['success' => true, 'type' => 'error', 'title' => 'Updated', 'message' => 'Job job has been updated!']);;
    }

    public function jobProposal($slug)
    {

        return Inertia::render('Job/JobProposal');
    }
}
