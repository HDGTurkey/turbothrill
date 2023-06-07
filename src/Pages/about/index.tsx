import PageTitle from '../../app/Components/PageTitle';
import { useSite } from '../../app/Context/Context';

export default function AboutUs() {
  const data = useSite();
  return (
    <div className='container mx-auto'>
      <div className='max-w-7xl mx-8' >
        <PageTitle title='About Us' />
        <div className=''>
          <div className=' grid md:grid-cols-3 gap-4'>
            <div className='md:grid-cols-1'>
              <img src={require("../../app/assets/Images/about/about.png").default.src} alt="adam" width="400px" ></img>
            </div>
            <div className='md:col-span-2 self-center p-5 text-lg text-left   '>
              <p className='justify-self-center '>HUAWEI Öğrenci Geliştiricileri (HSD), öncü teknolojilere tutku duyan kolej ve üniversite öğrencilerine yönelik küresel bir programdır. Geliştirici olarak büyümeye ilgi duyan tüm lisans ve lisansüstü öğrenciler başvurabilir. HSD, zenginleştirici eğitim kursları ve etkinlikleri aracılığıyla öğrencilere dinamik bir eşler arası öğrenme ortamında bilgi kapsamlarını genişletme fırsatı sunar.</p>
              <div className=''>

                <button type="button" className="pb-5text-white bg-[rgb(255,100,11)] hover:bg-orange-900  font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center my-5 shadow-lg ">
                  Become a Member
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>

              </div>
            </div>
          </div>
          <div className={`justify-items-start text-start p-10 ${data.theme === 'light' ? 'bg-gray-100 ' : 'bg-gray-800'} `}>
            <h2 className='font-semibold text-3xl '>Vizyon ve Misyon</h2>
            <div className='lg:flex items-stretch my-5 	'>
              <div className='shadow-sm shadow-gray-500  m-3' >
                <div className='flex p-5'>
                  <svg height="150px" width="150px" version="1.1" id="x32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.00 512.00" fill="#000000" transform="rotate(0)" stroke="#000000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="3.072"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M428.215,172.215c0.008-47.522-19.292-90.648-50.445-121.777C346.649,19.293,303.515-0.007,256,0 c-47.514-0.007-90.648,19.293-121.769,50.446c-31.153,31.121-50.454,74.247-50.446,121.769 c-0.008,31.786,8.673,61.634,23.754,87.181h-0.008c0.016,0.032,0.048,0.064,0.064,0.096c0.04,0.064,0.065,0.128,0.104,0.192 l0.016-0.007c10.98,19.436,26.7,34.724,38.945,48.835c6.167,7.056,11.452,13.751,15,20.014c3.572,6.295,5.382,11.908,5.502,17.53 v95.421c0.008,29.44,23.858,53.296,53.305,53.304h7.64C233.312,504.96,243.787,512,256,512c12.213,0,22.688-7.04,27.894-17.218 h7.64c29.447-0.008,53.296-23.865,53.304-53.304v-95.414v-0.008c0.12-5.622,1.93-11.236,5.502-17.53 c5.302-9.419,14.592-19.709,24.762-30.914c10.074-11.179,20.982-23.352,29.191-37.936l0.008,0.007 c0.032-0.048,0.056-0.111,0.088-0.16c0.024-0.048,0.056-0.08,0.08-0.128h-0.008C419.542,233.849,428.223,204.001,428.215,172.215z M311.828,461.771c-5.23,5.214-12.325,8.401-20.294,8.409h-71.068c-7.969-0.008-15.064-3.195-20.294-8.409 c-5.213-5.23-8.401-12.333-8.409-20.294v-5.326l120.128,25.54C311.868,461.715,311.852,461.747,311.828,461.771z M320.237,441.477 c0,1.754-0.216,3.452-0.513,5.11l-127.96-27.205v-33.524l128.473,27.316V441.477z M320.237,396.397L191.764,369.08V358.1h128.473 V396.397z M383.143,247.142l-0.104,0.169l-0.064,0.112c-8.505,15.408-22.92,29.848-36.159,44.904 c-6.607,7.576-12.918,15.361-17.867,24.034c-3.003,5.286-5.39,11.036-6.935,17.13H189.986c-1.546-6.102-3.932-11.844-6.944-17.13 c-7.432-12.982-17.867-24.081-27.893-35.246c-10.059-11.1-19.733-22.159-26.124-33.692l-0.08-0.128l-0.089-0.152 c-13.005-21.959-20.462-47.514-20.47-74.928c0.008-40.803,16.506-77.626,43.238-104.374C178.374,41.1,215.197,24.61,256,24.602 C296.804,24.61,333.627,41.1,360.375,67.84c26.732,26.748,43.23,63.571,43.238,104.374 C403.605,199.628,396.149,225.183,383.143,247.142z"></path> </g> </g></svg>
                  <h2 className='font-bold text-2xl m-4 self-center'> Öğrenme</h2>

                </div>
                <p className='p-3'>
                  İlgi çekici teknik çalıştaylar, zirveler ve eğitim oturumları aracılığıyla çok çeşitli teknik konularda yeni beceriler ve bilgiler edinin.
                </p>
              </div>
              <div className='self-auto shadow-sm shadow-gray-500 m-3  p-3 '>
                <div className='flex p-5'>
                  <svg fill="#000000" height="150px" width="150px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.997 511.997"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M510.551,363.035c-0.705-4.679-5.065-7.909-9.75-7.197c-4.68,0.704-7.902,5.071-7.197,9.749 c5.311,35.26-6.505,71.296-31.605,96.398c-43.843,43.842-115.176,43.842-159.018,0l-34.497-34.497 c-33.184-33.184-41.98-83.388-23.079-125.543l36.56,36.56c-2.992,20.816,3.871,41.703,18.835,56.668l34.497,34.496 c13.012,13.012,30.1,19.518,47.194,19.517c17.089-0.002,34.183-6.507,47.192-19.516c26.021-26.023,26.021-68.364,0-94.387 l-34.497-34.495c-14.964-14.964-35.85-21.832-56.668-18.836l-36.56-36.56c42.155-18.901,92.36-10.105,125.544,23.081 l34.497,34.496c9.004,9.004,16.346,19.357,21.823,30.773c2.046,4.266,7.165,6.068,11.432,4.019 c4.267-2.046,6.067-7.165,4.021-11.432c-6.315-13.164-14.779-25.102-25.156-35.479l-34.497-34.495 c-39.782-39.784-100.784-49.135-150.492-23.792l-9.682-9.682c25.342-49.709,15.991-110.709-23.792-150.492l-34.497-34.497 c-50.523-50.522-132.73-50.524-183.254,0C12.18,63.611-1.578,99.268,0.153,135.718c0.224,4.728,4.227,8.37,8.967,8.153 c4.727-0.224,8.377-4.239,8.153-8.966c-1.504-31.638,10.434-62.582,32.749-84.897c43.841-43.842,115.175-43.843,159.017,0 l34.497,34.497c33.184,33.184,41.98,83.389,23.079,125.543l-36.56-36.56c2.992-20.817-3.872-41.704-18.836-56.668l-34.497-34.497 c-26.021-26.021-68.363-26.02-94.385,0c-12.589,12.59-19.52,29.35-19.52,47.194s6.933,34.604,19.52,47.193l34.497,34.496 c14.964,14.965,35.848,21.831,56.668,18.836l36.56,36.56c-42.155,18.902-92.361,10.105-125.544-23.081l-34.496-34.496 c-12.05-12.05-20.992-26.269-26.577-42.263c-1.56-4.468-6.446-6.823-10.915-5.265c-4.469,1.56-6.826,6.447-5.265,10.916 c6.44,18.447,16.749,34.843,30.637,48.732l34.497,34.496c24.918,24.919,58.158,37.903,91.737,37.903 c20.032,0,40.182-4.641,58.756-14.11l9.68,9.68c-25.342,49.709-15.991,110.71,23.792,150.494l34.497,34.497 c25.262,25.26,58.445,37.892,91.627,37.892s66.366-12.632,91.627-37.892C503.048,445.173,516.668,403.651,510.551,363.035z M383.067,312.907l34.497,34.496c19.34,19.34,19.34,50.809,0,70.148c-19.339,19.341-50.808,19.341-70.149-0.001l-34.497-34.495 c-7.588-7.589-12.359-17.235-13.923-27.518l19.272,19.272c7.552,7.552,17.595,11.712,28.277,11.712s20.723-4.16,28.277-11.712 c7.553-7.553,11.712-17.595,11.712-28.277c0-10.682-4.16-20.723-11.712-28.277l-19.274-19.273 C365.832,300.546,375.478,305.318,383.067,312.907z M128.953,199.088l-34.497-34.497c-9.352-9.351-14.501-21.807-14.501-35.073 c0-13.267,5.149-25.723,14.5-35.074c19.339-19.341,50.807-19.342,70.149,0l34.497,34.497c7.588,7.588,12.359,17.234,13.923,27.517 l-19.274-19.274c-7.552-7.552-17.595-11.712-28.277-11.712c-10.682,0-20.723,4.16-28.277,11.712 c-7.553,7.553-11.712,17.595-11.712,28.277s4.16,20.723,11.712,28.277l19.272,19.272 C146.188,211.448,136.54,206.676,128.953,199.088z M149.316,181.62c-4.315-4.315-6.693-10.054-6.693-16.158 s2.378-11.841,6.693-16.158s10.054-6.693,16.158-6.693s11.842,2.377,16.158,6.693l181.07,181.07 c4.315,4.315,6.693,10.054,6.693,16.158c0,6.104-2.378,11.841-6.693,16.158c-4.317,4.315-10.054,6.693-16.159,6.693 s-11.842-2.376-16.158-6.693L149.316,181.62z"></path> </g> </g> </g></svg>
                  <h2 className='font-bold text-2xl m-4 self-center'> Bağ</h2>
                </div>
                <p className='py-5'>Benzer bir teknoloji tutkusuna sahip öğrenci geliştiricilerle tanışın, fikir alışverişinde bulunun ve yeni projeler üzerinde işbirliği yapın.</p>
              </div>
              <div className='shadow-sm shadow-gray-500 m-3 p-3'>
                <div className='flex p-5'>
                  <svg fill="#000000" height="150px" width="150px" version="1.1" id="XMLID_125_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="grow"> <g> <path d="M16.9,24H7.2l-1-7H4v-2h7v-3.1c-1.9,0.3-3.8-0.2-5.2-1.4C4.1,9,3.6,6.8,4.4,4.8l0.2-0.4L5,4.3C7,3.6,9.4,4,11,5.2 c0-1.4,0.6-2.8,1.8-3.8l0,0c1.1-0.9,2.6-1.4,4-1.4c0.7,0,1.5,0.1,2.2,0.3l0.4,0.1l0.2,0.4c0.9,2,0.4,4.2-1.4,5.7 c-1.4,1.2-3.3,1.7-5.2,1.4V9c0,0.1,0,0.3,0,0.4V15h7v2h-2.1L16.9,24z M8.9,22h6.3l0.7-5H8.2L8.9,22z M6.1,6.1 c-0.3,1,0.1,2.1,1,2.9c1,0.9,2.5,1.2,3.8,0.9C11,9.7,11,9.5,11,9.3V9c0-0.8-0.4-1.5-1.1-2.1C8.9,6.1,7.5,5.8,6.1,6.1z M13.1,5.9 c1.4,0.3,2.8,0,3.8-0.9c0.9-0.8,1.3-1.9,1-2.9c-1.4-0.3-2.8,0-3.8,0.9l0,0C13.2,3.7,12.8,4.8,13.1,5.9z"></path> </g> </g> </g></svg>
                  <h2 className='font-bold text-2xl m-4 self-center '>Büyüme</h2>
                </div>
                <p className='py-5 '>
                  Kariyerinizi hızlandırmak için başarılı geliştiricilerle ortaklık kurarak teknik becerilerinizi sürekli olarak geliştirin.
                </p>
              </div>

            </div>
          </div>


          <div className='justify-items-start text-start p-10 '>
            <h2 className='font-semibold text-3xl '>Bizimle İletişime Geçin</h2>
          </div>
          <div className='pb-4 px-4'>
            <p className='text-start text-lg py-3'>
              Etkinliklerimiz, Huawei teknolojileriyle ilgilenen veya bunları projelerinin bir parçası olarak kullanan yeni başlayanlara, geliştiricilere, yöneticilere ve kuruluşlara açıktır. <br /><br />

              HSD Istanbul, Huawei teknolojilerine ilgi duyan, bir şeyler geliştirmek ve bilgi paylaşımında bulunmaktan istemekten oluşan bir topluluktur.<br /><br />

              Sorular? Lütfen <b>info@hsdistanbul.com</b>  ile iletişime geçiniz.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}