import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/流程任务相关/saveDynamicFormDataUsingPOST
export default function fetchMethod(data: IFlowPathTaskProcessRequestDTO) {
    return http<IJSONResultstring1>({
        url: "/masterdata-service/flowPathTask/saveDynamicFormData",
        method: "post",
        data,
    });
}
// FlowPathTaskProcessRequestDTO
export interface IFlowPathTaskProcessRequestDTO {
    // 任务ID
    id: number;
    // 表单数据
    data: Record<string, Record<string, any>>;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
