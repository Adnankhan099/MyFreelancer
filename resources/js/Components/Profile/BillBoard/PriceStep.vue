

<template>
    <div class="stepper-window-item">
        <div class="card space-y-3 p-4 shadow-md rounded-lg">

            <div class="h-48" v-html="content" ref="editor">
            </div>
                      <div class="mt-4 col-span-3 text-right">
                <button type="button" @click="submitForm"  class="bg-primary text-white px-4 py-2 rounded">Save and continue</button>
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
import { ref, watch, onMounted } from 'vue'
import Quill from 'quill'
import { router } from '@inertiajs/vue3'

const props = defineProps({
  step: Number,
  setBasicInfo: Function,
  nextStep: Function,
  billBoardDraft:{
    type:Object,
  }
});
const editor = ref(null)
const quillInstance = ref(null)

const content=props.billBoardDraft?.pricing_description?props.billBoardDraft?.pricing_description:null


onMounted(() => {
    if (editor.value) {
        quillInstance.value = new Quill(editor.value, {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block'],
                ],
            },
            placeholder: 'Compose an epic...',
            theme: 'snow', // or 'bubble'
        });
    }
});

const submitForm = () => {
    if (quillInstance.value) {
        const pricingDescription = quillInstance.value.root.innerHTML;
        router.post(route('bill-board.store',{billBoardId: props.billBoardDraft.id}), { pricing_description: pricingDescription }, {
            onSuccess: () => props.nextStep(),
        });
    }
};

</script>
