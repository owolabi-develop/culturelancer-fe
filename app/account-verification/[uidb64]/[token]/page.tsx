"use client";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const VerificationPage = () => {
  const router = useRouter();
  const { uidb64, token } = useParams();
  const verifyAccount = async () => {
    try {
      await cultureLancerAxios.get(`/verify-email/${uidb64}/${token}/`);
      toast.success("Account verified successfully");
      router.push("/login");
    } catch (error: any) {
      console.error("Account verification failed", error);
      router.push("/login");
    }
  };

  useEffect(() => {
    verifyAccount();
  }, []);

  return null;
};

export default VerificationPage;
