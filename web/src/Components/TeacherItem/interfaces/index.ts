export interface ITeachersLesson{
    id: string,
    subject: string,
    cost: number,
    user: {
      id: string,
      name: string,
      urlAvatar: string,
      whatsapp: string,
      bio: string
    }
}