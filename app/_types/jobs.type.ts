export interface IJob {
  id:string,
  title: string;
  location_type: string[];
  payments_terms: string;
  minimum_budget: string;
  maximum_budget: string;
  job_type: string[];
  job_category: string;
  years_of_experience: number;
  description: string;
  job_ready: boolean;
  skills: string[];
  experience_levels: string[];
  status: string;
}
