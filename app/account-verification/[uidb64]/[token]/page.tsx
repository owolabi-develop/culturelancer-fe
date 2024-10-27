"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface VerificationProps {
  params: { uidb64: string; token: string };
}

const VerificationPage: React.FC<VerificationProps> = ({ params: { uidb64, token } }) => {
  const router = useRouter();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/careerportal/verify-email/${uidb64}/${token}/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          router.push('/login');
        } else {
          router.push('/verification-failed');
        }
      } catch (error) {
        console.error('Account verification failed', error);
        router.push('/verification-error');
      }
    };

    verifyAccount();
  }, [router, uidb64, token]);

  return null;
};

export default VerificationPage;
