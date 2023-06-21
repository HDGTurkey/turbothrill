import Link from 'next/link'
import React from 'react'

const footer_contents = {
  shapes: [
    { num: 'one', img: '/assets/img/creative/creative-hand.png' },
    { num: 'two', img: '/assets/img/service/service-1.png' },
  ],
  title: 'Hadi sen de aramıza katıl',
  text:
    'Huawei Student Developers Program, Huawei’nin geliştiriciler için oluşturduğu bir programdır. Programa katılarak Huawei’nin sunduğu birçok fırsattan yararlanabilirsiniz. Huawei’nin sunduğu fırsatlardan yararlanmak için hemen başvurun!',
  btn_text: 'Contact us',
  copy_right_text: <>© {new Date().getFullYear()} HSD </>,
  social_links: [
    {
      icon: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/company/hsdturkiye/',
    },
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/hsdturkiye/' },
    {
      icon: 'fab fa-youtube',
      link: 'https://www.youtube.com/@HuaweiDeveloperGroupsTurkiye',
    },
  ],
}
const {
  shapes,
  btn_text,
  copy_right_text,
  social_links,
  text,
  title,
} = footer_contents

const Footer: React.FC = () => {
  return (
    <footer className="p-relative">
      <div className="tp-footer-area">
        {shapes.map((s, i) => (
          <div key={i} className={`tp-footer-shape-${s.num}`}>
            <img src={s.img} alt="" />
          </div>
        ))}
        <div className="container ">
          <div className="row">
            <div
              className="col-xl-12 wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="footer-widget-info text-center">
                <h2 className="tp-footer-title pb-15">{title}</h2>
                <p>{text}</p>
                <Link href="/contact"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
