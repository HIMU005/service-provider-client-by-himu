import { Typewriter } from "react-simple-typewriter";

const TextRunning = () => {
    return (
        <div className="my-4">

            <h3 className="text-3xl font-semibold text-my-green">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                        'Hello!!',
                        'We welcome you to',
                        'Our Simple Service Website',
                        'You can add your service and book any service.',
                        'You Can see your service status',
                        "You can feedback about our website.",
                        "Happy Service ('_') ",
                    ]}
                />
            </h3>
        </div>
    );
};

export default TextRunning;