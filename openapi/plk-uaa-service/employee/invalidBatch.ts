import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/员工相关/invalidBatchUsingPOST
export default function fetchMethod(data: IEmployeeBatchDeactivationRequest) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/employee/invalidBatch",
      data,
    });
}
// 员工批量停用请求
export interface IEmployeeBatchDeactivationRequest {
    // 员工id集
    employeeIds: number[];
    // 企业id
    enterpriseId: number;
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
