import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/生产任务分配相关/assignUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskAssignmentVO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTaskAssign/assign",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务分配VO */
export interface IProductionTaskAssignmentVO {
    /** 生产任务ids -- 单个分配时, 传递一个即可 */
    produceTaskIds: string[];
    /** 分配人员ids -- 单个分配时, 传递一个即可 */
    assignUserIds?: string[];
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
