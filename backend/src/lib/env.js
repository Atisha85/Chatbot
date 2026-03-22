import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    CLIENT_URL: process.env.CLIENT_URL,
    NODE_ENV: process.env.NODE_ENV 

}

//PORT=5000
//MONGO_URI=mongodb+srv://atishaofficial1_db_user:jv1oL9xZS18VhKe5@cluster0.rblvwuu.mongodb.net/?appName=Cluster0
//NODE_ENV=development

//JWT_SECRET=myjwtsecret

//RESEND_API_KEY=re_gKEwS9CK_FuvbHK66Zv6nNT3LXtKdjFw5

//EMAIL_FROM = "onboarding@resend.dev"
//EMAIL_FROM_NAME = "Atisha"

//CLIENT_URL = http://localhost:5000