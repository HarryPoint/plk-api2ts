import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/未排产订单相关/getClassShiftIdsByScheduleDateUsingPOST
*/
export default function fetchMethod(data: ISchedulingDateDTO, extraOptions?: any) {
    return http<IJSONResultSetlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/getClassShiftIdsByScheduleDate",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 排班日期DTO */
export interface ISchedulingDateDTO {
    /** 排班日期 yyyy-MM-dd */
    scheduleDate?: string;
}
/** JSONResult«Set«long»» */
export interface IJSONResultSetlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
