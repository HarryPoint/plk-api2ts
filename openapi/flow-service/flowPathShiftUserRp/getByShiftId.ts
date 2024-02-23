import { get } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/任务班次关联相关/getByShiftIdUsingGET
export default function fetchMethod(params: { enterpriseId: number; flowPathShiftId: number }) {
    return get<IJSONResultListFlowPathShiftUserRpVO['data']>({
      url: "/flow-service/flowPathShiftUserRp/getByShiftId",
      params,
    });
}
// JSONResult«List«FlowPathShiftUserRpVO»»
export interface IJSONResultListFlowPathShiftUserRpVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathShiftUserRpVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathShiftUserRpVO
export interface IFlowPathShiftUserRpVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 对应班次id
    flowPathShiftId: number;
    // 关联id
    executorId: number;
    // 关联类型
    executorType: string;
    // 关联系统控件类型
    executorSysType: string;
}
