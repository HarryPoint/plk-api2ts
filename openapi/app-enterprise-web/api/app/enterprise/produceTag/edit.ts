import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产标签相关/editUsingPOST_19
*/
export default function fetchMethod(options: { data: IProductionLabelEditingDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTag/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产标签编辑DTO */
export interface IProductionLabelEditingDTO {
    /** id */
    id?: string;
    /** 所属分类 */
    type: EProductionLabelEditingDTO_type;
    /** 标签名称 */
    name: string;
    /** 标签编号 */
    code?: string;
    /** 是否应用编码规则 */
    isCodeRule?: EProductionLabelEditingDTO_isCodeRule;
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

export enum EProductionLabelEditingDTO_type {
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

export enum EProductionLabelEditingDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
