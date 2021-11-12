import { google } from '../data/urls/google'
import { amazon } from '../data/urls/amazon'
import { facebook } from '../data/urls/facebook'
import { apple } from '../data/urls/apple'
import { microsoft } from '../data/urls/microsoft'

export const all = [google, amazon, facebook, apple, microsoft]
export const subgroupIds = []
all.forEach((group) => {
  subgroupIds.push(group.id)
  subgroupIds.push(...getSubgroupIds(group))
})

function getSubgroupIds(group) {
  return group.subgroups.map((g) => g.id)
}
