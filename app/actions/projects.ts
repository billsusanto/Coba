'use server';

import { db } from '../server/db';
import {
  addDoc,
  doc,
  deleteDoc,
  collection,
  getDocs,
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

export async function createNewProject(prevState: any, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as string;
    // const team = JSON.parse(formData.get('team') as string) as User[];
    const openPositions = (formData.get('openPositions') as string).split(',');
    const startDate = new Date(formData.get('startDate') as string);
    const endDate = new Date(formData.get('endDate') as string);

    const projectData = {
        title,
        description,
        // team,
        openPositions,
        status,
        startDate,
        endDate,
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

    revalidatePath('/projects');
    return { ok: true };
  } catch (error) {
    console.error('projects/deleteProject:', error);
    return {
      ok: false,
      message: 'Failed to delete the project, please try again.',
    };
  }
}