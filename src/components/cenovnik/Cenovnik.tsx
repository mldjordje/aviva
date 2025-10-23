// src/components/Cenovnik.tsx
import React from "react";

interface CenovnikProps {
  category?: "botoks" | "fileri" | "prp" | "mezoterapija" | "hemijski_piling" | "dermapen" | "lipoliza";
}

interface PriceItem {
  name: string;
  price: string;
  category: CenovnikProps["category"];
}

const Cenovnik: React.FC<CenovnikProps> = ({ category }) => {
 const prices: PriceItem[] = [
    // Botoks
    { name: "Botoks I regija", price: "10.000 RSD", category: "botoks" },
    { name: "Botoks II regije", price: "14.000 RSD", category: "botoks" },
    { name: "Botoks III regije", price: "23.000 RSD", category: "botoks" },
    { name: "Botoks III regije AKCIJA", price: "18.000 RSD", category: "botoks" },
    { name: "Full Face botox", price: "8.000 RSD", category: "botoks" },
    { name: "Hiperhidroza botoxom", price: "24.000 RSD", category: "botoks" },

    // Hijaluronski fileri
    { name: "Hijaluronski filer 1ml", price: "19.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer 1ml MAILI", price: "23.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer 0.5ml", price: "10.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer 0.5ml MAILI", price: "12.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer 1ml Juvederm", price: "26.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer 0.5ml Juvederm", price: "14.000 RSD", category: "fileri" },
    { name: "Hijaluronidaza 1ml", price: "10.000 RSD", category: "fileri" },
    { name: "PROFHILO", price: "24.000 RSD", category: "fileri" },
    { name: "Jalupro Super Hydro", price: "21.000 RSD", category: "fileri" },
    { name: "Jalupro Young Eye", price: "17.000 RSD", category: "fileri" },
    { name: "PRS LOLA", price: "24.000 RSD", category: "fileri" },
    { name: "AquaShine", price: "21.000 RSD", category: "fileri" },
    { name: "Polinukleotidi", price: "21.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer + botox paket", price: "33.000 RSD", category: "fileri" },
    { name: "Hijaluronski filer + PROFHILO", price: "40.000 RSD", category: "fileri" },
    { name: "Botox + PROFHILO", price: "41.000 RSD", category: "fileri" },
    { name: "Korekcija nosa", price: "30.000 RSD", category: "fileri" },
    { name: "Korekcija nosa AKCIJA", price: "25.000 RSD", category: "fileri" },
    { name: "Korekcija podočnjaka filerom", price: "19.000 RSD", category: "fileri" },
    { name: "HARMONICA", price: "65.000 RSD", category: "fileri" },

    // Lipoliza
    { name: "Lipoliza 1 doza", price: "6.000 RSD", category: "lipoliza" },
    { name: "Lemon Bottle", price: "10.000 RSD", category: "lipoliza" },

    // PRP
    { name: "PRP", price: "12.000 RSD (100 €)", category: "prp" },
    { name: "PRP 3 tretmana", price: "30.000 RSD (255 €)", category: "prp" },
    { name: "Cellular Matrix", price: "20.000 RSD (170 €)", category: "prp" },
    { name: "PRP + hemijski piling paket (akcija)", price: "12.000 RSD (100 €)", category: "prp" },

    // Mezoterapija
    { name: "Mezoterapija", price: "6.000 RSD", category: "mezoterapija" },
    { name: "Mezoterapija podočnjaka", price: "10.000 RSD", category: "mezoterapija" },

    // Hemijski piling
    { name: "PRX hem.piling", price: "6.000 RSD", category: "hemijski_piling" },

    // Dermapen
    { name: "Dermapen", price: "10.000 RSD", category: "dermapen" },
  ];

  const filteredData = category
  ? prices.filter((item) => item.category === category)
  : prices;


  return (
    <div className="container my-5">
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
    </div>
  );
};

export default Cenovnik;
