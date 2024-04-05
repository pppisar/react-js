import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import TeachingSection from "./components/TeachingSection"
import FeaturesSection from "./components/FeaturesSection"
import FeedbackSection from "./FeedBackSection"
import { useState } from "react"

function App() {
  const [tab, setTab] = useState('feedback')

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
          <>
            <FeedbackSection />
          </>
        )}
      </main>
    </>
  )
}

export default App
// or export default function App() { // at start