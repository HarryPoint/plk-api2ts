import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务处理进度相关/queryByNameUsingPOST_1
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject1 }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/masterdata-service/projectTaskProcessStatus/queryByName",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象_1 */
export interface IItemNameNumberPublicQueryObject1 {
    /** 项目id */
    projectId?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 名称or编号 */
    nameOrCode?: string;
    /** undefined */
    projectPlanFlowIsComplete?: EItemNameNumberPublicQueryObject1_projectPlanFlowIsComplete;
}
/** JSONResult«List«string»» */
export interface IJSONResultListstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EItemNameNumberPublicQueryObject1_projectPlanFlowIsComplete {
    Y = "Y",
    N = "N"
}
