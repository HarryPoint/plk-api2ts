import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/公共相关/getAllClassShiftUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListShiftsBackToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/getAllClassShift",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«班次返回VO»» */
export interface IJSONResultListShiftsBackToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IShiftBackVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 班次返回VO */
export interface IShiftBackVO {
    /** id */
    id?: string;
    /** 班次名称 */
    name?: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 班次结束时间类型 */
    endTimeType?: EShiftBackVO_endTimeType;
    /** 结束时间 */
    endTime?: number;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
}

export enum EShiftBackVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
