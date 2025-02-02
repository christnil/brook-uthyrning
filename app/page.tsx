import { accomodations, mainProperty } from "@/data/properties"
import { HeroSection } from "@/components/hero-section"
import { PropertySection } from "@/components/property-section"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection heroImage={mainProperty.heroImage} />
      <main className="container mx-auto px-4">
        {/* General information section */}
        <section className="py-12">
          <h1 className="text-3xl font-bold mb-6">Kinnerstugan</h1>
          {mainProperty.generalInfo.map((info, index) => (
            <p key={index} className="text-gray-700 whitespace-pre-line mt-4">{info}</p>
          ))}
        </section>

        <Separator className="my-8" />

        {/* Property sections */}
        <div className="space-y-12">
          {accomodations.map((property, index) => (
            <div key={property.id}>
              <PropertySection property={property} imagePosition={index % 2 === 0 ? "right" : "left"} />
              {index < accomodations.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

