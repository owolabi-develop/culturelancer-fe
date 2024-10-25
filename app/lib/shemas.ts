import { z } from "zod";


// login schema

const passwordShema = z
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
const loginFormSchema = z
   .object({
    email: emailSchema,
    password: passwordShema 

})

// forgot password shema

const forgotPasswordSehema = z
   .object({
    email: emailSchema,
})

// password reset

const passwordReset = z
   .object({
    password1:passwordShema,
    password: passwordShema 

})




//  create account shema


const createAccount = z.object({

    first_name: z.string({required_error:'FirstName is required',invalid_type_error:'invalid type input for firstName'}).min(4,'FirstName must be 4 character long'),
    last_name: z.string({required_error:'LastName is required',invalid_type_error:'invalid type input for LastName'}).min(4,'LastName must be 4 character long'),
    emai: emailSchema,
    password: passwordShema,
    role: z.enum(['employer','applicant','admin'])
})


// applicant Personal Details & Skills schema
const photoFileSchema = z
      .instanceof(File) // Ensure it's a File object
      .refine((file) => file.size <= 10 * 1024 * 1024, { // 10MB size limit
        message: "File size should be less than 10MB",
      })
      .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
        message: "Only .jpeg or .png files are allowed",
      })


const docfileSchema =  z
        .instanceof(File) 
        .refine((file) => file.size <= 10 * 1024 * 1024, { // 10MB size limit
        message: "File size should be less than 10MB",
        })
        .refine((file) => {
        const allowedTypes = [
            "application/pdf",
            "application/msword", // For .doc
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // For .docx
        ];
        return allowedTypes.includes(file.type);
        }, {
        message: "Only .jpeg, .png, .pdf, .doc, and .docx files are allowed",
        })


const personalDatailSkill = z.object({

    title: z.string({required_error:'title is required',invalid_type_error:'invalid type input for title'}).min(4,'title must be 4 character long'),
    firstName: z.string({required_error:'FirstName is required',invalid_type_error:'invalid type input for firstName'}).min(4,'FirstName must be 4 character long'),
    lastNamr: z.string({required_error:'LastName is required',invalid_type_error:'invalid type input for LastName'}).min(4,'LastName must be 4 character long'),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }).regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
    tagline: z.string({required_error:'tagline is required',invalid_type_error:'invalid type input for tagline'}).min(4,'tagline must be 4 character long'),
    current_major: z.string({required_error:'Current Mayor is required',invalid_type_error:'invalid type input for Current Mayor'}).min(4,'Current Mayor must be 4 character long'),
    dream_carerr: z.string({required_error:'Dream Career is required',invalid_type_error:'invalid type input for Dream Career'}).min(4,'Dream Career must be 4 character long'),
    activities: z.string({required_error:'Activities is required',invalid_type_error:'invalid type input for Activities'}).min(4,'Activities must be 4 character long'),
    profile_photo: photoFileSchema,
    Gallery: photoFileSchema,
    banner: photoFileSchema,
    resume: docfileSchema,
    quote: z.string({required_error:'Quote is required',invalid_type_error:'invalid type input for Quote'}).min(4,'Quote must be 4 character Quote'),
    hbcq: z.string({required_error:'HBCQ is required',invalid_type_error:'invalid type input for HBCQ'}).min(4,'HBCQ must be 4 character Quote'),
    personality: z.string({required_error:'personality is required',invalid_type_error:'invalid type input for personality'}).min(4,'personality must be 4 character Quote'),
    description: z.string({required_error:'description is required',invalid_type_error:'invalid type input for description'}).min(4,'description must be 4 character Quote'),
    language: z.string({required_error:'description is Language',invalid_type_error:'invalid type input for Language'}).min(4,'Language must be 4 character Quote'),


    
})




//  specialization schema

const specializationSchema = z.object({

    specialization: z.string({required_error:'Specialization is required',invalid_type_error:'invalid type input for Specialization'}).min(4,'Quote must be 4 character Specialization'),
    proficiency: z.number({required_error:'Proficiency is required',invalid_type_error:'invalid type input for Proficiency'})

})



