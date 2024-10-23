import { Injectable } from "@nestjs/common";
import { LocalizationClient } from "./localization.client";

@Injectable()
export class LocalizationService {
    #_client: LocalizationClient;

    constructor(client: LocalizationClient){
        this.#_client = client
    }

    getAllLanguages(){
        return this.#_client.getAllLanguages()
    }

    getSingleLanguage(id: string){
        return this.#_client.getSingleLanguage(id)
    }

    updateLanguage(payload: {id: string, name?: string, code?: string, image?: string}){
        return this.#_client.updateLanguage(payload)
    }

    createLanguage(payload: {name: string, code: string, image?: string}){
        return this.#_client.createLanguage(payload)
    }

    removeLanguage(id: string) {
        return this.#_client.deleteLanguage(id)
    }
}