import{G as t}from"./vendor-e2ae8b6c.js";const r=[],e=(()=>{const{subscribe:e,update:u,set:c}=t("cart",r),n=(t,r)=>r.find((r=>r.product.id===t));return{subscribe:e,addProduct:t=>{u((r=>{const e=n(t.id,r);return e?e.quantity++:r.push({product:t,quantity:1}),r}))},removeProduct:t=>{u((r=>{const e=n(t,r);return e&&(e.quantity>1?e.quantity--:r=r.filter((t=>t!==e))),r}))},clearCart:()=>c(r)}})();export{e as c};
