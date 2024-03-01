import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料全局批次设置相关/getUsingGET_1
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialGlobalBatchSettingsEditResponseObject>(
        {
            url: "/masterdata-service/materialGlobalLotSetting/get",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料全局批次设置编辑响应对象» */
export interface IJSONResultMaterialGlobalBatchSettingsEditResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialGlobalBatchSettingsEditResponseObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料全局批次设置编辑响应对象 */
export interface IMaterialGlobalBatchSettingsEditResponseObjects {
    /** 启用外部码 */
    enableExternalCode?: EMaterialGlobalBatchSettingsEditResponseObjects_enableExternalCode;
    /** 启用批次 */
    enableLot?: EMaterialGlobalBatchSettingsEditResponseObjects_enableLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialGlobalBatchSettingsEditResponseObjects_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EMaterialGlobalBatchSettingsEditResponseObjects_enableSerialNo;
    /** 物料批次出库规则 */
    lotOutRule?: EMaterialGlobalBatchSettingsEditResponseObjects_lotOutRule;
}

export enum EMaterialGlobalBatchSettingsEditResponseObjects_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialGlobalBatchSettingsEditResponseObjects_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialGlobalBatchSettingsEditResponseObjects_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialGlobalBatchSettingsEditResponseObjects_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialGlobalBatchSettingsEditResponseObjects_lotOutRule {
    /** 按批次顺序先进先出 */
    BATCH_ORDER_FIFO = "BATCH_ORDER_FIFO",
    /** 手动选择 */
    MANUAL_SELECTION = "MANUAL_SELECTION"
}
