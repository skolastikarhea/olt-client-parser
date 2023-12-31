'use strict'
const OLTClientParser = require('../index')

// ZTE C650
const olt = new OLTClientParser({
  brand: 'Made4OLT',
  model: 'ZTE_C650',
  firmware: '1.0.0',
  connectionType: 'ssh',
  options: {
    host: '123.0.0.1',
    port: 2500,
    username: 'made4olt',
    password: 'Made4olt',
    shellPrompt: 'XXX#',
    __extra__: {}
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
  // const data = await olt.displayPon({ board: '1', slot: '3', port: '12' })
  // const data = await olt.displayOnus({ board: '1', slot: '1', port: '16' })
  // const data = await olt.displayOnu({ board: '1', slot: '1', port: '16', ont_id: '1' })
  // const data = await olt.displayVlans()
  // const data = await olt.scopeVlanLanToLan()
  // const data = await olt.displayVlan('502')
  // const data = await olt.createVlan({ vlan: '666', description: 'TESTE' })
  // const data = await olt.deleteVlan('666')
  // const data = await olt.displayOnus({ board: '1', slot: '2', port: '4' })
  // const data = await olt.vlanTag({ interface: 'xgei-1/5/2', vlan: '666'})
  // const data = await olt.vlanUntag({ interface: 'xgei-1/5/2', vlan: '666'})
  // const data = await olt.showOpticalModuleInfo('xgei-1/5/1')
  // const data = await olt.showVlanPort('xgei-1/5/1')
  // const data = await olt.removeVlanUplink('xgei-1/5/2)
  // const data = await olt.enableAutoNegotiation('xgei-1/5/2')
  // const data = await olt.disableAutoNegotiation('xgei-1/5/2')
  // const data = await olt.enableTrunkMode('xgei-1/5/2')
  // const data = await olt.displayDbaProfiles()
  // const data = await olt.displaySpeedProfiles()
  // const data = await olt.displayUnconfiguredOnus()
  // const data = await olt.displayUplinks()
  // const data = await olt.displayTraffic({ type: 'gpon', board: '1', slot: '3', port: '12', ont_id: '1' })
  // const data = await olt.runCommand('show pon power attenuation gpon_onu-1/1/16:1');
  // await olt.disablePon({ type: 'gpon', board: '1', slot: '3', port: '12' })
  // await olt.enablePon({ type: 'gpon', board: '1', slot: '3', port: '12' })

  console.log(data)  
})()
