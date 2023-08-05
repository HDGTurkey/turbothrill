/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import EventClassic from "../../app/data/event/EventClassic.json";
import GuestListClassic from "../../app/data/event/GuestListClassic.json";
import { useSite } from "../../app/context/Context";
import { useRouter } from "next/router";

// image icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

import { AGCContext } from "../../app/context/AGCProvider";
import { events as eventsModel } from "../../app/model/events.js";
import Breadcrumb from "@/app/components/breadcrumb";

const EventDetailPage: React.FC = () => {
  const themeData = useSite();

  const agcContext = useContext(AGCContext);
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState<Events[]>([]);

  const router = useRouter();

  interface Events {
    name: string;
    slug_name: string;
    description: string;
    date: Date;
    state: string;
    local_name: string;
    local_address: string;
  }

  async function getEvent(slugName: string) {
    setLoading(true);
    const data = await agcContext.executeQueryWhere(
      eventsModel,
      "slug_name",
      slugName,
    );
    setEventData(data);
  }

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      const slugName = slug.toString().toLowerCase();
      getEvent(slugName);
    }
  }, [router.query]);

  useEffect(() => {
    setLoading(false);
    console.log(eventData);
  }, [eventData]);

  // eventData[0]?.date verisini tarih nesnesine dönüştür
  const date = eventData[0]?.date ? new Date(eventData[0]?.date) : null;

  // Tarih nesnesi boş değilse saat ve dakika bilgilerini al
  const formattedTime = date
    ? `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`
    : "";

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className=" ">
      <Breadcrumb title={eventData[0]?.name} />

      <div className=" mx-auto">
        <div className=" p-3 "></div>
        <div
          className={`} container grid grid-cols-1 justify-center shadow-lg lg:flex lg:grid-cols-2`}
        >
          <div
            className={`w-auto ${
              themeData.theme === "light"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            <div className="   ">
              <div className="mx-auto flex  p-2 ">
                <img
                  alt="img"
                  className=" mx-auto mt-8 rounded-md bg-gray-300 p-2 "
                  src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508957542%2F676x380.webp&w=3840&q=75"
                ></img>
              </div>
              <p className="container my-8 px-5 text-left ">
                {eventData[0]?.description}Buradaki kod, React'ta işlevsel
                bileşenler ve bazı özel özel kancalar (hooks) kullanılarak bir
                Header bileşeni oluşturan bir örnektir. <br />
                <br /> Burada useEffect kancasını, fetch işlemini çağırmak için
                kullanıyorsunuz ve getLogo fonksiyonu içinde asenkron bir çağrı
                yapılıyor. Ancak, bu kodda fetch işlemini her useEffect ile ayrı
                değil, sadece bir kez yapılıyor çünkü useEffect'in bağımlılık
                dizisi boş ([]) olarak geçilmiş. Bu da, yalnızca bileşen ilk kez
                oluşturulduğunda fetch işlemini çağıracağı anlamına gelir. Eğer
                fetch <br />
                <br /> işlemini her useEffect ile ayrı yapmak istiyorsanız,
                useEffect'in bağımlılık dizisine logoData'yı ekleyebilirsiniz.
                Böylece, logoData değiştiğinde (fetch işlemi tamamlandığında)
                useEffect tekrar çalışacaktır. Aşağıda kodda bu değişikliği
                görebilirsiniz: Buradaki kod, React'ta işlevsel bileşenler ve
                bazı özel özel kancalar (hooks) kullanılarak bir Header bileşeni
                oluşturan bir örnektir. Burada <br />
                <br /> useEffect kancasını, fetch işlemini çağırmak için
                kullanıyorsunuz ve getLogo fonksiyonu içinde asenkron bir çağrı
                yapılıyor. Ancak, bu kodda fetch işlemini her useEffect ile ayrı
                değil, sadece bir kez yapılıyor çünkü useEffect'in bağımlılık
                dizisi boş ([]) olarak geçilmiş. Bu da, yalnızca bileşen ilk kez
                oluşturulduğunda fetch işlemini çağıracağı anlamına gelir. Eğer
                fetch işlemini her useEffect ile ayrı yapmak istiyorsanız,
                useEffect'in bağımlılık dizisine logoData'yı ekleyebilirsiniz.
                Böylece, logoData değiştiğinde (fetch işlemi tamamlandığında)
                useEffect tekrar <br />
                <br /> çalışacaktır. Aşağıda kodda bu değişikliği
                görebilirsiniz: Buradaki kod, React'ta işlevsel bileşenler ve
                bazı özel özel kancalar (hooks) kullanılarak bir Header bileşeni
                oluşturan bir örnektir. Burada useEffect kancasını, fetch
                işlemini çağırmak için kullanıyorsunuz ve getLogo fonksiyonu
                içinde asenkron bir çağrı yapılıyor. Ancak, bu kodda fetch
                işlemini her useEffect ile ayrı değil, sadece bir kez yapılıyor
                çünkü useEffect'in bağımlılık dizisi boş ([]) olarak geçilmiş.
                Bu da, yalnızca <br />
                <br /> bileşen ilk kez oluşturulduğunda fetch işlemini
                çağıracağı anlamına gelir. Eğer fetch işlemini her useEffect ile
                ayrı yapmak istiyorsanız, useEffect'in bağımlılık dizisine
                logoData'yı ekleyebilirsiniz. Böylece, logoData değiştiğinde
                (fetch işlemi tamamlandığında) useEffect tekrar çalışacaktır.
                Aşağıda kodda bu değişikliği görebilirsiniz: Buradaki kod,
                React'ta işlevsel bileşenler ve bazı özel özel kancalar (hooks)
                kullanılarak bir Header bileşeni oluşturan bir örnektir. Burada
                useEffect kancasını, fetch işlemini çağırmak için
                kullanıyorsunuz ve getLogo fonksiyonu içinde asenkron bir çağrı
                yapılıyor. Ancak, bu kodda fetch işlemini her useEffect ile ayrı
                değil, sadece bir <br /> kez yapılıyor çünkü useEffect'in
                bağımlılık dizisi boş ([]) olarak geçilmiş. Bu da, yalnızca
                bileşen ilk kez oluşturulduğunda fetch işlemini çağıracağı
                anlamına gelir. Eğer fetch işlemini her useEffect ile ayrı
                yapmak istiyorsanız, useEffect'in bağımlılık dizisine
                logoData'yı ekleyebilirsiniz. Böylece, logoData değiştiğinde
                (fetch işlemi tamamlandığında) useEffect tekrar çalışacaktır.
                Aşağıda kodda bu değişikliği görebilirsiniz:
              </p>
            </div>
          </div>
          <div className={`} m-5  space-y-4`}>
            <div className="mb-3 flex rounded-lg bg-red-100 p-2  ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  className="mx-auto"
                >
                  <linearGradient
                    id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
                    x1="7.534"
                    x2="27.557"
                    y1="7.534"
                    y2="27.557"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f44f5a"></stop>
                    <stop offset=".443" stopColor="#ee3d4a"></stop>
                    <stop offset="1" stopColor="#e52030"></stop>
                  </linearGradient>
                  <path
                    fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
                    d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
                  ></path>
                  <linearGradient
                    id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
                    x1="27.373"
                    x2="40.507"
                    y1="27.373"
                    y2="40.507"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#a8142e"></stop>
                    <stop offset=".179" stopColor="#ba1632"></stop>
                    <stop offset=".243" stopColor="#c21734"></stop>
                  </linearGradient>
                  <path
                    fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
                    d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
                  ></path>
                </svg>
              </div>
              <div className={`} mx-auto text-lg font-bold  text-black`}>
                {eventData[0]?.state}
              </div>
            </div>

            <div
              className={`b-5 flex w-auto  items-start justify-around space-x-4 rounded-lg border-2 border-solid px-3 py-2  shadow-md ${
                themeData.theme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <div className="flex ">
                {" "}
                <CalendarTodayIcon></CalendarTodayIcon>
                <p className=" px-1">
                  {eventData[0]?.date
                    ? new Date(eventData[0]?.date).toLocaleDateString()
                    : ""}
                </p>
              </div>
              <div className="flex">
                <AccessTimeIcon></AccessTimeIcon>
                <p className=" px-1">{formattedTime}</p>
              </div>
            </div>
            <div
              className={`b-5 flex w-auto  items-start space-x-4 rounded-lg border-2 border-solid px-3 py-2 shadow-md ${
                themeData.theme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <LocationOnIcon></LocationOnIcon>
              <div className="justify-items-start">
                <p>Local Name : {eventData[0]?.locName}</p>
              </div>
            </div>
            <div
              className={`b-5 flex w-auto  items-start space-x-4 rounded-lg border-2 border-solid px-3 py-2 shadow-md ${
                themeData.theme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <MapIcon></MapIcon>
              <div className="justify-items-start ">
                <p>Local Address : {eventData[0]?.local_address}</p>
              </div>
            </div>
            <div
              className={` '  } mb-5 w-auto rounded-lg border-2 border-solid
                        shadow-md`}
            >
              <div className="m-3 text-center text-2xl font-bold text-black ">
                Konuklar
              </div>
              <div className="container mx-auto grid grid-cols-1 items-center justify-center">
                {GuestListClassic.map((guest, id) => (
                  <div key={id} className="mb-8 text-center">
                    <div className="mx-auto">
                      <div className="flex justify-center">
                        <img
                          alt="img"
                          className="w-[150px] rounded-full"
                          src={`${guest.img}`}
                        />
                      </div>
                      <div className="mx-auto flex justify-center">
                        <p className="text-lg font-medium text-gray-800">
                          {guest.name}
                        </p>
                      </div>
                      <div className="mx-auto flex justify-center">
                        <p className="text-sm font-light italic">
                          {guest.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
