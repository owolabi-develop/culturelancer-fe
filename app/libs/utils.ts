
//   export const initialTraitScores = {
//     motivation: 0,

//     success_definition: 0,

//     group_project_feeling: 0,

//     preferred_project_situation: 0,

//     problem_solving: 0,

//     enjoyable_activity: 0,

//     learning_approach: 0,

//     handling_criticism: 0,

//     traits_description: 0,

//     task_management: 0,
//     event_organization: 0,

//     learning_preference: 0,

//     appealing_task: 0,

//     values_importance: 0,

//     thriving_role: 0,

//     career_path_preference: 0,

//     skill_eagerness: 0,

    

//     career_challenges: 0,

//     University_enrolled_at: '',

//     College_type: '',

//     Institution_Type: '',

//     current_year_in_school: '',

//     field_of_study: '',

//     age_range: '',

//     gender: '',

//     racial_background: '',

//     first_generation_college_student: '',

//     currently_employed_in_college: '',

//     currently_employed: '',
//     areas_of_experience: [],
    
//     // Initialize all trait fields to zero
//     leadership: 0,
//     rational: 0,
//     adaptability: 0,
//     creativity: 0,
//     communicative: 0,
//     low_resilience: 0,
//     persistence: 0,
//     attention_to_detail: 0,
//     strategic_thinking: 0,
//     practical: 0,
//     persuasive: 0,
//     low_values_alignment: 0,
//     organizational_skills: 0,
//     neutral_leadership: 0,
//     social: 0,
// };



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




export const fetchProfileDetails = async () => {
  try {
      const Profileresponse = await fetch(`/api/get-ap-profile-details`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
      
      if (Profileresponse.ok) {
          const data = await Profileresponse.json();
          return data[0].completion_percent; 
      } else {
          console.error("Failed to fetch profile details");
          return null;
      }
  } catch (error) {
      console.error("Error fetching profile details:", error);
      return null;
  }
};



export const fetchProfile = async () => {
    try {
        const Profileresponse = await fetch(`/api/get-ap-profile-details`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (Profileresponse.ok) {
            const data = await Profileresponse.json();
            return data[0] 
        } else {
            console.error("Failed to fetch profile details");
            return null;
        }
    } catch (error) {
        console.error("Error fetching profile details:", error);
        return null;
    }
  };



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
  


  // get applicant job recommendations

  export const fetchapplicantJobrecommendations = async () => {
    try {
        const response = await fetch(`/api/applicant-job-recommendations`, {
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
  



 

  


