import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务处理进度相关/queryByNameUsingPOST_1
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject1 }, extraOptions?: any) {
    return http<IJSONResultListString>(
        {
            url: "/masterdata-service/projectTaskProcessStatus/queryByName",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象_1 */
export interface IItemNameNumberPublicQueryObject1 {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 项目id */
    projectId?: string;
    /** 项目计划id */
    projectPlanId?: string;
}
/** JSONResult«List«string»» */
export interface IJSONResultListString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
