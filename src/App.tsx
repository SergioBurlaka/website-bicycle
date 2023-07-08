import "./App.css";
import "./scss/index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";

import mainLogo from "./assets/img/icons/icon-1.png";
import bigImOne from "./assets/img/brands/big-banner-1.png";
import biciclyLogo from "./assets/img/logos/logo-2.png";

import bigImOne_3 from "./assets/img/brands/big-banner-2.png";
import biciclyLogo_3 from "./assets/img/logos/logo-3.png";
import mainLogo_3 from "./assets/img/icons/icon-3.png";
import imgBottom_2 from "./assets/img/brands/card-2.png";

import imgBottom from "./assets/img/brands/card-1.png";
import mainLogoTwo from "./assets/img/icons/icon-2.png";

import icon_4 from "./assets/img/icons/icon-4.png";
import card_3 from "./assets/img/brands/card-3.png";
import cmalBanner_3 from "./assets/img/brands/smal-banner-3.png";
import cmalBanner_3_2 from "./assets/img/brands/smal-banner-3-2.png";
import logo_5 from "./assets/img/logos/logo-5.png";

import Card from "./components/Card/Card";

import Slick from "./features/Slider/Slick";

import Shop from "./features/Shop/Shop";

function App() {
  return (
    <div className="wrapper">
      <main className="page">
        <div className="main-screen">
          <div className="main-screen__bg">
            <Header />
          </div>
        </div>
        <div className="content">
          <div className="my-container">
            <div className="box lg:pt-28 lg:pb-32 pb-12 pt-14 flex flex-col content-center">
              <img className=" mx-auto mt-0 mb-8" src={mainLogo} alt="" />

              <h2 className="title">A NEW GENERATION OF VINTAGE BIKE</h2>

              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="h-full relative">
                <img
                  className="object-cover w-full h-full"
                  src={bigImOne}
                  alt=""
                />
                <img
                  src={biciclyLogo}
                  alt=""
                  className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
            <div>
              <Card
                logo={mainLogoTwo}
                title="Vintage Oliva"
                imgPath={imgBottom}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="">
              <Card
                logo={mainLogo_3}
                title="La Boriosa"
                imgPath={imgBottom_2}
              />
            </div>
            <div className="col-span-2  order-first lg:order-last">
              <div className="h-full relative">
                <img
                  className="object-cover w-full h-full"
                  src={bigImOne_3}
                  alt=""
                />
                <img
                  src={biciclyLogo_3}
                  alt=""
                  className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div>
              <div className="h-full relative">
                <img
                  className="object-cover w-full h-full"
                  src={cmalBanner_3}
                  alt=""
                />
                <img
                  src={logo_5}
                  alt=""
                  className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
            <div>
              <Card
                logo={icon_4}
                title="retrò Bike - M. Hulot"
                imgPath={card_3}
              />
            </div>
            <div>
              <div className="h-full relative">
                <img
                  className="object-cover w-full h-full"
                  src={cmalBanner_3_2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="my-container">
            <Slick />
          </div>
          <div>
            <Shop />
          </div>
          repellendus laudantium voluptates alias adipisci. Optio. Sint, odio
          animi? Nesciunt quas dignissimos modi. Nemo ab eaque quasi ducimus nam
          sapiente. Repellat, tenetur perspiciatis! Eveniet commodi modi cumque
          atque velit, voluptates explicabo laborum ratione ad veritatis sint.
          Quo accusamus ullam, molestias distinctio, quod, deserunt doloribus
          aliquid veritatis facilis exercitationem quas expedita quam pariatur
          natus. Fuga itaque molestias ullam, hic veniam perspiciatis, enim,
          modi quod maiores alias qui. Sint aut quam possimus nostrum minima
          odit autem voluptate, culpa deleniti dolorem nulla facere beatae
          illum, repellat quasi provident eos temporibus ad fugiat quae
          explicabo sequi nihil perspiciatis! Ipsam, beatae? Error pariatur
          deleniti est voluptatibus alias quia quasi quisquam quam perferendis.
          Asperiores minus accusantium sint quis molestiae unde vero ut
          blanditiis? Aspernatur aliquid enim dicta nihil est, odio similique
          voluptate? Excepturi ratione quia dicta. Ab nam eaque maxime incidunt
          excepturi ut a odio, facilis quis laudantium quas vitae cupiditate
          numquam quod doloribus id temporibus perspiciatis quidem! Iusto, id?
          Repellendus, fugit. Eveniet, nemo exercitationem commodi dicta
          distinctio voluptatum nesciunt necessitatibus enim magnam, deleniti
          libero voluptas illo hic a? Reiciendis, dolorum aliquid voluptatum
          itaque, ipsam laborum debitis, consectetur id at sed fuga. Vero
          placeat rem veniam debitis assumenda a amet animi. Ipsum itaque
          praesentium tempore. Ullam obcaecati neque quidem. Eveniet est id
          accusamus nam numquam, minima fugiat consectetur! Quod, distinctio.
          Officia, debitis? Laboriosam facere voluptas aperiam esse ipsa sunt
          eius corporis dignissimos at quam commodi incidunt, cum assumenda
          quaerat, repellat iusto minima suscipit officiis ratione, nesciunt
          dolorem! Similique voluptatum corporis nemo esse. Iure, est ipsa
          necessitatibus soluta a quia at magnam minima corporis, ullam beatae
          minus. Eius dolores adipisci esse vel aliquam ex tempore ipsam
          quisquam nemo quam expedita magni, cumque reiciendis!
        </div>
      </main>
    </div>
  );
}

export default App;
