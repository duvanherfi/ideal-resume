
export interface Link {
  id: string;
  label: string;
  url: string;
}

export interface UserBasicInfo {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email: string;
  phone?: string;
  address?: string;
  location?: string;
  role: string;
  profileSummary: string;
  profilePhoto?: string;
  links?: Link[];
}
