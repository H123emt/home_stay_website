// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { rooms } from "@/data/rooms";
// import Container from "@/components/common/Container";
// import RoomGallery from "@/components/rooms/RoomGallery";
// import RoomAmenities from "@/components/rooms/RoomAmenities";
// import RoomPricing from "@/components/rooms/RoomPricing";
// import ScrollReveal from "@/components/animations/ScrollReveal";
// import { Users, Maximize2, Star } from "lucide-react";

// interface Props {
//   params: { id: string };
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const room = rooms.find((r) => r.id === params.id);
//   if (!room) return { title: "Room Not Found | Misthaven" };
//   return {
//     title: `${room.name} | Misthaven`,
//     description: room.shortDescription,
//   };
// }

// export async function generateStaticParams() {
//   return rooms.map((r) => ({ id: r.id }));
// }

// export default function RoomDetailPage({ params }: Props) {
//   const room = rooms.find((r) => r.id === params.id);
//   if (!room) notFound();

//   return (
//     <div className="pt-24 pb-20 min-h-screen">
//       <Container>
//         {/* Header */}
//         <ScrollReveal>
//           <div className="mb-10">
//             <p className="text-[#6B7A52] text-xs uppercase tracking-[0.25em] mb-2">
//               {room.category}
//             </p>
//             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
//               <h1 className="text-4xl md:text-5xl font-serif text-[#112211]">
//                 {room.name}
//               </h1>
//               <div className="flex items-center gap-4 text-[#2D3748] text-sm flex-shrink-0">
//                 <span className="flex items-center gap-1.5">
//                   <Star className="w-4 h-4 text-[#B08D57] fill-[#B08D57]" />
//                   {room.rating}
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <Users className="w-4 h-4 text-[#6B7A52]" />
//                   {room.maxGuests} Guests
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <Maximize2 className="w-4 h-4 text-[#6B7A52]" />
//                   {room.size} m²
//                 </span>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* Gallery */}
//         <ScrollReveal>
//           <RoomGallery images={room.images} roomName={room.name} />
//         </ScrollReveal>

//         {/* Content Grid */}
//         <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-2 space-y-12">
//             {/* Description */}
//             <ScrollReveal>
//               <div>
//                 <h2 className="text-2xl font-serif text-[#112211] mb-4">About This Room</h2>
//                 <p className="text-[#2D3748] leading-relaxed text-base">
//                   {room.description}
//                 </p>
//               </div>
//             </ScrollReveal>

//             {/* Amenities */}
//             <ScrollReveal>
//               <div>
//                 <h2 className="text-2xl font-serif text-[#112211] mb-6">Amenities</h2>
//                 <RoomAmenities amenities={room.amenities} />
//               </div>
//             </ScrollReveal>

//             {/* Policies */}
//             <ScrollReveal>
//               <div className="bg-[#112211]/4 rounded-2xl p-6">
//                 <h2 className="text-xl font-serif text-[#112211] mb-4">Stay Policies</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#2D3748]">
//                   <div>
//                     <p className="font-medium text-[#112211] mb-1">Check-in</p>
//                     <p>From 2:00 PM onwards</p>
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#112211] mb-1">Check-out</p>
//                     <p>By 11:00 AM</p>
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#112211] mb-1">Cancellation</p>
//                     <p>Free up to 48 hours before</p>
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#112211] mb-1">Pets</p>
//                     <p>Not permitted</p>
//                   </div>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>

//           {/* Pricing Sidebar */}
//           <div className="lg:col-span-1">
//             <RoomPricing room={room} />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }






















import { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import Container from "@/components/common/Container";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RoomPricing from "@/components/rooms/RoomPricing";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Users, Maximize2 } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    return {
      title: "Room Not Found | Misthaven",
    };
  }

  return {
    title: `${room.name} | Misthaven`,
    description: room.tagline,
  };
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default function RoomDetailPage({ params }: Props) {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <Container>
        {/* Header */}
        <ScrollReveal>
          <div className="mb-10">
            <p className="text-[#6B7A52] text-xs uppercase tracking-[0.25em] mb-2">
              {room.category}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-[#112211]">
                  {room.name}
                </h1>
                <p className="mt-3 text-[#2D3748] text-lg italic">
                  {room.tagline}
                </p>
              </div>

              <div className="flex items-center gap-6 text-[#2D3748] text-sm flex-shrink-0">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#6B7A52]" />
                  {room.maxGuests} Guests
                </span>

                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-4 h-4 text-[#6B7A52]" />
                  {room.sizeSqFt} sq ft
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <ScrollReveal>
          <RoomGallery images={room.images} roomName={room.name} />
        </ScrollReveal>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-serif text-[#112211] mb-4">
                  About This Room
                </h2>
                <p className="text-[#2D3748] leading-relaxed text-base">
                  {room.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Amenities */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-serif text-[#112211] mb-6">
                  Amenities
                </h2>
                <RoomAmenities amenities={room.amenities} />
              </div>
            </ScrollReveal>

            {/* Policies */}
            <ScrollReveal>
              <div className="bg-[#112211]/4 rounded-2xl p-6">
                <h2 className="text-xl font-serif text-[#112211] mb-4">
                  Stay Policies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#2D3748]">
                  <div>
                    <p className="font-medium text-[#112211] mb-1">Check-in</p>
                    <p>From 2:00 PM onwards</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#112211] mb-1">Check-out</p>
                    <p>By 11:00 AM</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#112211] mb-1">
                      Cancellation
                    </p>
                    <p>Free up to 48 hours before</p>
                  </div>

                  <div>
                    <p className="font-medium text-[#112211] mb-1">Pets</p>
                    <p>Not permitted</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <RoomPricing room={room} />
          </div>
        </div>
      </Container>
    </div>
  );
}