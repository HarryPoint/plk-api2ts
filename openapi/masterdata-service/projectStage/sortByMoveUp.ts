import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/sortByMoveUpUsingPOST
*/
export default function fetchMethod(options: { data: IProjectPhaseSortRequestObjects }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectStage/sortByMoveUp",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段排序请求对象 */
export interface IProjectPhaseSortRequestObjects {
    /** 项目计划id */
    projectPlanId?: string;
    /** 移动项目阶段id */
    moveProjectStageId: string;
    /** 移动到的排序,最小为1 */
    moveToSort: number;
    /** 是否是在项目计划模块展示的阶段 */
    isProjectPlanShow?: EProjectPhaseSortRequestObjects_isProjectPlanShow;
    /** 是否是在项目任务模块展示的阶段 */
    isProjectTaskShow?: EProjectPhaseSortRequestObjects_isProjectTaskShow;
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

export enum EProjectPhaseSortRequestObjects_isProjectPlanShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectPhaseSortRequestObjects_isProjectTaskShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
