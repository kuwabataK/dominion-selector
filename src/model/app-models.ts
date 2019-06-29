import { EventEmitter } from '@angular/core';

/**
 * jsonで管理するカード
 */
export class Card {
    name: string = ""
    cost: number = 0
    series: string = ""
}

/**
 * swaipカードに登録するカード
 */
export class AttendantCard {
    id: number
    likeEvent: EventEmitter<any>
    destroyEvent: EventEmitter<any>
    image: string
}

/**
 * jsonで管理するカードのシリーズ
 */
export class Series {
    name: string = ""
    /**
     * そのシリーズをサプライ構築対象として使うかどうか
     */
    enable: boolean = true
}