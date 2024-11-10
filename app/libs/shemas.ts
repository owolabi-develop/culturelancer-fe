import { z } from "zod";

// login schema

export const passwordShema = z
.string()
.min(8, "Password must be at least 8 characters long")
.regex(/[a-z]/, "Password must contain at least one lowercase letter")
.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
.regex(/\d/, "Password must contain at least one number")
.regex(/[\W_]/, "Password must contain at least one special character");

const emailSchema = z.
string().min(1,'email is required').email({message:'Invalid email address'})
.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Email must match custom regex pattern" })


// login schema
export const loginFormSchema = z
   .object({
    email: emailSchema,
    password: passwordShema 

})

// forgot password shema

export const forgotPasswordSehema = z
   .object({
    email: emailSchema,
})

// password reset

export const passwordReset = z
   .object({
    password1:passwordShema,
    password: passwordShema 

}).refine((val)=> val.password=== val.password1,{message:"Passwords do not match",path:['password1']})




//  create account shema


export const createAccount = z.object({

    first_name: z.string({required_error:'First Name is required',invalid_type_error:'invalid type input for first Name'}).min(4,'First Name must be 4 character long'),
    last_name: z.string({required_error:'Last Name is required',invalid_type_error:'invalid type input for Last Name'}).min(4,'Last Name must be 4 character long'),
    email: emailSchema,
    password: passwordShema,
    role: z.enum(['employer','applicant','admin'])
})


// applicant Personal Details & Skills schema
const MAX_FILE_SIZE = 1000000; const ACCEPTED_IMAGE_TYPES = [ 
  "image/jpeg", "image/jpg", "image/png", "image/webp", 
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword", 
];



export const personalDatailSkill = z.object({
   id:z.string().optional(),

    title: z.string({required_error:'title is required',invalid_type_error:'invalid type input for title'}),
    country: z.string({required_error:'country is required',invalid_type_error:'invalid type input for country'}),
    state: z.string({required_error:'state is required',invalid_type_error:'invalid type input for state'}),
    phone_number: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
    tagline: z.string({required_error:'tagline is required',invalid_type_error:'invalid type input for tagline'}),
    current_major: z.string({required_error:'Current Mayor is required',invalid_type_error:'invalid type input for Current Mayor'}),
    dream_carerr: z.string({required_error:'Dream Career is required',invalid_type_error:'invalid type input for Dream Career'}),
    gender: z.enum(["male", "female", "other"]),
    activities: z.string({required_error:'Activities is required',invalid_type_error:'invalid type input for Activities'}),
    address: z.string({required_error:'Activities is required',invalid_type_error:'invalid type input for Activities'}),
    quote: z.string({required_error:'Quote is required',invalid_type_error:'invalid type input for Quote'}),
    hbcq: z.string({required_error:'HBCQ is required',invalid_type_error:'invalid type input for HBCQ'}),
    personality: z.string({required_error:'personality is required',invalid_type_error:'invalid type input for personality'}),
    bio: z.string({required_error:'description is required',invalid_type_error:'invalid type input for description'}),
    language_skills: z.string({required_error:'description is Language',invalid_type_error:'invalid type input for Language'}),
    
})




//  specialization schema

export const specializationSchema = z.object({
  id:z.string().optional(),
    specialization: z.string({required_error:'Specialization is required',invalid_type_error:'invalid type input for Specialization'}).min(4,'Quote must be 4 character Specialization'),
    proficiency: z.number({required_error:'Proficiency is required',invalid_type_error:'invalid type input for Proficiency'}).min(1, { message: "A'Proficiency be at least 1" })
    .max(120, { message: "'Proficiency must be less than or equal to 120" }),

})



// social profile
export const urlSchema = z

      .string()
      .min(1, { message: "URL is required" })
      .url({ message: "Invalid URL format" })
      .refine((url) => {
        return url.startsWith("http://") || url.startsWith("https://");
      }, { message: "URL must start with http:// or https://" })



