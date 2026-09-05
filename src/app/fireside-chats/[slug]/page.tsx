import { notFound, redirect } from "next/navigation";
import { firesideChats } from "@/data/FiresideChatData";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!firesideChats.some(chat => chat.slug === slug)) notFound();
  redirect("/#fireside-chats");
}
