const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex items-center gap-12.5 ">
        {navLinks.map((link) => (
          <li key={link.href}><a className="font-medium text-black hover:text-[#0181C8] transition duration-300 ease-in-out" href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}