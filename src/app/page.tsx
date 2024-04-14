import IntroRobotImage from "./components/(homepage)/IntroRobotImage";
import IntroText from "./components/(homepage)/IntroText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between p-24 container bg-white m-auto space-y-12">
      <IntroText />
      <IntroRobotImage />
    </main>
  );
}
