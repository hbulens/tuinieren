import { BedPlan } from './components/BedPlan';
import { Checklist } from './components/Checklist';
import { Climate } from './components/Climate';
import { Crops } from './components/Crops';
import { Glossary } from './components/Glossary';
import { Header } from './components/Header';
import { LazySystem } from './components/LazySystem';
import { MonthTasks } from './components/MonthTasks';
import { PlantingCalendar } from './components/PlantingCalendar';
import { Pots } from './components/Pots';
import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <main>
        <LazySystem />
        <MonthTasks />
        <Climate />
        <Crops />
        <PlantingCalendar />
        <Pots />
        <BedPlan />
        <Checklist />
        <Glossary />
      </main>
      <footer>
        <div className="wrap">
          De periodes zijn algemene richtlijnen en schuiven op met het weer. De ervaring van je buren is beter dan eender
          welke kalender, dus vraag het hen.
        </div>
      </footer>
    </>
  );
}
