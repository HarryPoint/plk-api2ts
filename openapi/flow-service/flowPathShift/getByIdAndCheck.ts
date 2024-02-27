import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/任务班次相关/getByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultFlowPathShiftVO>(
        {
            url: "/flow-service/flowPathShift/getByIdAndCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathShiftVO» */
export interface IJSONResultFlowPathShiftVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathShiftVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathShiftVO */
export interface IFlowPathShiftVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 方案编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 结束时间 */
    endTime?: number;
    /** 结束时间类型 */
    endTimeType?: EFlowPathShiftVO_endTimeType;
    /** 方案名称 */
    planName?: string;
}

export enum EFlowPathShiftVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
