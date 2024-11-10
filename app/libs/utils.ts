
import useSWR from 'swr';

export const initialTraitScores = {
  leadership: 0,
  resilience: 0,
  empathy: 0,
  relationship_building: 0,
  rational: 0,
  integrity: 0,
  flexibility: 0,
  low_adaptability: 0,
  adaptability: 0,
  strategic_thinking: 0,
  creativity: 0,
  self_reliance: 0,
  communication: 0,
  critical_thinking: 0,
  communicative: 0,
  attention_to_detail: 0,
  precision: 0,
  low_resilience: 0,
  high_resilience: 0,
  persistence: 0,
  accuracy: 0,
  vision: 0,
  decision_making: 0,
  collaboration: 0,
  practical: 0,
  organizational_skills: 0,
  persuasive: 0,
  analytical_skills: 0,
  low_values_alignment: 0,
  moderate_values_alignment: 0,
  high_values_alignment: 0,
  communication_skills: 0,
  balance: 0,
  problem_solving: 0,
  low_leadership: 0,
  neutral_leadership: 0,
  high_leadership: 0,
  social: 0,

  University_enrolled_at: '',

    College_type: '',

    Institution_Type: '',

    current_year_in_school: '',

    field_of_study: '',
    currently_employed_in_college:'',
    currently_employed: '',

    age_range: '',

    gender: '',

    racial_background: '',

    first_generation_college_student: '',

    
    areas_of_experience: [],


}




export const useProfileDetails = () => {
    const fetcher = (url:string) => fetch(url).then(r => r.json())
    const { data, error, isLoading } = useSWR('/api/get-ap-profile-details', fetcher)
    return {
        completionPercent: data,
        percentLoading: isLoading,
        percentError: error
    }

};



export const useJobrecommendation = () => {
    const fetchapplicantJobrecommendations = (url:string) => fetch(url).then(r => r.json())
    const { data,isLoading } = useSWR('/api/applicant-job-recommendations', fetchapplicantJobrecommendations)
    return {
        jobsrecommendation: data,
        JobisLoading: isLoading,
    }

};



export const useProfile = () => {
    const profile = (url:string) => fetch(url).then(r => r.json())
    const { data,isLoading } = useSWR('/api/get-ap-profile-details', profile)
    
    return {
        profile: data,
        profileisLoading: isLoading,
    }
   
  }



export const fetchawardCertificate = async () => {
    try {
        const response = await fetch(`/api/award-certificate/get-certificate-data`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Failed to fetch profile details");
            return null;
        }
    } catch (error) {
        console.error("Error fetching profile details:", error);
        return null;
    }
  };
  
  export const useAwardCertificate = () => {
    const fetchapplicantJobrecommendations = (url:string) => fetch(url).then(r => r.json())
    const { data,isLoading } = useSWR('/api/award-certificate/get-certificate-data', fetchapplicantJobrecommendations)
    return {
        certificate: data,
        certificateisLoading: isLoading,
    }

};


//   get specializations

export const fetchspecialization = async () => {
    try {
        const response = await fetch(`/api/specialization/get-specialization`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Failed to fetch profile details");
            return null;
        }
    } catch (error) {
        console.error("Error fetching profile details:", error);
        return null;
    }
  };





//   get projects 

//   get specializations

export const fetchprojects = async () => {
    try {
        const response = await fetch(`/api/projects/get-projects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Failed to fetch profile details");
            return null;
        }
    } catch (error) {
        console.error("Error fetching profile details:", error);
        return null;
    }
  };
  



  



 

  


