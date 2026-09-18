import {
  Search,
  User,
  SignalHigh,
  Wifi,
  BatteryFull,
  Lock,
  ChevronLeft,
  ChevronRight,
  Share,
  Bookmark,
  SquareStack,
} from 'lucide-react'
import electroluxLogo from './assets/electrolux-logo.svg'
import fridge from './assets/fridge.png'
import washingMachine from './assets/washing-machine.png'
import microwave from './assets/microwave.png'
import waterPurifier from './assets/water-purifier.png'
import airFryer from './assets/air-fryer.png'
import pressureCooker from './assets/pressure-cooker.png'
import vacuum from './assets/vacuum.png'
import inductionCooktop from './assets/induction-cooktop.png'
import gasRange from './assets/gas-range.png'

const CATEGORIES = [
  { name: 'Home Appliances', image: fridge },
  { name: 'Washing Machines', image: washingMachine },
  { name: 'Small Appliances', image: airFryer },
]

const RECOMMENDED = [
  { name: 'Electrolux 20L Microwave MT30S', price: 'R$ 549,00', image: microwave },
  { name: 'Electrolux Water Purifier PE15X', price: 'R$ 479,90', image: waterPurifier },
  { name: '6L Pressure Cooker PCC20', price: 'R$ 649,90', image: pressureCooker },
]

const TOP_OFFERS = [
  { name: 'Aspirador STK14B', price: 'R$ 399,90', image: vacuum },
  { name: 'Cooktop IE80P', price: 'R$ 2.199,00', image: inductionCooktop },
  { name: 'Fogão FE4GG', price: 'R$ 1.099,00', image: gasRange },
]

function ProductCard({ name, price, image }) {
  return (
    <div className="flex w-[176px] shrink-0 snap-start flex-col items-start gap-2">
      <div className="flex h-[176px] w-[176px] items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4F7]">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="line-clamp-2 min-h-[40px] text-[16px] font-medium leading-tight text-black">{name}</p>
        {price && <p className="text-[15px] font-semibold text-[#3C3C43]">{price}</p>}
      </div>
    </div>
  )
}

function Section({ title, products }) {
  return (
    <section className="flex w-full flex-col items-start gap-3 px-4">
      <h2 className="font-sf text-[20px] font-[510] text-black">{title}</h2>
      <div className="scrollbar-none flex w-full snap-x gap-4 overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F5F5F7] p-8 font-sf">
      <div className="relative flex h-[852px] w-[393px] flex-col overflow-hidden rounded-[50px] border-[12px] border-[#1C1C1E] bg-white shadow-2xl">
        <div className="pointer-events-none absolute left-1/2 top-2 z-50 h-[35px] w-[125px] -translate-x-1/2 rounded-full bg-black" />

        <div className="scrollbar-none flex flex-1 flex-col items-start overflow-y-auto">
          <div className="sticky top-0 z-20 flex h-[54px] w-full shrink-0 items-end justify-between bg-white px-6 pb-1.5">
            <span className="text-[15px] font-semibold text-black">9:41</span>
            <div className="flex items-center gap-1.5 text-black">
              <SignalHigh size={16} strokeWidth={2.2} />
              <Wifi size={16} strokeWidth={2.2} />
              <BatteryFull size={20} strokeWidth={1.8} />
            </div>
          </div>

          <nav className="sticky top-[54px] z-10 flex w-full items-center justify-between bg-[rgba(253,253,253,0.92)] px-4 py-3 backdrop-blur-[24px]">
            <img src={electroluxLogo} alt="Electrolux" className="h-6" />
            <div className="flex items-center gap-4">
              <Search size={22} color="#000000" />
              <User size={22} color="#000000" />
            </div>
          </nav>

          <div className="flex w-full flex-col gap-8 py-4">
            <Section title="Trending Now" products={CATEGORIES} />
            <Section title="Recommended for You" products={RECOMMENDED} />
            <Section title="Top Offers" products={TOP_OFFERS} />
          </div>
        </div>

        <div className="z-20 flex w-full shrink-0 flex-col items-center gap-2 bg-[rgba(253,253,253,0.92)] px-4 pb-2 pt-2 backdrop-blur-[24px]">
          <div className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-black/5 px-3 py-1.5">
            <Lock size={12} className="text-black/60" />
            <span className="truncate text-[13px] text-black/70">loop-samsung.vercel.app</span>
          </div>
          <div className="flex w-full items-center justify-between px-3">
            <ChevronLeft size={22} className="text-black/30" />
            <ChevronRight size={22} className="text-black" />
            <Share size={20} className="text-black" />
            <Bookmark size={20} className="text-black" />
            <SquareStack size={20} className="text-black" />
          </div>
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </div>
  )
}
