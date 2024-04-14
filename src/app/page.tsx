import Image from "next/image";
import AiRobot from "./assets/2151008306.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-between p-24 container border m-auto">
      <section className="space-y-8">
        <h1 className="text-5xl text-balance">
          MyDiaryAI - Your Personal Journal Companion
        </h1>
        <p className="text-xl text-balance">
          MyDiaryAI helps users organize their thoughts, track their emotions,
          and gain insights through AI-powered analysis
        </p>
      </section>
      <section className="relative">
        <Image src={AiRobot} alt="ai_robot" width={650} height={650} />
      </section>
    </main>
  );
}
