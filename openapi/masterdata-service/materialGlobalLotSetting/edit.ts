import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料全局批次设置相关/editUsingPOST_7
*/
export default function fetchMethod(options: { data: IMaterialsBureauBatchSetEditObject, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/materialGlobalLotSetting/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料全局批次设置编辑对象 */
export interface IMaterialsBureauBatchSetEditObject {
    /** 启用序列号 */
    enableSerialNo?: EMaterialsBureauBatchSetEditObject_enableSerialNo;
    /** 启用批次 */
    enableLot?: EMaterialsBureauBatchSetEditObject_enableLot;
    /** 物料批次出库规则 */
    lotOutRule?: EMaterialsBureauBatchSetEditObject_lotOutRule;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialsBureauBatchSetEditObject_enableQualityTraceability;
    /** 启用外部码 */
    enableExternalCode?: EMaterialsBureauBatchSetEditObject_enableExternalCode;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EMaterialsBureauBatchSetEditObject_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialsBureauBatchSetEditObject_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialsBureauBatchSetEditObject_lotOutRule {
    /** 按批次顺序先进先出 */
    BATCH_ORDER_FIFO = "BATCH_ORDER_FIFO",
    /** 手动选择 */
    MANUAL_SELECTION = "MANUAL_SELECTION"
}

export enum EMaterialsBureauBatchSetEditObject_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialsBureauBatchSetEditObject_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
