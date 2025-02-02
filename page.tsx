import { properties } from "./data/properties"
import { PropertyGallery } from "./components/property-gallery"
import { PropertySection } from "./components/property-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4">
        {/* First property with gallery */}
        <section className="py-12">
          <h1 className="text-3xl font-bold mb-8">{properties[0].title}</h1>
          <PropertyGallery images={properties[0].images} />
        </section>

        {/* Property sections */}
        <div className="space-y-12">
          {properties.map((property, index) => (
            <PropertySection key={property.id} property={property} imagePosition={index % 2 === 0 ? "right" : "left"} />
          ))}
        </div>
      </main>
    </div>
  )
}