// social profile
const urlSchema = z

      .string()
      .min(1, { message: "Website URL is required" })
      .url({ message: "Invalid URL format" })
      .refine((url) => {
        return url.startsWith("http://") || url.startsWith("https://");
      }, { message: "URL must start with http:// or https://" })



// profile video schema

const profileVideo = z.object({
    videoUrl: urlSchema
})


const socialProfile = z.object({

    facebook: urlSchema,
    linkedIn: urlSchema,
    twitter_x: urlSchema
})


// profile faq schema

const profileFaq = z.object({

    faq:  z.string({required_error:'Faq is required',invalid_type_error:'invalid type input for Faq'}).min(4,'Faq must be 4 character Quote'),
})

//  AwardCertificationSchema

const AwardCertificationSchema = z.object({

    title: z.string({required_error:'Title is required',invalid_type_error:'invalid type input for Title'}).min(4,'Title must be 4 character long'),
    inssuing_organization: z.string({required_error:'Inssuing Organization is required',invalid_type_error:'invalid type input for Inssuing Organization'}).min(4,'Inssuing Organization must be 4 character long'),
    date_recieved: z.date({required_error: "Please select a date and time",invalid_type_error: "That's not a date!"}),
    start_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    end_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    role: z.string({required_error:'role is required',invalid_type_error:'invalid type input for role'}).min(4,'role must be 4 character long'),
    github: urlSchema,
    liveDemo:  urlSchema,
    portfolio: urlSchema
})


// education shema
const educationSchame = z.object({

    institution_name: z.string({required_error:' institution name is required',invalid_type_error:'invalid type input for institution name'}).min(4,'institution name must be 4 character long'),
    degree: z.string({required_error:'Degree required',invalid_type_error:'invalid type input for Degree'}).min(4,'Degree must be 4 character long'),
    field_of_study: z.string({required_error:'field of study is required',invalid_type_error:'invalid type input for field of study'}).min(4,'field of study must be 4 character long'),
    start_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    end_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    gap: z.string({required_error:'gap is required',invalid_type_error:'invalid type input for gap'}).min(4,'gap must be 4 character long'),
})


// experience shema
const exprienceSchame = z.object({

    title: z.string({required_error:'Title is required',invalid_type_error:'invalid type input for Title'}).min(4,'Title name must be 4 character long'),
    company_name: z.string({required_error:'Company Name required',invalid_type_error:'invalid type input for Company Name'}).min(4,'Company Name must be 4 character long'),
    location: z.string({required_error:'Location is required',invalid_type_error:'invalid type input for field of location'}).min(4,'location must be 4 character long'),
    start_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    end_date: z.date({required_error: "Please select a date and time", invalid_type_error: "That's not a date!"}),
    description: z.string({required_error:'Description is required',invalid_type_error:'invalid type input for Description'}).min(4,'Description must be 4 character long'),
})



// project

const projectShema = z.object({

    projectTitle: z.string({required_error:'Project Title is required',invalid_type_error:'invalid type input for Project Title'}).min(4,'Project Title must be 4 character long'),
    technologies_used: z.array(
        z.string().min(1, { message: "Technology name cannot be empty." }) 
      ).min(1, { message: "At least one technology must be provided." }),
      role: z.string({required_error:'Role Title is required',invalid_type_error:'invalid type input for Role'}).min(4,'Role must be 4 character long'),
      description: z.string({required_error:'Description is required',invalid_type_error:'invalid type input for Description'}).min(4,'Description must be 4 character long'),
})



// emaployer job posting shema


const jobPostingSchema = z.object({
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
const AijobDescriptionSuggestionSehema = z.object({
    description: z.string({required_error:'description is required',invalid_type_error:'invalid type input for  description'}).min(40,'description must be 40 character long'),
})


// assessmentform sehama


// verification code


const verificationCode = z.object({
  code1:z.number().int().max(1),
  code2:z.number().int().max(1),
  code3:z.number().int().max(1),
  code4:z.number().int().max(1)
})



