import React from "react";
import PaletteGlowSection from "@/components/ui/PaletteGlowSection";

interface CenovnikProps {
  category?:
    | "botoks"
    | "fileri"
    | "prp"
    | "mezoterapija"
    | "hemijski_piling"
    | "dermapen"
    | "lipoliza";
}

interface PriceItem {
  name: string;
  price: string;
  category: NonNullable<CenovnikProps["category"]>;
}

const prices: PriceItem[] = [
  { name: "Botoks I regija", price: "12.000 RSD / 100€", category: "botoks" },
  { name: "Botoks II regije", price: "15.000 RSD / 130€", category: "botoks" },
  { name: "Botoks III regije", price: "23.000 RSD / 200€", category: "botoks" },
  { name: "Full Face botox", price: "33.000 RSD / 280€", category: "botoks" },
  { name: "Hiperhidroza botoxom", price: "26.000 RSD / 220€", category: "botoks" },

  { name: "Hijaluronski filer 1ml", price: "20.000 RSD / 170€", category: "fileri" },
  { name: "Hijaluronski filer 1ml MAILI", price: "22.000 RSD / 190€", category: "fileri" },
  { name: "Hijaluronski filer 0.5ml", price: "11.000 RSD / 95€", category: "fileri" },
  { name: "Hijaluronski filer 0.5ml MAILI", price: "13.000 RSD / 110€", category: "fileri" },
  { name: "Hijaluronski filer 1ml Juvederm", price: "26.000 RSD", category: "fileri" },
  { name: "Hijaluronski filer 0.5ml Juvederm", price: "14.000 RSD", category: "fileri" },
  { name: "Hijaluronidaza 1ml", price: "10.000 RSD", category: "fileri" },
  { name: "PROFHILO", price: "26.000 RSD / 220€", category: "fileri" },
  { name: "Jalupro Super Hydro", price: "21.000 RSD / 180€", category: "fileri" },
  { name: "Jalupro Young Eye", price: "19.000 RSD / 170€", category: "fileri" },
  { name: "PRS LOLA", price: "21.000 RSD / 180€", category: "fileri" },
  { name: "Polinukleotidi", price: "19.000 RSD / 160€", category: "fileri" },
  { name: "Korekcija podočnjaka filerom", price: "20.000 RSD / 170€", category: "fileri" },
  { name: "Viscoderm", price: "19.000 RSD / 160€", category: "fileri" },

  { name: "Lipoliza 1 doza", price: "6.000 RSD / 50€", category: "lipoliza" },
  { name: "Lemon Bottle", price: "10.000 RSD / 85€", category: "lipoliza" },

  { name: "PRP", price: "12.000 RSD / 100€", category: "prp" },
  { name: "PRP 3 tretmana", price: "30.000 RSD / 250€", category: "prp" },

  { name: "Mezoterapija", price: "8.000 RSD / 70€", category: "mezoterapija" },
  { name: "Mezoterapija podočnjaka", price: "6.000 RSD / 50€", category: "mezoterapija" },

  { name: "PRX hem.piling", price: "6.000 RSD / 50€", category: "hemijski_piling" },
  { name: "Dermapen", price: "10.000 RSD", category: "dermapen" },
];

const Cenovnik: React.FC<CenovnikProps> = ({ category }) => {
  const filteredData = category ? prices.filter((item) => item.category === category) : prices;

  return (
    <div className="container my-5">
      <PaletteGlowSection>
        <div className="cs_pricing_table cs_style2">
          <h2 className="text-center mb-4">Cenovnik</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Usluga</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td className="price">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PaletteGlowSection>
    </div>
  );
};

export default Cenovnik;
