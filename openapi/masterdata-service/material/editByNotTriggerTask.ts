import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/editByNotTriggerTaskUsingPOST_1
*/
export default function fetchMethod(options: { data: IMaterialEditorRequestDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/masterdata-service/material/editByNotTriggerTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料编辑请求DTO */
export interface IMaterialEditorRequestDTO {
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: string;
    /** 物料批次设置 */
    lotSetting?: IMaterialBatchSetEditObject;
}
/** 物料批次设置编辑对象 */
export interface IMaterialBatchSetEditObject {
    /** 启用外部码 */
    enableExternalCode?: EMaterialBatchSetEditObject_enableExternalCode;
    /** 启用批次 */
    enableLot?: EMaterialBatchSetEditObject_enableLot;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialBatchSetEditObject_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EMaterialBatchSetEditObject_enableSerialNo;
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
/** JSONResult«string» */
export interface IJSONResultString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EMaterialBatchSetEditObject_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSetEditObject_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSetEditObject_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialBatchSetEditObject_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
