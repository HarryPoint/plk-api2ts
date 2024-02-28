import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/queryByNameOrCodeUsingPOST_1
*/
export default function fetchMethod(options: { data: IItemTaskNameNumberQueryObject }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectTask/queryByNameOrCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务名称编号查询对象 */
export interface IItemTaskNameNumberQueryObject {
    /** 项目id */
    projectId?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 是否查询只在项目计划模块展示的任务 */
    isProjectPlanShow?: EItemTaskNameNumberQueryObject_isProjectPlanShow;
    /** 是否查询只在项目任务模块展示的任务 */
    isProjectTaskShow?: EItemTaskNameNumberQueryObject_isProjectTaskShow;
    /** 名称or编号 */
    nameOrCode?: string;
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}

export enum EItemTaskNameNumberQueryObject_isProjectPlanShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EItemTaskNameNumberQueryObject_isProjectTaskShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
