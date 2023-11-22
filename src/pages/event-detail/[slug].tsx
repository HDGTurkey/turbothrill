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

import "@agconnect/instance";
import "@agconnect/auth";
import "@agconnect/cloudstorage";
import TeamImage from "@/pages/team/TeamImage";

const EventDetailPage: React.FC = () => {
  const themeData = useSite();

  const agcContext = useContext(AGCContext);
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState<Events[]>([]);

  const router = useRouter();

  const [img, setImg] = useState("");

  interface Events {
    name: string;
    imgs: string;
    slug_name: string;
    description: string;
    date: Date;
    state: string;
    status_event: string;
    local_name: string;
    local_address: string;
    moderator: string;
    organizer: string;
  }

  async function getEvent(slugName: string) {
    setLoading(true);
    try {
      const data = await agcContext.executeQueryWhere(
        eventsModel,
        "slug_name",
        slugName,
      );
      setEventData(data);
      if (data.length > 0) {
        setImg(data[0].imgs);
      }
    } catch (error) {
      console.error("An error occurred while fetching the event:", error);
    }
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
    <div className="">
      <Breadcrumb title={eventData[0]?.name} />

      <div className=" mx-auto">
        <div className=" p-3 "></div>
        <div className={`container grid grid-cols-1 shadow-lg  lg:grid-cols-3`}>
          <div className={`col-span-2 `}>
            <div className="">
              <div className="mx-auto flex  p-5 ">
                <TeamImage imgPath={img} width="1250px" alt="" />
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
          <div className={` m-5 space-y-4 p-2.5`}>
            <div
              className={`mx-auto mb-3 flex rounded-lg p-2 text-lg font-bold text-black ${eventData[0]?.status_event === "active"
                  ? "bg-green-300"
                  : "bg-red-500"
                }`}
            >
              <div>
                {eventData[0]?.status_event === "active" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    className="mx-auto"
                  >
                    <path
                      fill="#00FF00"
                      d="M24 1.717C11.887 1.717 1.717 11.888 1.717 24S11.887 46.283 24 46.283 46.283 36.112 46.283 24 36.113 1.717 24 1.717zm0 42.566C13.373 44.283 4.283 35.193 4.283 24S13.373 3.717 24 3.717 43.717 12.807 43.717 24 34.627 44.283 24 44.283zm7.087-26.768a1.433 1.433 0 00-2.038 0L20.05 31.672l-4.133-4.133a1.433 1.433 0 00-2.038 0c-.562.562-.562 1.476 0 2.038l5.288 5.288a1.433 1.433 0 002.038 0L35.08 15.207c.562-.562.562-1.476 0-2.038z"
                    ></path>
                  </svg>
                ) : (
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
                )}
              </div>
              <div
                className={`mx-auto text-lg font-bold  capitalize text-white`}
              >
                {eventData[0]?.status_event}
              </div>
            </div>

            <div
              className={` flex w-auto  space-x-4 rounded-lg border-2 border-solid bg-white px-3  py-2 text-black shadow-md`}
            >
              <div className="flex">
                <CalendarTodayIcon></CalendarTodayIcon>
                <p className="mr-1 rounded-md bg-gray-200 px-3 pl-3">
                  {eventData[0]?.date
                    ? new Date(eventData[0]?.date).toLocaleDateString()
                    : ""}
                </p>
              </div>
              <div className="flex">
                <AccessTimeIcon></AccessTimeIcon>
                <p className="mr-1 rounded-md bg-gray-200 px-3 pl-3">
                  {formattedTime}
                </p>
              </div>
            </div>
            <div
              className={`flex space-x-4 rounded-lg border-2 border-solid bg-white px-3 py-2 text-black shadow-md`}
            >
              <LocationOnIcon></LocationOnIcon>
              <div className="text-left">
                <p>
                  {" "}
                  <span className="font-bold">Local Name : </span>{" "}
                  {eventData[0]?.local_name}
                </p>
              </div>
            </div>
            <div
              className={`b-5 flex w-auto  items-start space-x-4 rounded-lg border-2 border-solid px-3 py-2 shadow-md ${themeData.theme === "light"
                  ? "bg-white text-black"
                  : "bg-black text-white"
                }`}
            >
              <MapIcon></MapIcon>
              <div className="text-left ">
                <p>
                  <span className="font-bold">Local Address :</span>{" "}
                  {eventData[0]?.local_address}
                </p>
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
            <div
              className={` '  } mb-5 w-auto rounded-lg border-2 border-solid
                        shadow-md`}
            >
              <div className="m-3 text-center text-2xl font-bold text-black ">
                Yayın Akışı
              </div>
              <div className="container mx-auto grid grid-cols-1 items-center justify-center">
                <div className="mx-auto my-1 flex justify-between gap-3">
                  <div className=" text-md justify-center">Moderator :</div>
                  <div className="mx-auto  justify-center">
                    <p className="text-sm font-medium text-gray-800">
                      {`${eventData[0]?.moderator}`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mx-auto grid grid-cols-1 items-center justify-center">
                <div className="mx-auto my-1 flex justify-between gap-3">
                  <div className=" text-md justify-center">Organizator :</div>
                  <div className="mx-auto  justify-center">
                    <p className="text-sm font-medium text-gray-800">
                      {`${eventData[0]?.organizer}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
