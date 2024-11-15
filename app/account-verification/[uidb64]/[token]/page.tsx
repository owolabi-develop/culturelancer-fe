"use client";
import { useRouter, useParams } from "next/navigation";

const VerificationPage = () => {
  const router = useRouter();
  const { uidb64, token } = useParams();
    const verifyAccount = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/verify-email/${uidb64}/${token}/`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
        if (response.ok) {
          router.push('/login');
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
