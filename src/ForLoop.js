import React from 'react';
import style from './ForLoop.module.css';

const products = [
  { id: 1, name: 'Cloud', atk: 201, def: 199, mag: 81, magdef: 121, spd: 203, luck: 51 },
  { id: 2, name: 'Barret', atk: 252, def: 207, mag: 57, magdef: 116, spd: 159, luck: 53 },
  { id: 3, name: 'Tifa', atk: 184, def: 221, mag: 137, magdef: 127, spd: 237, luck: 50 },
  { id: 3, name: 'Aerith', atk: 103, def: 174, mag: 250, magdef: 226, spd: 180, luck: 55 }
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