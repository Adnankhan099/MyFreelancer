<?php

namespace App\Http\Controllers;
use App\Models\Job;
use App\Models\Proposal;
use Illuminate\Http\Request;
use Auth;
class ProposalController extends Controller
{

    public function store(Request $request){

        if (empty(Auth::user())) {

            return redirect('login')->with('flash',['success'=>true,'type'=>'warning','title'=>'Login to Apply','message'=> 'Kindly login to your account before apply to this job!']);
        } else{
            $job = Job::findOrFail($request->job_id);
            $proposal= new Proposal();
            $proposal->job_id=$request->job_id;
            $proposal->user_id=Auth::id();
            $proposal->price=$request->price;
            $proposal->time=$request->time;
            $proposal->proposal_content=$request->description;
            $proposal->save();

            return redirect(route('job-detail', $job->slug))->with('flash',['success'=>true,'type'=>'success','title'=>'Submitted','message'=> 'Your propsal has been submitted kindly stay tuned for more updates!']);
        }
    }
}
