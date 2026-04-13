import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="border-b-4 border-brand-black p-6 flex justify-between items-center sticky top-0 bg-brand-white z-50">
        <h1 className="text-4xl leading-none">ENCOREGEAR</h1>
        <div className="hidden md:flex gap-8 font-bebas text-xl">
          <a href="#buy" className="hover:text-brand-red transition-colors underline decoration-2 underline-offset-4">BUY GEAR</a>
          <a href="#sell" className="hover:text-brand-red transition-colors underline decoration-2 underline-offset-4">SELL GEAR</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b-4 border-brand-black bg-brand-white">
        <div className="md:col-span-8">
          <h2 className="text-7xl md:text-9xl leading-[0.85] mb-8">
            GEAR THAT <br />
            LASTS. <br />
            TRUST THAT <br />
            HOLDS.
          </h2>
          <p className="max-w-xl text-xl md:text-2xl leading-relaxed mb-8 font-medium">
            The marketplace for professional musicians. Mandatory luthier authentication for high-end instruments. Flat 7% fees. Zero bots.
          </p>
          <div className="flex gap-4">
             <div className="bg-brand-red text-brand-white p-2 px-4 font-bebas text-lg">EST. 2026</div>
             <div className="border-2 border-brand-black p-2 px-4 font-bebas text-lg">NASHVILLE - AUSTIN - LA</div>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-8 sticky top-24">
          <div className="p-8 border-4 border-brand-black bg-brand-gray">
             <h3 className="text-4xl mb-4">JOIN THE WAITLIST</h3>
             <LeadForm type="buyer" />
             <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">First 1,000 users get founder badges</p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - SWISS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-brand-black">
        <div className="p-6 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-brand-black flex flex-col justify-between">
          <div>
            <span className="text-brand-red font-bebas text-2xl">01</span>
            <h2 className="text-6xl mb-6">FOR BUYERS</h2>
            <ul className="space-y-4 font-bold text-lg md:text-xl uppercase">
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                No more "Item Not As Described"
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                Mandatory Luthier verification for $2,500+
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                Encore Shield: 24h damage claims
              </li>
            </ul>
          </div>
          <div className="mt-12" id="buy">
            <LeadForm type="buyer" />
          </div>
        </div>
        <div className="p-6 md:p-12 flex flex-col justify-between bg-brand-gray">
          <div>
            <span className="text-brand-red font-bebas text-2xl">02</span>
            <h2 className="text-6xl mb-6">FOR SELLERS</h2>
            <ul className="space-y-4 font-bold text-lg md:text-xl uppercase">
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                Transparent 7% Flat Fee
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                No hidden processing or "bump" fees
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-brand-black text-brand-white px-2">X</span>
                Targeted reach to serious collectors
              </li>
            </ul>
          </div>
          <div className="mt-12" id="sell">
            <LeadForm type="seller" />
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="p-6 md:p-12 bg-brand-black text-brand-white text-center">
        <h2 className="text-5xl md:text-7xl mb-12">THE ENCORE STANDARD</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 border-4 border-brand-red mb-6 flex items-center justify-center font-bebas text-4xl">50</div>
            <h3 className="text-3xl mb-2 underline decoration-brand-red decoration-4">POINT INSPECTION</h3>
            <p className="font-medium text-sm text-gray-400">Every instrument over $2,500 is verified by master luthiers in our Nashville, LA, or Austin hubs.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 border-4 border-brand-red mb-6 flex items-center justify-center font-bebas text-4xl">24H</div>
             <h3 className="text-3xl mb-2 underline decoration-brand-red decoration-4">SHIELD PROTECT</h3>
             <p className="font-medium text-sm text-gray-400">Damage in transit? We resolve claims within 24 hours of arrival. No carrier loops. No bots.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 border-4 border-brand-red mb-6 flex items-center justify-center font-bebas text-4xl">7%</div>
             <h3 className="text-3xl mb-2 underline decoration-brand-red decoration-4">FLAT COMMISSION</h3>
             <p className="font-medium text-sm text-gray-400">Keep more of what you sell. No math required. Just professional pricing for professional gear.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 border-t-4 border-brand-black grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-5xl mb-4">ENCOREGEAR</h2>
          <p className="font-bold text-lg max-w-sm">Ditch the fees. Reclaim the trust. The high-end marketplace is here.</p>
        </div>
        <div>
          <h4 className="text-2xl mb-4 border-b-2 border-brand-black inline-block">CONTACT</h4>
          <p className="font-bold">support@encoregear.com</p>
          <p className="font-bold">samuel@baget.ai</p>
        </div>
        <div>
          <h4 className="text-2xl mb-4 border-b-2 border-brand-black inline-block">LEGAL</h4>
          <p className="font-bold">PRIVACY POLICY</p>
          <p className="font-bold">TERMS OF SERVICE</p>
          <p className="mt-8 font-bebas text-xl text-gray-400">COPYRIGHT 2026</p>
        </div>
      </footer>
    </main>
  );
}