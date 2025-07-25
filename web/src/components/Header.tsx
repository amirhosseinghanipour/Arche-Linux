import { Menu, X, Github } from 'lucide-react';
import { useState } from 'react';
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./ui/tubelight-navbar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Download', url: '/#download', icon: User },
    { name: 'Documentation', url: '#', icon: Briefcase },
    { name: 'Community', url: '#', icon: User },
    { name: 'Github', url: '#', icon: Github }
  ]

  return (
    <header className="fixed w-full z-50">
      <NavBar items={navItems} />
    </header>
  );
}