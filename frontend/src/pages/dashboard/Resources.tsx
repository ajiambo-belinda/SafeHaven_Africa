import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, Shield, Scale, HeartHandshake, Users, FileText, Download } from "lucide-react";

type Category = "Safety Guides" | "Legal Information" | "Mental Health" | "Community Support";

const allResources: { title: string; category: Category; description: string; format: string }[] = [
  { title: "Recognizing Signs of Domestic Violence", category: "Safety Guides", description: "A guide to identifying early warning signs and patterns of abuse.", format: "PDF Guide" },
  { title: "Creating a Personal Safety Plan", category: "Safety Guides", description: "Step-by-step worksheet for planning a safe exit from a dangerous situation.", format: "PDF Worksheet" },
  { title: "Know Your Legal Rights", category: "Legal Information", description: "An overview of protection orders, custody law, and how to access legal aid.", format: "PDF Guide" },
  { title: "How to File a Police Report", category: "Legal Information", description: "Practical steps for reporting abuse to local authorities safely.", format: "Article" },
  { title: "Coping with Trauma", category: "Mental Health", description: "Grounding techniques and self-care practices for survivors.", format: "PDF Guide" },
  { title: "Talking to Children About Change", category: "Mental Health", description: "Guidance for parents supporting children through family transitions.", format: "Article" },
  { title: "Finding Local Support Groups", category: "Community Support", description: "Directory of peer support groups by region across Africa.", format: "Directory" },
  { title: "Volunteer Orientation Handbook", category: "Community Support", description: "What to expect and how to prepare for your first volunteer shift.", format: "PDF Guide" },
];

const categories: { name: "All" | Category; icon: React.ReactNode }[] = [
  { name: "All", icon: <FileText size={14} /> },
  { name: "Safety Guides", icon: <Shield size={14} /> },
  { name: "Legal Information", icon: <Scale size={14} /> },
  { name: "Mental Health", icon: <HeartHandshake size={14} /> },
  { name: "Community Support", icon: <Users size={14} /> },
];

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [search, setSearch] = useState("");

  const filtered = allResources.filter((r) => {
    const matchesCategory = activeCategory === "All" || r.category === activeCategory;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Resources
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allResources.length} resources
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActiveCategory(c.name)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === c.name
                ? "bg-umber text-white"
                : "bg-white dark:bg-navy border border-dark-gray/15 dark:border-white/15 text-dark-gray/70 dark:text-white/70 hover:bg-dark-gray/5 dark:hover:bg-white/5"
            }`}
          >
            {c.icon}
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.length === 0 ? (
          <p className="col-span-full p-8 text-center text-sm text-dark-gray/50 dark:text-white/50">
            No resources match your search.
          </p>
        ) : (
          filtered.map((r) => (
            <div
              key={r.title}
              className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-5 flex flex-col"
            >
              <span className="w-fit text-xs font-semibold text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-2.5 py-1 rounded-full">
                {r.category}
              </span>
              <h3 className="mt-3 font-semibold text-dark-gray dark:text-white">
                {r.title}
              </h3>
              <p className="mt-1.5 text-sm text-dark-gray/60 dark:text-white/60 leading-relaxed flex-1">
                {r.description}
              </p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dark-gray/15 dark:border-white/15 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors">
                <Download size={14} />
                {r.format}
              </button>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}