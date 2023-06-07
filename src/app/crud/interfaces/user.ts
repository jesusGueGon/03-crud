export interface User {
  id: string
  name: string;
  password: string;
  password2: string;
  email: string;
  offers?: boolean;
  country: string;
  city: string;
}
