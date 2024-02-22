import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/销售订单相关/selectedMatchStandardTechnologyUsingPOST
export function fetchMethod(data: ISelectedMatchStandardTechnologyRequestDTO) {
    return post({
      url: "/masterdata-service/salesOrder/transferToProduceOrder/selectedMatchStandardTechnology",
      data,
    });
}
// SelectedMatchStandardTechnologyRequestDTO
export interface ISelectedMatchStandardTechnologyRequestDTO {
    // 销售订单明细ID
    salesOrderDetailId: number;
    // undefined
    standardTechnologyId: number;
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
