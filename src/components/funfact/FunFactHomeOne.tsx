

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Count from '../common/Count';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';


interface DataType {
  id: number;
  title: string;
  number: number;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    title: `Zadovoljnih pacijenata`,
    number: 2248,
  },
  {
    id: 2,
    title: `Izvedenih tretmana`,
    number: 3890,
  },
  {
    id: 3,
    title: `Godina iskustva`,
    number: 8,
  },
  {
    id: 4,
    title: `Osvojenih nagrada`,
    number: 12,
  },
]


const FunFactHomeOne = ({style_2, style_3} :any) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimateNumbers = isInView && !prefersReducedMotion;

  return (
    <>
      <div className="container" ref={wrapperRef}>
        <div className="row align-items-center">
          {counter_data.map((item, i) =>
            <div key={i} className="col-lg-3">
              <div className="cs_funfact cs_style1">
                <div className={`cs_funfact_number   me-4 ${style_2 ? 'cs_stroke_normal' : 'cs_stroke_text'}`}>
                  <div className="amin_auto_count">
                    <Count number={item.number} add_style={true} shouldAnimate={shouldAnimateNumbers} />
                  </div>
                  {i === 0 && <span></span>}
                  {i === 1 && <span></span>}
                </div>
                <div className={`cs_funfact_text cs_secondary_font ${style_2 ? 'cs_color_1' : ''}`}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {style_3? null :  <div className="cs_height_150 cs_height_lg_60"></div>}     
    </>
  );
};

export default FunFactHomeOne;
