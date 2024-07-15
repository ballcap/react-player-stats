import React from 'react';
import style from './ForLoop.module.css';

const products = [
  { id: 1, name: 'Cloud', atk: 201, def: 199, mag: 81, magdef: 121, spd: 203, luck: 51 },
  { id: 2, name: 'Barret', atk: 220, def: 207, mag: 57, magdef: 116, spd: 159, luck: 53 },
  { id: 3, name: 'Tifa', atk: 164, def: 201, mag: 117, magdef: 103, spd: 212, luck: 50 },
  { id: 4, name: 'Aerith', atk: 103, def: 174, mag: 218, magdef: 216, spd: 180, luck: 55 },
  { id: 5, name: 'Q', atk: 89, def: 112, mag: 100, magdef: 73, spd: 104, luck: 47 },
  { id: 6, name: 'Hugo', atk: 169, def: 109, mag: 57, magdef: 26, spd: 189, luck: 56 },
  { id: 7, name: 'Ryu', atk: 87, def: 74, mag: 13, magdef: 22, spd: 100, luck: 57 },
  { id: 8, name: 'Ken', atk: 197, def: 47, mag: 25, magdef: 200, spd: 79, luck: 49 },
  { id: 9, name: 'Chun Li', atk: 188, def: 98, mag: 204, magdef: 77, spd: 88, luck: 51 },
  { id: 10, name: 'Urien', atk: 101, def: 116, mag: 166, magdef: 114, spd: 91, luck: 44 }
];

const Product = ({ name, atk, def, mag, magdef, spd, luck}) => (
  <div className={style.divContainer}>
    <h2 className={style.h1}>{name}</h2>
    <p className={style.p}>Attack</p>
        <div style={{width: atk * 1.5}} className={style.stat}></div>
    <p className={style.p}>Defence</p>
        <div style={{width: def * 1.5}} className={style.stat}></div>
    <p className={style.p}>Magic Attack</p>
        <div style={{width: mag * 1.5}} className={style.stat}></div>
    <p className={style.p}>Magic Defence</p>
        <div style={{width: magdef * 1.5}} className={style.stat}></div>
    <p className={style.p}>Speed</p>
        <div style={{width: spd * 1.5}} className={style.stat}></div>
    <p className={style.p}>Luck</p>
        <div style={{width: luck * 1.5}} className={style.stat}></div>
  </div>
);

const ForLoop = () => {
  return (
    <div className={style.contained}>
      {products.map((product) => (
        <Product
            key={product.id}
            name={product.name}
            atk={product.atk}
            def={product.def}
            mag={product.mag}
            magdef={product.magdef}
            spd={product.spd}
            luck={product.luck}
        />
      ))}
    </div>
  );
};

export default ForLoop;
