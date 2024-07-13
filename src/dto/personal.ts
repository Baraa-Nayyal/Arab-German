export interface Personal {
  id: number;
  name: string;
  last_name: string;
  description: string;
  image: File | null;
}

export interface AboutUs {
  id: number;
  last_name: string;
  name: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Client {
  id: number;
  name: { [key: string]: string };
  description: { [key: string]: string };
  image: string;
}

export interface Review {
  id: number;
  name: string;
  description: string;
  image: string;
  role: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  logo_image: string;
  pdf_file: string;
}
