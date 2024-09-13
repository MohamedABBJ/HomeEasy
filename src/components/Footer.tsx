"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const Footer = () => {
  const tabsListRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: -20, behavior: "smooth" })
      console.log(tabsListRef.current?.scrollLeft);
      console.log(tabsListRef.current?.scrollWidth);
    }

  }
  const scrollRight = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: 20, behavior: "smooth" })
    }
  }


  return (
    <section className="bg-footer px-10 py-12">
      <h2 className="font-medium text-text text-[1.375rem] leading-[1.182em] tracking-[-0.01em] mb-2">Inspiration for future getaways</h2>

      <Tabs defaultValue='popular'>
        <div className="relative flex items-center justify-between w-full px-3 mx-[-12px] after:absolute after:content-[''] after:bg-divider after:w-full after:h-[1px] after:bottom-[-2px]" >
          <button onClick={scrollLeft} className="absolute top-0 left-0 flex items-center justify-center h-full w-10 z-10 bg-footer rounded-full">
            <ChevronLeft />
          </button>
          <TabsList ref={tabsListRef} className="bg-footer h-full overflow-x-auto no-scrollbar">
            <TabsTrigger value="popular">Popular</TabsTrigger>
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
          <button onClick={scrollRight} className="absolute right-0 top-0 flex items-center justify-center h-full w-10 z-10 bg-footer rounded-full">
            <ChevronRight />
          </button>
        </div>
        <TabsContent value="popular">Popular Content</TabsContent>
      </Tabs>
    </section>

  )
}

export default Footer
