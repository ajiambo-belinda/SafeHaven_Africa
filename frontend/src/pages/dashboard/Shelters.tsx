import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, MapPin, Users, Phone } from "lucide-react";

const allShelters = [
  { name: "Nairobi Safe House", location: "Nairobi, Kenya", beds: 12, capacity: 20 },
  { name: "Kisumu Safe Shelter", location: "Kisumu, Kenya", beds: 4, capacity: 15 },
  { name: "Mombasa Shelter", location: "Mombasa, Kenya", beds: 8, capacity: 18 },
  { name: "Eldoret Safe House", location: "Eldoret, Kenya", beds: 2, capacity: 12 },
  { name: "Kigali Safe Shelter", location: "Kigali, Rwanda", beds: 6, capacity: 16 },
  { name: "Johannesburg Shelter", location: "Johannesburg, South Africa", beds: 10, capacity: 25 },
  { name: "Cairo Safe House", location: "Cairo, Egypt", beds: 0, capacity: 14 },
  { name: "Accra Safe Shelter", location: "Accra, Ghana", beds: 5, capacity: 15 },
];

export function Shelters() {
  const [search, setSearch] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = allShelters.filter((shelter) => {
    const matchesSearch =
      shelter.name.toLowerCase().includes(search.toLowerCase()) ||
      shelter.location.toLowerCase().includes(search.toLowerCase());
    const matchesAvailability = !availableOnly || shelter.beds > 0;
    return matchesSearch && matchesAvailability;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Shelters
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allShelters.length} shelters
          </p>
        </div>

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
            return (
              <div
                key={shelter.name}
                className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/${shelter.name}/400/220`}
                  alt=""
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

                  <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dark-gray/15 dark:border-white/15 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors">
                    <Phone size={14} />
                    Contact Shelter
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </DashboardLayout>
  );
}