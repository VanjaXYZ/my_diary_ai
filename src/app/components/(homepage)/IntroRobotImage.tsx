import AiRobot from "@/app/assets/ai_image.jpg";
import Image from "next/image";
import ChatExample from "./ChatExample";
const IntroRobotImage = () => {
  return (
    <section className="relative hidden sm:block">
      <section className="absolute -left-24 top-12">
        <ChatExample />
      </section>
      <Image
        src={AiRobot}
        alt="ai_robot"
        width={650}
        height={650}
        className="rounded-lg"
      />
    </section>
  );
};

export default IntroRobotImage;
