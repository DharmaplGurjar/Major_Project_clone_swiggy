// export default function DineCard({ RestData }) {
//     return (
//       <div className="max-w-sm flex-none mr-5">
//         <div className="relative">
//           <img className="h-70"  src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url} alt="Restaurant" />
//           <p className="absolute bottom-4 left-4 text-2xl text-white">{RestData?.info?.name}</p>
//           <p className=" absolute bottom-4 right-4 text-2xl display-inline text-white">{RestData?.info?.rating?.value}<svg width="30" height="30" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

//           <circle cx="32" cy="32" r="30" fill="green" />

 
//           <polygon 
//             points="32,4 39,23 60,23 43,36 
//             50,56 32,44 14,56 21,36 
//             4,23 25,23" 
//           fill="white"
//           />
//         </svg>

//           </p>
//         </div>
//       </div>
//     );
//   }
  

// export default function DineCard({ RestData }) {
//     return (
//       <div className="max-w-sm flex-none mr-5">
//         <div className="relative">
//           {/* Restaurant Image */}
//           <img
//             className="h-70 w-full object-cover rounded-md"
//             src={
//               "https://media-assets.swiggy.com/swiggy/image/upload/" +
//               RestData?.info?.mediaFiles[0]?.url
//             }
//             alt="Restaurant"
//           />
  
//           {/* Restaurant Name */}
//           <p className="absolute bottom-4 left-4 text-xl font-semibold text-white drop-shadow-md">
//             {RestData?.info?.name}
//           </p>
  
//           {/* Rating with Star Icon */}
//           <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-lg font-medium drop-shadow-md">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 64 64"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="32" cy="32" r="30" fill="green" />
//               <polygon
//                 points="32,4 39,23 60,23 43,36 
//                         50,56 32,44 14,56 21,36 
//                         4,23 25,23"
//                 fill="white"
//               />
//             </svg>
//             <span>{RestData?.info?.rating?.value}</span>
//           </div>
//         </div>
//       </div>
//     );
//   }



// export default function DineCard({ RestData }) {
//     return (
//       <div className="w-80 rounded-lg shadow-md border overflow-hidden font-sans">
//         {/* Image with name and rating overlay */}
//         <div className="relative">
//           <img
//             className="h-44 w-full object-cover"
//             src={
//               "https://media-assets.swiggy.com/swiggy/image/upload/" +
//               RestData?.info?.mediaFiles[0]?.url
//             }
//             alt={RestData?.info?.name}
//           />
//           {/* Name */}
//           <p className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow-sm">
//             {RestData?.info?.name}
//           </p>
//           {/* Rating with icon */}
//           <div className="absolute top-2 right-2 flex items-center bg-white/80 px-2 py-1 rounded-full text-sm font-medium">
//             <span className="mr-1">{RestData?.info?.rating?.value}</span>
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 64 64"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="32" cy="32" r="30" fill="green" />
//               <polygon
//                 points="32,4 39,23 60,23 43,36 
//                         50,56 32,44 14,56 21,36 
//                         4,23 25,23"
//                 fill="white"
//               />
//             </svg>
//           </div>
//         </div>
  
//         {/* Info Section */}
//         <div className="p-3 text-sm text-gray-800">
//           <p>{RestData?.info?.cuisines}</p>
//           <p className="text-gray-600">{RestData?.info?.costForTwo}</p>
//           <p className="text-gray-500">{RestData?.info?.locality}</p>
//           <p className="text-gray-500">{RestData?.info?.locationInfo?.distanceString}</p>
  
//           {/* Table Booking Badge */}
//           <div className="inline-block mt-2 px-2 py-1 text-xs border rounded-xl text-gray-600 bg-gray-300  ">
//             Table booking
//           </div>
  
//           {/* Offer Badges */}
//           <div className="mt-2 space-y-1">
//             <div className="bg-green-800 text-white font-medium text-sm px-3 py-1 rounded-xl">
//               <span className="font-semibold">{RestData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}</span> on pre-booking + 3 more
//             </div>
//             <div className="text-green-700 bg-green-200 rounded-xl">{RestData?.info?.vendorOffer?.infos[0]?.description}</div>
//             {/* <div className="text-xs text-blue-500">Get extra 10% off using SAVE15UPI</div> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
  
  


