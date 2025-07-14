
export default function Header(){

    // first div : swiggy logo , swiggy Corporate, Partner with us , Get the app , sign in 

    return(
        <>
        <header className="bg-[#ff5200] font-serif ">
            <div className="flex justify-between container mx-auto py-9">
            <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />
                 <div className="bg-[#ff5200]  text-white text-base font-bold flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border-1 border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get the App </a>
                    <a className="border-2 border-black bg-black py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                 </div>
            </div>





            <div className="pt-16 pb-8 relative">

                <img className="h-110 w-60 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>

                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>

                <div className="text-white text-4xl  font-bold  max-w-[60%]  container mx-auto text-center">
                    Order Food and grocerises, Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[60%] container mx-auto flex justify-center mt-5 gap-5">
                    <input className="h-15 font-extralight font-3.5 text-center bg-white border-1 rounded-2xl px-4 py-4 flex gap-2.5 w-79.25 text-base" placeholder="Delhi , India "></input>
                    <input className="h-15 font-extralight font-3.5 text-center bg-white border-1 rounded-2xl px-4 py-4 flex gap-2.5 w-121 text-base" placeholder="Search for restaurant and items for more 🔍 "></input>

                </div>
            </div>



            <div className="max-w-[80%] container mx-auto flex">



                <a href="https://www.swiggy.com/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Food">
                </img></a>



                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png">
                </img></a>



                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></a>



                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png">
                </img></a>



            </div>

        </header>
        </>
    )
}