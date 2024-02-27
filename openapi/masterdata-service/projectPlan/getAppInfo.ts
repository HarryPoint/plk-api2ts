import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目计划相关/getAppInfoUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultProjectPlansToApplyTheResponseObject>(
        {
            url: "/masterdata-service/projectPlan/getAppInfo",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目计划应用响应对象» */
export interface ITheJSONResultProjectPlansToApplyTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectPlanAppliesTheResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目计划应用响应对象 */
export interface ITheProjectPlanAppliesTheResponseObject {
    /** 应用id */
    appId?: string;
    /** 应用code */
    appCode?: string;
    /** 项目计划id */
    id?: string;
    /** 项目计划编号 */
    code?: string;
    /** 任务流程状态 */
    flowStatus?: string;
    /** 数据状态 */
    dataStatus?: ETheProjectPlanAppliesTheResponseObject_dataStatus;
}

export enum ETheProjectPlanAppliesTheResponseObject_dataStatus {
    /** 停用 */
    INVALID = "INVALID",
    /** 启用 */
    VALID = "VALID",
    /** 暂存 */
    STAGING = "STAGING",
    /** 已删除 */
    DELETED = "DELETED"
}