// export default function DineCard({ RestData }) {
//   return (
//     <div className="w-96 rounded-xl shadow-md border overflow-hidden font-sans flex-none mr-4">
//       <a target="_blank" href={RestData.cta.link}>
//       {/* Image with name and rating overlay */}
//       <div className="relative">
//         <img
//           className="h-50 w-full object-cover"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/" +
//             RestData?.info?.mediaFiles[0]?.url
//           }
//           alt={RestData?.info?.name}
//         />

//         {/* Name */}
//         <p className="absolute bottom-1 left-2 text-white text-xl font-semibold drop-shadow">
//           {RestData?.info?.name}
//         </p>

//         {/* Rating with icon */}
//         <p className="absolute bottom-1 right-2 flex items-center bg-white/90 px-2 py-1 rounded-3xl text-sm font-medium">

//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 64 64"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="32" cy="32" r="30" fill="green" />
//             <polygon
//               points="32,4 39,23 60,23 43,36 
//                       50,56 32,44 14,56 21,36 
//                       4,23 25,23"
//               fill="white"
//             />
//           </svg>
//           <span className="mr-1">{RestData?.info?.rating?.value}</span>
//         </p>
//       </div>



//       {/* Info Section */}
//       <div className="p-4 text-sm text-gray-800">

//         <p className="mb-1 ab">{RestData?.info?.cuisines}</p>
//         <p className="text-gray-600 mb-1">{RestData?.info?.costForTwo}</p>


//         <p className="text-gray-500 absolute bottom-3 left-3">{RestData?.info?.locality}</p>
//         <p className="text-gray-500 mb-2 absolute bottom-3 left-3">{RestData?.info?.locationInfo?.distanceString}</p>

//         {/* Table Booking Badge */}
//         <div className="inline-block px-2 py-1 text-xs border rounded-xl text-gray-600 bg-gray-200 mb-2">
//           Table booking
//         </div>

//         {/* Offer Badges */}
//         <div className="space-y-2">
//           {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header && (
//             <div className="bg-green-800 text-white font-medium text-sm px-3 py-1 rounded-xl">
//               <span className="font-semibold">
//                 {RestData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header}
//               </span>{" "}
//               on pre-booking + 3 more
//             </div>
//           )}
//           {RestData?.info?.vendorOffer?.infos?.[0]?.description && (
//             <div className="text-green-700 bg-green-200 px-3 py-1 rounded-xl text-sm">
//               {RestData?.info?.vendorOffer?.infos[0]?.description}
//             </div>
//           )}
//         </div>
//       </div>
//       </a>
//     </div>
//   );
// }
export default function DineCard({ RestData }) {
  return (
    <div className="w-96 rounded-xl shadow-md border overflow-hidden font-sans flex-none mr-4">
      <div className="relative">
        <img
          className="h-56 w-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            RestData?.info?.mediaFiles?.[0]?.url
          }
          alt={RestData?.info?.name}
        />

        {/* Restaurant name */}
        <p className="absolute bottom-3 left-3 text-white text-xl font-semibold drop-shadow">
          {RestData?.info?.name}
        </p>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center bg-white/90 px-2 py-1 rounded-full text-sm font-medium">
          <span className="mr-1">{RestData?.info?.rating?.value}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="30" fill="green" />
            <polygon
              points="32,4 39,23 60,23 43,36 
                      50,56 32,44 14,56 21,36 
                      4,23 25,23"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Details section */}
      <div className="p-4 text-sm text-gray-800">
        <p className="mb-1">{RestData?.info?.cuisines?.join(" • ")}</p>
        <p className="text-gray-600 mb-1">{RestData?.info?.costForTwo}</p>
        <p className="text-gray-500">{RestData?.info?.locality}</p>
        <p className="text-gray-500 mb-2">
          {RestData?.info?.locationInfo?.distanceString}
        </p>

        {/* Table booking */}
        <div className="inline-block px-2 py-1 text-xs border rounded-xl text-gray-600 bg-gray-200 mb-2">
          Table booking
        </div>

        {/* Offers */}
        <div className="space-y-2">
          {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header && (
            <div className="bg-green-800 text-white font-medium text-sm px-3 py-1 rounded-xl">
              <span className="font-semibold">
                {RestData.info.offerInfoV2.otherOffers.offers[0].header}
              </span>{" "}
              on pre-booking + 3 more
            </div>
          )}
          {RestData?.info?.vendorOffer?.infos?.[0]?.description && (
            <div className="text-green-700 bg-green-200 px-3 py-1 rounded-xl text-sm">
              {RestData.info.vendorOffer.infos[0].description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
