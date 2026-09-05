import { StaticImageData } from "next/image";
import { firesideChats } from "./FiresideChatData";

// Compatibility for existing blog listing components; session content lives in the programme.
export interface BlogDataType {
  id: number;
  thumb: StaticImageData;
  imageAlt: string;
  title: string;
  desc?: string;
  date: string;
  comment: string;
  tag: string;
}
const blog_data: BlogDataType[] = firesideChats.map(chat => ({
  id: chat.id, thumb: chat.image, imageAlt: chat.imageAlt,
  title: chat.title, desc: chat.description, date: chat.date,
  comment: chat.participants.map(person => person.displayName).join(" & "),
  tag: chat.session.topic,
}));
const title = "Deux conversations au cœur de VUK’AFRIK";
const sub_title = "Fireside Chats";
const description = "Deux échanges au programme de la première journée de VUK’AFRIK 2026.";
export { title, sub_title, description };
export default blog_data;
