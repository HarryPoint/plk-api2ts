import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/标签设置/editUsingPOST_12
*/
export default function fetchMethod(options: { data: IProductionLabelEditingDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceTag/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产标签编辑DTO */
export interface IProductionLabelEditingDTO {
    /** 标签编号 */
    code?: string;
    /** id */
    id?: string;
    /** 是否应用编码规则 */
    isCodeRule?: EProductionLabelEditingDTO_isCodeRule;
    /** 标签名称 */
    name: string;
    /** 所属分类 */
    type: EProductionLabelEditingDTO_type;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProductionLabelEditingDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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
