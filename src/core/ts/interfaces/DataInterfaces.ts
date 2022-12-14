export interface PostInterface {
   userId: number;
   id: number;
   index?: number;
   title: string;
   body: string;
}

export interface CommentInterface {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

export interface UserInterface {
   id: number;
   name: string;
   username: string;
   email: string;
   address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
         lat: string;
         lng: string;
      };
   };
   phone: string;
   website: string;
   company?: {
      name: string;
      catchPhrase: string;
      bs: string;
   };
}

export interface StringQueriesInterface {
   [key: string]: string;
}
