import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

const men = [
    {
        title: 'T-shirt',
        image: '/images/men/men1.webp',
    },
    {
        title: 'Oversized T-shirt',
        image: '/images/men/men2.webp',
    },
    {
        title: 'joggers',
        image: '/images/men/men3.webp',
    },
    {
        title: 'Hoodie',
        image: '/images/men/men4.webp',
    },
    {
        title: 'Co-Ord Sets',
        image: '/images/men/men5.avif',
    },
    {
        title: 'Shorts',
        image: '/images/men/men6.avif',
    },
    {
        title: 'Travel Hoodie',
        image: '/images/men/men7.webp',
    },
    {
        title: 'Textured Polos',
        image: '/images/men/men8.webp',
    },
];
const storydata = [
    {
        title: 'On the move',
        icon: (
            <FlightIcon
                sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px',
                        lg: '60px',
                    },
                }}
            />
        ),
    },
    {
        title: 'Travel Friendly',
        icon: (
            <LuggageIcon
                sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px',
                        lg: '60px',
                    },
                }}
            />
        ),
    },
    {
        title: 'Utilitarian Design',
        icon: (
            <ShieldOutlinedIcon
                sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px',
                        lg: '60px',
                    },
                }}
            />
        ),
    },
    {
        title: 'Light Weight',
        icon: (
            <VolunteerActivismOutlinedIcon
                sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px',
                        lg: '60px',
                    },
                }}
            />
        ),
    },
    {
        title: 'Home Grown',
        icon: (
            <HomeWorkOutlinedIcon
                sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px',
                        lg: '60px',
                    },
                }}
            />
        ),
    },
];

export { men, storydata };
