

<template>
    <div class="stepper-window-item">
        <div class="card space-y-3 p-4 shadow-md rounded-lg">
            <h3 class="font-bold text-xl">Showcase Your Services In A Billboard Gallery</h3>
            <p>Encourage buyers to choose your Billboard by featuring a variety of your work.</p>
            <div class="flex gap-x-2 p-2 bg-slate-100 border">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                </svg>
                <p>To comply with MyFreelancer's terms of service, make sure to upload only content you either own or you have the permission or license to use.</p>
            </div>
            <div class="font-bold border-b border-solid">Billboard Image Guideline</div>
            <div class="py-6 space-y-3">
                <div>
                    <h3 class="font-bold">Images (up to 3)</h3>
                    <p>Get noticed by the right buyers with visual examples of your services.</p>
                </div>

                <div class="pt-4 pb-10 grid gap-6 grid-cols-3 border-b border-solid">
                    <div class="border">
                        <label id="file-images-1" class="cursor-pointer">
                            <img class="w-full h-[200px] object-fill" :src="image1" v-if="image1">
                            <div v-else class="flex items-center justify-center h-[200px]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                </svg>
                            </div>
                            <input @change="(e) => onFileChange(e, 1)" id="file-images-1" type="file" accept="image/png, image/gif, image/jpeg" class="hidden" />
                        </label>
                    </div>

                    <div class="border">
                        <label id="file-images-2" class="cursor-pointer">
                            <img class="w-full h-[200px] object-fill" :src="image2" v-if="image2">
                            <div v-else class="flex items-center justify-center h-[200px]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                </svg>
                            </div>
                            <input @change="(e) => onFileChange(e, 2)" id="file-images-2" type="file" accept="image/png, image/gif, image/jpeg" class="hidden" />
                        </label>
                    </div>

                    <div class="border">
                        <label id="file-images-3" class="cursor-pointer">
                            <img class="w-full h-[200px] object-fill" :src="image3" v-if="image3">
                            <div v-else class="flex items-center justify-center h-[200px]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                </svg>
                            </div>
                            <input @change="(e) => onFileChange(e, 3)" id="file-images-3" type="file" accept="image/png, image/gif, image/jpeg" class="hidden" />
                        </label>
                    </div>
                </div>
                <div class="py-4 space-y-3">
                    <div>
                        <h3 class="font-bold">Video (one only)</h3>
                        <p>Capture buyers' attention with a video that showcases your service. <br /> Please choose a video shorter than 75 seconds and smaller than 50MB</p>
                    </div>
                    <div class="pt-4 pb-10 grid gap-6 grid-cols-3 border-b border-solid">
                        <div class="border">
                            <label id="file-video-1" class="cursor-pointer">
                                <video muted class="w-full h-[200px] object-fill" :src="videoSrc" v-if="videoSrc">
                                    Video stream not available.
                                </video>

                                <div v-else class="flex flex-col gap-2 items-center justify-center h-[200px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                    </svg>
                                    <span class="font-bold text-blue-900">Browse</span>
                                </div>
                                <input @change="putVideo" id="file-video-1" type="file" accept="video/*" class="hidden" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="py-4 space-y-3">
                    <div>
                        <h3 class="font-bold">Documents (up to 2)</h3>
                        <p>Capture buyers' attention with documents that showcase your service.</p>
                    </div>
                    <div class="pt-4 pb-10 grid gap-6 grid-cols-3 border-b border-solid">
                        <div class="border">
                            <label id="file-pdf-1" class="cursor-pointer">
                                <object :data="pdf1" type="application/pdf" class="w-full" v-if="pdf1" height="200">
                                    <p>It appears you don't have a PDF plugin for this browser. No problem, you can <a href="path/to/your/document.pdf">click here to download the PDF file.</a></p>
                                </object>
                                <div v-else class="flex flex-col gap-2 items-center justify-center h-[200px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                    </svg>
                                    <span class="font-bold text-blue-900">Browse</span>
                                </div>
                                <input @change="(e) => putPdf(e, 1)" id="file-pdf-1"  accept=".pdf, .png, .jpg, .jpeg"  type="file" class="hidden" />
                            </label>
                        </div>

                        <div class="border">
                            <label id="file-pdf-2" class="cursor-pointer">
                                <object :data="pdf2" type="application/pdf" class="w-full" v-if="pdf2" height="200">
                                    <p>It appears you don't have a PDF plugin for this browser. No problem, you can <a href="path/to/your/document.pdf">click here to download the PDF file.</a></p>
                                </object>
                                <div v-else class="flex flex-col gap-2 items-center justify-center h-[200px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9h.01M12 12h.01M12 6h.01M12 3h.01" />
                                    </svg>
                                    <span class="font-bold text-blue-900">Browse</span>
                                </div>
                                <input @change="(e) => putPdf(e, 2)" id="file-pdf-2" accept=".pdf, .png, .jpg, .jpeg" type="file" class="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
}
.card-item {
  padding: 1rem;
}
</style>


<script setup>
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import {route} from "ziggy-js";
const  baseUrl=window.Laravel.baseUrl


const props = defineProps({
  billBoardDraft:{
    type:Object,
  }
});


const image1 = props.billBoardDraft?.img1? baseUrl+props.billBoardDraft?.img1:ref(null)
const image2 =  props.billBoardDraft?.img2? baseUrl+props.billBoardDraft?.img2:ref(null)
const image3 =  props.billBoardDraft?.img3? baseUrl+props.billBoardDraft?.img3:ref(null)
const videoSrc =  props.billBoardDraft?.video? baseUrl+props.billBoardDraft?.video:ref(null)

const pdf1 = props.billBoardDraft?.doc1? baseUrl+props.billBoardDraft?.doc1:ref(null)
const pdf2 =  props.billBoardDraft?.doc2? baseUrl+props.billBoardDraft?.doc2:ref(null)

function onFileChange(e, i) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;

    if (i === 1){
        createImage(files[0], image1);
     router.post(route('billboard-attach', props.billBoardDraft.id), { img1: files[0]}, {
            onSuccess: () => console.log(1),
        })
 }
    else if (i === 2){
        createImage(files[0], image2);
         router.post(route('billboard-attach', props.billBoardDraft.id), { img2: files[0]}, {
            onSuccess: () => console.log(1),
        })
    }
    else if (i === 3){
        createImage(files[0], image3);
         router.post(route('billboard-attach', props.billBoardDraft.id), { img3: files[0]}, {
            onSuccess: () => console.log(1),
        })
    }

}

function createImage(file, images) {
    var image = new Image();
    var reader = new FileReader();

    reader.onload = (e) => {
        image = e.target.result;
        images.value = image
    };
    reader.readAsDataURL(file);
}

function putVideo(e) {

    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return

    videoSrc.value = URL.createObjectURL(files[0])

     router.post(route('billboard-attach'), { video: files[0]}, {
            onSuccess: () => console.log(1),
        })
}

function putPdf(e, i) {

    var files = e.target.files || e.dataTransfer.files;
    console.log(URL.createObjectURL(files[0]))
    if (!files.length)
        return

    if (i === 1){
        pdf1.value = URL.createObjectURL(files[0])
         router.post(route('billboard-attach'), { doc1: files[0]}, {
            onSuccess: () => console.log(1),
        })
    }
    else{
        pdf2.value = URL.createObjectURL(files[0])
         router.post(route('billboard-attach'), { doc2: files[0]}, {
            onSuccess: () => console.log(1),
        })
    }
}

</script>
