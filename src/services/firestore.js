import { firestore } from "./fireConfig";

//get all guitars data from firebase
export const getData = firestore.collection("guitars").get();
