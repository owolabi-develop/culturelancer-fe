import ProgressBar from "@ramonak/react-progress-bar";
import { useApplicantProfileDetails } from "../hooks/useApplicantProfileDetails";

export function ProfilePercent() {
  const { data, error, isLoading } = useApplicantProfileDetails();

  // if (isLoading) {
  //   return (
  //     <div className="bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4">
  //       <div className="w-full bg-primary py-1 rounded-full my-3"></div>
  //     </div>
  //   );
  // }
  if (error) {
    return <div>fail to fetch data</div>;
  }

  return (
    <>
      <ProgressBar
        completed={data?.completion_percent}
        maxCompleted={100}
        animateOnRender={true}
        transitionDuration="3s"
        height="8px"
        bgColor="#CB2224"
        isLabelVisible={false}
      />

      <p className="text-[14px] mt-2 mb-[30px] text-[gray]">
        Profle Completion: {data?.completion_percent}%
      </p>
    </>
  );
}
