'use server';

import { db } from '../server/db';
import {
  addDoc,
  doc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function getAllProjects() {
  try {
    const projectsRef = collection(db, 'projects');
    const snapshot = await getDocs(projectsRef);
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];

    return { ok: true, projects: projects };
  } catch (error) {
    console.error('projects/getAllProjects:', error);
    return { ok: false, projects: [] };
  }
}

export async function getAllProjectsByEmail(email: string) {
  try {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, where('email', '==', email));
    const snapshot = await getDocs(q);
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];

    return { ok: true, projects: projects };
  } catch (error) {
    console.error('projects/getAllProjectsByEmail:', error);
    return { ok: false, projects: [] };
  }
}



export async function createNewProject(user: { name: string; email: string }, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const author = user.name ? user.name.split(' ')[0] : user.email.split('@')[0];
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const masterplan = formData.get('masterplan') as string;
    const interests = formData.getAll('interests') as string[];
    const openRoles = formData.getAll('openRoles') as string[];

    const projectData = {
        title,
        author,
        location,
        description,
        masterplan,
        interests,
        openRoles,
        email: user.email,
    };

    const projectsRef = collection(db, 'projects');
    const docRef = await addDoc(projectsRef, projectData);

    revalidatePath('/projects');
    return { ok: true, id: docRef.id };
  } catch (error) {
    console.error('projects/addNewProject:', error);
    return {
      ok: false,
      message: 'Failed to add new project, please try again.',
    };
  }
}

export async function deleteProject(projectId: string) {
  try {
    const projectRef = doc(db, 'projects', projectId);
    await deleteDoc(projectRef);

    revalidatePath('/my-projects');
    return { ok: true };
  } catch (error) {
    console.error('projects/deleteProject:', error);
    return {
      ok: false,
      message: 'Failed to delete the project, please try again.',
    };
  }
}