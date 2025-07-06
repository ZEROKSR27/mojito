import { openingHours, socials } from "@/constants/index";

import Image from "next/image.js";
import leafLeft from "@/public/images/footer-left-leaf.png";
import leafRight from "@/public/images/footer-right-leaf.png";

const Contact = () => {
    return (
        <footer id="contact">
            <Image src={leafLeft} alt="leaf-left" id="f-left-leaf" />
            <Image src={leafRight} alt="leafright" id="f-right-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={"/contact"}
                                aria-label={social.name}
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name + "icon"}
                                    width={30}
                                    height={30}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
