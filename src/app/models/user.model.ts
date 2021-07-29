export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: Date;
    role: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface Blog {
    id: string,
    user_id: string,
    Title: string,
    Description: string,
    Date: string,
    Status: string,
    CreatedDate: string
}