import { Session } from 'express-session';

// export interface UserSession extends Session {
//   user: UserSessionData;
// }

export type UserSessionData = {
  id: string;
  email: string;
};

export type UserSession = Session & Record<'user', UserSessionData>;
