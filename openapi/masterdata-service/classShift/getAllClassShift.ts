import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/班次相关/getAllClassShiftUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListShiftsBackToVO>(
        {
            url: "/masterdata-service/classShift/getAllClassShift",
            method: "get",
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
    ts?: number;
}
/** 班次返回VO */
export interface IShiftBackVO {
    /** id */
    id?: number;
    /** 班次名称 */
    name?: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: string;
    /** 班次结束时间类型 */
    endTimeType?: EShiftBackVO_endTimeType;
    /** 结束时间 */
    endTime?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}

export enum EShiftBackVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
