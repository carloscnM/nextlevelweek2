export interface IScheduleItem {
    weekday: number;
    from: string;
    to: string;
};


export interface IUser{
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

export interface ILesson{
    subject: string;
    price: number;
}