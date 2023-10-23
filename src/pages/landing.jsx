import Layout from '../layout/base'
import Pricing from '../components/pricing'
import Testimonials from '../components/testimonials'
import Hero from '../components/sections/hero'
import Features from '../components/sections/features'
import FAQ from '../components/sections/faq'
import Integrations from '../components/sections/integration'

export default function Landing() {
  return <>
    <Layout>
      <Hero/>
      <Features/>
      <Pricing />
      <Testimonials />
      <Integrations/>
      <FAQ/>
    </Layout>
  </>
}

