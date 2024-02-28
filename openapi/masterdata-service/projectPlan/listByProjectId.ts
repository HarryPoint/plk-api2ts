import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目计划相关/listByProjectIdUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListProjectPlansTheResponseObject>(
        {
            url: "/masterdata-service/projectPlan/listByProjectId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目计划响应对象»» */
export interface ITheJSONResultListProjectPlansTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectPlanResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目计划响应对象 */
export interface IProjectPlanResponseObject {
    /** 项目计划id */
    id?: string;
    /** 计划编号 */
    code?: string;
    /** 计划名称 */
    name?: string;
    /** 计划状态 */
    planStatus?: EProjectPlanResponseObject_planStatus;
    /** 流程状态 */
    status?: EProjectPlanResponseObject_status;
    /** 计划开始日期 */
    planBeginTime?: number;
    /** 计划结束日期 */
    planEndTime?: number;
    /** 项目id */
    projectId?: string;
}

export enum EProjectPlanResponseObject_planStatus {
    /** 审批中 */
    HANDLING = "HANDLING",
    /** 已下发 */
    ISSUED = "ISSUED",
    /** 审批拒绝 */
    NOT_PASS = "NOT_PASS",
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 已作废 */
    INVALID = "INVALID"
}

export enum EProjectPlanResponseObject_status {
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
