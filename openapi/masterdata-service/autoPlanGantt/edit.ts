import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/甘特图相关/editUsingPOST
*/
export default function fetchMethod(options: { data: IEditProducePlanAutoScheduleInputVO }, extraOptions?: any) {
    return http<IJSONResultBool>(
        {
            url: "/masterdata-service/autoPlanGantt/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EditProducePlanAutoScheduleInputVO */
export interface IEditProducePlanAutoScheduleInputVO {
    /** 占用开始时间 */
    beginTime?: number;
    /** 占用结束时间 */
    endTime?: number;
    /** 排期ID */
    id?: string;
    /** 循环次数 */
    loopCount?: number;
    /** 占用原因 */
    reason?: string;
}
/** JSONResult«boolean» */
export interface IJSONResultBool {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: boolean;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
