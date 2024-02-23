import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产订单相关/closeUsingPOST_1
export default function fetchMethod(data: IProductionOrderClosedDTO, params: { enterpriseId: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/produceOrder/close",
        method: "post",
        data,
        params,
    });
}
// 生产订单关闭 DTO
export interface IProductionOrderClosedDTO {
    // 生产订单id
    produceOrderId: number;
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
