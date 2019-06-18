import {init} from './lib/server'
import {workers} from './lib/cluster'
import cluster from 'cluster'

function server() {
    if (cluster.isMaster) {
        workers()
    } else {
        init()
    }
}

server()