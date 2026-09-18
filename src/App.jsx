const SECTIONS = [
  {
    title: 'Trending Now',
    products: [
      { name: 'Fritadeira Elétrica Air Fryer', price: 'R$ 549,00', emoji: '🍟' },
      { name: 'Cafeteira Expresso Automática', price: 'R$ 479,90', emoji: '☕' },
    ],
  },
  {
    title: 'Recommended for You',
    products: [
      { name: 'Micro-ondas Compacto 20L', price: 'R$ 529,90', emoji: '📦' },
      { name: 'Liquidificador Turbo Mix', price: 'R$ 169,90', emoji: '🥤' },
    ],
  },
  {
    title: 'Top Offers',
    products: [
      { name: 'Refrigerador Frost Free 400L', price: 'R$ 2.699,00', emoji: '🧊' },
      { name: 'Máquina de Lavar 12kg', price: 'R$ 1.549,00', emoji: '🧺' },
    ],
  },
]

function ProductCard({ name, price, emoji }) {
  return (
    <div className="flex w-[176px] shrink-0 flex-col items-start gap-2">
      <div className="flex h-[176px] w-[176px] items-center justify-center rounded-2xl bg-[#F2F4F7] text-5xl">
        {emoji}
      </div>
      <p className="w-full truncate text-[13px] font-medium leading-tight text-black">{name}</p>
      <p className="text-[15px] font-semibold text-[#002D62]">{price}</p>
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
        <span className="text-[22px] font-bold tracking-tight text-[#002D62]">Electrolux</span>
        <div className="flex items-center gap-4 text-[#002D62]">
          <span aria-hidden="true">🔍</span>
          <span aria-hidden="true">🛒</span>
        </div>
      </nav>

      <div className="mt-[97px] flex w-full flex-col gap-8">
        {SECTIONS.map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </div>
    </div>
  )
}
