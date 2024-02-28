import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/editUsingPOST_1
*/
export default function fetchMethod(options: { data: IEditProducePlanAutoScheduleInputVO }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EditProducePlanAutoScheduleInputVO */
export interface IEditProducePlanAutoScheduleInputVO {
    /** 排期ID */
    id?: string;
    /** 占用开始时间 */
    beginTime?: number;
    /** 占用结束时间 */
    endTime?: number;
    /** 占用原因 */
    reason?: string;
    /** 循环次数 */
    loopCount?: number;
}
/** JSONResult«boolean» */
export interface IJSONResultboolean {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: boolean;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
