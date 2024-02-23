import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/任务班次相关/getByIdAndCheckUsingGET
export default function fetchMethod(params: { enterpriseId: number; id: number }, extraOptions?: any) {
    return http<IJSONResultFlowPathShiftVO>(
        {
            url: "/flow-service/flowPathShift/getByIdAndCheck",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«FlowPathShiftVO»
export interface IJSONResultFlowPathShiftVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathShiftVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathShiftVO
export interface IFlowPathShiftVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 方案编号
    code: string;
    // 开始时间
    beginTime: string;
    // 结束时间
    endTime: string;
    // 结束时间类型
    endTimeType: string;
    // 方案名称
    planName: string;
}
