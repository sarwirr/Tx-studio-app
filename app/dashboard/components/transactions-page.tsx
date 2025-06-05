"use client"

import type React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Trophy, FileText, Check, PlusCircle } from "lucide-react"
import Image from "next/image"
import DonutChart from "./donut-chart"

// Helper component for consistent card styling
const InfoCard = ({
  title,
  children,
  className,
  cardContentClassName,
}: { title?: string; children: React.ReactNode; className?: string; cardContentClassName?: string }) => (
  <Card className={`shadow-lg bg-white rounded-xl ${className}`} style={{padding :  "0px" , alignItems : "content"}}> 
    {title && (
      <CardHeader className="pb-3 pt-5 px-5">
        <CardTitle className="text-md font-semibold text-gray-700">{title}</CardTitle>
      </CardHeader>
    )}
    <CardContent className={`px-5 pb-5 ${title ? "pt-0" : "pt-5"} ${cardContentClassName}`}>{children}</CardContent>
  </Card>
)

export default function TransactionsPage() {
  return (
    <div className="mx-auto">
      <Tabs defaultValue="actifs" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex bg-gray-200 p-1.5 rounded-lg mb-8 shadow-sm">
          <TabsTrigger
            value="actifs"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Actifs
          </TabsTrigger>
          <TabsTrigger
            value="en-attente"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            En attente (1)
          </TabsTrigger>
          <TabsTrigger
            value="clos"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Clos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="actifs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <InfoCard title="État">
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-gray-600">Prêt Société</span>
                    <span className="text-sm text-green-600 font-medium flex items-center">
                      Validé <CheckCircle2 className="ml-1.5 h-4 w-4" />
                    </span>
                  </div>
                  <Progress value={100} className="h-2.5 rounded-full [&>div]:bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-gray-600">Prêt HotDoggs</span>
                    <span className="text-sm text-yellow-600 font-medium flex items-center">
                      En attente <Clock className="ml-1.5 h-4 w-4" />
                    </span>
                  </div>
                  <Progress value={60} className="h-2.5 rounded-full [&>div]:bg-indigo-600" />
                </div>
                <Button variant="link" className="text-indigo-600 p-0 h-auto hover:underline text-sm font-medium">
                  <PlusCircle className="mr-1.5 h-4 w-4" /> Créer un nouveau dossier
                </Button>
              </div>
            </InfoCard>

            <InfoCard title="Prêt Société" cardContentClassName="flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-800 tracking-tight">39 234€</p>
                <p className="text-sm text-gray-500 mt-1.5">Montant du prêt en cours</p>
                <div className="mt-5 text-green-600 flex items-center justify-center text-sm font-medium">
                  <CheckCircle2 className="mr-1.5 h-4 w-4" /> Prêt validé
                </div>
              </div>
            </InfoCard>

            <InfoCard title="En attente" className="flex flex-col">
              <CardDescription className="mb-3 text-sm text-gray-500">Prêt HotDoggs</CardDescription>
              <div className="flex items-center space-x-4 mb-3">
                <div className="bg-slate-100 p-2 rounded-full">
                 <DonutChart segments={[
  { percentage: 20, color: "stroke-cyan-400" }, // Teal
  { percentage: 15, color: "stroke-orange-400" }, // Orange
  { percentage: 25, color: "stroke-emerald-500" }, // Green
]} />   
                </div>
                <ul className="text-xs space-y-1.5 text-gray-600">
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-1.5 text-green-500 flex-shrink-0" /> Accord ouverture
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-1.5 text-orange-500 flex-shrink-0" /> Accord demande
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-1.5 text-blue-500 flex-shrink-0" /> Évaluation des risques
                  </li>
                </ul>
              </div>
              <p className="text-xs text-gray-500 mt-auto">
                Pour déclencher la prochaine étape de validation, veuillez nous joindre :
              </p>
              <Button
                variant="link"
                className="text-indigo-600 p-0 h-auto text-xs mt-1.5 hover:underline font-medium justify-start"
              >
                <FileText className="mr-1 h-3.5 w-3.5" /> Dossier super important.pdf
              </Button>
            </InfoCard>

            <InfoCard
              title="Cloturé"
              cardContentClassName="flex flex-col items-center justify-center text-center h-full"
            >
              <Trophy className="h-16 w-16 text-yellow-400 mb-3" />
              <p className="text-sm font-semibold text-gray-700">Prêt Société</p>
              <p className="text-xs text-gray-500 mt-1">Estimation de clôture du dossier au : 13/06/2022</p>
            </InfoCard>
          </div>

          <Card className="shadow-lg bg-white rounded-xl mb-8">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[750px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider w-1/6"></th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Numéro de contrat
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Identifiant emprunteur
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Montant demandé
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Montant du prêt
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Mensualité
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Durée souhaitée
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 font-medium text-sm text-gray-800">Prêt Société</td>
                      <td className="py-4 px-6 text-sm text-gray-600">13452789</td>
                      <td className="py-4 px-6 text-sm text-gray-600">UK567UI8</td>
                      <td className="py-4 px-6 text-sm text-gray-600">39 234€</td>
                      <td className="py-4 px-6 text-sm text-gray-600">39 234€</td>
                      <td className="py-4 px-6 text-sm text-gray-600">700€</td>
                      <td className="py-4 px-6 text-sm text-gray-600">18 mois</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-sm text-gray-800">Prêt HotDoggs</td>
                      <td className="py-4 px-6 text-sm text-gray-600">67547800</td>
                      <td className="py-4 px-6 text-sm text-gray-600">UK567UI8</td>
                      <td className="py-4 px-6 text-sm text-gray-600">12 300€</td>
                      <td className="py-4 px-6 text-sm text-gray-600">En attente</td>
                      <td className="py-4 px-6 text-sm text-gray-600">En attente</td>
                      <td className="py-4 px-6 text-sm text-gray-600">14 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-white rounded-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[750px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider w-1/6"></th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Taux d&apos;intérêt
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Commission
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Taux Effect Global
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Date de la demande
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Date dernière échéance
                      </th>
                      <th className="py-4 px-6 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                        Statut de la demande
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 font-medium text-sm text-gray-800">Prêt Société</td>
                      <td className="py-4 px-6 text-sm text-gray-600">3%</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Lorem Ipsum</td>
                      <td className="py-4 px-6 text-sm text-gray-600">3</td>
                      <td className="py-4 px-6 text-sm text-gray-600">01/11/2019</td>
                      <td className="py-4 px-6 text-sm text-gray-600">01/04/2022</td>
                      <td className="py-4 px-6 text-sm text-green-600 font-semibold">Validé</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-sm text-gray-800">Prêt HotDoggs</td>
                      <td className="py-4 px-6 text-sm text-gray-600">8%</td>
                      <td className="py-4 px-6 text-sm text-gray-600">Lorem Ipsum</td>
                      <td className="py-4 px-6 text-sm text-gray-600">5</td>
                      <td className="py-4 px-6 text-sm text-gray-600">04/09/2021</td>
                      <td className="py-4 px-6 text-sm text-gray-600">En attente</td>
                      <td className="py-4 px-6 text-sm text-yellow-600 font-semibold">En attente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="en-attente">
          <InfoCard>
            <p className="text-gray-600">Contenu pour "En attente" sera bientôt disponible.</p>
          </InfoCard>
        </TabsContent>
        <TabsContent value="clos">
          <InfoCard>
            <p className="text-gray-600">Contenu pour "Clos" sera bientôt disponible.</p>
          </InfoCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}
