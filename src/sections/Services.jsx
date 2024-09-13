import { ServiceCard } from "../components"
import { services } from "../constants/data"

const Services = () => {
  return (
    <section id="services" className="max-container flex flex-wrap justify-center gap-[36px] ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services