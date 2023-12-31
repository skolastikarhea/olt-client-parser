const { connect } = require('../../../../config/ssh-connect')
const { hidrateInfo } = require('../../../../utils/lib')
/*
IRARA-OLT#show vlan port xgei-1/5/1
PortMode  Pvid CPvid Tpid   TLSStatus TLSVlan  TpidFilter
--------------------------------------------------------------------
trunk     --   --    0x8100 disable   --       --
UntaggedVlan:
  
TaggedVlan:
  40,99,2201,2237,2306,2501-2548
*/

const showVlanPort = async (options, interface) => {
  const conn = await connect(options)
  const cmd = `show vlan port ${interface}`
  const chunk = await conn.exec2(cmd)
  const [matchUntagged, matchTagged] = chunk.replace('\n', ' ').split('UntaggedVlan:')[1].split('TaggedVlan:')
  return {
    untagged: hidrateInfo(matchUntagged).filter(item => item !== ''),
    tagged: hidrateInfo(matchTagged).filter(item => item !== '')
  }
}

module.exports = showVlanPort
