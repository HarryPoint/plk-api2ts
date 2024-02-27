import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料相关/editHasResponseProcessStatusDataUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialEditorRequestDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialEditResponseInformation>(
        {
            url: "/masterdata-service/material/editHasResponseProcessStatusData",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料编辑请求DTO */
export interface IMaterialEditorRequestDTO {
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: string;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
    /** 物料批次设置 */
    lotSetting?: IMaterialBatchSetEditObject;
}
/** 物料批次设置编辑对象 */
export interface IMaterialBatchSetEditObject {
    /** 物料id */
    materialId?: string;
    /** 启用序列号 */
    enableSerialNo?: EMaterialBatchSetEditObject_enableSerialNo;
    /** 序列号方案id */
    serialNoSchemeId?: string;
    /** 启用批次 */
    enableLot?: EMaterialBatchSetEditObject_enableLot;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 启用质量追溯 */
    enableQualityTraceability?: EMaterialBatchSetEditObject_enableQualityTraceability;
    /** 启用外部码 */
    enableExternalCode?: EMaterialBatchSetEditObject_enableExternalCode;
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: string;
}
/** JSONResult«物料编辑响应信息» */
export interface IJSONResultMaterialEditResponseInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialEditResponseInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料编辑响应信息 */
export interface IMaterialEditResponseInformation {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 流程状态 */
    processStatus?: EMaterialEditResponseInformation_processStatus;
}

export enum EMaterialBatchSetEditObject_enableSerialNo {
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

export enum EMaterialBatchSetEditObject_enableExternalCode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialEditResponseInformation_processStatus {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}
