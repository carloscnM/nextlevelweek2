using System;


namespace backend.src.Entities
{
    public class User
    {
        public User(){}

        public User(String name, string urlAvatar, string whatsapp, string bio)
        {
            Name = name;
            UrlAvatar = urlAvatar;
            Whatsapp = whatsapp;
            Bio = bio;
        }
        public Guid Id { get; set; }
        public String Name { get; set; }
        public string UrlAvatar { get; set; }
        public string Whatsapp { get; set; }
        public string Bio { get; set; }
    }
}