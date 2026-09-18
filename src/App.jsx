import { Search, User } from 'lucide-react'
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
    <div className="scrollbar-none relative flex h-[852px] w-[393px] flex-col items-start overflow-y-auto bg-white py-4 font-sf">
      <nav className="fixed top-0 z-10 flex w-[393px] items-center justify-between bg-[rgba(253,253,253,0.92)] px-4 py-3 backdrop-blur-[24px]">
        <img src={electroluxLogo} alt="Electrolux" className="h-6" />
        <div className="flex items-center gap-4">
          <Search size={22} color="#002D62" />
          <User size={22} color="#002D62" />
        </div>
      </nav>

      <div className="mt-[97px] flex w-full flex-col gap-8">
        <Section title="Trending Now" products={CATEGORIES} />
        <Section title="Recommended for You" products={RECOMMENDED} />
        <Section title="Top Offers" products={TOP_OFFERS} />
      </div>
    </div>
  )
}
