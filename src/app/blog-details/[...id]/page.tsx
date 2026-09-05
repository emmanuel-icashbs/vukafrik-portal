import { redirect, notFound } from "next/navigation";
import { firesideChats } from "@/data/FiresideChatData";
export default async function Page({ params }: { params: Promise<{ id: string[] }> }) {
  const { id } = await params;
  if (id.length !== 1) notFound();
  const chat = firesideChats.find(item => String(item.id) === id[0]);
  if (chat) redirect(chat.href);
  if (id[0] === "3") redirect("/#fireside-chats");
  notFound();
}
