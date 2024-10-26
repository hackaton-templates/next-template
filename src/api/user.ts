export interface User {
  id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  roles: string[];
}

export function getAvatar(user: User) {
  return `https://api.dicebear.com/9.x/micah/svg?backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&seed=${user.email}`;
}
