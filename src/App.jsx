import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import TeachingSection from "./components/TeachingSection"
import FeaturesSection from "./components/FeaturesSection"
import FeedbackSection from "./components/FeedBackSection"
import EffectSection from "./components/EffectSection"
import { useState } from "react"

function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />

      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={setTab} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <FeaturesSection />
          </>
        )}
        
        {tab === 'feedback' && (
          <FeedbackSection />
        )}

        {tab === 'effect' && (
          <EffectSection />
        )}
      </main>
    </>
  )
}

export default App
// or export default function App() { // at start