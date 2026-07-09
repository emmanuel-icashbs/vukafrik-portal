import Link from "next/link";

import bg_img from "@/assets/img/breadcrumb/breadcrumb.jpg";
import menu_data from "@/data/MenuData";
import { InBetweenPathDataType } from "@/utils/types";

interface DataType {
  title: string;
  sub_title: string;
  in_between_paths?: InBetweenPathDataType[];
}

const Breadcrumb = ({ title, sub_title, in_between_paths }: DataType) => {
  return (
    <div
      className="td-breadcrumb-area td-breadcrumb-spacing bg-position"
      style={{ backgroundImage: `url(${bg_img.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-breadcrumb-title-wrap">
              <h2
                className="td-breadcrumb-title mb-10 wow td-animetion-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                {title}
              </h2>
              <div
                className="td-breadcrumb-list wow td-animetion-right"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <ul>
                  <li>
                    <Link href={menu_data[0].link}>{menu_data[0].title}</Link> {/* this is Home(Accueil) menu, the default one */}
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-angle-right fa-fw"></i>
                  </li>
                  {in_between_paths?.map((path, index) => (
                    <li key={index}>
                      <ul>
                        <li>
                          <Link href={path.href}>{path.label}</Link>
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-angle-right fa-fw"></i>
                        </li>
                      </ul>
                    </li>
                  ))}
                  <li className="pages">{sub_title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
