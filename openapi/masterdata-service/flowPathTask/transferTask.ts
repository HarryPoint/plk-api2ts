import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/流程任务相关/transferTaskUsingPOST
export default function fetchMethod(data: IProcessTasksAreTransferredToTheDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/flowPathTask/transferTask",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 流程任务转交DTO
export interface IProcessTasksAreTransferredToTheDTO {
    // 任务ID
    id: number;
    // 表单数据
    data: Record<string, Record<string, any>>;
    // 审批意见/执行情况
    notes: string;
    // 转交人id
    userId: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
