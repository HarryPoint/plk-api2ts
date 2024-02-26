import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目阶段相关/queryByNameUsingPOST
*/
export default function fetchMethod(options: { data: IProjectPhaseNumberQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectPhaseResponseObject>(
        {
            url: "/masterdata-service/projectStage/queryByName",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段编号查询对象 */
export interface IProjectPhaseNumberQueryObject {
    /** 项目id */
    projectId?: number;
    /** 名称or编号 */
    nameOrCode?: string;
    /** 是否查询只在项目计划模块展示的阶段 */
    isProjectPlanShow?: string;
    /** 是否查询只在项目任务模块展示的阶段 */
    isProjectTaskShow?: string;
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
    ts?: number;
}
/** 项目阶段响应对象 */
export interface IProjectPhaseResponseObject {
    /** 项目阶段id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 项目计划ids */
    projectPlanIds?: number[];
}
