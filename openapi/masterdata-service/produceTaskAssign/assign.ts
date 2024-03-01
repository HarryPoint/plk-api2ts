import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务分配相关/assignUsingPOST_1
*/
export default function fetchMethod(options: { data: IProductionTaskAssignmentVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceTaskAssign/assign",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务分配VO */
export interface IProductionTaskAssignmentVO {
    /** 分配人员ids -- 单个分配时, 传递一个即可 */
    assignUserIds?: string[];
    /** 生产任务ids -- 单个分配时, 传递一个即可 */
    produceTaskIds: string[];
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
