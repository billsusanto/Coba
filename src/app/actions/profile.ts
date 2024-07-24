'use server';

import { db } from '../server/db';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from '../types/user';

export async function getUserData(email: string): Promise<User> {
  const userDoc = doc(db, 'users', email);
  const userSnap = await getDoc(userDoc);
  if (userSnap.exists()) {
    return userSnap.data() as User;
  } else {
    throw new Error('No such user!');
  }
}

export async function editProfile(user: User): Promise<void> {
  const userDoc = doc(db, 'users', user.email);
  await setDoc(userDoc, user, { merge: true });
}