// profile video schema

export const profileVideo = z.object({
    videoUrl: urlSchema
})


export const socialProfile = z.object({

    facebook: urlSchema,
    linkedIn: urlSchema,
    twitter_x: urlSchema
})


// profile faq schema

export const profileFaq = z.object({
   id:z.string().optional(),

    description:  z.string({required_error:'Faq is required',invalid_type_error:'invalid type input for Faq'}).min(4,'Faq must be 4 character long'),
})

//  AwardCertificationSchema

export const AwardCertificationSchema = z.object({
    id:z.string().optional(),
    title: z.string({required_error:'Title is required',invalid_type_error:'invalid type input for Title'}).min(4,'Title must be 4 character long'),
    issuing_organization: z.string({required_error:'Inssuing Organization is required',invalid_type_error:'invalid type input for Inssuing Organization'}).min(4,'Inssuing Organization must be 4 character long'),
    date_recieved: z.string().date(),
})


// education shema
export const educationSchame = z.object({
    id:z.string().optional(),
    institution_name: z.string({required_error:' institution name is required',invalid_type_error:'invalid type input for institution name'}).min(4,'institution name must be 4 character long'),
    degree: z.string({required_error:'Degree required',invalid_type_error:'invalid type input for Degree'}).min(4,'Degree must be 4 character long'),
    field_of_study: z.string({required_error:'field of study is required',invalid_type_error:'invalid type input for field of study'}).min(4,'field of study must be 4 character long'),
    start_date: z.string().date(),
    end_date: z.string().date(),
    gpa: z.string({required_error:'gap is required',invalid_type_error:'invalid type input for gap'}).max(2,'gap must be 4 character long'),
})


// experience shema
export const exprienceSchame = z.object({
    id:z.string(),

    title: z.string({required_error:'Title is required',invalid_type_error:'invalid type input for Title'}).min(4,'Title name must be 4 character long'),
    company_name: z.string({required_error:'Company Name required',invalid_type_error:'invalid type input for Company Name'}).min(4,'Company Name must be 4 character long'),
    location_type: z.string({required_error:'Location is required',invalid_type_error:'invalid type input for field of location'}).min(4,'location must be 4 character long'),
    start_date: z.string().date(),
    end_date: z.string().date(),
    employment_types:  z.enum([
      'Full-Time',
      'Part-Time',
      'Contract',
      'Temporary',
      'Internship',
      'Freelance',
      'Volunteer',
      'Seasonal',
    ]),
    present:z.boolean({
      required_error: "Please select Yes or No",
    }),
    description: z.string({required_error:'Description is required',invalid_type_error:'invalid type input for Description'}).min(100,'Description must be 100 character long'),
})



// project

export const projectShema = z.object({
    id:z.string(),

    project_title: z.string({required_error:'Project Title is required',invalid_type_error:'invalid type input for Project Title'}).min(5,'Project Title must be 5 character long'),
    technologies_used: z.array(z.string()).min(1, "At least one technology is required"),
    description: z.string({required_error:'Description is required',invalid_type_error:'invalid type input for Description'}).min(300,'Description must be 300 character long'),
    start_date: z.string().date(),
    end_date: z.string().date(),
    role: z.string({required_error:'role is required',invalid_type_error:'invalid type input for role'}).min(4,'role must be 4 character long'),
    project_image:z
    .any()
    .refine((files) => files?.length >= 1, { message: 'Image is required.' })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: '.jpg, .jpeg, .png and .webp files are accepted.',
     })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
     }),
    project_links_github: urlSchema,
    project_links_live_demo:  urlSchema,
    project_link_portfolio: urlSchema
})



// emaployer job posting shema


