'use server';

import { db } from '../server/db';
import {
    doc,
    deleteDoc,
    collection,
    getDoc,
    setDoc,
  } from 'firebase/firestore';

export async function storeUserEmail(email: string) {
  try {
    const userRef = doc(db, 'users', email);
    await setDoc(userRef, { email }, { merge: true });
    return { ok: true };
  } catch (error) {
    console.error('userActions/storeUserEmail:', error);
    return {
      ok: false,
      message: 'Failed to store user email, please try again.',
    };
  }
}

export async function getUserByEmail(email: string) {
  try {
    const userRef = doc(db, 'users', email);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return { ok: true, user: userSnap.data() };
    } else {
      return { ok: false, message: 'User not found' };
    }
  } catch (error) {
    console.error('userActions/getUserByEmail:', error);
    return {
      ok: false,
      message: 'Failed to get user data, please try again.',
    };
  }
}