import { firesideChats } from "@/data/FiresideChatData";
import Image from "next/image";


export default function Blog() {
  return <section id="fireside-chats" className="td-blog-area pt-100 pb-100 grey-bg-4" aria-labelledby="fireside-title">
    <div className="container">
      <div className="text-center mb-40">
        <span className="td-section-subtitle">Fireside Chats</span>
        <h2 id="fireside-title" className="td-section-title">Deux conversations au cœur de VUK’AFRIK</h2>
        <p>Rencontrez les intervenants de nos deux échanges au programme de la première journée.</p>
      </div>
      <div className="row">
        {firesideChats.map(chat => <div key={chat.id} className="col-md-6 mb-30">
          <article className="td-blog-item h-100 d-flex flex-column">
              <Image src={chat.image} alt={chat.imageAlt} className="w-100" sizes="(max-width: 767px) 100vw, 50vw" style={{aspectRatio: "3 / 2", objectFit: "cover", height: "auto", borderRadius: "20px 20px 0 0"}} />
            <div className="td-blog-content d-flex flex-column flex-grow-1">
              <p className="mb-10">{chat.session.topic}</p>
              <h3 className="td-blog-title mb-20">{chat.title}</h3>
              {chat.participants.map(person => <p key={person.id} className="mb-10">{person.displayName}<br/><small>{person.title}</small></p>)}
              <p>{chat.date} · {chat.session.start_time}–{chat.session.end_time}<br/>{chat.session.venue}</p>
              <p>{chat.description}</p>
            </div>
          </article>
        </div>)}
      </div>
      <p className="text-center"><small>Images d’illustration.</small></p>
    </div>
  </section>;
}
