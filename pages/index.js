import Head from "next/head";
import Image from "next/image";
import jnjlogo from "../assets/jnj_logo.jpg";
import { useEffect } from "react";
import Chat from "./components/Chat";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const getReply = async (ques) => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usrInput: ques }),
    });

    const data = await response.json();
    if (data.output) {
      return data.output;
    }
    return data.error;
  };

  return (
    <div className="root">
      <Head 
        title="MentaHelp"
        description="Mental health support Chatbot"
        keywords="Mental, Health,Support, Chatbot,Mental health, Support Chatbot"
      />
      <Chat getReply={getReply} />

      <div className="badge-container grow">
        <a
          href="https://www.jnj.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={jnjlogo} alt="Johnson & Johnson Logo" />
            <p>Official Website</p>
          </div>
        </a>
      </div>

      <div className="badge-container1 grow">
        <a
          href="https://github.com/kaju23/mentahelp/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <AiFillGithub size={20} className="git-icon" />
            <p>Github</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
