import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, MapPin, Users, Phone, Mail, ChevronDown } from "lucide-react";
import house1 from "../../assets/House1.jpg";
import house2 from "../../assets/House2.jpg";
import house3 from "../../assets/House3.jpg";
import house4 from "../../assets/House4.jpg";
import house5 from "../../assets/House5.jpg";
import house6 from "../../assets/House6.jpg";
import house7 from "../../assets/House7.jpg";
import house8 from "../../assets/House8.jpg";
import house9 from "../../assets/House9.jpg";
import house10 from "../../assets/House10.jpg";

const allShelters = [
  { name: "Nairobi Safe House", location: "Nairobi, Kenya", beds: 12, capacity: 20, photo: house1, phone: "+254 700 123 456", email: "nairobi@safehavenafrica.org" },
  { name: "Lagos Safe Shelter", location: "Lagos, Nigeria", beds: 4, capacity: 15, photo: house2, phone: "+234 801 234 5678", email: "lagos@safehavenafrica.org" },
  { name: "Accra Shelter", location: "Accra, Ghana", beds: 8, capacity: 18, photo: house3, phone: "+233 24 123 4567", email: "accra@safehavenafrica.org" },
  { name: "Kampala Safe House", location: "Kampala, Uganda", beds: 2, capacity: 12, photo: house4, phone: "+256 701 234 567", email: "kampala@safehavenafrica.org" },
  { name: "Kigali Safe Shelter", location: "Kigali, Rwanda", beds: 6, capacity: 16, photo: house5, phone: "+250 788 123 456", email: "kigali@safehavenafrica.org" },
  { name: "Johannesburg Shelter", location: "Johannesburg, South Africa", beds: 10, capacity: 25, photo: house6, phone: "+27 71 234 5678", email: "joburg@safehavenafrica.org" },
  { name: "Cairo Safe House", location: "Cairo, Egypt", beds: 0, capacity: 14, photo: house7, phone: "+20 100 123 4567", email: "cairo@safehavenafrica.org" },
  { name: "Dar es Salaam Shelter", location: "Dar es Salaam, Tanzania", beds: 5, capacity: 15, photo: house8, phone: "+255 754 123 456", email: "dar@safehavenafrica.org" },
  { name: "Addis Ababa Safe House", location: "Addis Ababa, Ethiopia", beds: 3, capacity: 14, photo: house9, phone: "+251 91 123 4567", email: "addis@safehavenafrica.org" },
  { name: "Dakar Safe Shelter", location: "Dakar, Senegal", beds: 7, capacity: 16, photo: house10, phone: "+221 77 123 4567", email: "dakar@safehavenafrica.org" },
  { name: "Harare Safe House", location: "Harare, Zimbabwe", beds: 4, capacity: 13, photo: house1, phone: "+263 71 234 5678", email: "harare@safehavenafrica.org" },
  { name: "Casablanca Shelter", location: "Casablanca, Morocco", beds: 9, capacity: 20, photo: house2, phone: "+212 661 234 567", email: "casablanca@safehavenafrica.org" },
  { name: "Lusaka Safe House", location: "Lusaka, Zambia", beds: 0, capacity: 12, photo: house3, phone: "+260 97 123 4567", email: "lusaka@safehavenafrica.org" },
  { name: "Maputo Safe Shelter", location: "Maputo, Mozambique", beds: 6, capacity: 17, photo: house4, phone: "+258 84 123 4567", email: "maputo@safehavenafrica.org" },
];

export function Shelters() {
  const [search, setSearch] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [expandedShelter, setExpandedShelter] = useState<string | null>(null);

  const filtered = allShelters.filter((shelter) => {
    const matchesSearch =
      shelter.name.toLowerCase().includes(search.toLowerCase()) ||
      shelter.location.toLowerCase().includes(search.toLowerCase());
    const matchesAvailability = !availableOnly || shelter.beds > 0;
    return matchesSearch && matchesAvailability;
  });

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
          Shelters
        </h1>
        <p className="mt-1.5 text-sm text-dark-gray/70 dark:text-white/70 max-w-2xl leading-relaxed">
          Verified safe shelters across our partner network, with real-time bed
          availability. Every location listed here has been vetted for safety
          and confidentiality before being added to the platform.
        </p>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-dark-gray/60 dark:text-white/60">
          {filtered.length} of {allShelters.length} shelters
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shelters..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
            />
          </div>

          <button
            onClick={() => setAvailableOnly(!availableOnly)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              availableOnly
                ? "bg-umber text-white"
                : "bg-white dark:bg-navy border border-dark-gray/15 dark:border-white/15 text-dark-gray/70 dark:text-white/70 hover:bg-dark-gray/5 dark:hover:bg-white/5"
            }`}
          >
            Available only
          </button>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.length === 0 ? (
          <p className="col-span-full p-8 text-center text-sm text-dark-gray/50 dark:text-white/50">
            No shelters match your search.
          </p>
        ) : (
          filtered.map((shelter) => {
            const percentFull = Math.round(((shelter.capacity - shelter.beds) / shelter.capacity) * 100);
            const isExpanded = expandedShelter === shelter.name;
            return (
              <div
                key={shelter.name}
                className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 overflow-hidden"
              >
                <img
                  src={shelter.photo}
                  alt={shelter.name}
                  className="h-36 w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-semibold text-dark-gray dark:text-white">
                    {shelter.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-dark-gray/50 dark:text-white/50">
                    <MapPin size={12} />
                    {shelter.location}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-dark-gray/60 dark:text-white/60">
                      <Users size={12} />
                      {shelter.capacity} capacity
                    </span>
                    <span className={`font-semibold px-2 py-0.5 rounded-full ${
                      shelter.beds === 0
                        ? "bg-alert-red/10 text-alert-red"
                        : "bg-success-green/10 text-success-green"
                    }`}>
                      {shelter.beds === 0 ? "Full" : `${shelter.beds} beds available`}
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 rounded-full bg-dark-gray/10 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-umber dark:bg-gold rounded-full"
                      style={{ width: `${percentFull}%` }}
                    />
                  </div>

                  <button
                    onClick={() => setExpandedShelter(isExpanded ? null : shelter.name)}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dark-gray/15 dark:border-white/15 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <Phone size={14} />
                    Contact Shelter
                    <ChevronDown size={14} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-dark-gray/10 dark:border-white/10 space-y-2 text-sm">
                      <a href={`tel:${shelter.phone}`} className="flex items-center gap-2 text-dark-gray dark:text-white hover:text-umber dark:hover:text-gold transition-colors">
                        <Phone size={14} className="shrink-0" />
                        {shelter.phone}
                      </a>
                      <a href={`mailto:${shelter.email}`} className="flex items-center gap-2 text-dark-gray dark:text-white hover:text-umber dark:hover:text-gold transition-colors">
                        <Mail size={14} className="shrink-0" />
                        {shelter.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </DashboardLayout>
  );
}