import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Footer = () => {
  return (
    <section className="bg-footer px-10 py-12">
      <h2 className="font-medium text-text text-[1.375rem] leading-[1.182em] tracking-[-0.01em] mb-2">Inspiration for future getaways</h2>
      <Tabs defaultValue='popular' className="overflow-hidden">
        <TabsList className="bg-footer">
          <TabsTrigger className='ml-[-10px]' value="popular">Popular</TabsTrigger>
          <TabsTrigger value="artsAndCulture">Arts & Culture</TabsTrigger>
          <TabsTrigger value="outdoors">Outdoors</TabsTrigger>
          <TabsTrigger value="mountains">Mountains</TabsTrigger>
          <TabsTrigger value="beach">Beach</TabsTrigger>
          <TabsTrigger value="uniqueStays">Unique stays</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="thingsToDo">Things to do</TabsTrigger>
          <TabsTrigger value="travelTipsAndInspiration">Travel tips & inspiration</TabsTrigger>
          <TabsTrigger value="airbnb-FriendlyApartments">Airbnb-friendly apartments</TabsTrigger>
        </TabsList>
        <div className="bg-divider w-full h-[1px] mt-[5px]"></div>
      </Tabs>
    </section>

  )
}

export default Footer
