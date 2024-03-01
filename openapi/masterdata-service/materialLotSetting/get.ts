import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料批次设置相关/getUsingGET_2
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialBatchSettingsEditResponseObjects>(
        {
            url: "/masterdata-service/materialLotSetting/get",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料批次设置编辑响应对象» */
export interface IJSONResultMaterialBatchSettingsEditResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialBatchSettingsEditTheResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料批次设置编辑响应对象 */
export interface IMaterialBatchSettingsEditTheResponseObject {
    /** 启用外部码 */
    enableExternalCode?: EMaterialBatchSettingsEditTheResponseObject_enableExternalCode;
    /** 启用批次 */
    enableLot?: EMaterialBatchSettingsEditTheResponseObject_enableLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialBatchSettingsEditTheResponseObject_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EMaterialBatchSettingsEditTheResponseObject_enableSerialNo;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 物料id */
    materialId?: string;
    /** 序列号方案id */
    serialNoSchemeId?: string;
}

export enum EMaterialBatchSettingsEditTheResponseObject_enableExternalCode {
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

export enum EMaterialBatchSettingsEditTheResponseObject_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
