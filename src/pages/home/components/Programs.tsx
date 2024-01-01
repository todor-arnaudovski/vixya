import img1 from "../../../assets/images/photos/card-1.jpg";
import img2 from "../../../assets/images/photos/card-2.jpg";
import img3 from "../../../assets/images/photos/card-3.jpg";
import img4 from "../../../assets/images/photos/card-4.jpg";
import { Card } from "./Card";

const cards = [
  { name: "Изгради мускул", img: img1 },
  { name: "Намали килажа", img: img2 },
  { name: "Олимписко кревање", img: img3 },
  { name: "Флексибилност и мобилност", img: img4 },
  { name: "Кондиција", img: img1 },
  { name: "Зголеми сила", img: img2 },
  { name: "Програма со фокус на задник", img: img3 },
  { name: "Атлетицизам", img: img4 },
];

export const Programs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {cards.length &&
          cards.map((item, index) => <Card key={index} img={item.img} text={item.name} />)}
      </div>
    </>
  );
};
