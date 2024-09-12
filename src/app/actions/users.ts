'use server';

import { db } from '../server/db';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where
} from 'firebase/firestore';
import { User } from '../types/user';

export async function getAllUsers() {
  try {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    } as unknown as User));

    return { ok: true, users: users };
  } catch (error) {
    console.error('users/getAllUsers:', error);
    return { ok: false, users: [] };
  }
}

export async function getUserByEmail(email: string) {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      return { 
        ok: true, 
        user: { 
          id: userDoc.id, 
          email: userData.email,
          name: userData.name,
          major: userData.major,
          school: userData.school,
          bio: userData.bio ?? '',
          technologies: userData.technologies ?? [],
          socials: userData.socials ?? {},
          profilePicture: userData.profilePicture ?? '',
        } as User 
      };
    } else {
      return { ok: false, message: 'User not found' };
    }
  } catch (error) {
    console.error('users/getUserByEmail:', error);
    return { ok: false, message: 'Failed to fetch user, please try again.' };
  }
}