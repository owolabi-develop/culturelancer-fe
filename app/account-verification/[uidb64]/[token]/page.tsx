"use client";
import { useRouter, useParams } from "next/navigation";
// import { useState } from "react";


// // import { http_endpoints } from '@/app/libs/definations';
// interface VerificationProps {
//   params: { uidb64: string; token: string };
// }

const VerificationPage = () => {
  const router = useRouter();
  const { uidb64, token } = useParams();
    const verifyAccount = async () => {
      try {
        const response = await fetch(`/api/account-verify/${uidb64}/${token}/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          router.push('/login');
        } else {
          router.push('/verification-failed');
        }
      } catch (error) {
        console.error('Account verification failed', error);
        router.push('/login');
      }
    };

    verifyAccount();
  

  return null;
};

export default VerificationPage;
