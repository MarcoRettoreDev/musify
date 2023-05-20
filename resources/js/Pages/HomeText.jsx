import linkedinLogo from "../../css/icons/linkedin-svgrepo-com 1.svg";
import gmailLogo from "../../css/icons/gmail-svgrepo-com 1.svg";

export const HomeText = ({ appName }) => {
    return (
        <div className="space-y-4 flex flex-col justify-between text-greyLight p-0 2xl:px-20 mb-40">
            <h1 className="text-gradientDown titleMusify mb-16">
                {appName.toUpperCase()}
            </h1>
            <h2 className="text-white">Discover us!</h2>
            <p>
                Here you can what i love to do and work on, this proyect was
                made only for demonstration purposes. You can generate an
                account to test the app clicking on the &nbsp;
                <strong>GENERATE</strong> button.Enjoy!
            </p>
            <h2 className="text-white">About me</h2>
            <p>
                Hi, I'm Marco, a 28 years old fullstack developer working from
                Argentina. Im currently at thrid year of the Bachelor's degree
                in Computer Systems (Lic. en sistemas)
            </p>

            <h2 className="text-white">Contact</h2>

            <ul className="space-y-4">
                <li>
                    <a
                        href="https://www.linkedin.com/in/marco-antonio-rettore-mattes/"
                        target="_blank"
                        className="inline-flex items-center space-x-2"
                    >
                        <img src={linkedinLogo} alt="" />
                        <span className="font-bold"> Linkedin</span>
                    </a>
                </li>

                <li>
                    <a
                        href="mailto:marcorettoremattes@gmail.com"
                        target="_blank"
                        className="inline-flex items-center space-x-2"
                    >
                        <img src={gmailLogo} alt="" />

                        <span className="font-bold">Mail</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};
