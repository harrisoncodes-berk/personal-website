import profilePic from '../jpegs/power_ranger_harry.jpeg';

function HomePage() {
    return (
        <div className='flex-col'>
            <div className='flex'>
                <div className='flex-1 flex flex-col items-center justify-center bg-blue-100'>
                    <h2 className='text-4xl'>Hey there!</h2>
                    <div className='py-4'>
                        I'm currently a Data Scientist at TikTok with a strong interest in Software Engineering.
                    </div>
                </div>
                <div className='flex-1 flex justify-center bg-gray-100'>
                    <img src={profilePic} className='object-cover border-4 w-80'/>
                </div>
            </div>
            <div className='p-10 bg-purple-100'>
                <h2 className='text-4xl'>About Me</h2>
            </div>
        </div>
    );
}

export default HomePage;