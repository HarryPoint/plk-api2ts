import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/生产订单相关/batchGetProduceWorkOrderUsingPOST
export default function fetchMethod(data: number[]) {
    return post<IJSONResultListProduceWorkOrderVO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/produceOrder/produceWorkOrder/batchGet",
      data,
    });
}
// JSONResult«List«ProduceWorkOrderVO»»
export interface IJSONResultListProduceWorkOrderVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceWorkOrderVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceWorkOrderVO
export interface IProduceWorkOrderVO {
    // 生产订单ID
    produceOrderId: number;
    // 物料名称
    materialName: string;
    // 物料编码
    materialCode: string;
    // 计划生产数量
    planQuantity: number;
    // 生产订单号
    produceOrderNo: string;
    // 销售订单号
    salesOrderNo: string;
    // 计划开工日期
    beginTime: string;
    // 计划完工日期
    endTime: string;
    // 是否急单
    isEmergentOrder: string;
    // 订单类型
    orderType: string;
    // 订单类型描述
    orderTypeDesc: string;
    // 工序信息
    processList: IProduceWorkOrderProcessVO[];
    // 生产相关信息
    produceCustomInfo: IProduceWorkOrderCustomFieldDataVO[];
}
// ProduceWorkOrderProcessVO
export interface IProduceWorkOrderProcessVO {
    // 生产任务ID
    produceTaskId: number;
    // 生产任务号
    produceTaskNo: string;
    // 区域编码
    areaCode: string;
    // 区域名称
    areaName: string;
    // 工序编码
    processCode: string;
    // 工序名称
    processName: string;
    // 任务下发时间
    taskIssueTime: string;
    // 计划开始时间
    beginTime: string;
    // 计划完成时间
    endTime: string;
}
// ProduceWorkOrderCustomFieldDataVO
export interface IProduceWorkOrderCustomFieldDataVO {
    // 自定义字段编码
    code: string;
    // 自定义字段名称
    name: string;
    // 值
    value: string;
}
