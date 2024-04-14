import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatExample = () => {
  return (
    <div className="flex items-center px-2 rounded-lg bg-teal-500 border-white py-1 text-white space-x-3">
      <Avatar>
        <AvatarImage src="robot_avatar.jpg" alt="robot_avatar_img" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <p>Hello! How can I assist you?</p>
    </div>
  );
};

export default ChatExample;
