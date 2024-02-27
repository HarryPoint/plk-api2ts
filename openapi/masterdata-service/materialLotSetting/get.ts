import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料批次设置相关/getUsingGET_2
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialBatchSettingsEditResponseObjects>(
        {
            url: "/masterdata-service/materialLotSetting/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料批次设置编辑响应对象» */
export interface IJSONResultMaterialBatchSettingsEditResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialBatchSettingsEditTheResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料批次设置编辑响应对象 */
export interface IMaterialBatchSettingsEditTheResponseObject {
    /** 物料id */
    materialId?: string;
    /** 启用序列号 */
    enableSerialNo?: EMaterialBatchSettingsEditTheResponseObject_enableSerialNo;
    /** 序列号方案id */
    serialNoSchemeId?: string;
    /** 启用批次 */
    enableLot?: EMaterialBatchSettingsEditTheResponseObject_enableLot;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialBatchSettingsEditTheResponseObject_enableQualityTraceability;
    /** 启用外部码 */
    enableExternalCode?: EMaterialBatchSettingsEditTheResponseObject_enableExternalCode;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
}

export enum EMaterialBatchSettingsEditTheResponseObject_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSettingsEditTheResponseObject_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSettingsEditTheResponseObject_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSettingsEditTheResponseObject_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
