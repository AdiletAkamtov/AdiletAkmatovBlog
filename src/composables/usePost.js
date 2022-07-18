import {firestore} from "@/firebase/config";
import {addDoc, collection, doc} from "firebase/firestore"
import { ref } from 'vue';

export const usePost = () => {
  const createPost = async(post)  => {
    const error = ref(null);

    try{
      const collectionRef = collection(firestore, 'posts')
      await addDoc(collectionRef, post)

    }
    catch (err) {
      error.value = err.message
    }
  };

  return { createPost }
}