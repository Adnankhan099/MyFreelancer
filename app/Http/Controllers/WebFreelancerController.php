<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\User;
use Spatie\Permission\Traits\HasRoles;
use Inertia\Inertia;
use App\Models\Profile;
use Auth;
use App\Models\JobCategory;
use App\Models\BillBoard;
use App\Models\Faq;
use App\Models\Tag;
use App\Models\Job;

class WebFreelancerController extends Controller
{


    public function banners($slug)
    {

        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $catDetail = JobCategory::with('child_categories')->where('slug', $slug)->first();
        $billBoards = BillBoard::where('sub_job_categories_id', $catDetail->id)->paginate(10);
        $faqs = Faq::where('job_categories_id', $catDetail->id)->get();
        $tags = Tag::where('job_categories_id', $catDetail->id)->get();
        return Inertia::render('Banner/Banners', ['categories' => $categories, 'catDetail' => $catDetail, 'billBoards' => $billBoards, 'faqs' => $faqs, 'tags' => $tags, 'flash' => session('flash')]);
    }

    public function allBanners(Request $request)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $query = BillBoard::OrderBy('id', 'DESC');

        if ($request->has('search')) {
            $query->where('title', 'LIKE', '%' . $request->search . '%');
        }

        $billBoards = $query->paginate(10);

        return Inertia::render('Banner/AllBanners', ['categories' => $categories, 'billBoards' => $billBoards, 'flash' => session('flash')]);
    }

    public function billBoardDetail($id)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $billBoardDetail = BillBoard::with('user_detail')->where('id', $id)->first();

        $related = BillBoard::OrderBy('id', 'DESC')->limit(8)->get();

        return Inertia::render('Banner/BillboardDetail', ['categories' => $categories, 'billBoardDetail' => $billBoardDetail, 'related' => $related, 'flash' => session('flash')]);
    }

    public function findWork(Request $request)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $query = Job::with('user_detail')->OrderBy('id', 'DESC');

        if ($request->has('search')) {
            $query->where('title', 'LIKE', '%' . $request->search . '%');
        }
        if ($request->has('categories_id')) {
            $query->whereIn('job_categories_id', $request->input('categories_id'));
        }

        $jobs = $query->paginate(10);

        return Inertia::render('Banner/FindWork', ['categories' => $categories, 'jobs' => $jobs, 'filters' => $request->all(), 'flash' => session('flash')]);
    }

    public function jobDetail($slug)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $jobDetail = Job::with('user_detail')->where('slug', $slug)->first();

        return Inertia::render('Banner/JobDetail', ['categories' => $categories, 'jobDetail' => $jobDetail, 'flash' => session('flash')]);
    }

    public function jobProposal($slug)
    {
        $categories = JobCategory::with('child_categories')->where('status', 'Active')->where('parent_id', null)->get();
        $jobDetail = Job::with('user_detail')->where('slug', $slug)->first();

        return Inertia::render('Banner/JobProposal', ['categories' => $categories, 'jobDetail' => $jobDetail, 'flash' => session('flash')]);
    }

    public function frontView()
    {


        $profileFront = Profile::where('user_id', Auth::id())->first();

        return Inertia::render('Freelancer/FrontView', ['profileFront' => $profileFront, 'flash' => session('flash')]);
    }
}
