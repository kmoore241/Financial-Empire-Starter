// src/hooks/useAuthStatus.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function useAuthStatus() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
