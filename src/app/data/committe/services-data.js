import { Bulb, Code, Managed } from "../../../svg";

const services_data = [
  {
    id: 1,
    duration: ".5s",
    delay: ".8s",
    img: "/assets/img/service/service-1.png",
    title: "Ideation & Evaluation",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 2,
    duration: ".7s",
    delay: "1s",
    img: "/assets/img/service/service-2.png",
    title: "Ideation & Evaluation",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 3,
    duration: ".9s",
    delay: "1.2s",
    img: "/assets/img/service/service-3.png",
    title: "Online Marketing",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "At Collax we specialize in designing, building, shipping and scaling...",
    home: true,
    service_p_2: true,
  },
  {
    id: 4,
    duration: ".9s",
    delay: "1.3s",
    img: "/assets/img/service/service-icon-9.1.png",
    title: "Customer Support",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "At Collax we specialize in designing, building, shipping and scaling...",
    service_p_2: true,
  },
  // home two
  {
    id: 5,
    duration: ".3s",
    delay: ".6s",
    color: "tp-sv-blue-color",
    img: "/assets/img/service/service-3.png",
    title: "Mobile Design",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_2: true,
    service_p_3: true,
  },
  {
    id: 6,
    duration: ".5s",
    delay: ".8s",
    color: "tp-sv-sky-color",
    img: "/assets/img/service/service-1.png",
    title: "Web Development",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_2: true,
    service_p_3: true,
  },
  {
    id: 7,
    duration: ".7s",
    delay: "1s",
    color: "tp-sv-pink-color",
    img: "/assets/img/service/service-icon-4.png",
    title: "UI UX Design",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_2: true,
    service_p_3: true,
  },
  // home three
  {
    id: 8,
    duration: "1s",
    delay: ".3s",
    img: "/assets/img/service/service-5.png",
    title: "Marketing",
    color: "service-color-1",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  {
    id: 9,
    duration: "1s",
    delay: ".5s",
    img: "/assets/img/service/service-6.png",
    title: "Web Design",
    color: "service-color-2",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  {
    id: 10,
    duration: "1s",
    delay: ".7s",
    img: "/assets/img/service/service-7.png",
    title: "Branding",
    color: "service-color-3",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_3: true,
    service_p_4: true,
  },
  // home four
  {
    id: 11,
    duration: ".3s",
    delay: ".5s",
    img: "/assets/img/service/007-email.png",
    title_img: "assets/img/service/discord.png",
    title: "Discord Committee",
    border_effect: "",
    text_1: ``,
    text_2: `Bu komite, topluluğun iletişim platformunu yönetir. Discord sunucusunu düzenlemek, moderasyon yapmak, etkileşimi artırmak ve üyelerin güvenli ve olumlu bir ortamda iletişim kurmasını sağlamak komitenin görevleri olabilir.`,
    home_4: true,
    service_p: true,
  },
  {
    id: 12,
    duration: ".5s",
    delay: ".7s",
    img: "/assets/img/service/service4.1.png",
    title: "Content/Editorial Committee",
    border_effect: "sv-border-effect-1",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2: `This committee manages the community's content production and sharing. Creating and editing content such as blog posts, articles, videos supports community knowledge sharing and learning.`,
    home_4: true,
    service_p: true,
  },
  {
    id: 13,
    duration: ".7s",
    delay: ".9s",
    img: "/assets/img/service/service4.2.png",
    title: "Career  Committee",
    border_effect: "sv-border-effect-2",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "This committee aims to help members develop their careers. It can contribute to the professional growth of its members by organizing career seminars, creating mentoring programs, providing support in CV preparation.",
    home_4: true,
    service_p: true,
  },
  {
    id: 14,
    duration: ".9s",
    delay: "1s",
    img: "/assets/img/service/service4.3.png",
    title: (
      <>
        Engagement <br /> Committee
      </>
    ),
    title_img: "assets/img/service/enganenment.png",
    border_effect: "sv-border-effect-3",
    text_1:
      "This committee aims to enrich the social life of the community. It brings members together through activities such as organizing fun events, planning cultural trips, organizing museum visits.",
    text_2:
      "This committee aims to enrich the social life of the community. It brings members together through activities such as organizing fun events, planning cultural trips, organizing museum visits.",
    home_4: true,
    service_p: true,
  },
  {
    id: 15,
    duration: ".9s",
    delay: "1.1s",
    img: "/assets/img/service/service4.4.png",
    title: (
      <>
        <br />
        Social Media <br />
        Committee <br />
      </>
    ),
    border_effect: "sv-border-effect-4",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "Bu komite, topluluğun sosyal medya platformlarını etkin bir şekilde yönetmeyi amaçlar. Görevler arasında içerik oluşturma, paylaşım planlaması yapma, etkileşimleri yönetme ve topluluğun dijital varlığını büyütme yer alabilir.",
    home_4: true,
    service_p: true,
  },
  {
    id: 16,
    duration: "1s",
    delay: "1.1s",
    img: "/assets/img/service/service4.5.png",
    title: "Social Responsibility Committee",
    border_effect: "sv-border-effect-5",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "Bu komite, topluluğun toplumsal sorunlara duyarlılığını artırmayı hedefler. Gönüllülük projeleri düzenlemek, yardım kampanyalarına katılmak, çevre dostu etkinlikler planlamak gibi aktivitelerle toplumsal sorumluluk bilincini destekler.",
    home_4: true,
    service_p: true,
  },
  {
    id: 17,
    duration: "1.1s",
    delay: "1.2s",
    img: "/assets/img/service/service4.6.png",
    title: (
      <>
        <br />
        Social Life <br />
        Committee <br />
      </>
    ),
    border_effect: "sv-border-effect-6",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "This committee aims to enrich the social life of the community. It brings members together through activities such as organizing fun events, planning cultural trips, organizing museum visits.",
    home_4: true,
    service_p: true,
  },
  {
    id: 18,
    duration: "1.1s",
    delay: "1.2s",
    img: "/assets/img/service/service4.6.png",
    title: (
      <>
        <br />
        Technical Events <br />
        Committee <br />
      </>
    ),
    border_effect: "sv-border-effect-6",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    text_2:
      "This committee aims to organize technical events by bringing together members who are interested in technology and information. Organizing events such as technology conferences, workshops, coding competitions may be the responsibilities of the committee.",
    home_4: true,
    service_p: true,
  },
  // add service item

  // home five
  {
    id: 19,
    img: "/assets/img/service/service4.1.png",
    top_border: true,
    icon: "flaticon-target",
    title: (
      <>
        Business <br /> Analysis
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 20,
    img: "/assets/img/service/service4.2.png",
    icon: "flaticon-statistics",
    title: (
      <>
        Marketing <br />
        Strategy
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 21,
    img: "/assets/img/service/service4.3.png",
    icon: "flaticon-coding",
    title: (
      <>
        Design & <br />
        Development
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  {
    id: 22,
    img: "/assets/img/service/service4.4.png",
    icon: "flaticon-team",
    title: (
      <>
        Business <br /> Consulting
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    home_5: true,
  },
  // home six
  {
    id: 23,
    img: "/assets/img/service/service-1.png",
    icon: <Bulb />,
    title: "Collax business solution",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".3s",
    delay: ".5s",
    home_6: true,
  },
  {
    id: 24,
    img: "/assets/img/service/service-2.png",
    icon: <Code />,
    title: "Web, app development",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".5s",
    delay: ".7s",
    active: true,
    home_6: true,
  },
  {
    id: 25,
    img: "/assets/img/service/service-3.png",
    icon: <Managed />,
    title: (
      <>
        Managed <br /> service solution
      </>
    ),
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    duration: ".7s",
    delay: ".9s",
    home_6: true,
  },

  // services 3
  {
    id: 26,
    duration: ".9s",
    delay: "1s",
    color: "tp-sv-blue-color",
    img: "/assets/img/service/service-11.png",
    title: "Customer Support",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },
  {
    id: 27,
    duration: ".9s",
    delay: "1.1s",
    color: "tp-sv-sky-color",
    img: "/assets/img/service/service-8.png",
    title: "Custom Service",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },
  {
    id: 28,
    duration: ".9s",
    delay: "1.2s",
    color: "tp-sv-pink-color",
    img: "/assets/img/service/service-9.png",
    title: "Website Design",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_3: true,
  },

  // service 4,
  {
    id: 29,
    duration: ".9s",
    delay: "1s",
    img: "/assets/img/service/service-9.png",
    title: "Content Writing",
    color: "sv-four-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
  {
    id: 30,
    duration: ".9s",
    delay: "1.1s",
    img: "/assets/img/service/service-10.png",
    title: "Web Design",
    color: "sv-six-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
  {
    id: 31,
    duration: ".9s",
    delay: "1.2s",
    img: "/assets/img/service/service-5.png",
    title: "UI Design",
    color: "sv-five-color",
    text_1:
      "At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
    service_p_4: true,
  },
];

export default services_data;
