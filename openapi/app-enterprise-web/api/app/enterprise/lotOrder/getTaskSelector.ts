import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/getTaskSelectorUsingGET
export default function fetchMethod(params: { id: string }) {
    return http<IJSONResultListTheProductionTaskSelectionInformationIsReturnedToVO>({
        url: "/app-enterprise-web/api/app/enterprise/lotOrder/getTaskSelector",
        method: "get",
        params,
    });
}
// JSONResult«List«生产任务选择信息返回VO»»
export interface IJSONResultListTheProductionTaskSelectionInformationIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProductionTaskSelectionInformationIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务选择信息返回VO
export interface ITheProductionTaskSelectionInformationIsReturnedToVO {
    // id
    id: number;
    // 任务号
    taskNo: string;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
    // 对应工序编号
    processCode: string;
    // 对应班次id
    classShiftId: number;
    // 对应班次名称
    classShiftName: string;
    // 对应班次编号
    classShiftCode: string;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
}