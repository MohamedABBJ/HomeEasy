import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-footer text-sm text-text-foreground">
      <div className="footer-grid-container grid px-10 border-t-divider border-t-[1px] lg:grid-cols-3 sm:grid-cols-1">
        <section className="support lg:py-12 py-6">
          <h3 className="mb-3 font-medium">Support</h3>
          <ul className="grid gap-3">
            <li className="hover:underline">
              <Link href='/help'>Help Center</Link>
            </li>
            <li className="hover:underline">
              <Link href='/help/article/3218'>AirCover</Link>
            </li>
            <li className="hover:underline">
              <Link href='/against-discrimination'>Anti-discrimination</Link>
            </li>
            <li className="hover:underline">
              <Link href='/accessibility'>Disability support</Link>
            </li>
            <li className="hover:underline">
              <Link href='/help/article/1320'>Cancellation options</Link>
            </li>
            <li className="hover:underline">
              <Link href='/help/article/3290'>Report neighborhood concern</Link>
            </li>
          </ul>
        </section>
        <div className="bg-divider h-[1px] lg:hidden"></div>
        <section className="hosting lg:py-12 py-6">
          <h3 className="mb-3 font-medium">Hosting</h3>
          <ul className="grid gap-3">
            <li className="hover:underline">
              <Link href='/host/homes'>Airbnb your home</Link>
            </li>
            <li className="hover:underline">
              <Link href='/aircover-for-hosts'>AirCover for Hosts</Link>
            </li>
            <li className="hover:underline">
              <Link href='/resources/hosting-homes'>Hosting resources</Link></li>
            <li className="hover:underline">
              <Link href='/community'>Community forum</Link>
            </li>
            <li className="hover:underline">
              <Link href='/help/article/1376'>Hosting responsibly</Link>
            </li>
            <li className="hover:underline">
              <Link href='/airbnb-friendly'>Airbnb-friendly apartments</Link>
            </li>
            <li className="hover:underline">
              <Link href='/ambassadors/joinaclass'>Join a free hosting class</Link>
            </li>
          </ul>
        </section>
        <div className="bg-divider h-[1px] lg:hidden"></div>
        <section className="airbnb lg:py-12 py-6">
          <h3 className="mb-3 font-medium">Airbnb</h3>
          <ul className="grid gap-3">
            <li className="hover:underline">
              <Link href='/press/news'>Newsroom</Link>
            </li>
            <li className="hover:underline">
              <Link href='/release'>New features</Link>
            </li>
            <li className="hover:underline">
              <Link href='/careers'>Careers</Link>
            </li>
            <li className="hover:underline">
              <Link href='/investors'>Investors</Link>
            </li>
            <li className="hover:underline">
              <Link href='/giftcards'>Gift cards</Link>
            </li>
            <li className="hover:underline">
              <a href="https://www.airbnb.org/">Airbnb.org emergency stays</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-divider h-[1px] lg:hidden"></div>
    </footer>
  )
}

export default Footer
