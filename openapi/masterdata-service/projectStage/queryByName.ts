import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/queryByNameUsingPOST
*/
export default function fetchMethod(options: { data: IProjectPhaseNumberQueryObject1 }, extraOptions?: any) {
    return http<IJSONResultListProjectPhaseResponseObject>(
        {
            url: "/masterdata-service/projectStage/queryByName",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段编号查询对象_1 */
export interface IProjectPhaseNumberQueryObject1 {
    /** 项目id */
    projectId?: string;
    /** 名称or编号 */
    nameOrCode?: string;
    /** 是否查询只在项目计划模块展示的阶段 */
    isProjectPlanShow?: EProjectPhaseNumberQueryObject1_isProjectPlanShow;
    /** 是否查询只在项目任务模块展示的阶段 */
    isProjectTaskShow?: EProjectPhaseNumberQueryObject1_isProjectTaskShow;
}
/** JSONResult«List«项目阶段响应对象»» */
export interface IJSONResultListProjectPhaseResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectPhaseResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目阶段响应对象 */
export interface IProjectPhaseResponseObject {
    /** 项目阶段id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 项目计划ids */
    projectPlanIds?: string[];
}

export enum EProjectPhaseNumberQueryObject1_isProjectPlanShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectPhaseNumberQueryObject1_isProjectTaskShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
