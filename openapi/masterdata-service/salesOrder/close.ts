import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/销售订单相关/closeUsingPOST_2
export default function fetchMethod(data: ISalesOrdersCloseTheDTO, params: { enterpriseId: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/salesOrder/close",
        method: "post",
        data,
        params,
    });
}
// 销售订单关闭 DTO
export interface ISalesOrdersCloseTheDTO {
    // 销售订单id
    salesOrderId: number;
    // 登录密码
    loginPassword: string;
    // 关闭原因
    closeRemark: string;
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
