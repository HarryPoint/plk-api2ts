import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/生产异常类型相关/editUsingPOST_18
*/
export default function fetchMethod(options: { data: IEditTheDTOForProductionExceptionTypes }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceAbnormalCategory/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产异常类型编辑DTO */
export interface IEditTheDTOForProductionExceptionTypes {
    /** id */
    id?: string;
    /** 所属分类 */
    type: EEditTheDTOForProductionExceptionTypes_type;
    /** 类型名称 */
    name: string;
    /** 类型编号 */
    code?: string;
    /** 是否应用编码规则 */
    isCodeRule?: EEditTheDTOForProductionExceptionTypes_isCodeRule;
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

export enum EEditTheDTOForProductionExceptionTypes_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 撤销任务 */
    CANCEL_TASK = "CANCEL_TASK"
}

export enum EEditTheDTOForProductionExceptionTypes_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
