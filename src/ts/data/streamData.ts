import { AllChannels } from "../Channel.js"
import { Stream } from "../Stream.js"
import { allSteamers } from "../Streamer.js"

export const createDataStream = () => {
    const stream1 = new Stream(1, ["Tema 1", "Tema 2"], AllChannels[0], allSteamers[0])
    const stream2 = new Stream(2, ["Tema 1", "Tema 2"], AllChannels[1], allSteamers[1])
    const stream3 = new Stream(3, ["Tema 1", "Tema 2"], AllChannels[2], allSteamers[2])
}
