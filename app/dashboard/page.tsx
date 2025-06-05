// app/dashboard/page.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "./components/stats-card";
import { FinancialLineChart } from "./components/financial-line-chart";
import { FinancialDataTable } from "./components/financial-data-table";
import TransactionsPage from "./components/transactions-page";

export default function DashboardPage() {
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bonjour Paul !</h1>
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="/placeholder.svg?width=40&height=40"
            alt="Paul Dumartin"
          />
          <AvatarFallback>PD</AvatarFallback>
        </Avatar>
      </header>

      <div className="flex justify-between items-center mb-8">
        <Tabs defaultValue="loans" className="w-auto">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="loans">Mes prêts</TabsTrigger>
            <TabsTrigger value="invoices">Mes factures</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="bg-brand-DEFAULT hover:bg-brand-dark">
          Demander un financement
        </Button>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Mon compte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatsCard
            title="Paul Dumartin"
            description="14 rue du Louvre, PARIS 75001"
            variant="profile"
          />
          <StatsCard title="Segment" value="RET" />
          <StatsCard
            title="Évaluation des risques"
            description="Faible"
            variant="risk"
            riskGrade="B"
          />
          <StatsCard
            title="Score risque"
            description="Lorem Ipsum"
            variant="score"
            scoreValue={60}
          />
          <StatsCard
            title="Montant dernière transaction"
            value="80K"
            variant="transaction"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Informations financières
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FinancialLineChart />
          </div>
          <div className="lg:col-span-1">
            <FinancialDataTable />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Transactions
        </h2>
        <TransactionsPage />
      </section>
    </>
  );
}
