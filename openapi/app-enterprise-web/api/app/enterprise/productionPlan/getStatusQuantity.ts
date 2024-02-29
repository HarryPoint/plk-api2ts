import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/任务下发相关/getStatusQuantityUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultNumberOfSchedulingPlansTheValueIsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/productionPlan/getStatusQuantity",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«排产计划状态数量返回VO» */
export interface IJSONResultNumberOfSchedulingPlansTheValueIsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IScheduleStatusQuantityReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 排产计划状态数量返回VO */
export interface IScheduleStatusQuantityReturnedToVO {
    /** 全部数量 */
    allQuantity?: number;
    /** 已下发数量 */
    issueQuantity?: number;
    /** 待下发数量 */
    waitQuantity?: number;
}
