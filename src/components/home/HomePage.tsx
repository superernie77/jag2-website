import Hero from './Hero';
import Pillars from './Pillars';
import ServicesOverview from './ServicesOverview';
import WhyJAG from './WhyJAG';
import ProofBand from './ProofBand';
import SocialProof from './SocialProof';
import CTABand from '../CTABand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesOverview />
      <WhyJAG />
      <ProofBand />
      <SocialProof />
      <CTABand
        title="Ready to brief JAG?"
        caption="Tell us about the system, the deadline, and the question. A reply within 24 hours on business days."
        primaryLabel="Contact JAG"
        href="/contact"
      />
    </>
  );
}
