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
]

const RECOMMENDED = [
  { name: 'Electrolux 20L Microwave MT30S', price: 'R$ 549,00', image: microwave },
  { name: 'Electrolux Water Purifier PE15X', price: 'R$ 479,90', image: waterPurifier },
]

const TOP_OFFERS = [
  { name: 'Air Fryer Digital Rita Lobo', price: 'R$ 899,90', image: airFryer },
  { name: 'Panela de Pressão Elétrica Rita Lobo', price: 'R$ 649,90', image: pressureCooker },
  { name: 'Aspirador Vertical 2 em 1', price: 'R$ 399,90', image: vacuum },
  { name: 'Cooktop de Indução 4 Zonas', price: 'R$ 2.199,00', image: inductionCooktop },
  { name: 'Fogão a Gás 4 Bocas', price: 'R$ 1.099,00', image: gasRange },
]

function ProductCard({ name, price, image }) {
  return (
    <div className="flex w-[176px] shrink-0 flex-col items-start gap-2">
      <div className="flex h-[176px] w-[176px] items-center justify-center overflow-hidden rounded-2xl bg-[#F2F4F7]">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>
      <p className="w-full text-[13px] font-medium leading-tight text-black">{name}</p>
      {price && <p className="text-[15px] font-semibold text-[#002D62]">{price}</p>}
    </div>
  )
}

function Section({ title, products }) {
  return (
    <section className="flex w-full flex-col items-start gap-3 px-4">
      <h2 className="font-sf text-[20px] font-[510] text-black">{title}</h2>
      <div className="flex w-full gap-4 overflow-x-auto pb-1">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative flex h-[852px] w-[393px] flex-col items-start overflow-y-auto bg-white py-4 font-sf">
      <nav className="fixed top-0 z-10 flex w-[393px] items-center justify-between bg-[rgba(253,253,253,0.92)] px-4 py-3 backdrop-blur-[24px]">
        <img src={electroluxLogo} alt="Electrolux" className="h-6" />
        <div className="flex items-center gap-4 text-[#002D62]">
          <span aria-hidden="true">🔍</span>
          <span aria-hidden="true">🛒</span>
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
