import { Biotech, Business, HealthAndSafety, Newspaper, SettingsInputAntenna, Sports, TheaterComedy } from '@mui/icons-material';
import { Facebook, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export const categories = [
    { name: "general", icon: <Newspaper /> },
    { name: "business", icon: <Business /> },
    { name: "entertainment", icon: <TheaterComedy /> },
    { name: "health", icon: <HealthAndSafety /> },
    { name: "science", icon: <Biotech /> },
    { name: "sports", icon: <Sports /> },
    { name: "technology", icon: <SettingsInputAntenna /> }];



export const social = [
    { name: "LinkedIn", icon: <LinkedIn />, bg: " hover:bg-blue-400 hover:text-white", url: "https://www.linkedin.com/in/jayant-sawarkar-401-/" },
    { name: "Instagram", icon: <Instagram />, bg: " hover:bg-red-600 hover:text-white", url: "https://www.instagram.com/jayant.s_401/" },
    { name: "GitHub", icon: <GitHub />, bg: " hover:bg-gray-600 hover:text-white", url: "https://github.com/jayant413" },

]

