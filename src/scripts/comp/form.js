import browser from 'webextension-polyfill';

const Optional = class{
  constructor( el ){
    this.el = el
    this.id = el.id

    this.active = false
    this.value = ''

    this.cbEl = this.el.querySelector('.optional__cb')
    this.valueEl = this.el.querySelector('.optional__value')

    this.cbEl.addEventListener('input', ()=>{
      this.update()
    })
  }

  update(){
    this.active = this.cbEl.checked
    if(this.active){
      this.el.classList.add('optional--active')
    }else{
      this.el.classList.remove('optional--active')
    }
  }

  restore(data){
    
    if(data){
      this.cbEl.checked = data.active
      this.valueEl.value = data.value
    }else{
      this.active = this.cbEl.checked  
      this.value = this.valueEl.value
    }
    
    this.update()
  }

  getData(){
    this.active = this.cbEl.checked
    this.value = this.valueEl.value

    return {
      active: this.active,
      value: this.value,
    }
  }
}

function save() {
  let data = {
    blockType: document.querySelector('input[name="blockType"]:checked').value,
  }

  for(let i = 0, lg = optionals.length; i<lg; i++){
    let optional = optionals[i];
    data[ optional.id ] = optional.getData()
  }

  browser.storage.local.set( data );
}

function restore() {
  let getting = browser.storage.local.get(['blockType', 'replaceBy', 'awsDetect']);
  getting.then(
    (result) => {
      const blockType = result.blockType || 'blockAll'
      document.querySelector('input[value="'+ blockType + '"]').checked = true

      for(let i = 0, lg = optionals.length; i<lg; i++){
        let optional = optionals[i];
        optional.restore( result[ optional.id ] )
      }
    }, 
    (error) => {
      console.log(`Error: ${error}`);
    });
}


const optionals = []

document.addEventListener('DOMContentLoaded', ()=>{
  const optionalEls = document.querySelectorAll('.optional')
  optionalEls.forEach((el)=>{
    optionals.push( new Optional(el) )
  })

  let inputs = document.querySelectorAll('input')
  inputs.forEach((input)=>{
    input.addEventListener('input', (e)=>{
      save()
    })
  })

  restore()
});
