"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Clock, HelpCircle } from "lucide-react";
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
       <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  LIQTRADE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Prêt
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Affacturage
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Simulateur 
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Publications
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-green-400 text-green-600 hover:bg-green-50"
              >
                {"S'inscrire"}
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Se connecter
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  Prêt
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  Affacturage
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  Simulateur
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  Publications
                </a>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-green-400 text-green-600 hover:bg-green-50"
                  >
                    {"S'inscrire"}
                  </Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Se connecter
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">
                  FINANCEMENT PROFESSIONNEL À COURT TERME.
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Notre intérêt,
                  <br />
                  {"c'est le vôtre."}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Simple, efficace et rapide. Profitez du service Liqtrade
                  <br />
                  sans garantie personnelle.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                  Se connecter
                </Button>
                <Button
                  variant="ghost"
                  className="text-green-600 hover:text-green-700 px-8 py-3 text-lg group"
                >
                  {"S'inscrire"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Content - Mobile Mockup */}
              <Image
        src="/assets/hero.png" // path relative to `public/`
        alt="My Logo"
        width={600}
        height={500}
      />
          </div>
        </div>
      </main>
    
    </div>
    
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto p-8">
          {/* Main Text Content */}
          <div className="mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Des taux compétitifs en quelques clics.
              <br />
              Quel que soit votre projet, nous vous accompagnons de manière
              bienveillante avec les meilleurs outils en ligne. Oubliez le
              parcours du combattant, à vous le financement professionnel à
              court terme. Chez Liqtrade nous vous aidons à évoluer à travers
              des solutions de financement simples, efficaces et compétitives en
              seulement quelques clics.
            </p>

            <p className="text-gray-800 font-medium mb-4">
              TPE/PME, comptez sur nous pour vous aider à :
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>• Refinancer son entreprise</li>
              <li>• Ouvrir une nouvelle agence</li>
              <li>• Faire connaître son entreprise</li>
              <li>• Se lancer à l'international</li>
              <li>• Digitaliser son entreprise</li>
              <li>• Acquérir une entreprise</li>
              <li>• Transformer son entreprise</li>
              <li>• Financer des projets de développements durables</li>
            </ul>
          </div>

          {/* Video Button */}
          <div className="mb-12">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md">
              Vidéo de présentation
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Evaluation du profil de risque de votre client
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Plus de mauvaises surprises lors de la facturation de
                      votre client. Chez Liqtrade, nous évaluons son risque
                      débiteur afin de permettre la valorisation et
                      l'acceptation rapide de votre facture. Notre approche se
                      base sur le profil de risque de votre client et l'échéance
                      de votre facture pour vous proposer le meilleur prix de
                      cession de votre créance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Meilleur prix de cession de votre créance
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nos algorithmes trouvent pour vous la meilleure offre de
                      financement en termes de prix et de taux de commission. En
                      moyenne, nos clients perçoivent jusqu'à 97 % de la valeur
                      nominale de leur facture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Paiement en un temps record pour vos factures
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Après validation et financement de votre facture, votre
                      paiement est transféré en seulement quelques minutes.
                      Grâce à notre plateforme de paiement, bénéficiez de
                      nouvelles liquidités pour développer votre activité sans
                      délai.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Financez vos besoins de trésorerie en temps réel
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Faites une demande de financement en ligne via l'envoi
                      électronique de facture et obtenez plus rapidement vos
                      fonds via un traitement automatisé de vos demandes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
 
  );
}
