"use server";

import { db } from "../server/db";
import {
  doc,
  deleteDoc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
} from "firebase/firestore";

export async function requestToCollaborate(projectId: string, email: string) {
  //TODO: validate email and projectId
  const projectRef = doc(db, "projects", projectId);
  const projectSnap = await getDoc(projectRef);

  if (projectSnap.exists()) {
    const projectData = projectSnap.data();

    if (projectData.collaborate_requests) {
      await updateDoc(projectRef, {
        collaborate_requests: arrayUnion(email),
      });
    } else {
      await updateDoc(projectRef, {
        collaborate_requests: [email],
      });
    }
    return { success: true };
  } else {
    throw new Error("Project not found");
  }
}

export async function getCollaborationRequests(ownerEmail: string) {
  try {
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, where("email", "==", ownerEmail));
    const snapshot = await getDocs(q);

    const collaborationRequests = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter(
        (project: { id: string; collaborate_requests?: any[] }) =>
          project.collaborate_requests &&
          project.collaborate_requests.length > 0
      );

    return { ok: true, collaborationRequests };
  } catch (error) {
    console.error("Error fetching collaboration requests:", error);
    return { ok: false, collaborationRequests: [] };
  }
}
