"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

const GetawaysInspiration = () => {
  const tabsListRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const updateButtonVisibility = () => {
    if (tabsListRef.current) {
      const scrollLeft = tabsListRef.current.scrollLeft
      const scrollWidth = tabsListRef.current.scrollWidth
      const clientWidth = tabsListRef.current.clientWidth

      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft + clientWidth < scrollWidth)
    }
  }

  const scrollLeft = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: -50, behavior: "smooth" })
      updateButtonVisibility()
    }
  }

  const scrollRight = () => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: 50, behavior: "smooth" })
      updateButtonVisibility()
    }
  }

  return (
    <section className="bg-footer px-10 py-12">
      <h2 className="font-medium text-text text-[1.375rem] leading-[1.182em] tracking-[-0.01em] mb-2">Inspiration for future getaways</h2>

      <Tabs defaultValue='popular' className="">
        <div className="tabslist-container relative">
          <div className="items-center justify-between w-full px-3 mx-[-12px] overflow-hidden" >
            <TabsList ref={tabsListRef} className="h-full p-0 bg-footer whitespace-nowrap overflow-hidden">
              <TabsTrigger className='p-[10px] m-[6px] ml-[-10px]' value="popular">Popular</TabsTrigger>
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
          </div>
          <div className="divider w-full h-[1px] bg-divider"></div>
          {showLeftButton && (
            <button onClick={scrollLeft} className="absolute left-[-12px] top-0 flex items-center justify-start h-full w-10 z-10 bg-gradient-to-r from-footer from-50%">
              <ChevronLeft />
            </button>
          )}
          {showRightButton && (
            <button onClick={scrollRight} className="absolute right-[-12px] top-0 flex items-center justify-end h-full w-10 z-10 bg-gradient-to-l from-footer from-50%">
              <ChevronRight />
            </button>
          )}
        </div>
        <div>
          <TabsContent value="popular">
            Popular Content
          </TabsContent>
          <TabsContent value="artsAndCulture">
            Arts & Culture
          </TabsContent>
          <TabsContent value="outdoors">
            Outdoors
          </TabsContent>
          <TabsContent value="mountains">
            Mountains
          </TabsContent>
          <TabsContent value="beach">
            Beach
          </TabsContent>
          <TabsContent value="uniqueStays">
            Unique stays
          </TabsContent>
          <TabsContent value="categories">
            Categories
          </TabsContent>
          <TabsContent value="thingsToDo">
            Things to do
          </TabsContent>
          <TabsContent value="travelTipsAndInspiration">
            Travel tips & inspiration
          </TabsContent>
          <TabsContent value="airbnb-FriendlyApartments">
            Airbnb-friendly apartments
          </TabsContent>
        </div>
      </Tabs>
    </section>
  )
}

export default GetawaysInspiration
