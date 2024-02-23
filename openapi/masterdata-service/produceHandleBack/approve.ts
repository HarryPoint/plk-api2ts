import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产处理返工相关/approveUsingPOST
export default function fetchMethod(data: IProductionProcessesTheReworkApprovalRequestObject) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/produceHandleBack/approve",
      data,
    });
}
// 生产处理返工批准请求对象
export interface IProductionProcessesTheReworkApprovalRequestObject {
    // 生产处理id
    id: number;
    // 处理意见
    handleRemark: string;
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