export const jobPostingSchema = z.object({
  id:z.string().optional(),
    title: z.string({required_error:'Title is required',invalid_type_error:'invalid type input for Title'}).min(20,'Title must be 20 character long'),
    description: z.string({required_error:'description is required',invalid_type_error:'invalid type input for  description'}).min(60,'description must be 60 character long'),
    category: z.string({required_error:'Category is required',invalid_type_error:'invalid type input for Category'}).min(20,'Category must be 20 character long'),
    skillRequired:  z.array(
        z.string().min(1, { message: "skill name is required" }) 
      ).min(3, { message: "At least three is required must be provided." }),
    experienceLevel: z.array(
        z.string().min(1, { message: "Experience Level name is required" }) 
      ).min(1, { message: "At least three is required must be provided." }),

    jobtype: z.array(
        z.string().min(1, { message: "job type Level name is required" }) 
      ).min(1, { message: "At least three is required must be provided." }),

      
      paymentsTerms: z.array(
        z.string().min(1, { message: "Payments Terms Level name is required" }) 
      ).min(1, { message: "At least one is required must be provided." }),

    location: z.array(
        z.string().min(1, { message: "location Level name is required" }) 
      ).min(1, { message: "At least one is required must be provided." }),

      minimumBudget: z.number()
      .nonnegative({ message: "Minimum budget must be a non-negative number." }),
      maximumBudget: z.number()
      .nonnegative({ message: "Maximum budget must be a non-negative number." }),
  }).refine(data => data.minimumBudget <= data.maximumBudget, {
    message: "Minimum budget must be less than or equal to maximum budget.",
    path: ["maximumBudget"], 
  
})

// AijobDescriptionSuggestionSehema
export const AijobDescriptionSuggestionSehema = z.object({
    description: z.string({required_error:'description is required',invalid_type_error:'invalid type input for  description'}).min(40,'description must be 40 character long'),
})


// assessmentform sehama


// verification code


export const verificationCode = z.object({
  code1:z.number().int().max(1),
  code2:z.number().int().max(1),
  code3:z.number().int().max(1),
  code4:z.number().int().max(1)
})

//  skills
export const skills =z.object({
  id:z.string().optional(),
  level: z.enum(['Beginner','Intermediate','Expert']),
  skill:z.enum([

    'Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'TypeScript', 'R', 'Scala', 'Go', 'MATLAB', 'Julia',
  

    'React', 'Vue', 'Angular',"Nextjs", 'Django', 'Flask', 'Node.js', 'HTML', 'CSS',
  
  
    'SQL', 'NoSQL', 'Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'ETL', 'BigQuery', 'Redshift', 'Snowflake', 'MongoDB', 'postgres',

    'Pandas', 'NumPy', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'NLTK', 'SpaCy', 
  

    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
    'Tableau', 'Power BI', 'Looker', 'Data Studio', 'Matplotlib', 'Seaborn', 'Plotly',

    'Git', 'Jenkins', 'Ansible', 'Apache Beam', 'Presto'
  ])



})
// asssesement 

 export const AssessmentSchema = z.object({
  
// 1. School or work motivation
  motivation: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  success_definition: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  group_project_feeling:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  relationship_building: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  // 2. Career success definition
  preferred_project_situation:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  problem_solving: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  enjoyable_activity:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  // 4. Cultural background group project
 learning_approach: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
 handling_criticism: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),



  // 5. Group project preferences
  traits_description: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  task_management: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  learning_preference: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  // 6. Problem-solving passion
  appealing_task:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  // 7. Enjoyable activities
  values_importance: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),



 thriving_role: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

 career_path_preference: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
 skill_eagerness: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
 event_organization: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),


  // 12. Handling feedback
  career_challenges:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),

  // Demographic questions
  University_enrolled_at:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  College_type:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  Institution_Type:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  current_year_in_school:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  field_of_study: z.string({required_error:'is required',invalid_type_error:'invalid type input'}).min(10,'Title must be 20 character long'),
  currently_employed_in_college: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  currently_employed:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  age_range:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  gender:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  racial_background:z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  first_generation_college_student: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
  areas_of_experience: z.string({required_error:'This field is required',invalid_type_error:'invalid type input'}).min(10,'Select an option'),
});







