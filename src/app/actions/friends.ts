'use server';

import { db } from '../server/db';
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

export async function addFriend(userId: string, friendId: string) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();

      if (userData.friend_list) {
        // Append the friendId to the existing friend list
        await updateDoc(userRef, {
          friend_list: arrayUnion(friendId),
        });
      } else {
        // Create the friend list and add the friendId
        await updateDoc(userRef, {
          friend_list: [friendId],
        });
      }

      return { ok: true, data: userSnap.data() };
    } else {
      return { ok: false, message: 'User not found' };
    }
  } catch (error) {
    console.error('Error adding friend:', error);
    return { ok: false, message: 'Failed to add friend' };
  }
}

export async function getFriends(userId: string) {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const friendList = userData.friend_list || [];
        
        // Map to an array of objects with `id` and `email` (assuming friend IDs are email addresses)
        const friends = friendList.map((email: string) => ({ id: email, email }));
        
        return { ok: true, friends };
      } else {
        return { ok: false, message: 'User not found' };
      }
    } catch (error) {
      console.error('Error fetching friends:', error);
      return { ok: false, friends: [] };
    }
  }

export async function isMutualFriends(userId: string, friendId: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'users', userId);
    const friendRef = doc(db, 'users', friendId);

    const userSnap = await getDoc(userRef);
    const friendSnap = await getDoc(friendRef);

    if (!userSnap.exists() || !friendSnap.exists()) {
      return false;
    }

    const userData = userSnap.data();
    const friendData = friendSnap.data();

    const userHasFriend = userData.friend_list?.includes(friendId);
    const friendHasUser = friendData.friend_list?.includes(userId);

    return userHasFriend && friendHasUser;
  } catch (error) {
    console.error('Error checking mutual friends:', error);
    throw error;
  }
}
