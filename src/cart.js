
export const Cart = {
  key: 'pap_cart',
  get(){ try { return JSON.parse(localStorage.getItem(this.key))||[] } catch { return [] } },
  save(items){ localStorage.setItem(this.key, JSON.stringify(items)) },
  add(item){
    const items = this.get()
    const found = items.find(i=>i.id===item.id)
    if(found){ found.qty += (item.qty||1) } else { items.push({...item, qty:item.qty||1}) }
    this.save(items)
  },
  remove(id){ this.save(this.get().filter(i=>i.id!==id)) },
  clear(){ this.save([]) },
  total(){ return this.get().reduce((s,i)=>s+i.price*i.qty,0) }
}
