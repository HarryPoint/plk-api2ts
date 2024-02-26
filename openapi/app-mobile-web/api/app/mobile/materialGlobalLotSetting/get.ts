import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/物料全局批次设置相关/getUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultMaterialGlobalBatchSettingsEditResponseObject>(
        {
            url: "/app-mobile-web/api/app/mobile/materialGlobalLotSetting/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料全局批次设置编辑响应对象» */
export interface IJSONResultMaterialGlobalBatchSettingsEditResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialGlobalBatchSettingsEditResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 物料全局批次设置编辑响应对象 */
export interface IMaterialGlobalBatchSettingsEditResponseObjects {
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 物料批次出库规则 */
    lotOutRule?: ('BATCH_ORDER_FIFO' | 'MANUAL_SELECTION');
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
    /** 启用外部码 */
    enableExternalCode?: ('Y' | 'N');
}
