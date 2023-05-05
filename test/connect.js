'use strict'
const OLTClientParser = require('../index')

// ZTE C650
const olt = new OLTClientParser({
  brand: 'ZTE',
  model: 'C650',
  firmware: '1.2.1',
  connectionType: 'ssh',
  options: {
    host: '177.128.98.246',
    port: 3050,
    username: 'madegraph',
    password: 'Made@graph1',
    shellPrompt: 'IRARA-OLT#',
    __extra__: {
      onu: {
        size: 3
      }
    }
  }
});

/*
(async () => {
  const data = await olt.displayPermissionByUser('made4it')
  console.log(data)
})()

(async () => {
  const data = await olt.enableRoot()
  console.log(data)  
})()

(async () => {
  const params = { board: 0, pon: 0 }
  const data = await olt.displayPon(params)
  console.log(data)  
})()
*/

(async () => {
  // const data = await olt.displayBoards()
  // const data = await olt.displaySlots({ board: '1' })
  // const data = await olt.displayPons({ board: '1', slot: '1' })
  // const data2 = await olt.displayPons({ board: '1', slot: '2' })
  // const data = await olt.displayOnus({ board: '1', slot: '1', port: '16' })
  // const data = await olt.displayVlans()
  // const data = await olt.displayVlan('666')
  // const data = await olt.createVlan({ vlan: '666', description: 'TESTE' })
  // const data = await olt.deleteVlan('666')
  // const data4 = await olt.displayOnus({ board: '1', slot: '2', port: '4' })

  const data = await olt.displayUplinks()
  console.log(data)  
})()
