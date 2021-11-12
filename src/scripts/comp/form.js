import { getLocalParams, setParams } from '../data/params'
import { all, subgroupIds } from '../data/datas'

// const Optional = class {
//   constructor(el) {
//     this.el = el
//     this.id = el.id

//     this.active = false
//     this.value = ''

//     this.cbEl = this.el.querySelector('.optional__cb')
//     this.valueEl = this.el.querySelector('.optional__value')

//     this.cbEl.addEventListener('input', () => {
//       this.update()
//     })
//   }

//   update() {
//     this.active = this.cbEl.checked
//     if (this.active) {
//       this.el.classList.add('optional--active')
//     } else {
//       this.el.classList.remove('optional--active')
//     }
//   }

//   restore(data) {
//     if (data) {
//       this.cbEl.checked = data.active
//       this.valueEl.value = data.value
//     } else {
//       this.active = this.cbEl.checked
//       this.value = this.valueEl.value
//     }

//     this.update()
//   }

//   getData() {
//     this.active = this.cbEl.checked
//     this.value = this.valueEl.value

//     return {
//       active: this.active,
//       value: this.value,
//     }
//   }
// }

function save() {
  const data = {}

  const inputs = document.querySelectorAll('input[type=checkbox]')
  inputs.forEach((input) => {
    data[input.name] = input.checked
  })

  setParams(data)
}

async function restore() {
  const getting = getLocalParams()

  await getting.then(
    (local) => {
      console.log('local', local)

      let fragment = new DocumentFragment()
      all.forEach((group) => {
        const checked = local[group.id] ? 'checked' : ''
        const li = document.createElement('li')
        li.classList.add('group')
        if(checked) li.classList.add('active')

        li.innerHTML = `
        <p class="option">
          <label for="${group.id}">${group.name}</label>
          <span>
            <button class="button-link">Whitelist</button>
            <input
              type="checkbox"
              class="checkbox"
              name="${group.id}"
              id="${group.id}"
              value="${group.id}"
              ${checked}
            />
          </span>
        </p>
        `

        const sub = document.createElement('div')
        sub.classList.add('subgroup')
        const sublist = document.createElement('ul')
        group.subgroups.forEach((subgroup) => {
          const checked = local[subgroup.id] ? 'checked' : ''

          const subli = document.createElement('li')
          subli.innerHTML = `
          <p class="option">
            <label for="${subgroup.id}">${subgroup.name}</label>
            <input
              type="checkbox"
              class="checkbox"
              name="${subgroup.id}"
              id="${subgroup.id}"
              value="${subgroup.id}"
              ${checked}
            />
          </p>
          `
          sublist.appendChild(subli)
        })
        sub.appendChild(sublist)

        li.appendChild(sub)
        fragment.appendChild(li)
      })
      console.log(fragment)

      document.querySelector('form > ul').appendChild(fragment)

      // for (let i = 0, lg = optionals.length; i < lg; i++) {
      //   const optional = optionals[i]
      //   optional.restore(local[optional.id])
      // }
    },
    (error) => {
      console.log(`Error: ${error}`)
    },
  )
}

const optionals = []

document.addEventListener('DOMContentLoaded', () => {
  restore().then(() => {
    // const groups = []
    // const groupEls = document.querySelectorAll('.group')
    // groupEls.forEach((el) => {
    //   groups.push(new Group(el))
    // })

    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        save()
      })
    })

    const groups = document.querySelectorAll('.group')
    groups.forEach((group) => {
      const inputsGroup = group.querySelectorAll(':scope > .option input')
      inputsGroup.forEach((input) => {
        console.log(input)
        input.addEventListener('input', (e) => {
          if(e.currentTarget.checked){
            group.classList.add('active')
          }else{
            group.classList.remove('active')
          }
        })
      })

      const buttonGroup = group.querySelectorAll(':scope > .option button')
      buttonGroup.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault()
          if(group.classList.contains('opened')){
            group.classList.remove('opened')
            button.innerHTML = 'Whitelist'
          }else{
            group.classList.add('opened')
            button.innerHTML = 'Close'
          }
        })
      })
    })
  }, console.error)
})
