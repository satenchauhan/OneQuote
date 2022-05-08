export const  Users = [
    {
        id: 1,
        email: 'raman@gmail.com',
        username: 'raman',
        password: 'raman123',
        userToken: 'rm1234'
    },
    {
        id: 2,
        email: 'daman@gmail.com',
        username: 'daman',
        password: 'daman123',
        userToken: 'dm1234'
    },
    {
        id: 3,
        email: 'naman@gmail.com',
        username: 'naman',
        password: 'naman123',
        userToken: 'nn1234'
    },
    {
        id: 4,
        email: 'tapan@gmail.com',
        username: 'tapan',
        password: 'tapan123',
        userToken: 'tp1234'
    }
];


export type MainStackParams = {
	Boarding: undefined;
	Authentication: undefined;
	Registration: undefined;
	faceRegister: undefined;
	Dashboard: undefined;
}

export type SignupParams = {
	Signup: undefined;
	MagicBox: undefined;
	SocialMagicBox: undefined;
}

export type SigninParams = {
	Login: undefined;
	MagicBox: undefined;
	SocialMagicBox: undefined;
}



//User Model
export interface FormProps{ 
    form: string,
    setForm: Function,
    error: string,
    errors: string,
    setErros: Function,
}

//User Model
export interface UserModel{
    name: string;
    email: String;
    phone: String;
    password: string,
    varified: boolean
}
 
export interface UserState{
    user: UserModel;
    error: string | undefined;
    
}