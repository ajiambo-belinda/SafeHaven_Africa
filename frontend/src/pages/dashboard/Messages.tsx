import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, Send } from "lucide-react";

type Message = { from: "me" | "them"; text: string; time: string };

const conversations = [
  {
    id: "c1",
    name: "Adaeze Nwosu",
    role: "Legal Professional",
    avatarSeed: "u2",
    unread: 2,
    messages: [
      { from: "them", text: "I've reviewed the custody case for Client #1042. Can we schedule a call?", time: "9:02 AM" },
      { from: "me", text: "Yes, I'm free after 2pm today.", time: "9:10 AM" },
      { from: "them", text: "Perfect, I'll send a calendar invite.", time: "9:12 AM" },
    ] as Message[],
  },
  {
    id: "c2",
    name: "Dr. Amina Yusuf",
    role: "Counselor",
    avatarSeed: "u3",
    unread: 0,
    messages: [
      { from: "them", text: "The counseling session for Client #2041 went well today.", time: "Yesterday" },
      { from: "me", text: "Great to hear. Thank you for the update.", time: "Yesterday" },
    ] as Message[],
  },
  {
    id: "c3",
    name: "Nairobi Safe House Admin",
    role: "Shelter Admin",
    avatarSeed: "u5",
    unread: 0,
    messages: [
      { from: "them", text: "We have 12 beds available this week.", time: "2 days ago" },
    ] as Message[],
  },
  {
    id: "c4",
    name: "Wanjiru Kamau",
    role: "Volunteer",
    avatarSeed: "u6",
    unread: 1,
    messages: [
      { from: "them", text: "Are there any outreach events planned for next weekend?", time: "3 days ago" },
    ] as Message[],
  },
];

export function Messages() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [threads, setThreads] = useState(conversations);

  const active = threads.find((c) => c.id === activeId)!;
  const filtered = threads.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!draft.trim()) return;

    setThreads((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [
                ...c.messages,
                { from: "me", text: draft, time: "Just now" },
              ],
            }
          : c
      )
    );
    setDraft("");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-dark-gray dark:text-white mb-5">
        Messages
      </h1>

      <div className="grid lg:grid-cols-[320px_1fr] gap-5 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 overflow-hidden" style={{ height: "600px" }}>
        <div className="border-r border-dark-gray/10 dark:border-white/10 flex flex-col">
          <div className="p-4 border-b border-dark-gray/10 dark:border-white/10">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations..."
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-dark-gray/5 dark:bg-white/10 text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-start gap-3 p-4 text-left border-b border-dark-gray/5 dark:border-white/5 transition-colors ${
                  activeId === c.id
                    ? "bg-umber/10 dark:bg-gold/10"
                    : "hover:bg-dark-gray/5 dark:hover:bg-white/5"
                }`}
              >
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${c.avatarSeed}`}
                  alt=""
                  className="h-10 w-10 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-dark-gray dark:text-white truncate">
                      {c.name}
                    </p>
                    {c.unread > 0 && (
                      <span className="shrink-0 h-5 min-w-5 px-1 rounded-full bg-umber text-white text-[10px] font-bold flex items-center justify-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-dark-gray/50 dark:text-white/50 truncate">
                    {c.messages[c.messages.length - 1]?.text}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col min-w-0">
          <div className="p-4 border-b border-dark-gray/10 dark:border-white/10 flex items-center gap-3">
            <img
              src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${active.avatarSeed}`}
              alt=""
              className="h-9 w-9 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-dark-gray dark:text-white">{active.name}</p>
              <p className="text-xs text-dark-gray/50 dark:text-white/50">{active.role}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {active.messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.from === "me"
                    ? "bg-umber text-white rounded-br-sm"
                    : "bg-dark-gray/5 dark:bg-white/10 text-dark-gray dark:text-white rounded-bl-sm"
                }`}>
                  <p>{m.text}</p>
                  <p className={`mt-1 text-[10px] ${m.from === "me" ? "text-white/60" : "text-dark-gray/40 dark:text-white/40"}`}>
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-dark-gray/10 dark:border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
            />
            <button
              onClick={handleSend}
              className="p-2.5 rounded-lg bg-umber text-white hover:bg-umber/90 transition-colors"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}