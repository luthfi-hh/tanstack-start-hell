import { createFileRoute } from '@tanstack/react-router'
import { Globe, Code2, Check } from 'lucide-react'
import * as m from '../paraglide/messages.js'
import { getLocale } from '../paraglide/runtime.js'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const currentLanguage = getLocale()
  
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
      text: m.homepage_feature_ssr(),
    },
    {
      icon: <Check className="w-10 h-10 text-cyan-400" />,
      text: m.homepage_feature_typesafe(),
    },
    {
      icon: <Code2 className="w-10 h-10 text-cyan-400" />,
      text: m.homepage_feature_routing(),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {m.homepage_title()}
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-400 mb-6 font-light">
            {m.homepage_subtitle()}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {m.homepage_description()}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {m.homepage_feature_title()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <p className="text-gray-300 text-center leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Example Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          {m.homepage_example_title()}
        </h2>
        
        {/* Live Example */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <p className="text-xl text-center text-cyan-400 mb-4">
            {m.homepage_example_greeting({ name: 'Developer' })}
          </p>
          <p className="text-sm text-gray-400 text-center">
            Current language: <code className="text-cyan-400">{currentLanguage}</code>
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Code Example:</h3>
          <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-300">
{`import * as m from './paraglide/messages.js'

// Use translated messages
m.homepage_title() // "${m.homepage_title()}"
m.homepage_example_greeting({ name: 'John' }) 
// "${m.homepage_example_greeting({ name: 'John' })}"

// Get current language
import { getLocale } from './paraglide/runtime.js'
getLocale() // "${currentLanguage}"`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  )
}
